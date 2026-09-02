"use client";

import { useUi } from "../useUi";

/**
 * The "move your cursor" affordance is only true when the stage is
 * interactive. Under reduced motion the scene renders as a still image and
 * nothing responds to the pointer, so the hint would be a lie.
 */
export default function StageHint() {
  const { stageReady } = useUi();
  if (!stageReady) return null;

  return (
    <p className="mt-10 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-on-ink-muted/70">
      <i className="bi bi-cursor" aria-hidden="true" />
      <span className="[@media(pointer:coarse)]:hidden">
        Move your cursor — the field responds
      </span>
      <span className="hidden [@media(pointer:coarse)]:inline">
        Tap the field — it responds
      </span>
    </p>
  );
}
