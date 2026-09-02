import Link from "next/link";
import Footer from "./components/footer";
import Header from "./components/header";
import Reviews from "./components/reviews";
import ProductShowcase from "./components/ProductShowcase";
import ServiceGrid from "./components/ServiceGrid";
import SceneAnchor from "./webgl/SceneAnchor";
import StageMount from "./webgl/StageMount";
import HeroSurface from "./webgl/controls/HeroSurface";
import StageHint from "./webgl/controls/StageHint";
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
        <div className="w-full">
          <Header variant="ink" />

          {/* --------------------------------------------------------- hero */}
          <SceneAnchor id="section:hero">
            <section className="band-ink on-ink hero relative overflow-hidden">
              <div className="stage-fallback" aria-hidden="true" />
              <div className="hero-scrim" aria-hidden="true" />

              <HeroSurface>
                <div className="shell relative z-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-300">
                    Digital product studio
                  </p>
                  <h1 className="hero-title mt-6 max-w-[56rem] font-extrabold">
                    Building scalable digital solutions for{" "}
                    <span className="text-gradient-lime">modern businesses</span>
                  </h1>
                  <p className="hero-lead mt-6 max-w-[39rem] leading-7 text-on-ink-muted">
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

                  <StageHint />
                </div>
              </HeroSurface>
            </section>
          </SceneAnchor>

          {/* ----------------------------------------------------- services */}
          <SceneAnchor id="section:services">
            <section id="services" className="section">
              <div className="shell">
              <div className="mx-auto max-w-[45rem] text-center">
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
              </div>
            </section>
          </SceneAnchor>

          {/* ----------------------------------------------------- products */}
          <SceneAnchor id="section:products">
            <section
              id="products"
              className="band-ink on-ink section relative overflow-hidden"
            >
              <div className="shell relative z-10">
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
            <section className="section" id="testimonials">
              <div className="shell">
                <Reviews reviews={reviews} />
              </div>
            </section>
          </SceneAnchor>

          <Footer />
        </div>
      </main>
    </>
  );
}
