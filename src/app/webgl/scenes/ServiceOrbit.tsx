"use client";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { stage, type AnchorRect } from "../store";
import { anchorToWorld } from "../lib/anchorToWorld";
import { PALETTE } from "../tokens";
import { clamp, damp, smoothstep } from "../lib/math";

const TAU = Math.PI * 2;

// Per-frame scratch. useFrame callbacks run synchronously on one thread, so a
// single shared instance is safe and avoids allocating every frame.
const target = new THREE.Vector3();
const orbit = new THREE.Vector3();
const docked: AnchorRect = { cx: 0, cy: 0, w: 0, h: 0, visibility: 0 };
const ORBIT_R = 3.75;
const SHARD_Z = 1.4;

type ShardProps = { index: number; count: number; rich: boolean };

/**
 * One service shard. Orbits with its siblings until its card is hovered, at
 * which point it leaves the orbit and flies to that card's actual screen
 * position — read from the DOM, so it stays correct through any reflow.
 */
function Shard({ index, count, rich }: ShardProps) {
  "use no memo";

  const { size } = useThree();
  const mesh = useRef<THREE.Mesh>(null);
  const mat = useRef<THREE.MeshStandardMaterial>(null);
  const hoverAmount = useRef(0);

  const geometry = useMemo(() => {
    switch (index % 3) {
      case 0:
        return new THREE.IcosahedronGeometry(0.26, 0);
      case 1:
        return new THREE.OctahedronGeometry(0.3, 0);
      default:
        return new THREE.DodecahedronGeometry(0.24, 0);
    }
  }, [index]);

  useFrame((state, dt) => {
    const m = mesh.current;
    if (!m) return;
    const camera = state.camera;
    const t = state.clock.elapsedTime;
    const s = stage.coverage;

    const visible = smoothstep(0.12, 0.55, s.services);

    const hovered = stage.hoveredService === index ? 1 : 0;
    hoverAmount.current = damp(hoverAmount.current, hovered, 7, dt);

    const angle = t * 0.16 + (index / count) * TAU;
    orbit.set(
      Math.cos(angle) * ORBIT_R,
      Math.sin(angle) * ORBIT_R * 0.3 + Math.sin(t * 0.5 + index) * 0.12,
      Math.sin(angle) * 1.6
    );

    target.copy(orbit);
    const anchor = stage.anchors.get(`service:${index}`);
    if (anchor && hoverAmount.current > 0.001) {
      // Dock to the card's top-right corner rather than its centre. The canvas
      // renders beneath all page content, so a shard aimed at the middle of a
      // card is permanently hidden behind it; at the corner it reads as a
      // physical object tethered to the card.
      docked.cx = anchor.cx + anchor.w / 2 - 6;
      docked.cy = anchor.cy - anchor.h / 2 + 4;
      docked.w = anchor.w;
      docked.h = anchor.h;
      docked.visibility = anchor.visibility;

      const world = anchorToWorld(docked, camera, size, SHARD_Z);
      target.lerpVectors(orbit, world, hoverAmount.current);
    }

    m.position.x = damp(m.position.x, target.x, 5, dt);
    m.position.y = damp(m.position.y, target.y, 5, dt);
    m.position.z = damp(m.position.z, target.z, 5, dt);

    const scale = (0.9 + hoverAmount.current * 1.6) * clamp(visible, 0.001, 1);
    m.scale.setScalar(scale);
    m.visible = visible > 0.01;

    m.rotation.x += dt * (0.25 + hoverAmount.current * 0.9);
    m.rotation.y += dt * (0.18 + hoverAmount.current * 0.6);

    if (mat.current) {
      mat.current.opacity = visible;
      mat.current.emissiveIntensity = 0.12 + hoverAmount.current * 1.5;
    }
  });

  return (
    <mesh ref={mesh} geometry={geometry} frustumCulled={false}>
      <meshStandardMaterial
        ref={mat}
        color={PALETTE.brand200}
        emissive={PALETTE.brand400}
        emissiveIntensity={0.12}
        metalness={rich ? 0.35 : 0.15}
        roughness={rich ? 0.22 : 0.35}
        envMapIntensity={1.1}
        flatShading
        transparent
        opacity={0}
      />
    </mesh>
  );
}

export default function ServiceOrbit({
  count = 6,
  rich,
}: {
  count?: number;
  rich: boolean;
}) {
  return (
    // Dropped below centre so the orbit rings the card grid rather than
    // crossing the section heading.
    <group position={[0, -1.15, 0]}>
      {Array.from({ length: count }, (_, i) => (
        <Shard key={i} index={i} count={count} rich={rich} />
      ))}
    </group>
  );
}
