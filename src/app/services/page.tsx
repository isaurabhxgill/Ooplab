import Footer from "../components/footer";
import Header from "../components/header";

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
    name: "Priya Sharma",
    role: "Head of Product",
    summary:
      "Guides product vision with an emphasis on usability, speed, and business impact.",
    accent: "bg-[#ede9fe]",
  },
  {
    name: "Rahul Mehta",
    role: "Lead Engineer",
    summary:
      "Builds scalable systems and keeps development aligned to performance and reliability.",
    accent: "bg-[#cffafe]",
  },
  {
    name: "Sneha Kapoor",
    role: "Design Director",
    summary:
      "Crafts visual systems and experiences that feel polished, approachable, and memorable.",
    accent: "bg-[#fce7f3]",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f5fbff] text-[#0f172a]">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-7 sm:px-8 lg:px-20 lg:py-12">
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
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#4338ca]">
                    Expert
                  </p>
                  <h3 className="mt-4 text-2xl font-bold text-[#0b1220]">
                    {expert.name}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-[#475569]">
                    {expert.role}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-[#475569]">
                    {expert.summary}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </section>

        <Footer />
      </div>
    </main>
  );
}
