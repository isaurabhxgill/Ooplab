"use client";

import Link from "next/link";
import SceneAnchor from "../webgl/SceneAnchor";
import { stage } from "../webgl/store";
import type { Service } from "../data/services";

/**
 * Home-page services grid.
 *
 * Each card registers itself as a scene anchor, so the matching shard in the
 * WebGL orbit knows where the card actually is on screen and can fly to it on
 * hover. Hover state is written straight into the stage store rather than React
 * state — the only consumer is the render loop.
 */
export default function ServiceGrid({ items }: { items: Service[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((service, index) => (
        <SceneAnchor
          key={service.slug}
          id={`service:${index}`}
          onPointerEnter={() => {
            stage.hoveredService = index;
          }}
          onPointerLeave={() => {
            if (stage.hoveredService === index) stage.hoveredService = -1;
          }}
        >
          <Link
            href="/services"
            className="card group relative flex h-full flex-col overflow-hidden rounded-3xl p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-xl text-brand-700 transition duration-500 group-hover:bg-brand-600 group-hover:text-white">
                <i className={`bi ${service.icon}`} aria-hidden="true" />
              </span>
              <span className="font-mono text-xs tracking-[0.2em] text-fg-subtle">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h3 className="accent-rule mt-6 pb-3 text-xl font-semibold leading-tight text-fg">
              {service.title}
            </h3>
            <p className="mt-4 flex-1 text-sm leading-6 text-fg-muted">
              {service.summary}
            </p>

            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
              Learn more
              <i
                className="bi bi-arrow-right transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </span>
          </Link>
        </SceneAnchor>
      ))}
    </div>
  );
}
