"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
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

export default function Stage({ quality, slides, serviceCount }: Props) {
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
      frameloop={frameloop}
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
