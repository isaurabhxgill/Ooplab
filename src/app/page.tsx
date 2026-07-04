import Footer from "./components/footer";
import Header from "./components/header";

const services = [
  "Web Application Development",
  "Mobile App Development",
  "AI Integrations",
  "UI/UX Design",
  "Cloud Solutions",
  "Enterprise Systems",
];

const caseStudies = ["Healthcare SaaS Platform", "Fintech Mobile App"];

const testimonials = [1, 2, 3];

export default function Landing() {
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
                className="hidden h-11 items-center justify-center rounded-md border border-[#cdd8e7] bg-white px-6 text-sm font-semibold text-[#245188] transition hover:border-[#2f6ae9] hover:text-[#2f6ae9] sm:inline-flex"
                href="#case-studies"
              >
                View Case Study
              </a>
            </div>
          </div>

          <div className="hidden rounded-[28px] bg-white p-8 shadow-[0_24px_70px_rgba(15,23,42,0.04)] sm:p-9 lg:mt-2 lg:block">
            <p className="text-xl font-bold text-[#0b1220]">Enterprise Dashboard UI</p>
            <div className="mt-9 space-y-6">
              <div className="h-12 rounded-lg bg-[#2f6ae9]" />
              <div className="h-12 rounded-lg bg-[#e9f0f8]" />
              <div className="h-12 rounded-lg bg-[#e9f0f8]" />
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1120px] pt-28 sm:pt-36" id="services">
          <SectionHeader
            title="Our Services"
            eyebrow="Modern technical solutions tailored for startups and enterprises."
          />

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                className="min-h-[176px] rounded-[12px] bg-white p-7 shadow-[0_18px_48px_rgba(15,23,42,0.025)]"
                key={service}
              >
                <h3 className="max-w-[230px] text-xl font-bold leading-[1.16] text-[#101828]">
                  {service}
                </h3>
                <p className="mt-7 max-w-[250px] text-[13px] leading-5 text-[#667085]">
                  Premium scalable solutions built with modern technologies and
                  optimized UX.
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1120px] pt-36 sm:pt-44 " id="case-studies ">
          <SectionHeader
            title="Case Studies"
            eyebrow="Selected projects and digital transformations."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {caseStudies.map((study) => (
              <article
                className="rounded-[12px] bg-white p-7 shadow-[0_18px_48px_rgba(15,23,42,0.025)]"
                key={study}
              >
                <div className="h-32 rounded-[12px] bg-[#dceafe] sm:h-40" />
                <h3 className="mt-7 text-xl font-bold text-[#101828]">{study}</h3>
                <p className="mt-4 text-[13px] leading-5 text-[#667085]">
                  Improved business growth and customer engagement through
                  scalable architecture.
                </p>
              </article>
            ))}
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
