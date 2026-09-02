import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";
import ServiceCatalog from "./ServiceCatalog";
import SceneAnchor from "../webgl/SceneAnchor";
import StageMount from "../webgl/StageMount";
import { engagementModels, processSteps, services } from "../data/services";

const stats = [
  { value: `${services.length}`, label: "Services across five practices" },
  { value: "6–10", label: "Weeks to a working MVP" },
  { value: "2wk", label: "Sprint cadence, always deployed" },
  { value: "100%", label: "Source code and IP handed over" },
];

export default function ServicesPage() {
  return (
    <>
      <StageMount slides={[]} serviceCount={0} />

      <main className="stage-content min-h-screen">
      <div className="w-full">
        <Header variant="ink" />

        {/* ------------------------------------------------------------ hero */}
        <SceneAnchor id="section:hero">
        <section className="band-ink on-ink section relative overflow-hidden">
          <div className="stage-fallback" aria-hidden="true" />
          <div className="hero-scrim" aria-hidden="true" />

          <div className="shell relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-300">
              What we do
            </p>
            <h1 className="hero-title mt-5 max-w-[56rem] font-extrabold">
              Every discipline needed to take a product from{" "}
              <span className="text-gradient-lime">idea to scale</span>.
            </h1>
            <p className="hero-lead mt-6 max-w-[40rem] leading-7 text-on-ink-muted">
              Ooplab is a full-stack product studio. Strategy, design,
              engineering and the platform work underneath — delivered by one
              team, under one roadmap, with no handoffs between agencies.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-brand-600 px-7 text-sm font-semibold text-white shadow-cta transition hover:bg-brand-500"
              >
                Book a consultation
              </Link>
              <a
                href="#catalogue"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line-inv px-7 text-sm font-semibold text-on-ink transition hover:border-brand-300 hover:text-brand-300"
              >
                Browse all services
                <i className="bi bi-arrow-down" aria-hidden="true" />
              </a>
            </div>

            <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line-inv pt-10 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse gap-2">
                  <dt className="text-sm leading-6 text-on-ink-muted">
                    {stat.label}
                  </dt>
                  <dd className="text-3xl font-bold text-brand-300 sm:text-4xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
        </SceneAnchor>

        {/* ------------------------------------------------------- catalogue */}
        <section id="catalogue" className="section">
          <div className="shell">
          <div className="mx-auto max-w-[47rem] text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-700">
              Capabilities
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-fg sm:text-[42px]">
              The full catalogue
            </h2>
            <p className="mt-5 text-base leading-7 text-fg-muted">
              Most engagements combine several of these. Filter by practice to
              see what sits where, or talk to us and we will shape the mix
              around the outcome you are after.
            </p>
          </div>

          <div className="mt-14">
            <ServiceCatalog />
          </div>
          </div>
        </section>

        {/* --------------------------------------------------------- process */}
        <section className="band-ink-soft on-ink section relative overflow-hidden">
          <div className="shell relative z-10">
            <div className="max-w-[680px]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-300">
                How we work
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-[42px]">
                Five phases, no surprises at the end
              </h2>
              <p className="mt-5 text-base leading-7 text-on-ink-muted">
                Every engagement runs the same shape. You see working software
                from the third week onward, and you own everything we write.
              </p>
            </div>

            <ol className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line-inv bg-line-inv md:grid-cols-2 lg:grid-cols-5">
              {processSteps.map((step) => (
                <li
                  key={step.phase}
                  className="group relative bg-ink-900 p-7 transition duration-500 hover:bg-ink-800"
                >
                  <span className="font-mono text-xs tracking-[0.2em] text-brand-300">
                    {step.phase}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-on-ink">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-on-ink-muted">
                    {step.duration}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-on-ink-muted">
                    {step.description}
                  </p>
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-brand-300 transition-all duration-500 group-hover:w-full" />
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ------------------------------------------------------ engagement */}
        <section className="section">
          <div className="shell">
          <div className="max-w-[42.5rem]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-700">
              Engagement models
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-fg sm:text-[42px]">
              Three ways to work with us
            </h2>
            <p className="mt-5 text-base leading-7 text-fg-muted">
              The right structure depends on how settled the scope is and how
              much technical leadership you already have in house.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {engagementModels.map((model) => (
              <article
                key={model.name}
                className="card group flex flex-col rounded-3xl p-8"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-xl text-brand-700 transition duration-500 group-hover:bg-brand-600 group-hover:text-white">
                  <i className={`bi ${model.icon}`} aria-hidden="true" />
                </span>

                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700">
                  {model.tagline}
                </p>
                <h3 className="accent-rule mt-2 pb-3 text-2xl font-semibold text-fg">
                  {model.name}
                </h3>
                <p className="mt-4 text-sm leading-6 text-fg-muted">
                  {model.description}
                </p>

                <ul className="mt-6 flex-1 space-y-2.5">
                  {model.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-sm leading-6 text-fg-muted"
                    >
                      <i
                        className="bi bi-dot text-lg leading-none text-brand-300"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-7 border-t border-line pt-5 text-sm text-fg-subtle">
                  <span className="font-medium text-fg">Best for:</span>{" "}
                  {model.bestFor}
                </p>
              </article>
            ))}
          </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- cta */}
        <section className="section-tight pb-[var(--section-py)]">
          <div className="shell">
          <div className="brand-gradient relative overflow-hidden rounded-[32px] px-8 py-16 text-center sm:px-16 sm:py-20">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-200 opacity-25 blur-3xl"
              aria-hidden="true"
            />
            <h2 className="relative z-10 mx-auto max-w-[720px] text-3xl font-bold leading-tight text-white sm:text-[42px]">
              Tell us what you are trying to build
            </h2>
            <p className="relative z-10 mx-auto mt-5 max-w-[560px] text-base leading-7 text-white/85">
              A thirty-minute call is usually enough to tell you whether we are
              the right studio for it — and what it would realistically take.
            </p>
            <Link
              href="/contact"
              className="relative z-10 mt-9 inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
            >
              Book a consultation
            </Link>
          </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
    </>
  );
}
