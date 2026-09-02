"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { stage } from "./store";

type Props = {
  /** Stable id the 3D scene looks up, e.g. "service:2" or "section:hero". */
  id: string;
  children?: ReactNode;
  className?: string;
  onPointerEnter?: () => void;
  onPointerLeave?: () => void;
};

/**
 * Registers a DOM element as a positional target for the WebGL stage.
 *
 * The DOM stays the single source of truth for layout: the scene reads these
 * rects and unprojects them, so 3D objects track their cards through resize,
 * reflow and scroll without any duplicated layout maths.
 */
export default function SceneAnchor({
  id,
  children,
  className,
  onPointerEnter,
  onPointerLeave,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    stage.anchorEls.set(id, el);
    return () => {
      stage.anchorEls.delete(id);
      stage.anchors.delete(id);
    };
  }, [id]);

  return (
    <div
      ref={ref}
      className={className}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      {children}
    </div>
  );
}
