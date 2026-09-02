export type Tier = "high" | "medium" | "low" | "off";

export type QualitySettings = {
  tier: Tier;
  /** Point count in the hero node field. */
  points: number;
  /** Max neighbour line segments. Zero disables the line pass entirely. */
  lines: number;
  /** Device pixel ratio ceiling. */
  dpr: [number, number];
  /** Refractive glass on the service shards (expensive). */
  transmission: boolean;
  /** Shadow-casting lights. */
  shadows: boolean;
};

function hasWebGL2(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2"));
  } catch {
    return false;
  }
}

export function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Picks a rendering tier from device capability. Deliberately conservative:
 * the site must stay readable and smooth on a mid-range phone, and the 3D
 * layer is decorative, so we would rather under-render than drop frames.
 */
export function detectQuality(): QualitySettings {
  if (typeof window === "undefined") {
    return { tier: "off", points: 0, lines: 0, dpr: [1, 1], transmission: false, shadows: false };
  }

  if (prefersReducedMotion() || !hasWebGL2()) {
    return { tier: "off", points: 0, lines: 0, dpr: [1, 1], transmission: false, shadows: false };
  }

  const nav = navigator as Navigator & { deviceMemory?: number };
  const cores = nav.hardwareConcurrency ?? 4;
  const memory = nav.deviceMemory ?? 4;
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  const narrow = window.innerWidth < 768;

  if (coarse || narrow || cores <= 4 || memory <= 4) {
    return {
      tier: "low",
      points: 1200,
      lines: 0,
      dpr: [1, 1],
      transmission: false,
      shadows: false,
    };
  }

  if (cores <= 8) {
    return {
      tier: "medium",
      points: 2600,
      lines: 1400,
      dpr: [1, 1.5],
      transmission: false,
      shadows: false,
    };
  }

  return {
    tier: "high",
    points: 4200,
    lines: 2600,
    dpr: [1, 2],
    transmission: true,
    shadows: false,
  };
}
