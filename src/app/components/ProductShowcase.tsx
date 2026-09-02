"use client";

import Image from "next/image";
import Link from "next/link";
import DeckControls from "../webgl/controls/DeckControls";
import { useUi } from "../webgl/useUi";
import type { Product } from "../products/data";

/**
 * DOM half of the 3D product deck.
 *
 * The slabs themselves are rendered by the WebGL stage, but every word of copy
 * and every link lives here in real markup — so the section is indexable, and
 * a visitor with no WebGL gets a static gallery rather than an empty box.
 */
export default function ProductShowcase({ products }: { products: Product[] }) {
  const { activeProduct, stageReady } = useUi();
  const index = Math.min(activeProduct, products.length - 1);
  const active = products[index];

  return (
    <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center lg:gap-16">
      <div>
        {stageReady ? (
          <DeckControls
            count={products.length}
            activeIndex={index}
            labels={products.map((p) => p.tag)}
          />
        ) : (
          <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
            {products.map((product) => (
              <div
                key={product.slug}
                className="relative aspect-[4/3] w-[80vw] max-w-[520px] shrink-0 snap-start overflow-hidden rounded-3xl border border-line-inv bg-ink-800"
              >
                <Image
                  src={product.previewImages?.[0] ?? product.image}
                  alt={`${product.tag} preview`}
                  fill
                  sizes="(max-width: 768px) 80vw, 520px"
                  className="object-contain p-6"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div key={active.slug} className="reveal" data-revealed="true">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-300">
          {active.tag}
        </p>
        <h3 className="mt-4 text-3xl font-bold leading-tight text-on-ink sm:text-[38px]">
          {active.title}
        </h3>
        <p className="mt-5 text-base leading-7 text-on-ink-muted">
          {active.description}
        </p>

        <ul className="mt-7 space-y-3">
          {active.features.slice(0, 3).map((feature) => (
            <li
              key={feature}
              className="flex gap-3 text-sm leading-6 text-on-ink-muted"
            >
              <i
                className="bi bi-check2 mt-0.5 shrink-0 text-brand-300"
                aria-hidden="true"
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          href={`/products/${active.slug}`}
          className="mt-9 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-600 px-7 text-sm font-semibold text-white shadow-cta transition hover:bg-brand-500"
        >
          Explore {active.tag}
          <i className="bi bi-arrow-right" aria-hidden="true" />
        </Link>
      </div>

      {/* Every product stays reachable regardless of the deck's state. */}
      <ul className="sr-only">
        {products.map((product) => (
          <li key={product.slug}>
            <Link href={`/products/${product.slug}`}>
              {product.tag} — {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
