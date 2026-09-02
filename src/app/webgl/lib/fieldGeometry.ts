/**
 * Builds the hero field: a torus of points (the Ooplab "O"), the scattered
 * cloud they assemble from, and a neighbour graph for the connective lines.
 */

export type FieldData = {
  count: number;
  target: Float32Array;
  scatter: Float32Array;
  seed: Float32Array;
  scale: Float32Array;
  /** Flat index pairs into the point arrays. */
  links: Uint32Array;
};

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Connects each point to its nearest few neighbours using a uniform grid, so
 * the graph is O(n) rather than O(n²). Deterministic, and built once.
 */
function buildLinks(
  target: Float32Array,
  count: number,
  radius: number,
  maxLinks: number
): Uint32Array {
  if (maxLinks <= 0) return new Uint32Array(0);

  const cell = radius;
  const buckets = new Map<string, number[]>();
  const key = (x: number, y: number, z: number) =>
    `${Math.floor(x / cell)},${Math.floor(y / cell)},${Math.floor(z / cell)}`;

  for (let i = 0; i < count; i++) {
    const k = key(target[i * 3], target[i * 3 + 1], target[i * 3 + 2]);
    const bucket = buckets.get(k);
    if (bucket) bucket.push(i);
    else buckets.set(k, [i]);
  }

  const out: number[] = [];
  const r2 = radius * radius;

  outer: for (let i = 0; i < count; i++) {
    const x = target[i * 3];
    const y = target[i * 3 + 1];
    const z = target[i * 3 + 2];
    const gx = Math.floor(x / cell);
    const gy = Math.floor(y / cell);
    const gz = Math.floor(z / cell);
    let made = 0;

    for (let ox = -1; ox <= 1 && made < 2; ox++) {
      for (let oy = -1; oy <= 1 && made < 2; oy++) {
        for (let oz = -1; oz <= 1 && made < 2; oz++) {
          const bucket = buckets.get(`${gx + ox},${gy + oy},${gz + oz}`);
          if (!bucket) continue;
          for (const j of bucket) {
            if (j <= i) continue; // each pair once
            const dx = target[j * 3] - x;
            const dy = target[j * 3 + 1] - y;
            const dz = target[j * 3 + 2] - z;
            if (dx * dx + dy * dy + dz * dz > r2) continue;
            out.push(i, j);
            made++;
            if (out.length / 2 >= maxLinks) break outer;
            if (made >= 2) break;
          }
        }
      }
    }
  }

  return Uint32Array.from(out);
}

export function buildField(count: number, maxLinks: number): FieldData {
  const rand = mulberry32(0x0079447);

  const target = new Float32Array(count * 3);
  const scatter = new Float32Array(count * 3);
  const seed = new Float32Array(count);
  const scale = new Float32Array(count);

  const R = 2.35; // ring radius
  const tube = 0.62; // ring thickness

  for (let i = 0; i < count; i++) {
    const theta = rand() * Math.PI * 2;
    const phi = rand() * Math.PI * 2;
    const t = Math.sqrt(rand()); // bias outward so the tube reads as a surface
    const r = tube * t;

    target[i * 3] = (R + r * Math.cos(phi)) * Math.cos(theta);
    target[i * 3 + 1] = (R + r * Math.cos(phi)) * Math.sin(theta);
    target[i * 3 + 2] = r * Math.sin(phi);

    // Scattered start: a loose shell the ring condenses out of.
    const su = rand() * 2 - 1;
    const sa = rand() * Math.PI * 2;
    const sr = 6 + rand() * 6;
    const sxy = Math.sqrt(1 - su * su);
    scatter[i * 3] = Math.cos(sa) * sxy * sr;
    scatter[i * 3 + 1] = Math.sin(sa) * sxy * sr * 0.7;
    scatter[i * 3 + 2] = su * sr * 0.5;

    seed[i] = rand();
    scale[i] = 0.55 + rand() * 0.9;
  }

  return {
    count,
    target,
    scatter,
    seed,
    scale,
    links: buildLinks(target, count, 0.42, maxLinks),
  };
}

/** Expands the per-point attributes into per-line-vertex attributes. */
export function expandLinks(field: FieldData) {
  const n = field.links.length;
  const target = new Float32Array(n * 3);
  const scatter = new Float32Array(n * 3);
  const seed = new Float32Array(n);
  const scale = new Float32Array(n);

  for (let k = 0; k < n; k++) {
    const i = field.links[k];
    target[k * 3] = field.target[i * 3];
    target[k * 3 + 1] = field.target[i * 3 + 1];
    target[k * 3 + 2] = field.target[i * 3 + 2];
    scatter[k * 3] = field.scatter[i * 3];
    scatter[k * 3 + 1] = field.scatter[i * 3 + 1];
    scatter[k * 3 + 2] = field.scatter[i * 3 + 2];
    seed[k] = field.seed[i];
    scale[k] = field.scale[i];
  }

  return { count: n, target, scatter, seed, scale };
}
