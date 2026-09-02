"use client";

import { useEffect } from "react";
import { stage, type SectionId } from "./store";
import { clamp, damp, smoothstep } from "./lib/math";

const INK_SECTIONS: SectionId[] = ["hero", "products"];
const SECTION_IDS: SectionId[] = ["hero", "services", "products", "outro"];

/**
 * The single scroll/pointer/rAF loop for the whole page.
 *
 * Every anchor rect, every section progress and the pointer are refreshed here
 * once per frame and written into the mutable `stage` object. Scenes read from
 * it inside `useFrame`. Having exactly one loop means exactly one forced
 * layout pass per frame, rather than one per observer.
 */
export function useScrollDriver(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;

    let raf = 0;
    let last = performance.now();
    let lastScroll = window.scrollY;
    let lastInkWritten = -1;
    let dirty = true;

    const markDirty = () => {
      dirty = true;
    };

    const onPointerMove = (e: PointerEvent) => {
      stage.pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      stage.pointer.y = -((e.clientY / window.innerHeight) * 2 - 1);
      stage.pointerActive = true;
    };

    const onPointerLeave = () => {
      stage.pointerActive = false;
    };

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;

      const vh = window.innerHeight;
      const vw = window.innerWidth;
      const scrollY = window.scrollY;

      if (scrollY !== lastScroll) dirty = true;

      const rawVelocity = scrollY - lastScroll;
      lastScroll = scrollY;
      stage.velocity = damp(stage.velocity, rawVelocity, 8, dt);

      const doc = document.documentElement;
      const scrollable = Math.max(doc.scrollHeight - vh, 1);
      stage.progress = clamp(scrollY / scrollable);

      if (dirty) {
        dirty = false;

        for (const [id, el] of stage.anchorEls) {
          const r = el.getBoundingClientRect();
          const cy = r.top + r.height / 2;
          const visibility = clamp(
            1 - Math.abs(cy - vh / 2) / (vh / 2 + r.height / 2)
          );
          stage.anchors.set(id, {
            cx: r.left + r.width / 2,
            cy,
            w: r.width,
            h: r.height,
            visibility,
          });
        }

        for (const id of SECTION_IDS) {
          const a = stage.anchors.get(`section:${id}`);
          if (!a) {
            stage.sections[id] = 0;
            stage.coverage[id] = 0;
            continue;
          }
          const top = a.cy - a.h / 2;
          stage.sections[id] = clamp((vh - top) / (vh + a.h));
          const visible = Math.min(top + a.h, vh) - Math.max(top, 0);
          stage.coverage[id] = clamp(visible / vh);
        }

        // How much of the viewport an ink-ground section covers. The DOM
        // backdrop and the scene both read this, so the page and the canvas
        // change ground at exactly the same moment.
        let inkCoverage = 0;
        for (const id of INK_SECTIONS) {
          inkCoverage = Math.max(inkCoverage, stage.coverage[id]);
        }
        stage.ink = smoothstep(0.12, 0.62, inkCoverage);
      }

      stage.pointerSmooth.x = damp(stage.pointerSmooth.x, stage.pointer.x, 6, dt);
      stage.pointerSmooth.y = damp(stage.pointerSmooth.y, stage.pointer.y, 6, dt);

      // One style write per frame, and only when it actually changes.
      const inkRounded = Math.round(stage.ink * 100) / 100;
      if (inkRounded !== lastInkWritten) {
        lastInkWritten = inkRounded;
        doc.style.setProperty("--stage-ink", String(inkRounded));
      }

      void vw;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    window.addEventListener("scroll", markDirty, { passive: true });
    window.addEventListener("resize", markDirty);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", markDirty);
      window.removeEventListener("resize", markDirty);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      document.documentElement.style.removeProperty("--stage-ink");
    };
  }, [enabled]);
}
