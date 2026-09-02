"use client";

import { useFrame } from "@react-three/fiber";
import { stage } from "../store";
import { damp, smoothstep } from "../lib/math";

/**
 * Gentle global camera motion: a slow dolly across the page and a small
 * parallax follow of the pointer. The scenes themselves do the dramatic
 * movement, which keeps the two from fighting each other.
 */
export default function CameraRig() {
  useFrame((state, dt) => {
    const camera = state.camera;
    const p = stage.progress;
    const targetZ =
      7.4 - smoothstep(0, 0.35, p) * 0.5 + smoothstep(0.45, 1, p) * 2.4;

    camera.position.x = damp(camera.position.x, stage.pointerSmooth.x * 0.5, 2.4, dt);
    camera.position.y = damp(camera.position.y, stage.pointerSmooth.y * 0.32, 2.4, dt);
    camera.position.z = damp(camera.position.z, targetZ, 2.4, dt);
    camera.lookAt(0, 0, 0);

    // Scenes unproject DOM rects against this camera in their own useFrame
    // callbacks, so its world matrix has to be current before they run.
    camera.updateMatrixWorld();
  });

  return null;
}
