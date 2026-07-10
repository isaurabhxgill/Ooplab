"use client";

import Image from "next/image";
import "./globals.css";
import { useEffect, useRef } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import CustomerStories from "./components/customer-stories";
import Reviews from "./components/reviews";
import Article from "./components/article";
import Blog from "./components/blog";
import ProductList from "./components/product-list";
import { products } from "./products/data";
import { reviews } from "./data/reviews";
import { articles } from "./data/articles";
import { blogPosts } from "./data/blog";

const customerStories = [
  {
    title: "Fleet Safety Simplified",
    subtitle: "Trusted by vehicle operators",
    quote:
      "CarzPark made parking communication seamless and entirely private for our drivers.",
    company: "RideSafe Fleet",
    image: "/Assest/cp-2.png",
  },
  {
    title: "Zero Contact Hassle",
    subtitle: "Smart, secure, instant reachability",
    quote:
      "Our users love not sharing phone numbers while staying reachable in emergencies.",
    company: "CityPark Solutions",
    image: "/Assest/cp-3.png",
  },
];


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



export default function Landing() {

  useEffect(() => {
    document.addEventListener("mousemove", () => {
      console.log("mouse moving");
    });
  }, []);
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5fbff] text-[#0f172a]">
      <div className="mx-auto w-full max-w-[1440px]">
        <Header />

        <section className="relative mx-auto flex justify-center min-h-[620px] w-full gap-12 pt-10 pb-10 sm:min-h-0 sm:pt-20 lg:grid-cols-[1fr_420px] lg:gap-16 lg:pt-24">
          <video
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/Assest/hero-2" type="video/mp4" />
          </video>
          <div className="pointer-events-none absolute inset-0 bg-slate-950/45" />

          <div className="relative z-10 max-w-[670px] text-white">
            <h1 className="text-[42px] font-extrabold leading-[1.08] tracking-[0] sm:hidden">
              Scalable Digital Solutions
            </h1>
            <h1 className="hidden max-w-[700px] text-[52px] font-extrabold leading-[1.08] tracking-[0] sm:block lg:text-[54px]">
              Building Scalable Digital Solutions for Modern Businesses
            </h1>
            <p className="mt-4 max-w-[620px] text-base leading-6 text-slate-200 sm:text-lg">
              We build high-performance web applications, AI-powered products,
              and enterprise software that help startups launch faster and
              businesses scale confidently.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                className="inline-flex h-11 items-center justify-center rounded-md bg-[#2f6ae9] px-6 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(47,106,233,0.2)] transition hover:bg-[#255bd3] sm:h-11"
                href="#contact"
              >
                <span className="sm:hidden">Get Started</span>
                <span className="hidden sm:inline">Book Consultation</span>
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1120px] pt-6" id="services">
          <div className="relative overflow-hidden rounded-[32px] bg-[#eef8ff] px-5 py-8 shadow-[0_20px_80px_rgba(47,106,233,0.07)] sm:px-8 sm:py-10">
            <div className="pointer-events-none absolute -right-16 top-8 h-44 w-44 rounded-full bg-[#c7e7ff] opacity-70 blur-3xl" />
            <div className="pointer-events-none absolute left-0 top-24 h-64 w-64 rounded-full bg-[#f5f3ff] opacity-80 blur-3xl" />
            <div className="pointer-events-none absolute bottom-4 right-10 h-52 w-52 rounded-full bg-[#dff6f7] opacity-75 blur-3xl" />
            <div>
              <p className="text-[32px] uppercase tracking-[0.24em] text-Black">Our Services</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950">Modern technical solutions tailored for startups and enterprises.</h2>
            </div>


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

                  <div className="relative z-10 mt-8 flex items-center justify-between gap-3"></div>
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
                  <path
                    d="M9 5L16 12L9 19"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full pt-6 " id="products">
          <div className="overflow-hidden bg-slate-950 px-6 py-10 text-white shadow-[0_25px_90px_rgba(15,23,42,0.18)] sm:px-10 sm:py-14">
            <div className="lg:items-center px-10">
              <div>
                <ProductList products={products} />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1120px] pt-24" id="articles">
          <Article articles={articles} />
        </section>

        <section className="mx-auto w-full max-w-[1120px] pt-24" id="blog">
          <Blog posts={blogPosts} />
        </section>

        <section className="mx-auto w-full max-w-[1120px] pt-24" id="stories">
          <CustomerStories stories={customerStories} />
        </section>



        <section
          className="mx-auto w-full max-w-[1120px] pt-32 sm:pt-40"
          id="testimonials"
        >
          <Reviews reviews={reviews} />
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
      <h2 className="text-[32px] text-white font-bold leading-tight tracking-[0] text-[#0b1220] sm:text-[38px]">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-[#667085] sm:text-base">
        {eyebrow}
      </p>
    </div>
  );
}
