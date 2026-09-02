import * as THREE from "three";
import type { AnchorRect } from "../store";

const ndc = new THREE.Vector3();
const dir = new THREE.Vector3();

/**
 * Converts a viewport-space DOM rect centre into a world position on the plane
 * z = `targetZ`, for the given camera.
 *
 * Unprojecting (rather than computing the visible frustum height by hand)
 * keeps this correct while the camera rig is moving and rotating.
 */
export function anchorToWorld(
  rect: AnchorRect,
  camera: THREE.Camera,
  size: { width: number; height: number },
  targetZ: number,
  out = new THREE.Vector3()
): THREE.Vector3 {
  ndc.set(
    (rect.cx / size.width) * 2 - 1,
    -((rect.cy / size.height) * 2 - 1),
    0.5
  );
  ndc.unproject(camera);
  dir.copy(ndc).sub(camera.position).normalize();

  // Guard against a camera looking parallel to the target plane.
  const denom = Math.abs(dir.z) < 1e-5 ? 1e-5 * Math.sign(dir.z || 1) : dir.z;
  const distance = (targetZ - camera.position.z) / denom;

  return out.copy(camera.position).add(dir.multiplyScalar(distance));
}
