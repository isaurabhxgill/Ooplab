/**
 * "static" renders the scene as a still image: no autonomous animation, no
 * pointer reactivity, no time-based drift. Reduced motion is a request for
 * less movement, not for a blank page — the composition still belongs there.
 */
export type Tier = "high" | "medium" | "low" | "static" | "off";

export type QualitySettings = {
  tier: Tier;
  /** Why this tier was chosen. Surfaced in development to make a silent
   *  downgrade diagnosable instead of looking like a broken scene. */
  reason: string;
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
    return off("server");
  }

  if (!hasWebGL2()) return off("WebGL2 unavailable");

  if (prefersReducedMotion()) {
    return {
      tier: "static",
      reason: "prefers-reduced-motion is enabled — rendering a still scene",
      points: 2600,
      lines: 1400,
      dpr: [1, 1.5],
      transmission: false,
      shadows: false,
    };
  }

  const nav = navigator as Navigator & { deviceMemory?: number };

  // `deviceMemory` is Chrome-only and `hardwareConcurrency` can be absent too.
  // An unreported value means "unknown", not "weak" — defaulting these low
  // pinned every Safari and Firefox visitor to the lowest tier.
  const cores = nav.hardwareConcurrency ?? 8;
  const memory = nav.deviceMemory ?? 8;
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  const narrow = window.innerWidth < 768;

  if (coarse || narrow || cores <= 4 || memory <= 2) {
    return {
      tier: "low",
      reason: coarse
        ? "coarse pointer"
        : narrow
          ? "viewport under 768px"
          : `low capability (cores ${cores}, memory ${memory})`,
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
      reason: `${cores} cores`,
      points: 2600,
      lines: 1400,
      dpr: [1, 1.5],
      transmission: false,
      shadows: false,
    };
  }

  return {
    tier: "high",
    reason: `${cores} cores, memory ${memory}`,
    points: 4200,
    lines: 2600,
    dpr: [1, 2],
    transmission: true,
    shadows: false,
  };
}

function off(reason: string): QualitySettings {
  return {
    tier: "off",
    reason,
    points: 0,
    lines: 0,
    dpr: [1, 1],
    transmission: false,
    shadows: false,
  };
}
