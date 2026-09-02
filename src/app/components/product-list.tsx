import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Product } from "../products/data";

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div>
      <div className="mb-10">
        <h2 className="text-[32px] font-bold leading-tight tracking-[0] text-white sm:text-[38px]">
          Our Products
        </h2>

        <p className="mt-3 text-sm leading-6 text-on-ink-muted sm:text-base">
          Products built for Indian micro-SaaS, B2B tools, bootstrapped digital
          businesses, and vehicle privacy & safety platforms.
        </p>
      </div>

      <div className="grid gap-6">
        {products.map((product) => {
          const isBharatExit = product.slug === "bharatexit";
          const isEventSync = product.slug === "eventsync";

          return (
            <article
              key={product.slug}
              className={`rounded-[24px] border p-6 transition ${
                isEventSync
                  ? "border-[#84c030]/20 bg-[#04120a] hover:border-[#84c030]/50 hover:bg-[#143222]"
                  : "border-white/10 bg-white/5 hover:border-[#079447]/60 hover:bg-white/10"
              }`}
            >
              <div className="grid items-center gap-8 lg:grid-cols-2">
                {/* Left Content */}
                <div className="min-w-0">
                  <p
                    className={`text-xl font-bold uppercase tracking-[0.24em] ${
                      isEventSync
                        ? "text-[#84c030]"
                        : isBharatExit
                        ? "text-lime-400"
                        : "text-brand-200"
                    }`}
                  >
                    {product.tag}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    {product.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-line-strong">
                    {product.description}
                  </p>

                  <ul className="mt-4 space-y-3 text-sm text-line-strong">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span
                          className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${
                            isEventSync
                              ? "bg-[#84c030]"
                              : isBharatExit
                              ? "bg-lime-400"
                              : "bg-brand-200"
                          }`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <a
                      href={`/products/${product.slug}`}
                      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white transition ${
                        isEventSync
                          ? "bg-[#84c030]/15 hover:bg-[#84c030]/30"
                          : "bg-white/10 hover:bg-white/20"
                      }`}
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Right Images */}
                <div className="flex w-full items-center justify-center overflow-hidden">
                  {/* ── EventSync: dashboard layout (large primary + 2 stacked thumbnails) ── */}
                  {isEventSync && product.previewImages && product.previewImages.length >= 3 ? (
                    <div className="relative flex h-[280px] w-full max-w-full gap-3 sm:h-[340px] lg:h-[380px] lg:max-w-[480px]">
                      {/* Primary large screenshot */}
                      <div className="relative h-full flex-1 overflow-hidden rounded-[20px] border border-[#84c030]/20 shadow-[0_0_40px_rgba(62,207,142,0.08)] transition-all duration-500 hover:shadow-[0_0_60px_rgba(62,207,142,0.18)] hover:scale-[1.02]">
                        <Image
                          src={product.previewImages[0]}
                          alt="EventSync admin dashboard"
                          fill
                          sizes="(max-width: 768px) 60vw, 300px"
                          className="object-cover object-top"
                          priority
                        />
                      </div>
                      {/* Two stacked thumbnails */}
                      <div className="flex w-[40%] flex-col gap-3">
                        <div className="relative flex-1 overflow-hidden rounded-[16px] border border-[#84c030]/20 shadow-sm transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(62,207,142,0.15)]">
                          <Image
                            src={product.previewImages[1]}
                            alt="EventSync volunteer app"
                            fill
                            sizes="(max-width: 768px) 30vw, 150px"
                            className="object-cover object-top"
                          />
                        </div>
                        <div className="relative flex-1 overflow-hidden rounded-[16px] border border-[#84c030]/20 shadow-sm transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(62,207,142,0.15)]">
                          <Image
                            src={product.previewImages[2]}
                            alt="EventSync intake form"
                            fill
                            sizes="(max-width: 768px) 30vw, 150px"
                            className="object-cover object-top"
                          />
                        </div>
                      </div>
                    </div>

                  /* ── BharatExit: single centered desktop screenshot ── */
                  ) : product.previewImages && product.previewImages.length === 1 ? (
                    <div className="relative w-full max-w-[520px]">
                      <Image
                        src={product.previewImages[0]}
                        alt={product.title}
                        width={550}
                        height={500}
                        sizes="(max-width: 768px) 90vw, 520px"
                        className="w-full rounded-[28px] object-contain"
                        priority
                      />
                    </div>

                  /* ── CarzPark: 3-phone fan / rotate layout ── */
                  ) : (
                    product.previewImages &&
                    product.previewImages.length >= 3 && (
                      <div className="relative hidden h-[420px] w-full max-w-[500px] md:block">
                        {/* Left */}
                        <div className="absolute left-4 top-16 z-10 rotate-[-10deg] transition-all duration-500 hover:-translate-x-4 hover:-rotate-[14deg]">
                          <Image
                            src={product.previewImages[0]}
                            alt={`${product.tag} app screen 1`}
                            width={190}
                            height={380}
                            className="rounded-[24px] object-cover"
                          />
                        </div>

                        {/* Center */}
                        <div className="absolute left-1/2 top-0 z-30 -translate-x-1/2 transition-all duration-500 hover:-translate-y-3 hover:scale-105">
                          <Image
                            src={product.previewImages[1]}
                            alt={`${product.tag} app screen 2`}
                            width={220}
                            height={440}
                            className="rounded-[28px] object-cover"
                            priority
                          />
                        </div>

                        {/* Right */}
                        <div className="absolute right-4 top-16 z-20 rotate-[10deg] transition-all duration-500 hover:translate-x-4 hover:rotate-[14deg]">
                          <Image
                            src={product.previewImages[2]}
                            alt={`${product.tag} app screen 3`}
                            width={190}
                            height={380}
                            className="rounded-[24px] object-cover"
                          />
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}