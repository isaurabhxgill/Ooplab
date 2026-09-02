"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { anchorToWorld } from "../lib/anchorToWorld";
import { setUiState, stage } from "../store";
import { clamp, damp, smoothstep } from "../lib/math";
import { PALETTE } from "../tokens";

export type Slide = {
  slug: string;
  src: string;
  kind: "mobile" | "desktop" | "event";
};

const SPACING = 2.3;
const WIDTH: Record<Slide["kind"], number> = {
  mobile: 1.5,
  desktop: 3.3,
  event: 3.2,
};

function Slab({ slide, index }: { slide: Slide; index: number }) {
  "use no memo";

  // Configure on load rather than during render — the texture cache is shared,
  // so mutating it mid-render would be a side effect on someone else's value.
  const texture = useTexture(slide.src, (loaded) => {
    const t = Array.isArray(loaded) ? loaded[0] : loaded;
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 4;
  });
  const group = useRef<THREE.Group>(null);
  const screenMat = useRef<THREE.MeshBasicMaterial>(null);
  const bodyMat = useRef<THREE.MeshStandardMaterial>(null);

  const { w, h } = useMemo(() => {
    const img = texture.image as { width?: number; height?: number } | undefined;
    const aspect = img?.width && img?.height ? img.width / img.height : 0.5;
    const width = WIDTH[slide.kind];
    return { w: width, h: width / aspect };
  }, [texture, slide.kind]);

  useFrame((state, dt) => {
    const g = group.current;
    if (!g) return;
    const t = state.clock.elapsedTime;

    const visible = smoothstep(0.12, 0.55, stage.coverage.products);
    g.visible = visible > 0.01;
    if (!g.visible) return;

    // Cover-flow placement: distance from the focused slot drives depth,
    // yaw, scale and opacity together, so the deck reads as one object.
    const d = index - stage.deckOffset;
    const ad = Math.min(Math.abs(d), 2.4);

    g.position.x = damp(g.position.x, d * SPACING, 8, dt);
    g.position.z = damp(g.position.z, -ad * 1.45, 8, dt);
    g.position.y = damp(
      g.position.y,
      Math.sin(t * 0.7 + index * 1.7) * 0.07,
      4,
      dt
    );
    g.rotation.y = damp(g.rotation.y, -d * 0.42, 8, dt);
    g.rotation.z = damp(g.rotation.z, Math.sin(t * 0.4 + index) * 0.015, 3, dt);

    const scale = (1 - ad * 0.12) * clamp(visible, 0.001, 1);
    g.scale.setScalar(scale);

    const opacity = visible * Math.max(0, 1 - ad * 0.46);
    if (screenMat.current) screenMat.current.opacity = opacity;
    if (bodyMat.current) {
      bodyMat.current.opacity = opacity;
      bodyMat.current.emissiveIntensity = 0.05 + (1 - ad) * 0.18;
    }
  });

  const bezel = slide.kind === "mobile" ? 0.09 : 0.13;

  return (
    <group ref={group}>
      <RoundedBox
        args={[w + bezel * 2, h + bezel * 2, 0.14]}
        radius={slide.kind === "mobile" ? 0.16 : 0.1}
        smoothness={3}
        position={[0, 0, -0.08]}
      >
        <meshStandardMaterial
          ref={bodyMat}
          color={PALETTE.ink800}
          emissive={PALETTE.brand700}
          emissiveIntensity={0.06}
          metalness={0.55}
          roughness={0.35}
          transparent
          opacity={0}
        />
      </RoundedBox>

      <mesh position={[0, 0, 0.005]}>
        <planeGeometry args={[w, h]} />
        <meshBasicMaterial
          ref={screenMat}
          map={texture}
          toneMapped={false}
          transparent
          opacity={0}
        />
      </mesh>
    </group>
  );
}

/**
 * The product deck. All input arrives through the DOM drag surface in the
 * products section — the canvas itself never takes pointer events, which keeps
 * links clickable and the whole thing keyboard-reachable for free.
 */
export default function ProductDeck({ slides }: { slides: Slide[] }) {
  "use no memo";

  const lastActive = useRef(-1);
  const group = useRef<THREE.Group>(null);
  const max = Math.max(slides.length - 1, 0);

  useFrame((state, dt) => {
    // Track the drag surface's column so the deck lines up with its controls.
    const g = group.current;
    const anchor = stage.anchors.get("deck");
    if (g && anchor && anchor.w > 0) {
      const world = anchorToWorld(anchor, state.camera, state.size, 0.5);
      g.position.x = damp(g.position.x, world.x, 5, dt);
      g.position.y = damp(g.position.y, world.y, 5, dt);
    }

    if (!stage.deckDragging) {
      if (stage.deckTarget !== null) {
        // Easing to a chosen card (a nav button, a keyboard arrow, or the
        // snap that follows a throw).
        stage.deckOffset = damp(stage.deckOffset, stage.deckTarget, 6, dt);
        if (Math.abs(stage.deckOffset - stage.deckTarget) < 0.001) {
          stage.deckOffset = stage.deckTarget;
          stage.deckTarget = null;
        }
      } else {
        stage.deckOffset += stage.deckVelocity * dt;
        stage.deckVelocity = damp(stage.deckVelocity, 0, 3.2, dt);
        // Once the throw has mostly bled off, settle onto the nearest card.
        if (Math.abs(stage.deckVelocity) < 0.7) {
          stage.deckTarget = Math.round(clamp(stage.deckOffset, 0, max));
        }
      }
    }

    // Soft walls: overscroll is allowed, but pulls back.
    if (stage.deckOffset < 0 || stage.deckOffset > max) {
      stage.deckOffset = damp(stage.deckOffset, clamp(stage.deckOffset, 0, max), 9, dt);
      stage.deckVelocity *= 0.85;
    }

    const active = Math.round(clamp(stage.deckOffset, 0, max));
    if (active !== lastActive.current) {
      lastActive.current = active;
      setUiState({ activeProduct: active });
    }
  });

  return (
    <group ref={group} position={[0, 0, 0.5]}>
      {slides.map((slide, i) => (
        <Slab key={slide.slug} slide={slide} index={i} />
      ))}
    </group>
  );
}
