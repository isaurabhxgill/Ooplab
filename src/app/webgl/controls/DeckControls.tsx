"use client";

import { useCallback, useRef } from "react";
import SceneAnchor from "../SceneAnchor";
import { stage } from "../store";
import { clamp } from "../lib/math";

const PX_PER_CARD = 280;

type Props = {
  count: number;
  activeIndex: number;
  labels: string[];
};

/**
 * Drag surface and controls for the 3D product deck.
 *
 * All deck input lives here in the DOM rather than on the canvas: pointer
 * drag, arrow keys and explicit buttons all write to the same store the scene
 * reads. That keeps the canvas free of pointer events and gives keyboard and
 * screen-reader users a real control to operate.
 */
export default function DeckControls({ count, activeIndex, labels }: Props) {
  const dragging = useRef(false);
  const lastX = useRef(0);
  const lastT = useRef(0);
  const velocity = useRef(0);

  const goTo = useCallback(
    (index: number) => {
      stage.deckVelocity = 0;
      stage.deckTarget = clamp(index, 0, count - 1);
    },
    [count]
  );

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!stage.ready) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    dragging.current = true;
    stage.deckDragging = true;
    stage.deckTarget = null;
    lastX.current = e.clientX;
    lastT.current = performance.now();
    velocity.current = 0;
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    const now = performance.now();
    const dx = e.clientX - lastX.current;
    const dt = Math.max((now - lastT.current) / 1000, 1 / 240);
    lastX.current = e.clientX;
    lastT.current = now;

    const delta = -dx / PX_PER_CARD;
    stage.deckOffset += delta;
    velocity.current = delta / dt;
  }, []);

  const endDrag = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    dragging.current = false;
    stage.deckDragging = false;
    // Cap the throw so a flick cannot send the deck spinning off.
    stage.deckVelocity = clamp(velocity.current, -6, 6);
  }, []);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goTo(activeIndex + 1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goTo(activeIndex - 1);
      }
    },
    [activeIndex, goTo]
  );

  return (
    <div className="flex flex-col items-center gap-6">
      {/* The drag surface doubles as the deck's scene anchor, so the 3D slabs
          sit exactly where this column is rather than in the canvas centre. */}
      <SceneAnchor id="deck" className="w-full">
        <div
          role="group"
          aria-label="Product showcase — drag or use arrow keys to browse"
          tabIndex={0}
          className="h-[clamp(320px,52vh,560px)] w-full cursor-grab touch-pan-y select-none rounded-3xl active:cursor-grabbing"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onKeyDown={onKeyDown}
        />
      </SceneAnchor>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => goTo(activeIndex - 1)}
          disabled={activeIndex === 0}
          aria-label="Previous product"
          className="grid h-10 w-10 place-items-center rounded-full border border-line-inv text-on-ink transition hover:border-brand-300 hover:text-brand-300 disabled:opacity-30"
        >
          <i className="bi bi-arrow-left" aria-hidden="true" />
        </button>

        <div className="flex items-center gap-2" role="tablist" aria-label="Products">
          {labels.map((label, i) => (
            <button
              key={label}
              type="button"
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={label}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === activeIndex
                  ? "w-10 bg-brand-300"
                  : "w-4 bg-on-ink-muted/40 hover:bg-on-ink-muted"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(activeIndex + 1)}
          disabled={activeIndex === count - 1}
          aria-label="Next product"
          className="grid h-10 w-10 place-items-center rounded-full border border-line-inv text-on-ink transition hover:border-brand-300 hover:text-brand-300 disabled:opacity-30"
        >
          <i className="bi bi-arrow-right" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
