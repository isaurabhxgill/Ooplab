"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import { detectQuality } from "./quality";
import { useScrollDriver } from "./useScrollDriver";
import { setUiState, stage } from "./store";
import { useUi } from "./useUi";
import type { Slide } from "./scenes/ProductDeck";

// `ssr: false` is unsupported in Server Components in Next 16, which is why
// this wrapper is a Client Component and the root layout stays a server one.
const Stage = dynamic(() => import("./Stage"), { ssr: false });

type Props = { slides: Slide[]; serviceCount: number };

export default function StageMount({ slides, serviceCount }: Props) {
  // Capability detection needs the browser, so it cannot inform the first
  // render. It writes into the module store rather than component state, which
  // keeps a single source of truth for the tier and avoids a cascading render.
  const { tier } = useUi();

  useEffect(() => {
    const quality = detectQuality();
    stage.quality = quality;
    stage.ready = quality.tier !== "off";
    setUiState({ tier: quality.tier, stageReady: stage.ready });

    if (process.env.NODE_ENV === "development") {
      // A downgrade is invisible by design, which makes "the animation is not
      // running" impossible to diagnose from the page alone. Say so.
      const msg = `[Ooplab stage] tier="${quality.tier}" — ${quality.reason}`;
      if (quality.tier === "off") console.warn(`${msg}. No canvas will render.`);
      else console.info(`${msg} (points ${quality.points}, lines ${quality.lines})`);
    }

    if (!stage.ready) return;

    // `.stage-active` hands the section grounds over to the canvas backdrop.
    // Until it is set, every band paints its own solid colour, so the page is
    // fully readable with no JavaScript, no WebGL, or reduced motion.
    const root = document.documentElement;
    root.style.setProperty("--stage-ink", "1");
    root.classList.add("stage-active");

    return () => {
      root.classList.remove("stage-active");
      root.style.removeProperty("--stage-ink");
    };
  }, []);

  const quality = stage.quality;
  const active = tier !== "pending" && tier !== "off" && quality !== null;

  useScrollDriver(active);

  if (!active || !quality) return null;

  return (
    <>
      <div className="stage-backdrop" aria-hidden="true" />
      <div className="webgl-stage" aria-hidden="true">
        <Stage quality={quality} slides={slides} serviceCount={serviceCount} />
      </div>
    </>
  );
}
