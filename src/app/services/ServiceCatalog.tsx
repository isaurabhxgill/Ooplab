"use client";

import { useMemo, useState } from "react";
import {
  serviceCategories,
  services,
  type ServiceCategory,
} from "../data/services";

type Filter = ServiceCategory | "All";

const FILTERS: Filter[] = ["All", ...serviceCategories];

export default function ServiceCatalog() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = useMemo(
    () => (filter === "All" ? services : services.filter((s) => s.category === filter)),
    [filter]
  );

  return (
    <div>
      <div
        className="sticky top-16 z-20 -mx-5 mb-12 flex gap-2 overflow-x-auto px-5 py-4 sm:top-20 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
        role="tablist"
        aria-label="Service categories"
      >
        {FILTERS.map((item) => {
          const active = filter === item;
          return (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(item)}
              className={`shrink-0 rounded-full border px-5 py-2 text-sm font-medium transition duration-300 ${
                active
                  ? "border-brand-600 bg-brand-600 text-white shadow-cta"
                  : "border-line bg-paper-raised/80 text-fg-muted backdrop-blur hover:border-brand-400 hover:text-brand-700"
              }`}
            >
              {item}
              {item !== "All" && (
                <span className={`ml-2 text-xs ${active ? "text-white/70" : "text-fg-subtle"}`}>
                  {services.filter((s) => s.category === item).length}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <p className="visually-hidden" aria-live="polite">
        {visible.length} services shown
      </p>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((service, index) => (
          <article
            key={service.slug}
            className="card group relative flex flex-col overflow-hidden rounded-3xl p-7"
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              style={{ background: "var(--color-brand-300)" }}
            />

            <div className="relative z-10 flex items-start justify-between gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-xl text-brand-700 transition duration-500 group-hover:bg-brand-600 group-hover:text-white">
                <i className={`bi ${service.icon}`} aria-hidden="true" />
              </span>
              <span className="font-mono text-xs tracking-[0.2em] text-fg-subtle">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="relative z-10 mt-6 flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700">
                {service.category}
              </p>
              <h3 className="accent-rule mt-2 pb-3 text-xl font-semibold leading-tight text-fg">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-fg-muted">{service.summary}</p>

              <ul className="mt-5 space-y-2">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-6 text-fg-muted">
                    <i
                      className="bi bi-check2 mt-0.5 shrink-0 text-brand-600"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
              {service.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-paper-sunk px-3 py-1 text-[11px] font-medium text-fg-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
