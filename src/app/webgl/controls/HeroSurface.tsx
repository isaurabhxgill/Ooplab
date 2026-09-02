"use client";

import { useCallback, type ReactNode } from "react";
import { pushRipple, stage } from "../store";

/**
 * Transparent click target over the hero. Clicking sends a ripple through the
 * node field from wherever the pointer is in world space.
 *
 * The hero copy sits above this in the stacking order, so headings and the CTA
 * keep their own pointer events.
 */
export default function HeroSurface({ children }: { children: ReactNode }) {
  const onPointerDown = useCallback(() => {
    if (!stage.ready) return;
    pushRipple(
      stage.pointerWorld.x,
      stage.pointerWorld.y,
      performance.now() / 1000
    );
  }, []);

  return (
    <div className="relative" onPointerDown={onPointerDown}>
      {children}
    </div>
  );
}
