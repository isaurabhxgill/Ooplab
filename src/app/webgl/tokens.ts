/**
 * Palette mirrored from globals.css for use in WebGL, where CSS custom
 * properties are not available inside shaders. Keep in sync with the
 * `@theme` block — these are the same values, sampled from Ologo.png.
 */
export const PALETTE = {
  brand200: "#b7e06b",
  brand300: "#84c030", // logo lime — the accent
  brand400: "#54a848", // logo mid green
  brand500: "#17a85a",
  brand600: "#079447",
  brand700: "#0a5e33", // logo deep green
  brand900: "#06301b",
  ink800: "#0c2517",
  ink900: "#071a0f",
  ink950: "#04120a",
  paper: "#fafaf5",
} as const;

/** Hex string to a linear-ish RGB triple for shader uniforms. */
export function rgb(hex: string): [number, number, number] {
  const n = parseInt(hex.slice(1), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}
