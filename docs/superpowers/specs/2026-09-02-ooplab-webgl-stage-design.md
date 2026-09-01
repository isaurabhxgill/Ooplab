# Ooplab — WebGL Stage & Brand Palette

**Date:** 2026-09-02
**Status:** Approved (owner approved direction, then delegated completion + push)

## Problem

Two problems, one root cause: the site has no colour system, and no
motion identity.

**Colour.** `globals.css` declares the brand as `#079447`, but the UI
accents in blue — `#2563eb` text, `rgba(47,106,233,…)` shadows,
`#dbeafe`/`#c7e7ff` washes, a `#183153→#2657b7→#5ea3ff` case-study
gradient, and `slate-950` (a blue-black) for the products band. The
services grid adds six unrelated pastels. The result is two competing
primaries and no hierarchy: 543 hardcoded colour literals across 18
files, zero tokens.

**Motion.** Ooplab sells the ability to build sophisticated digital
products, but presents that claim on a static page with a background
video. Nothing on the site demonstrates the capability it advertises.

## Colour system

Sampling `public/Assest/Ologo.png` shows the logo is not one green but
three: a deep forest green `#0A5E33`, a mid green `#54A848`, and a
**lime `#84C030`**. The accent the site needed was already in the mark;
the CSS discarded it and reached for blue instead.

The palette is therefore *derived*, not invented.

### Tokens

| Token | Value | Role |
|---|---|---|
| `brand-900` | `#06301B` | deepest fills |
| `brand-700` | `#0A5E33` | logo deep green; small text on light |
| `brand-600` | `#079447` | primary CTA (unchanged — logo equity) |
| `brand-400` | `#54A848` | logo mid green |
| `brand-300` | `#84C030` | logo lime — the accent |
| `brand-200` | `#B7E06B` | glow / rims on dark |
| `ink-950` | `#04120A` | hero ground |
| `ink-900` | `#071A0F` | products band |
| `ink-800` | `#0C2517` | raised surfaces on dark |
| `paper` | `#FAFAF5` | page ground (replaces `#f5fbff`) |
| `paper-raised` | `#FFFFFF` | cards |
| `paper-sunk` | `#F1F2EA` | wells, inputs |
| `line` | `#E3E6DC` | hairline borders |
| `text-900` | `#11201A` | headings |
| `text-600` | `#4F5D54` | body |
| `text-400` | `#85938A` | meta |
| `text-inv` | `#E9F2E6` | text on ink |

Grounds are green-tinted rather than blue-tinted so the dark bands read
as the same brand as the light ones.

### Contrast rules (measured, WCAG 2.1)

| Pair | Ratio | Rule |
|---|---|---|
| `brand-700` on `paper` | 7.9:1 | small text OK (AAA) |
| `brand-600` on white | 3.9:1 | **large text / UI only** — never body copy |
| `brand-300` on white | 2.2:1 | **never text on light** — fills, rules, glows only |
| `brand-300` on `ink-900` | 8.2:1 | text OK on dark; this is where lime lives |
| `text-600` on `paper` | 6.6:1 | body copy OK |

The lime is scarce by rule: metrics, active states, hover rules, and
WebGL rim light. Scarcity is what makes it read as premium.

### Sweep

Six pastel service accents collapse to one card treatment — raised
paper, hairline border, a lime rule that grows on hover, title shifting
to `brand-700`. Depth comes from shadow, not hue. Blue is removed
entirely; shadows retint from `rgba(47,106,233,…)` to `rgba(6,48,27,…)`.

## WebGL stage

One fixed canvas behind the homepage; scroll is the timeline.

| Section | Ground | Scene |
|---|---|---|
| Hero | ink-950 | ~4,000 instanced points settle into the Ooplab "O"; neighbour lines glow under strain; cursor opens a repulsion well; click sends a ripple; idle curl-noise drift |
| Services | paper | Field converges into 6 orbiting shards, one per card. Hovering a card pulls its shard to that card's screen position and ignites its rim |
| Products | ink-900 | Shards reform into a draggable deck of device slabs textured with the real product screenshots; inertia + snap; focused slab links to `/products/[slug]` |
| Testimonials → Footer | paper | Deck dissolves back to a sparse ambient field |

### Architecture

The load-bearing idea is **DOM-anchored 3D**: the DOM owns all content,
and 3D objects derive position by reading DOM rects. `<SceneAnchor id>`
registers a `ResizeObserver`-tracked rect into a store; scenes unproject
that rect at a fixed depth to a world target. This keeps hover, resize
and scroll consistent without duplicating layout maths.

```
src/app/webgl/
  StageMount.tsx      "use client" + dynamic(ssr:false) + capability guard
  Stage.tsx           the single <Canvas>, fixed inset-0
  store.ts            useSyncExternalStore: progress, velocity, section,
                      pointer NDC, anchor rects, quality tier
  useScrollDriver.ts  ONE rAF + scroll listener for the whole app
  SceneAnchor.tsx     DOM → store rect registration
  quality.ts          device tier → { points, dpr, lines, transmission }
  scenes/             NodeField · ServiceOrbit · ProductDeck · AmbientDrift
  rig/                CameraRig (scroll → damped keyframes) · Lighting
  shaders/            GLSL as TS template strings (no loader; Turbopack-safe)
  lib/                anchorToWorld · springs · noise
```

Point displacement runs in the **vertex shader** from uniforms (time,
pointer, ripple buffer) — no per-frame CPU loop over thousands of
particles.

`ssr: false` is unsupported in Server Components in Next 16, so
`StageMount` is a Client Component and `layout.tsx` stays a Server
Component.

### Degradation

| Condition | Behaviour |
|---|---|
| `prefers-reduced-motion` | no canvas; static gradient hero |
| no WebGL2 | same static fallback |
| low tier (mobile, <4 cores) | DPR 1, ~1,200 points, no lines, matcap shards |
| tab hidden | `frameloop="never"` |

Canvas is `aria-hidden` and `pointer-events:none` except where a scene
owns interaction. Every product in the deck is mirrored by a real
focusable DOM link, so keyboard reach and SEO are unaffected.

## Verification

No test infrastructure exists in this repo. Verification is:
clean `npm run build` and `npm run lint`; Playwright against the running
app for canvas mount, scroll section transitions, deck drag changing the
focused product, the reduced-motion path rendering zero canvas, and a
clean console.

## Risks

1. **React Compiler × R3F** — `reactCompiler: true`; scenes mutate refs
   inside `useFrame`, not during render, so this should be safe. Proven
   by build; `"use no memo"` is the escape hatch if not.
2. **Bundle** — three adds ~600KB gzip, dynamic-imported off the
   critical path with a CSS hero visible until it resolves.
3. **Turbopack × GLSL** — avoided by keeping shaders as TS strings.

## Sequencing

Palette first: the scene's emissive colours, fog and materials are read
from the tokens, so they must exist before the stage is built.
