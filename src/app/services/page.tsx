"use client"
import Footer from "../components/footer";
import Header from "../components/header";
import Image from "next/image";
import "../globals.css";
import {useRef} from "react";
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
const services = [
  {
    title: "Digital Product Strategy",
    description:
      "From discovery to launch, we build product roadmaps that align market needs with long-term growth.",
    accent: "from-[#c7e7ff] via-[#eff6ff] to-[#f8fbff]",
  },
  {
    title: "UI/UX Design & Prototyping",
    description:
      "We design delightful interfaces and prototypes to validate ideas quickly and confidently.",
    accent: "from-[#e9d5ff] via-[#f7f1ff] to-[#eef8ff]",
  },
  {
    title: "Web & Mobile Engineering",
    description:
      "Building polished web and mobile experiences with modern stacks, performance and reliability in mind.",
    accent: "from-[#cffafe] via-[#eff6ff] to-[#f8fbff]",
  },
  {
    title: "Cloud Architecture",
    description:
      "Secure, scalable cloud platforms designed for automation, uptime, and seamless integration.",
    accent: "from-[#fef3c7] via-[#fff7cd] to-[#f8fbff]",
  },
  {
    title: "AI & Data Intelligence",
    description:
      "We deliver intelligent insights, automation, and predictive experiences powered by data.",
    accent: "from-[#dbeafe] via-[#e0f2fe] to-[#eff6ff]",
  },
  {
    title: "Enterprise Systems",
    description:
      "Robust backend platforms and integrations built to support complex teams and evolving workflows.",
    accent: "from-[#fee2e2] via-[#fff1f2] to-[#f8fbff]",
  },
];

const experts = [
  {
    name: "Rohan Kumar",
    role: "CEO & Founder",
    summary:
      "Guides product vision with an emphasis on usability, speed, and business impact.",
    accent: "bg-[#ede9fe]",
    image: "/Assest/Rohan.jpg",
    linkedin: "https://www.linkedin.com/in/rohan-kumar7/",
  },
  {
    name: "Saurabh Kumar",
    role: "CEO & Founder",
    summary:
      "Builds scalable systems and keeps development aligned to performance and reliability.",
    accent: "bg-[#cffafe]",
      image: "/Assest/saurabh.jpg",
    linkedin: "https://www.linkedin.com/in/saurabh-kumar-476606292/",
  },

];

export default function ServicesPage() {
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
// const process = [
//   {
//     step: "01",
//     title: "Discover",
//     description:
//       "We understand your business goals, users, competitors, and project vision before writing a single line of code.",
//   },
//   {
//     step: "02",
//     title: "Strategy",
//     description:
//       "Our team prepares product roadmaps, technical architecture, feature planning, and execution strategy.",
//   },
//   {
//     step: "03",
//     title: "Design",
//     description:
//       "Creating intuitive UI/UX, wireframes, interactive prototypes, and design systems focused on user experience.",
//   },
//   {
//     step: "04",
//     title: "Develop",
//     description:
//       "Building scalable web and mobile applications using modern technologies with clean, maintainable code.",
//   },
//   {
//     step: "05",
//     title: "Test",
//     description:
//       "Rigorous quality assurance, security testing, accessibility checks, and performance optimization.",
//   },
//   {
//     step: "06",
//     title: "Launch",
//     description:
//       "Deployment, monitoring, analytics setup, and production optimization for a smooth release.",
//   },
//   {
//     step: "07",
//     title: "Support",
//     description:
//       "Continuous improvements, feature updates, maintenance, and long-term technical partnership.",
//   },
// ];
  return (
    <main className="min-h-screen bg-[#f5fbff] text-[#0f172a]">
      <div className="mx-auto w-full max-w-[1440px]">
        <Header />

        <section className="mt-7 rounded-[32px] bg-white/95 px-6 py-10 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:px-10 sm:py-12">
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#eef7ff] via-[#f8fcff] to-[#ffffff] px-6 py-10 sm:px-10 sm:py-14">
            <div className="pointer-events-none absolute -right-16 top-4 h-40 w-40 rounded-full bg-[#c7e7ff] blur-3xl opacity-50" />
            <div className="pointer-events-none absolute left-0 top-24 h-56 w-56 rounded-full bg-[#dff6f7] blur-3xl opacity-50" />
            <div className="relative z-10 mx-auto max-w-[900px] text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7c93c5]">
                End-to-end services
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-[-0.03em] text-[#0b1220] sm:text-5xl">
                Services and solutions for the full digital journey.
              </h1>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#475569] sm:text-lg">
                Ooplab helps you move from idea to product, with strategy, design, engineering, cloud, and AI support.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-[28px] border border-[#e5e7eb] bg-white p-6 shadow-[0_18px_48px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(47,106,233,0.14)]"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-40 bg-gradient-to-br ${service.accent} opacity-80 blur-3xl`} 
                  style={{ clipPath: 'circle(60% at 80% -10%)' }}
                />
                <div className="relative z-10">
                  <h2 className="text-xl font-semibold text-[#0b1220]">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-[#475569]">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

        {/* <section className="relative overflow-hidden py-28">

 
  <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

  <div className="relative z-10">

    <div className="text-center">
      <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Our Process
      </span>

      <h2 className="mt-6 text-5xl font-bold text-[#0b1220]">
        From Idea to Launch
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#475569]">
        Every successful product begins with a clear strategy. We combine
        design thinking, engineering excellence, and agile execution to build
        products users love.
      </p>
    </div>

  
    <div className="relative mt-24">
     
      <svg viewBox="0 0 1200 200" className="hidden lg:block absolute left-0 right-0 mx-auto w-full h-48 overflow-visible z-0">
        <path d="M50 140 C300 10, 900 10, 1150 140" stroke="rgba(34,211,238,0.18)" strokeWidth="12" fill="none" strokeLinecap="round" />
        <path d="M50 140 C300 10, 900 10, 1150 140" stroke="rgba(34,211,238,0.1)" strokeWidth="4" fill="none" strokeLinecap="round" />
      </svg>

      <div className="relative mt-10 lg:mt-24">
       
        <div className="hidden lg:block relative h-56 z-20">
          {process.map((item, idx) => {
            const leftPct = (idx / (process.length - 1)) * 100;
            return (
              <div key={item.step} style={{ left: `${leftPct}%` }} className="absolute top-0 w-1/3 -translate-x-1/2 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300 bg-gradient-to-br from-[#0f1724] to-[#071022] shadow-[0_10px_30px_rgba(34,211,238,0.12)]">
                  <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-xl font-bold text-transparent">
                    {item.step}
                  </span>
                </div>
                <div className="mt-6 mx-auto max-w-[300px] rounded-[20px] bg-white p-5 shadow-lg">
                  <h4 className="text-lg font-semibold text-[#0b1220]">{item.title}</h4>
                  <p className="mt-2 text-sm text-[#475569]">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        
        <div className="lg:hidden mt-6 space-y-6">
          {process.map((item) => (
            <div key={item.step} className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300 bg-gradient-to-br from-[#0f1724] to-[#071022] text-white">
                {item.step}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#0b1220]">{item.title}</h4>
                <p className="mt-2 text-sm text-[#475569]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  </div>

</section> */}

          <section className="mt-14 rounded-[32px] bg-[#eef8ff] px-6 py-10 shadow-[0_18px_60px_rgba(47,106,233,0.08)] sm:px-10 sm:py-12">
            <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7c93c5]">
                  Ooplab experts
                </p>
                <h2 className="mt-4 text-3xl font-bold text-[#0b1220] sm:text-4xl">
                  Professionals delivering product-led outcomes.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-[#475569] sm:text-base">
                Our experienced team blends product strategy, engineering excellence, and design craft for every engagement.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {experts.map((expert) => (
                <article
                  key={expert.name}
                  className={`${expert.accent} rounded-[28px] p-6 shadow-[0_18px_48px_rgba(15,23,42,0.06)]`}
                >
                  <div className="flex items-start gap-4">
                    <div className="relative h-20 w-20 shrink-0 rounded-full border-4 border-white bg-white shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                      <Image
                        src={expert.image}
                        alt={`${expert.name} avatar`}
                        width={80}
                        height={80}
                        className="h-full w-full rounded-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#4338ca]">
                        Expert
                      </p>
                      <h3 className="mt-2 text-2xl font-bold text-[#0b1220]">
                        {expert.name}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-[#475569]">
                        {expert.role}
                      </p>
                    </div>
                  </div>
                  <p className="mt-6 text-sm leading-6 text-[#475569]">
                    {expert.summary}
                  </p>
                  <a
                    href={expert.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#c7d2fe] bg-white/90 px-4 py-2 text-sm font-semibold text-[#1d4ed8] transition hover:bg-[#eff6ff] hover:text-[#1e40af]"
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6C1.12 6 0 4.88 0 3.5C0 2.12 1.12 1 2.5 1C3.88 1 4.98 2.12 4.98 3.5ZM0 8.25H5V24H0V8.25ZM7.5 8.25H12.3V10.3H12.36C12.99 9.16 14.5 7.88 17.05 7.88C21.68 7.88 24 10.82 24 15.02V24H18.07V15.94C18.07 13.96 17.97 11.57 15.16 11.57C12.24 11.57 11.63 13.69 11.63 15.78V24H5.7V8.25H7.5Z"
                        fill="currentColor"
                      />
                    </svg>
                    Connect on LinkedIn
                  </a>
                </article>
              ))}
            </div>
          </section>
        </section>
          <section
          className="mx-auto w-full max-w-[1120px] pt-24"
          id="case-studies"
        >
          <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
          <p className="text-[32px] uppercase tracking-[0.24em] text-Black">Case Studies</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950">Selected projects and digital transformations.</h2>
        </div>
      

            <div className="flex items-center gap-2">
              <button
                aria-label="Scroll case studies left"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#dceafe] bg-white text-[#245188] shadow-sm transition hover:border-[#2f6ae9] hover:text-[#2f6ae9]"
                onClick={() => scrollCaseStudies("left")}
                type="button"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
              <button
                aria-label="Scroll case studies right"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#dceafe] bg-white text-[#245188] shadow-sm transition hover:border-[#2f6ae9] hover:text-[#2f6ae9]"
                onClick={() => scrollCaseStudies("right")}
                type="button"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 6L15 12L9 18"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
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

                    {/* <div className="mt-6 rounded-[18px] border border-white/60 bg-white/70 p-4 backdrop-blur-sm transition group-hover:border-white/80 group-hover:bg-white/20">
                      <div className="flex items-end gap-3">
                        <div className="h-12 w-20 rounded-xl bg-[#2f6ae9]" />
                        <div className="flex-1 space-y-2">
                          <div className="h-2 rounded-full bg-[#cfe0ff]" />
                          <div className="h-2 w-4/5 rounded-full bg-[#dceafe]" />
                        </div>
                      </div>
                    </div> */}

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

        <Footer />
      </div>
    </main>
  );
}
