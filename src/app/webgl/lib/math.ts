export const clamp = (v: number, min = 0, max = 1) =>
  v < min ? min : v > max ? max : v;

export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export const smoothstep = (edge0: number, edge1: number, x: number) => {
  const t = clamp((x - edge0) / (edge1 - edge0));
  return t * t * (3 - 2 * t);
};

/**
 * Frame-rate independent damping. `lambda` is roughly "how much of the gap is
 * closed per second"; higher is snappier.
 */
export const damp = (current: number, target: number, lambda: number, dt: number) =>
  lerp(current, target, 1 - Math.exp(-lambda * dt));

/** Maps x from [inMin,inMax] to [0,1], clamped. */
export const range = (x: number, inMin: number, inMax: number) =>
  clamp((x - inMin) / (inMax - inMin));
