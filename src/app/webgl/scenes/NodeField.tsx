"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { stage } from "../store";
import { buildField, expandLinks } from "../lib/fieldGeometry";
import {
  fieldLinesFrag,
  fieldLinesVert,
  fieldPointsFrag,
  fieldPointsVert,
} from "../shaders/field";
import { PALETTE, rgb } from "../tokens";
import { clamp, damp, lerp, smoothstep } from "../lib/math";

const RIPPLE_LIFE = 2.4;

type FieldUniforms = ReturnType<typeof createUniforms>;

function createUniforms() {
  return {
    uTime: { value: 0 },
    uForm: { value: 0 },
    uDrift: { value: 0.06 },
    uPointer: { value: new THREE.Vector3(999, 999, 999) },
    uPointerStrength: { value: 0 },
    uRipples: {
      value: [
        new THREE.Vector4(),
        new THREE.Vector4(),
        new THREE.Vector4(),
        new THREE.Vector4(),
      ],
    },
    uSize: { value: 4.6 },
    // Raw sRGB triples rather than THREE.Color: a ShaderMaterial writes
    // straight to the framebuffer with no colour-space conversion, so these
    // match the CSS tokens exactly.
    uOnPaper: { value: new THREE.Vector3(...rgb(PALETTE.brand700)) },
    uOnInk: { value: new THREE.Vector3(...rgb(PALETTE.brand400)) },
    uLime: { value: new THREE.Vector3(...rgb(PALETTE.brand300)) },
    uInk: { value: 1 },
    uOpacity: { value: 0 },
  };
}

const v3 = new THREE.Vector3();
const dir = new THREE.Vector3();

type Props = { points: number; lines: number };

/**
 * The hero node field: a torus of points forming the Ooplab "O", assembled out
 * of a scattered shell on load, deformed by the cursor, and rippled by clicks.
 *
 * It persists for the whole page rather than unmounting — it disperses into an
 * ambient cloud behind the light sections and re-gathers at the end, which is
 * what makes the scroll feel like one continuous space.
 */
export default function NodeField({ points, lines }: Props) {

  const group = useRef<THREE.Group>(null);
  const pointsMat = useRef<THREE.ShaderMaterial>(null);
  const inkBlend = useRef(-1);

  const field = useMemo(() => buildField(points, lines), [points, lines]);
  const link = useMemo(() => expandLinks(field), [field]);

  // One uniforms object, shared by the point and line materials, so a line
  // always deforms exactly as its two endpoints do.
  const uniforms = useMemo(() => createUniforms(), []);

  useFrame((state, dt) => {
    // R3F's canonical pattern: drive the material you own. The line material
    // shares this exact object, so both stay in lockstep.
    const u = pointsMat.current?.uniforms as FieldUniforms | undefined;
    if (!u) return;

    const camera = state.camera;
    const t = state.clock.elapsedTime;
    const s = stage.sections;
    u.uTime.value = t;

    // Assemble on load, then release the ring as the services band arrives.
    const intro = smoothstep(0, 1, clamp((t - 0.25) / 2.4));
    const release = smoothstep(0.05, 0.45, s.services);
    u.uForm.value = damp(
      u.uForm.value,
      intro * (1 - release),
      3,
      dt
    );

    let opacity = 1;
    opacity = lerp(opacity, 0.14, smoothstep(0.05, 0.45, s.services));
    opacity = lerp(opacity, 0.3, smoothstep(0.1, 0.5, s.products));
    opacity = lerp(opacity, 0.16, smoothstep(0.15, 0.6, s.outro));
    u.uOpacity.value = damp(u.uOpacity.value, opacity * intro, 4, dt);

    u.uInk.value = damp(u.uInk.value, stage.ink, 6, dt);

    // Fast scrolling smears the field — a small cue that ties page motion to
    // scene motion without anything as heavy as a postprocessing pass.
    u.uDrift.value = damp(
      u.uDrift.value,
      0.06 + Math.min(Math.abs(stage.velocity) * 0.004, 0.24),
      5,
      dt
    );

    // Project the pointer onto the z = 0 plane for the repulsion well.
    v3.set(stage.pointerSmooth.x, stage.pointerSmooth.y, 0.5).unproject(camera);
    dir.copy(v3).sub(camera.position).normalize();
    if (Math.abs(dir.z) > 1e-5) {
      const distance = -camera.position.z / dir.z;
      v3.copy(camera.position).addScaledVector(dir, distance);
      stage.pointerWorld.x = v3.x;
      stage.pointerWorld.y = v3.y;
      stage.pointerWorld.z = v3.z;
      u.uPointer.value.copy(v3);
    }

    const heroFocused = 1 - smoothstep(0.05, 0.5, s.services);
    u.uPointerStrength.value = damp(
      u.uPointerStrength.value,
      stage.pointerActive ? 0.95 * heroFocused : 0,
      5,
      dt
    );

    const ripples = u.uRipples.value;
    for (let i = 0; i < 4; i++) {
      const r = stage.ripples[i];
      if (!r) {
        ripples[i].w = 0;
        continue;
      }
      const age = t - r.t;
      if (age > RIPPLE_LIFE) {
        ripples[i].w = 0;
        continue;
      }
      ripples[i].set(r.x, r.y, age, 1);
    }
    if (stage.ripples.length && t - stage.ripples[0].t > RIPPLE_LIFE) {
      stage.ripples.shift();
    }

    if (group.current) {
      group.current.rotation.y = Math.sin(t * 0.12) * 0.35 + stage.progress * 0.8;
      group.current.rotation.x = Math.cos(t * 0.1) * 0.14 - stage.progress * 0.3;

      // On a wide viewport the ring sits to the right of the hero copy rather
      // than behind it. It recentres once the hero has scrolled away, since
      // from the services band onward it is ambient rather than a subject.
      const wide = state.size.width >= 1024;
      const heroHold = 1 - smoothstep(0.05, 0.5, s.services);
      const offsetX = wide ? 2.05 * heroHold : 0;
      const scale = wide ? 0.86 : 0.74;
      group.current.position.x = damp(group.current.position.x, offsetX, 3, dt);
      group.current.scale.setScalar(
        damp(group.current.scale.x || scale, scale, 3, dt)
      );
    }

    // Additive blending glows on the ink bands but washes out on paper, so it
    // flips with the ground. Blending is render state, not a shader define, so
    // this costs nothing beyond the state change itself.
    const wantAdditive = u.uInk.value > 0.55 ? 1 : 0;
    if (wantAdditive !== inkBlend.current) {
      inkBlend.current = wantAdditive;
      const blending = wantAdditive
        ? THREE.AdditiveBlending
        : THREE.NormalBlending;
      if (pointsMat.current) pointsMat.current.blending = blending;
    }
  });

  return (
    <group ref={group}>
      <points frustumCulled={false}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[field.target, 3]} />
          <bufferAttribute attach="attributes-aTarget" args={[field.target, 3]} />
          <bufferAttribute attach="attributes-aScatter" args={[field.scatter, 3]} />
          <bufferAttribute attach="attributes-aSeed" args={[field.seed, 1]} />
          <bufferAttribute attach="attributes-aScale" args={[field.scale, 1]} />
        </bufferGeometry>
        <shaderMaterial
          ref={pointsMat}
          uniforms={uniforms}
          vertexShader={fieldPointsVert}
          fragmentShader={fieldPointsFrag}
          transparent
          depthWrite={false}
        />
      </points>

      {link.count > 0 && (
        <lineSegments frustumCulled={false}>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[link.target, 3]} />
            <bufferAttribute attach="attributes-aTarget" args={[link.target, 3]} />
            <bufferAttribute attach="attributes-aScatter" args={[link.scatter, 3]} />
            <bufferAttribute attach="attributes-aSeed" args={[link.seed, 1]} />
            <bufferAttribute attach="attributes-aScale" args={[link.scale, 1]} />
          </bufferGeometry>
          <shaderMaterial
            uniforms={uniforms}
            vertexShader={fieldLinesVert}
            fragmentShader={fieldLinesFrag}
            transparent
            depthWrite={false}
          />
        </lineSegments>
      )}
    </group>
  );
}
