/**
 * Shared displacement for the hero node field.
 *
 * Points and their connective lines run the *same* maths, so a line always
 * terminates exactly on the two points it joins. All of it happens on the GPU:
 * a CPU loop over four thousand particles per frame is the thing this design
 * exists to avoid.
 */
const DISPLACE = /* glsl */ `
uniform float uTime;
uniform float uForm;
uniform float uDrift;
uniform vec3  uPointer;
uniform float uPointerStrength;
uniform vec4  uRipples[4];   // xy = origin, z = age (s), w = active

attribute vec3  aTarget;
attribute vec3  aScatter;
attribute float aSeed;
attribute float aScale;

varying float vStrain;
varying float vSeed;
varying float vDepth;

vec3 drift(vec3 p, float t, float seed) {
  return vec3(
    sin(t * 0.35 + seed * 6.283 + p.y * 0.60),
    cos(t * 0.29 + seed * 4.712 + p.z * 0.50),
    sin(t * 0.24 + seed * 2.094 + p.x * 0.70)
  );
}

vec3 displace(out float strain) {
  vec3 pos = mix(aScatter, aTarget, uForm);
  pos += drift(pos, uTime, aSeed) * uDrift;

  strain = 0.0;

  // Pointer repulsion well — a gaussian so it has no hard edge.
  vec3 toP = pos - uPointer;
  float d = length(toP);
  float push = uPointerStrength * exp(-d * d / 3.0);
  pos += normalize(toP + vec3(1e-4)) * push;
  strain += push * 0.9;

  // Click ripples, travelling outward as a decaying wavefront.
  for (int i = 0; i < 4; i++) {
    vec4 r = uRipples[i];
    if (r.w < 0.5) continue;
    float dist  = length(pos.xy - r.xy);
    float front = r.z * 4.0;
    float band  = exp(-pow(dist - front, 2.0) * 3.0) * exp(-r.z * 1.6);
    pos.z   += band * 1.4;
    strain  += band * 1.1;
  }

  strain = clamp(strain, 0.0, 1.0);
  return pos;
}
`;

export const fieldPointsVert = /* glsl */ `
${DISPLACE}
uniform float uSize;

void main() {
  vSeed = aSeed;
  float strain;
  vec3 pos = displace(strain);
  vStrain = strain;

  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  vDepth = -mv.z;
  gl_Position = projectionMatrix * mv;
  gl_PointSize = uSize * aScale * (1.0 + vStrain * 1.8) * (18.0 / max(vDepth, 0.1));
}
`;

export const fieldPointsFrag = /* glsl */ `
precision mediump float;

uniform vec3  uOnPaper;
uniform vec3  uOnInk;
uniform vec3  uLime;
uniform float uInk;
uniform float uOpacity;

varying float vStrain;
varying float vSeed;
varying float vDepth;

void main() {
  vec2 uv = gl_PointCoord - 0.5;
  float r = length(uv);
  if (r > 0.5) discard;

  float alpha = pow(smoothstep(0.5, 0.0, r), 2.0);

  // Base colour flips with the ground so the field stays legible on both the
  // paper sections and the ink ones. Strain always pushes toward the lime.
  vec3 base = mix(uOnPaper, uOnInk, uInk);
  vec3 col  = mix(base, uLime, smoothstep(0.12, 0.85, vStrain + vSeed * 0.18));

  float depthFade = 1.0 - smoothstep(7.0, 24.0, vDepth);
  float a = alpha * uOpacity * depthFade;
  if (a < 0.01) discard;

  gl_FragColor = vec4(col, a);
}
`;

export const fieldLinesVert = /* glsl */ `
${DISPLACE}

void main() {
  vSeed = aSeed;
  float strain;
  vec3 pos = displace(strain);
  vStrain = strain;

  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  vDepth = -mv.z;
  gl_Position = projectionMatrix * mv;
}
`;

export const fieldLinesFrag = /* glsl */ `
precision mediump float;

uniform vec3  uOnPaper;
uniform vec3  uOnInk;
uniform vec3  uLime;
uniform float uInk;
uniform float uOpacity;

varying float vStrain;
varying float vSeed;
varying float vDepth;

void main() {
  vec3 base = mix(uOnPaper, uOnInk, uInk);
  vec3 col  = mix(base, uLime, smoothstep(0.10, 0.7, vStrain));

  // Lines are barely there at rest and ignite under strain — that contrast is
  // what makes the cursor feel like it is pulling on a physical mesh.
  float energy = 0.28 + vStrain * 1.6;
  float depthFade = 1.0 - smoothstep(6.0, 20.0, vDepth);
  float a = energy * uOpacity * depthFade;
  if (a < 0.01) discard;

  gl_FragColor = vec4(col, a);
}
`;
