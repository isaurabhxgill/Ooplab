"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import type { QualitySettings } from "./quality";
import CameraRig from "./rig/CameraRig";
import Lighting from "./rig/Lighting";
import NodeField from "./scenes/NodeField";
import ServiceOrbit from "./scenes/ServiceOrbit";
import ProductDeck, { type Slide } from "./scenes/ProductDeck";

type Props = {
  quality: QualitySettings;
  slides: Slide[];
  serviceCount: number;
};

/**
 * In static mode the loop is on demand: we redraw only when the page scrolls or
 * resizes, so the scene stays correct for its band without ever animating on
 * its own.
 */
function DemandRedraw() {
  const invalidate = useThree((s) => s.invalidate);

  useEffect(() => {
    const redraw = () => invalidate();
    redraw();
    window.addEventListener("scroll", redraw, { passive: true });
    window.addEventListener("resize", redraw);
    return () => {
      window.removeEventListener("scroll", redraw);
      window.removeEventListener("resize", redraw);
    };
  }, [invalidate]);

  return null;
}

export default function Stage({ quality, slides, serviceCount }: Props) {
  const isStatic = quality.tier === "static";
  const [frameloop, setFrameloop] = useState<"always" | "never">("always");

  // A hidden tab should cost nothing.
  useEffect(() => {
    const onVisibility = () =>
      setFrameloop(document.hidden ? "never" : "always");
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  return (
    <Canvas
      frameloop={isStatic ? "demand" : frameloop}
      dpr={quality.dpr}
      camera={{ position: [0, 0, 7.4], fov: 42, near: 0.1, far: 60 }}
      gl={{
        antialias: quality.tier === "high",
        alpha: true,
        powerPreference: "high-performance",
        stencil: false,
      }}
      onCreated={({ gl }) => gl.setClearAlpha(0)}
    >
      {isStatic && <DemandRedraw />}
      <CameraRig />
      <Lighting rich={quality.transmission} />
      <NodeField points={quality.points} lines={quality.lines} />
      <ServiceOrbit count={serviceCount} rich={quality.transmission} />
      <Suspense fallback={null}>
        <ProductDeck slides={slides} />
      </Suspense>
    </Canvas>
  );
}
