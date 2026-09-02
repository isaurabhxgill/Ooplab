import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Header from "../components/header";
import Footer from "../components/footer";
import Reviews from "../components/reviews";
import { reviews } from "../data/reviews";
import { products } from "../products/data";
import StatCards from "./StatCards";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Ooplab — a premium digital product studio building scalable web apps, mobile apps, and AI products for startups and enterprises worldwide.",
  openGraph: {
    title: "About Ooplab — Premium Digital Product Studio",
    description:
      "We partner with ambitious founders and enterprises to design, build, and ship world-class digital products.",
    images: ["/Assest/bg-about.png"],
  },
};

const services = [
  { title: "Web Application Development", description: "Modern web experiences built for performance, accessibility, and rapid growth.", icon: "🖥️", accent: "#e4f4c9" },
  { title: "Mobile App Development", description: "Native and cross-platform apps designed to delight users on every device.", icon: "📱", accent: "#e4f4c9" },
  { title: "AI Integrations", description: "Intelligent automations and data-driven features that scale with your business.", icon: "🤖", accent: "#f3f9ea" },
  { title: "UI/UX Design", description: "Thoughtful interfaces and experiences that make your product feel premium.", icon: "🎨", accent: "#f3f9ea" },
  { title: "Cloud Solutions", description: "Secure cloud architectures and infrastructure that support enterprise growth.", icon: "☁️", accent: "#e4f4c9" },
  { title: "Enterprise Systems", description: "Robust backend platforms crafted for reliability, security, and scale.", icon: "⚙️", accent: "#f3f9ea" },
];

const steps = [
  { num: "01", title: "Discovery", desc: "We understand your goals, constraints, and market through structured workshops and research." },
  { num: "02", title: "Strategy & Design", desc: "We map out architecture, user flows, and pixel-perfect wireframes before writing a single line of code." },
  { num: "03", title: "Build", desc: "Agile sprints with weekly demos keep you in the loop as we turn designs into production-ready software." },
  { num: "04", title: "Test & Launch", desc: "Rigorous QA, performance audits, and a zero-downtime deployment strategy bring your product live." },
  { num: "05", title: "Grow", desc: "Post-launch analytics, feature iterations, and dedicated support ensure your product keeps improving." },
];

const strengths = [
  { icon: "bi-rocket-takeoff", title: "Speed to Market", desc: "From kickoff to launch in weeks, not months — without cutting corners on quality." },
  { icon: "bi-shield-check", title: "Security First", desc: "Enterprise-grade security baked into every layer — authentication, data, and infrastructure." },
  { icon: "bi-graph-up-arrow", title: "Built to Scale", desc: "Cloud-native architectures that grow with your user base and business needs." },
  { icon: "bi-palette2", title: "Premium Design", desc: "Pixel-perfect UI/UX that converts visitors into customers and keeps users engaged." },
  { icon: "bi-headset", title: "Dedicated Support", desc: "A team you can reach — real engineers, real accountability, real SLAs." },
  { icon: "bi-lightbulb", title: "Innovation DNA", desc: "We embrace AI, modern tooling, and emerging tech to give you a competitive edge." },
];

const techStack = [
  { label: "Next.js", icon: "bi-grid" },
  { label: "React", icon: "bi-cpu" },
  { label: "TypeScript", icon: "bi-code-slash" },
  { label: "Node.js", icon: "bi-server" },
  { label: "AWS", icon: "bi-cloud" },
  { label: "PostgreSQL", icon: "bi-database" },
  { label: "Tailwind CSS", icon: "bi-brush" },
  { label: "Docker", icon: "bi-box-seam" },
  { label: "Python", icon: "bi-terminal" },
  { label: "Go", icon: "bi-lightning" },
  { label: "React Native", icon: "bi-phone" },
  { label: "MongoDB", icon: "bi-hdd-network" },
  { label: "Redis", icon: "bi-database-fill" },
  { label: "Firebase", icon: "bi-fire" },
  { label: "GCP", icon: "bi-cloud-fill" },
  { label: "OpenAI", icon: "bi-robot" },
  { label: "GraphQL", icon: "bi-diagram-3" },
];

const industries = [
  { icon: "bi-car-front", label: "Mobility & Transport" },
  { icon: "bi-bank", label: "Fintech" },
  { icon: "bi-shop", label: "E-Commerce" },
  { icon: "bi-building", label: "Enterprise SaaS" },
  { icon: "bi-heart-pulse", label: "HealthTech" },
  { icon: "bi-mortarboard", label: "EdTech" },
];

const values = [
  { icon: "bi-stars", title: "Excellence", desc: "We set the bar high and push until every detail is right." },
  { icon: "bi-people", title: "Partnership", desc: "We treat your product like our own — invested in your success." },
  { icon: "bi-eye", title: "Transparency", desc: "No surprises. Clear timelines, budgets, and honest communication." },
  { icon: "bi-infinity", title: "Continuous Learning", desc: "We evolve constantly so your product stays ahead of the curve." },
];


// ── Page ───────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fafaf5] text-[#11201a]">
      <div className="mx-auto w-full max-w-[1440px]">
        <Header variant="ink" />

        {/* ── 1. HERO ─────────────────────────────────────────────────── */}
        {/* <section className="relative flex min-h-[560px] w-full items-center justify-center overflow-hidden bg-gradient-to-r from-[#079447] to-[#0a5e33] px-6 py-20 sm:py-28 mt-6">
       
          <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-black/20 blur-3xl" />

          <div className="relative z-10 max-w-[720px] text-center text-white">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-white/70">About Ooplab</p>
            <h1 className="text-[40px] font-extrabold leading-[1.08] sm:text-[54px] lg:text-[60px]">
              Building Scalable Digital Solutions for Modern Businesses
            </h1>
            <p className="mt-6 text-base leading-7 text-white/80 sm:text-lg">
              We build high-performance web applications, AI-powered products, and enterprise software that help startups launch faster and businesses scale confidently.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-md bg-white px-6 text-sm font-semibold text-[#079447] shadow-[0_10px_28px_rgba(0,0,0,0.2)] transition hover:bg-white/90"
              >
                Start a Project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#services"
                className="inline-flex h-11 items-center gap-2 rounded-md border border-white/30 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Our Services
              </Link>
            </div>
          </div>
        </section> */}


        <section className="band-ink on-ink hero relative w-full overflow-hidden">
          {/* Background Image */}
          <Image
            src="/Assest/bg-about.png"
            alt="Ooplab Hero Background"
            fill
            priority
            className="art-brand-shift object-cover"
          />

          <div className="art-brand-wash" aria-hidden="true" />

          {/* Content */}
          <div className="shell relative z-10">
            <div className="mx-auto max-w-[45rem] text-center text-white">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
                About Ooplab
              </p>

              <h1 className="text-[40px] font-extrabold leading-[1.08] sm:text-[54px] lg:text-[60px]">
                Building Scalable Digital Solutions for Modern Businesses
              </h1>

              <p className="mt-6 text-base leading-7 text-white/80 sm:text-lg">
                We build high-performance web applications, AI-powered products, and
                enterprise software that help startups launch faster and businesses
                scale confidently.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center gap-2 rounded-md bg-white px-6 text-sm font-semibold text-[#079447] shadow-[0_10px_28px_rgba(0,0,0,0.2)] transition hover:bg-white/90"
                >
                  Start a Project <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/#services"
                  className="inline-flex h-11 items-center gap-2 rounded-md border border-white/30 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. COMPANY OVERVIEW ─────────────────────────────────────── */}
        <section className="section shell">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-[#079447]">Who We Are</p>
              <h2 className="mt-3 text-[36px] font-bold leading-tight text-ink-950 sm:text-[44px]">
                A Premium Digital Product Studio
              </h2>
              <p className="mt-5 text-base leading-8 text-fg-muted">
                Ooplab is a boutique software studio headquartered in Indrapuram, India. We partner with ambitious founders, enterprises, and product teams to design, build, and ship world-class digital products.
              </p>
              <p className="mt-4 text-base leading-8 text-fg-muted">
                From AI-powered platforms like <strong className="text-ink-900">CarzPark</strong> to verified acquisition marketplaces like <strong className="text-ink-900">BharatExit</strong>, everything we build is crafted with care, built for performance, and designed to last.
              </p>
              <div className="mt-8 flex gap-4">
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center gap-2 rounded-md brand-bg brand-hover px-6 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(7,148,71,0.2)] transition"
                >
                  Book a Call
                </Link>
                <Link
                  href="/#products"
                  className="inline-flex h-11 items-center gap-2 rounded-md border border-line bg-white px-6 text-sm font-semibold text-ink-700 transition hover:bg-paper"
                >
                  See Our Products
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/Assest/Ologo.png"
                alt="Ooplab"
                width={420}
                height={260}
                style={{ width: "auto", maxHeight: 260 }}
                className="drop-shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* ── 3. HIGHLIGHTS ───────────────────────────────────────────── */}
        <section className="band-ink-soft on-ink section">
          <div className="shell">
            <p className="text-center text-[13px] font-semibold uppercase tracking-[0.24em] text-on-ink-muted">By the numbers</p>
            <h2 className="mt-3 text-center text-3xl font-bold text-white">Trusted by teams across India and beyond.</h2>
            <StatCards />
          </div>
        </section>

        {/* ── 4. SERVICES ─────────────────────────────────────────────── */}
        <section className="section shell" id="about-services">
          <div className="relative overflow-hidden rounded-[32px] bg-[#f1f2ea] px-5 py-10 shadow-[0_20px_80px_rgba(6,48,27,0.07)] sm:px-8 sm:py-12">
            {/* Bg blobs */}
            <div className="pointer-events-none absolute -right-16 top-8 h-44 w-44 rounded-full bg-[#e4f4c9] opacity-70 blur-3xl" />
            <div className="pointer-events-none absolute left-0 top-24 h-64 w-64 rounded-full bg-[#f3f9ea] opacity-80 blur-3xl" />
            <div className="pointer-events-none absolute bottom-4 right-10 h-52 w-52 rounded-full bg-[#e4f4c9] opacity-75 blur-3xl" />

            <div className="relative">
              <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-[#079447]">What We Do</p>
              <h2 className="mt-3 text-3xl font-bold text-ink-950">Modern technical solutions tailored for startups and enterprises.</h2>
            </div>

            <div className="relative mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group relative overflow-hidden rounded-[28px] border border-white/90 bg-white/95 p-7 shadow-[0_18px_48px_rgba(6,48,27,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(6,48,27,0.16)] brand-hover"
                >
                  <div
                    className="absolute -right-10 -top-10 h-36 w-36 rounded-full opacity-30 blur-3xl"
                    style={{ backgroundColor: service.accent }}
                  />
                  <div className="relative z-10 text-4xl">{service.icon}</div>
                  <div className="relative z-10 mt-5">
                    <h3 className="text-xl font-semibold leading-[1.2] text-[#11201a] transition duration-300 group-hover:text-white">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#4f5d54] transition duration-300 group-hover:text-white">
                      {service.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. PRODUCTS ─────────────────────────────────────────────── */}
        <section className="band-ink-soft on-ink section" id="about-products">
          <div className="shell">
            <div className="mb-10">
              <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-on-ink-muted">What We&apos;ve Built</p>
              <h2 className="mt-3 text-[32px] font-bold text-white sm:text-[38px]">Our Products</h2>
              <p className="mt-3 text-sm leading-6 text-on-ink-muted sm:text-base">
                Products built for Indian micro-SaaS, B2B tools, bootstrapped digital businesses, and vehicle privacy &amp; safety platforms.
              </p>
            </div>
            <div className="grid gap-6">
              {products.map((product) => {
                const isBharatExit = product.slug === "bharatexit";
                return (
                  <article
                    key={product.slug}
                    className="rounded-[24px] border border-white/10 bg-white/5 p-6 transition hover:border-[#079447]/60 hover:bg-white/10"
                  >
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                      <div className="min-w-0">
                        <p className={`text-xl font-bold uppercase tracking-[0.24em] ${isBharatExit ? "text-lime-400" : "text-brand-200"}`}>
                          {product.tag}
                        </p>
                        <h3 className="mt-3 text-2xl font-semibold text-white">{product.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-line-strong">{product.description}</p>
                        <ul className="mt-4 space-y-3 text-sm text-line-strong">
                          {product.features.map((f) => (
                            <li key={f} className="flex items-start gap-2">
                              <span className={`mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full ${isBharatExit ? "bg-lime-400" : "bg-brand-200"}`} />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6">
                          <Link
                            href={`/products/${product.slug}`}
                            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
                          >
                            Learn more <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                      <div className="flex w-full items-center justify-center">
                        {product.previewImages && product.previewImages.length === 1 ? (
                          <Image
                            src={product.previewImages[0]}
                            alt={product.title}
                            width={550}
                            height={500}
                            className="rounded-[28px] object-contain"
                          />
                        ) : (
                          product.previewImages && product.previewImages.length >= 3 && (
                      <div className="relative h-[380px] w-full max-w-[500px]">

                              <div className="absolute left-4 top-16 z-10 rotate-[-10deg] transition-all duration-500 hover:-translate-x-4 hover:-rotate-[14deg]">
                                <Image src={product.previewImages[0]} alt="" width={190} height={380} className="rounded-[24px] object-cover" />
                              </div>
                              <div className="absolute left-1/2 top-0 z-30 -translate-x-1/2 transition-all duration-500 hover:-translate-y-3 hover:scale-105">
                                <Image src={product.previewImages[1]} alt="" width={220} height={440} className="rounded-[28px] object-cover" priority />
                              </div>
                              <div className="absolute right-4 top-16 z-20 rotate-[10deg] transition-all duration-500 hover:translate-x-4 hover:rotate-[14deg]">
                                <Image src={product.previewImages[2]} alt="" width={190} height={380} className="rounded-[24px] object-cover" />
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
        </section>

        {/* ── 6. PROCESS ──────────────────────────────────────────────── */}
        <section className="mx-auto w-full max-w-[1120px] py-20">
          <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-[#079447]">How We Work</p>
          <h2 className="mt-3 text-3xl font-bold text-ink-950">Our Development Process</h2>
          <div className="relative mt-12">
            {/* Connector line */}
            <div className="absolute left-[19px] top-0 hidden h-full w-px bg-gradient-to-b from-[#079447]/40 via-[#079447]/20 to-transparent sm:block" />
            <div className="space-y-8">
              {steps.map((step, i) => (
                <div key={step.num} className="flex gap-6">
                  <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full brand-bg text-sm font-bold text-white shadow-[0_4px_16px_rgba(7,148,71,0.4)]">
                    {i + 1}
                  </div>
                  <div className="rounded-[20px] border border-line bg-white p-6 shadow-[0_8px_32px_rgba(6,48,27,0.04)] flex-1 transition hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(6,48,27,0.1)]">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#079447]">Step {step.num}</p>
                    <h3 className="mt-1 text-lg font-semibold text-ink-950">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-fg-subtle">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. WHY CHOOSE ───────────────────────────────────────────── */}
        <section className="w-full bg-[#f1f2ea] py-16">
          <div className="shell">
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-[#079447]">Why Ooplab</p>
            <h2 className="mt-3 text-3xl font-bold text-ink-950">The Ooplab Advantage</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {strengths.map((s) => (
                <div key={s.title} className="rounded-[24px] border border-white/90 bg-white p-7 shadow-[0_8px_32px_rgba(6,48,27,0.04)] transition hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(6,48,27,0.12)]">
                  <i className={`bi ${s.icon} text-3xl text-[#079447]`} aria-hidden />
                  <h3 className="mt-4 text-lg font-semibold text-ink-950">{s.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-fg-subtle">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. TECH STACK ───────────────────────────────────────────── */}
        <section className="mx-auto w-full max-w-[1120px] py-20">
          <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-[#079447]">Tech Stack</p>
          <h2 className="mt-3 text-3xl font-bold text-ink-950">Built with the Best</h2>
          <div className="mt-10 flex flex-wrap gap-4">
            {techStack.map((t) => (
              <div
                key={t.label}
                className="flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 shadow-sm transition hover:border-[#079447]/50 hover:shadow-md"
              >
                <i className={`bi ${t.icon} text-[#079447]`} />
                <span className="text-sm font-medium text-ink-700">{t.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── 9. INDUSTRIES ───────────────────────────────────────────── */}
        <section className="band-ink-soft on-ink section">
          <div className="shell">
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-on-ink-muted">Industries</p>
            <h2 className="mt-3 text-3xl font-bold text-white">We Build Across Sectors</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((ind) => (
                <div key={ind.label} className="flex items-center gap-4 rounded-[20px] border border-white/10 bg-white/5 p-5 transition hover:border-[#079447]/60 hover:bg-white/10">
                  <i className={`bi ${ind.icon} text-2xl text-brand-200`} aria-hidden />
                  <span className="text-base font-semibold text-white">{ind.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 10. VALUES ──────────────────────────────────────────────── */}
        <section className="mx-auto w-full max-w-[1120px] py-20">
          <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-[#079447]">Core Values</p>
          <h2 className="mt-3 text-3xl font-bold text-ink-950">What Drives Us</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-[24px] border border-line bg-white p-7 shadow-[0_8px_32px_rgba(6,48,27,0.04)] transition hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(6,48,27,0.12)]">
                <i className={`bi ${v.icon} text-3xl text-[#079447]`} aria-hidden />
                <h3 className="mt-4 text-base font-semibold text-ink-950">{v.title}</h3>
                <p className="mt-2 text-sm leading-6 text-fg-subtle">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 11. TESTIMONIALS ────────────────────────────────────────── */}
        <section className="mx-auto w-full max-w-[1120px] pb-20 pt-4">
          <Reviews reviews={reviews} />
        </section>

        {/* ── 12. FINAL CTA ───────────────────────────────────────────── */}


        <Footer />
      </div>
    </main>
  );
}
