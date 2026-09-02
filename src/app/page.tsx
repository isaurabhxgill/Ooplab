import Link from "next/link";
import Footer from "./components/footer";
import Header from "./components/header";
import Reviews from "./components/reviews";
import ProductShowcase from "./components/ProductShowcase";
import ServiceGrid from "./components/ServiceGrid";
import SceneAnchor from "./webgl/SceneAnchor";
import StageMount from "./webgl/StageMount";
import HeroSurface from "./webgl/controls/HeroSurface";
import type { Slide } from "./webgl/scenes/ProductDeck";
import { products } from "./products/data";
import { reviews } from "./data/reviews";
import { services } from "./data/services";

const FEATURED = [
  "web-application-development",
  "mobile-application-development",
  "ai-llm-integration",
  "user-experience-design",
  "cloud-architecture-devops",
  "custom-software-development",
];

const featuredServices = FEATURED.map(
  (slug) => services.find((s) => s.slug === slug)!
);

const slides: Slide[] = products.map((product) => ({
  slug: product.slug,
  src: product.previewImages?.[0] ?? product.image,
  kind: product.previewType,
}));

export default function Landing() {
  return (
    <>
      <StageMount slides={slides} serviceCount={featuredServices.length} />

      <main className="stage-content min-h-screen">
        <div className="mx-auto w-full max-w-[1440px]">
          <Header variant="ink" />

          {/* --------------------------------------------------------- hero */}
          <SceneAnchor id="section:hero">
            <section className="band-ink on-ink relative flex min-h-[86vh] items-center overflow-hidden px-5 py-24 sm:px-9">
              <div className="stage-fallback" aria-hidden="true" />
              <div className="hero-scrim" aria-hidden="true" />

              <HeroSurface>
                <div className="relative z-10 mx-auto w-full max-w-[1120px]">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-300">
                    Digital product studio
                  </p>
                  <h1 className="mt-6 max-w-[900px] text-[42px] font-extrabold leading-[1.04] tracking-tight sm:text-[68px]">
                    Building scalable digital solutions for{" "}
                    <span className="text-gradient-lime">modern businesses</span>
                  </h1>
                  <p className="mt-7 max-w-[620px] text-base leading-7 text-on-ink-muted sm:text-lg">
                    We build high-performance web applications, AI-powered
                    products and enterprise software that help startups launch
                    faster and businesses scale with confidence.
                  </p>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex h-12 items-center justify-center rounded-full bg-brand-600 px-7 text-sm font-semibold text-white shadow-cta transition hover:bg-brand-500"
                    >
                      Book a consultation
                    </Link>
                    <Link
                      href="/services"
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line-inv px-7 text-sm font-semibold text-on-ink transition hover:border-brand-300 hover:text-brand-300"
                    >
                      Explore services
                      <i className="bi bi-arrow-right" aria-hidden="true" />
                    </Link>
                  </div>

                  <p className="mt-16 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-on-ink-muted/70">
                    <i className="bi bi-cursor" aria-hidden="true" />
                    <span className="[@media(pointer:coarse)]:hidden">
                      Move your cursor — the field responds
                    </span>
                    <span className="hidden [@media(pointer:coarse)]:inline">
                      Tap the field — it responds
                    </span>
                  </p>
                </div>
              </HeroSurface>
            </section>
          </SceneAnchor>

          {/* ----------------------------------------------------- services */}
          <SceneAnchor id="section:services">
            <section
              id="services"
              className="mx-auto w-full max-w-[1280px] px-5 py-28 sm:px-9 sm:py-36"
            >
              <div className="mx-auto max-w-[720px] text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-700">
                  Our services
                </p>
                <h2 className="mt-4 text-3xl font-bold leading-tight text-fg sm:text-[44px]">
                  Modern technical solutions for startups and enterprises
                </h2>
                <p className="mt-5 text-base leading-7 text-fg-muted">
                  Strategy, design, engineering and platform work under one
                  roof — so nothing gets lost between agencies.
                </p>
              </div>

              <div className="mt-16">
                <ServiceGrid items={featuredServices} />
              </div>

              <div className="mt-14 flex justify-center">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-cta transition hover:bg-brand-500"
                >
                  See all {services.length} services
                  <i className="bi bi-arrow-right" aria-hidden="true" />
                </Link>
              </div>
            </section>
          </SceneAnchor>

          {/* ----------------------------------------------------- products */}
          <SceneAnchor id="section:products">
            <section
              id="products"
              className="band-ink on-ink relative overflow-hidden px-5 py-28 sm:px-9 sm:py-36"
            >
              <div className="relative z-10 mx-auto w-full max-w-[1200px]">
                <div className="max-w-[680px]">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-300">
                    Our products
                  </p>
                  <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-[44px]">
                    Products we built and run ourselves
                  </h2>
                  <p className="mt-5 text-base leading-7 text-on-ink-muted">
                    Not case studies from a deck — live products with real
                    users. Drag the deck to browse.
                  </p>
                </div>

                <div className="mt-16">
                  <ProductShowcase products={products} />
                </div>
              </div>
            </section>
          </SceneAnchor>

          {/* ------------------------------------------------- testimonials */}
          <SceneAnchor id="section:outro">
            <section
              className="mx-auto w-full max-w-[1120px] px-5 py-28 sm:px-9 sm:py-36"
              id="testimonials"
            >
              <Reviews reviews={reviews} />
            </section>
          </SceneAnchor>

          <Footer />
        </div>
      </main>
    </>
  );
}
