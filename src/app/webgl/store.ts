import type { QualitySettings } from "./quality";

export type AnchorRect = {
  cx: number; // viewport-space centre, px
  cy: number;
  w: number;
  h: number;
  /** 0 when fully off-screen, 1 when centred in the viewport. */
  visibility: number;
};

export type SectionId = "hero" | "services" | "products" | "outro";

/**
 * Mutable stage state.
 *
 * This is deliberately NOT React state. It is written up to once per frame by
 * the scroll driver and read inside `useFrame`, so routing it through React
 * would re-render the tree sixty times a second for values that only the
 * renderer consumes. React-visible values (the focused product, the quality
 * tier) go through the subscription below instead.
 */
export const stage = {
  /** Whole-document scroll progress, 0..1. */
  progress: 0,
  /** Signed scroll velocity in px/frame, damped. */
  velocity: 0,
  /** Per-section progress, 0..1 as the section crosses the viewport. */
  sections: { hero: 0, services: 0, products: 0, outro: 0 } as Record<SectionId, number>,
  /** Fraction of the viewport each section currently fills, 0..1. */
  coverage: { hero: 0, services: 0, products: 0, outro: 0 } as Record<SectionId, number>,
  /** How "inked" the backdrop should be, 0 (paper) .. 1 (ink). */
  ink: 1,
  /** Pointer in normalised device coords, and a damped follow of it. */
  pointer: { x: 0, y: 0 },
  /** Pointer projected onto the hero field plane, written by NodeField. */
  pointerWorld: { x: 0, y: 0, z: 0 },
  pointerSmooth: { x: 0, y: 0 },
  pointerActive: false,
  /** Registered DOM anchors, refreshed by the scroll driver. */
  anchorEls: new Map<string, HTMLElement>(),
  anchors: new Map<string, AnchorRect>(),
  /** Index of the hovered service card, or -1. */
  hoveredService: -1,
  /** Product deck rotation, in card units (1.0 == one card). */
  deckOffset: 0,
  deckVelocity: 0,
  deckDragging: false,
  /** When set, the deck eases to this index instead of free-wheeling. */
  deckTarget: null as number | null,
  /** Click ripples in the hero field: x, y, birth time. */
  ripples: [] as { x: number; y: number; t: number }[],
  quality: null as QualitySettings | null,
  ready: false,
};

export function resetStage() {
  stage.progress = 0;
  stage.velocity = 0;
  stage.sections = { hero: 0, services: 0, products: 0, outro: 0 };
  stage.coverage = { hero: 0, services: 0, products: 0, outro: 0 };
  stage.ink = 1;
  stage.hoveredService = -1;
  stage.deckOffset = 0;
  stage.deckVelocity = 0;
  stage.deckTarget = null;
  stage.ripples = [];
}

/* --------------------------------------------------------------------------
   React-visible slice: only things the DOM needs to re-render on.
   -------------------------------------------------------------------------- */

export type UiState = {
  activeProduct: number;
  tier: QualitySettings["tier"] | "pending";
  stageReady: boolean;
};

let uiState: UiState = { activeProduct: 0, tier: "pending", stageReady: false };
const listeners = new Set<() => void>();

export function subscribeUi(fn: () => void) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function getUiState(): UiState {
  return uiState;
}

export function getServerUiState(): UiState {
  return SERVER_UI_STATE;
}

const SERVER_UI_STATE: UiState = { activeProduct: 0, tier: "pending", stageReady: false };

export function setUiState(patch: Partial<UiState>) {
  let changed = false;
  for (const key of Object.keys(patch) as (keyof UiState)[]) {
    if (patch[key] !== undefined && uiState[key] !== patch[key]) {
      changed = true;
      break;
    }
  }
  if (!changed) return;
  uiState = { ...uiState, ...patch };
  for (const fn of listeners) fn();
}

export function pushRipple(x: number, y: number, t: number) {
  stage.ripples.push({ x, y, t });
  if (stage.ripples.length > 4) stage.ripples.shift();
}
