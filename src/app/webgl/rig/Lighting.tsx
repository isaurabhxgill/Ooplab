"use client";

import { Environment, Lightformer } from "@react-three/drei";
import { PALETTE } from "../tokens";

/**
 * Lighting is fully procedural — the environment is built from Lightformers
 * rendered to a small local cube target rather than a downloaded HDR, so the
 * shards get real reflections with no network request and no extra asset.
 */
export default function Lighting({ rich }: { rich: boolean }) {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 6, 5]} intensity={1.1} color="#ffffff" />
      <pointLight position={[-4, -2, 3]} intensity={18} color={PALETTE.brand300} distance={14} />
      <pointLight position={[3, 3, -4]} intensity={12} color={PALETTE.brand500} distance={16} />

      {rich && (
        <Environment resolution={128} frames={1}>
          <Lightformer
            intensity={2.2}
            color={PALETTE.paper}
            position={[0, 4, -6]}
            scale={[10, 4, 1]}
          />
          <Lightformer
            intensity={1.6}
            color={PALETTE.brand300}
            position={[-5, 1, 2]}
            scale={[6, 6, 1]}
          />
          <Lightformer
            intensity={1.1}
            color={PALETTE.brand700}
            position={[5, -2, 1]}
            scale={[6, 6, 1]}
          />
        </Environment>
      )}
    </>
  );
}
