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

        <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
          Products built for Indian micro-SaaS, B2B tools, bootstrapped digital
          businesses, and vehicle privacy & safety platforms.
        </p>
      </div>

      <div className="grid gap-6">
        {products.map((product) => {
          const isBharatExit = product.slug === "BharatExit";

          return (
            <article
              key={product.slug}
              className="rounded-[24px] border border-white/10 bg-white/5 p-6 transition hover:border-[#2f6ae9]/60 hover:bg-white/10"
            >
              <div className="grid items-center gap-12 lg:grid-cols-2">
                {/* Left Content */}
                <div className="min-w-0">
                  <p
                    className={`text-xl font-bold uppercase tracking-[0.24em] ${
                      isBharatExit ? "text-lime-400" : "text-cyan-300"
                    }`}
                  >
                    {product.tag}
                  </p>

                  <h3
                    className={`mt-3 text-2xl font-semibold ${
                      isBharatExit ? "text-white" : "text-white"
                    }`}
                  >
                    {product.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {product.description}
                  </p>

                  <ul className="mt-4 space-y-3 text-sm text-slate-300">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span
                          className={`mt-1 h-2.5 w-2.5 rounded-full ${
                            isBharatExit
                              ? "bg-lime-400"
                              : "bg-cyan-300"
                          }`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <a
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Right Images */}
                <div className="flex w-full items-center justify-center">
                  {product.previewImages &&
                  product.previewImages.length === 1 ? (
                    <Image
                      src={product.previewImages[0]}
                      alt={product.title}
                      width={550}
                      height={500}
                      className="rounded-[28px] object-contain"
                      priority
                    />
                  ) : (
                    product.previewImages &&
                    product.previewImages.length >= 3 && (
                      <div className="relative h-[420px] w-[500px]">
                        {/* Left */}
                        <div className="absolute left-4 top-16 z-10 rotate-[-10deg] transition-all duration-500 hover:-translate-x-4 hover:-rotate-[14deg]">
                          <Image
                            src={product.previewImages[0]}
                            alt=""
                            width={190}
                            height={380}
                            className="rounded-[24px] object-cover"
                          />
                        </div>

                        {/* Center */}
                        <div className="absolute left-1/2 top-0 z-30 -translate-x-1/2 transition-all duration-500 hover:-translate-y-3 hover:scale-105">
                          <Image
                            src={product.previewImages[1]}
                            alt=""
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
                            alt=""
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