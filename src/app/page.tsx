"use client";

import { useRef } from "react";
import Footer from "./components/footer";
import Header from "./components/header";

const services = [
  {
    title: "Web Application Development",
    description:
      "Modern web experiences built for performance, accessibility, and rapid growth.",
    accent: "#dbeafe",
    icon: "🖥️",
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform apps designed to delight users on every device.",
    accent: "#d1fae5",
    icon: "📱",
  },
  {
    title: "AI Integrations",
    description:
      "Intelligent automations and data-driven features that scale with your business.",
    accent: "#ede9fe",
    icon: "🤖",
  },
  {
    title: "UI/UX Design",
    description:
      "Thoughtful interfaces and experiences that make your product feel premium.",
    accent: "#fee2e2",
    icon: "🎨",
  },
  {
    title: "Cloud Solutions",
    description:
      "Secure cloud architectures and infrastructure that support enterprise growth.",
    accent: "#cffafe",
    icon: "☁️",
  },
  {
    title: "Enterprise Systems",
    description:
      "Robust backend platforms crafted for reliability, security, and scale.",
    accent: "#fef3c7",
    icon: "⚙️",
  },
];

const caseStudies = [
  {
    title: "Healthcare SaaS Platform",
    category: "Product Design",
    metric: "+42% faster onboarding",
    description:
      "A patient-first platform that streamlined onboarding, appointment flows, and analytics for a fast-growing care network.",
    tags: ["AI workflows", "HIPAA-ready", "Analytics"],
    accent: "from-[#2f6ae9] via-[#4d92ff] to-[#8dd5ff]",
  },
  {
    title: "Fintech Mobile App",
    category: "Mobile Experience",
    metric: "+28% weekly retention",
    description:
      "A secure, delightfully intuitive banking experience with real-time insights and frictionless account management.",
    tags: ["Secure UX", "Realtime", "Growth"],
    accent: "from-[#183153] via-[#2657b7] to-[#5ea3ff]",
  },
  {
    title: "Healthcare SaaS Platform",
    category: "Product Design",
    metric: "+42% faster onboarding",
    description:
      "A patient-first platform that streamlined onboarding, appointment flows, and analytics for a fast-growing care network.",
    tags: ["AI workflows", "HIPAA-ready", "Analytics"],
    accent: "from-[#2f6ae9] via-[#4d92ff] to-[#8dd5ff]",
  },
  {
    title: "Fintech Mobile App",
    category: "Mobile Experience",
    metric: "+28% weekly retention",
    description:
      "A secure, delightfully intuitive banking experience with real-time insights and frictionless account management.",
    tags: ["Secure UX", "Realtime", "Growth"],
    accent: "from-[#183153] via-[#2657b7] to-[#5ea3ff]",
  },
];

const testimonials = [1, 2, 3];

export default function Landing() {
  const caseStudiesRef = useRef<HTMLDivElement>(null);

  const scrollCaseStudies = (direction: "left" | "right") => {
    if (!caseStudiesRef.current) return;

    const card = caseStudiesRef.current.querySelector("article");
    const cardWidth = card?.getBoundingClientRect().width ?? 320;
    const gap = 24;

    caseStudiesRef.current.scrollBy({
      left: direction === "left" ? -(cardWidth + gap) : cardWidth + gap,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5fbff] text-[#0f172a]">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-7 sm:px-8 lg:px-20 lg:py-12">
        <Header />

        <section className="mx-auto grid min-h-[620px] w-full max-w-[1120px] gap-12 pt-10 sm:min-h-0 sm:pt-20 lg:grid-cols-[1fr_420px] lg:gap-16 lg:pt-24">
          <div className="max-w-[670px]">
            <h1 className="text-[42px] font-extrabold leading-[1.08] tracking-[0] text-[#0b1220] sm:hidden">
              Scalable Digital Solutions
            </h1>
            <h1 className="hidden max-w-[700px] text-[52px] font-extrabold leading-[1.08] tracking-[0] text-[#0b1220] sm:block lg:text-[54px]">
              Building Scalable Digital Solutions for Modern Businesses
            </h1>
            <p className="mt-4 max-w-[620px] text-base leading-6 text-[#5f6b7a] sm:text-lg">
              We design and develop premium web applications, mobile apps, and
              enterprise technical solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                className="inline-flex h-11 items-center justify-center rounded-md bg-[#2f6ae9] px-6 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(47,106,233,0.2)] transition hover:bg-[#255bd3] sm:h-11"
                href="#contact"
              >
                <span className="sm:hidden">Get Started</span>
                <span className="hidden sm:inline">Book Consultation</span>
              </a>
              <a
                className="hidden h-11 bg-[] items-center justify-center rounded-md border border-[#cdd8e7] bg-white px-6 text-sm font-semibold text-[#245188] transition hover:border-[#2f6ae9] hover:text-[#2f6ae9] sm:inline-flex"
                href="#case-studies"
              >
                View Case Study
              </a>
            </div>
          </div>

          <div className="hidden max-w-[420px] rounded-[28px] bg-white p-8 shadow-[0_24px_70px_rgba(15,23,42,0.04)] sm:p-9 lg:mt-2 lg:block">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7c93c5]">
                  Ooplab
                </p>
                <h2 className="mt-3 text-2xl font-bold text-[#0b1220]">
                  Enterprise analytics
                </h2>
              </div>
              <span className="inline-flex h-11 items-center rounded-full bg-[#eef4ff] px-4 text-sm font-semibold text-[#2f6ae9]">
                Live
              </span>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[20px] bg-[#f0f6ff] p-4">
                <p className="text-sm font-medium text-[#475569]">Revenue</p>
                <p className="mt-3 text-xl font-bold text-[#0f172a]">₹82K</p>
              </div>
              <div className="rounded-[20px] bg-[#f0f6ff] p-4">
                <p className="text-sm font-medium text-[#475569]">Users</p>
                <p className="mt-3 text-xl font-bold text-[#0f172a]">1.2K</p>
              </div>
              <div className="rounded-[20px] bg-[#f0f6ff] p-4">
                <p className="text-sm font-medium text-[#475569]">Projects</p>
                <p className="mt-3 text-xl font-bold text-[#0f172a]">48</p>
              </div>
            </div>

            <div className="mt-8 rounded-[28px] border border-[#e2e8f0] bg-[#f8fbff] p-5">
              <p className="text-sm font-medium text-[#475569]">Revenue Graph</p>
              <div className="mt-4 h-32 rounded-[22px] bg-gradient-to-r from-[#dbeafe] via-[#bfdbfe] to-[#93c5fd] shadow-inner" />
            </div>

            <div className="mt-8 grid gap-4">
              <div className="grid grid-cols-[1fr_auto] gap-4 rounded-[22px] bg-[#f8fbff] p-5">
                <div>
                  <p className="text-sm font-semibold text-[#0f172a]">Activity</p>
                  <p className="mt-3 text-sm text-[#475569]">New lead and payment updates</p>
                </div>
                <div className="flex flex-col gap-2 text-right">
                  <span className="rounded-full bg-[#dbeafe] px-3 py-1 text-[11px] font-semibold text-[#1d4ed8]">New Lead</span>
                  <span className="rounded-full bg-[#dbeafe] px-3 py-1 text-[11px] font-semibold text-[#1d4ed8]">Payment</span>
                </div>
              </div>

              <div className="rounded-[22px] bg-[#f8fbff] p-5">
                <p className="text-sm font-semibold text-[#0f172a]">Team Performance</p>
                <div className="mt-4 space-y-3">
                  <div>
                    <div className="mb-2 flex items-center justify-between text-xs font-medium text-[#475569]">
                      <span>Sales</span>
                      <span>85%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-[#e2e8f0]">
                      <div className="h-full w-[85%] rounded-full bg-[#2f6ae9]" />
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 flex items-center justify-between text-xs font-medium text-[#475569]">
                      <span>Growth</span>
                      <span>72%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-[#e2e8f0]">
                      <div className="h-full w-[72%] rounded-full bg-[#60a5fa]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1120px] pt-28 sm:pt-36" id="services">
          <div className="relative overflow-hidden rounded-[32px] bg-[#eef8ff] px-5 py-8 shadow-[0_20px_80px_rgba(47,106,233,0.07)] sm:px-8 sm:py-10">
            <div className="pointer-events-none absolute -right-16 top-8 h-44 w-44 rounded-full bg-[#c7e7ff] opacity-70 blur-3xl" />
            <div className="pointer-events-none absolute left-0 top-24 h-64 w-64 rounded-full bg-[#f5f3ff] opacity-80 blur-3xl" />
            <div className="pointer-events-none absolute bottom-4 right-10 h-52 w-52 rounded-full bg-[#dff6f7] opacity-75 blur-3xl" />

            <SectionHeader
              title="Our Services"
              eyebrow="Modern technical solutions tailored for startups and enterprises."
            />

            <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  className="group relative overflow-hidden rounded-[28px] border border-white/90 bg-white/95 p-7 shadow-[0_18px_48px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(47,106,233,0.16)] hover:bg-gradient-to-r from-[#fb2c36] to-[#8b1a23]"
                  key={service.title}
                >
                  <div
                    className="absolute -right-10 -top-10 h-36 w-36 rounded-full opacity-30 blur-3xl"
                    style={{ backgroundColor: service.accent }}
                  />
                  <div className="relative z-10 flex items-center justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-3xl border border-[#dbeafe] bg-[#eff6ff] text-2xl shadow-sm">
                      {service.icon}
                    </div>
                    <span className="rounded-full border border-[#e2e8f0] bg-[#f8fafc] px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#2563eb]">
                      Featured
                    </span>
                  </div>

                  <div className="relative z-10 mt-6">
                    <h3 className="text-xl font-semibold leading-[1.2] text-[#0f172a] transition duration-300 group-hover:text-white">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-[#475569] transition duration-300 group-hover:text-white">
                      {service.description}
                    </p>
                  </div>

                  <div className="relative z-10 mt-8 flex items-center justify-between gap-3">
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <a
                href="/services"
                className="inline-flex items-center gap-2 rounded-full bg-[#2f6ae9] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(47,106,233,0.28)] transition hover:bg-[#255bd3]"
              >
                Click here to explore more
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 5L16 12L9 19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1120px] pt-36 sm:pt-44" id="case-studies">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeader
              title="Case Studies"
              eyebrow="Selected projects and digital transformations."
            />

            <div className="flex items-center gap-2">
              <button
                aria-label="Scroll case studies left"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#dceafe] bg-white text-[#245188] shadow-sm transition hover:border-[#2f6ae9] hover:text-[#2f6ae9]"
                onClick={() => scrollCaseStudies("left")}
                type="button"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
              <button
                aria-label="Scroll case studies right"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#dceafe] bg-white text-[#245188] shadow-sm transition hover:border-[#2f6ae9] hover:text-[#2f6ae9]"
                onClick={() => scrollCaseStudies("right")}
                type="button"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6L15 12L9 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
            </div>
          </div>

          <div
            className="mt-8 flex gap-6 overflow-x-auto pb-3 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            ref={caseStudiesRef}
          >
            <div className="flex min-w-max gap-6">
              {caseStudies.map((study) => (
                <article
                  className="case-study-card group relative flex min-h-[320px] w-[85vw] max-w-[360px] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-[24px] border border-[#dceafe] bg-white/90 p-7 shadow-[0_18px_48px_rgba(15,23,42,0.025)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(47,106,233,0.16)] sm:w-[320px]"
                  key={study.title}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${study.accent} opacity-0 transition duration-300 group-hover:opacity-100`}
                  />
                  <div className="absolute right-5 top-5 h-20 w-20 rounded-full bg-white/20 blur-2xl transition duration-300 group-hover:scale-125" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-4">
                      <span className="rounded-full border border-white/40 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2f6ae9] transition group-hover:border-white/70 group-hover:bg-white/15 group-hover:text-white">
                        {study.category}
                      </span>
                      <span className="text-sm font-semibold text-[#245188] transition group-hover:text-white">
                        {study.metric}
                      </span>
                    </div>

                    <div className="mt-6 rounded-[18px] border border-white/60 bg-white/70 p-4 backdrop-blur-sm transition group-hover:border-white/80 group-hover:bg-white/20">
                      <div className="flex items-end gap-3">
                        <div className="h-12 w-20 rounded-xl bg-[#2f6ae9]" />
                        <div className="flex-1 space-y-2">
                          <div className="h-2 rounded-full bg-[#cfe0ff]" />
                          <div className="h-2 w-4/5 rounded-full bg-[#dceafe]" />
                        </div>
                      </div>
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-[#101828] transition duration-300 group-hover:text-white">
                      {study.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-6 text-[#667085] transition duration-300 group-hover:text-white/90">
                      {study.description}
                    </p>
                  </div>

                  <div className="relative z-10 mt-6 flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        className="rounded-full border border-[#dceafe] bg-white/80 px-3 py-1 text-[12px] font-medium text-[#2563c9] transition group-hover:border-white/50 group-hover:bg-white/15 group-hover:text-white"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="mx-auto w-full max-w-[1120px] pt-32 sm:pt-40"
          id="testimonials"
        >
          <SectionHeader
            title="Client Testimonials"
            eyebrow="What our clients say about our services."
          />

          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {testimonials.map((item) => (
              <figure
                className="min-h-[174px] rounded-[12px] bg-white p-7 shadow-[0_18px_48px_rgba(15,23,42,0.025)]"
                key={item}
              >
                <blockquote className="text-sm font-medium leading-6 text-[#172033]">
                  &quot;Outstanding execution and communication&quot;
                </blockquote>
                <figcaption className="mt-14 text-sm font-semibold text-[#2563c9]">
                  &mdash; Enterprise Client
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}

function SectionHeader({
  eyebrow,
  title,
}: Readonly<{
  eyebrow: string;
  title: string;
}>) {
  return (
    <div>
      <h2 className="text-[32px] font-bold leading-tight tracking-[0] text-[#0b1220] sm:text-[38px]">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-[#667085] sm:text-base">{eyebrow}</p>
    </div>
  );
}
