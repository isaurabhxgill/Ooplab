"use client";

import Image from "next/image";
import { useState } from "react";
import "../globals.css";

export default function Footer() {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setStatus("submitting");

    // Simulate submission delay
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 800);
  };

  return (
    <footer>
      {/* CTA Banner */}
      <section
        className="mx-auto w-full max-w-[1120px] px-4 py-6 sm:px-6 sm:py-10"
        id="contact"
      >
        <div className="relative overflow-hidden rounded-[28px] bg-[#079447] px-6 py-10 text-white brand-gradient sm:px-14 sm:py-16">
          {/* Glow */}
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-black/20 blur-3xl" />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="max-w-3xl text-[28px] font-bold leading-tight sm:text-[34px] lg:text-[44px]">
              Let&apos;s Build Your Next Big Product
            </h2>
            <a
              href="/contact"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-xl bg-white px-8 text-sm font-semibold text-[#111827] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Links Grid — responsive: 1 col mobile, 2 col tablet, 3 col desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Logo + tagline */}
        <div className="p-6">
          <a aria-label="Ooplab home" href="/">
            <Image
              src="/Assest/Ologo.png"
              alt="Ooplab Logo"
              width={250}
              height={250}
              style={{ width: "auto", height: "auto", maxHeight: "95px" }}
            />
          </a>
          <p className="mt-4 max-w-[260px] text-sm leading-6 font-medium text-neutral-600">
            Building Scalable Digital Solutions for Modern Businesses
          </p>
        </div>

        {/* Company links */}
        <div className=" p-6">
          <h3 className="mb-5 text-lg font-semibold sm:text-xl">Company</h3>
          <ul className="space-y-3 text-sm text-neutral-600">
            <li><a href="/about" className="text-brand-hover">About Us</a></li>
            <li><a href="/services#team" className="text-brand-hover">Our Team</a></li>
            <li><a href="/contact" className="text-brand-hover">Contact</a></li>
            <li><a href="/services" className="text-brand-hover">Services</a></li>
            <li><a href="/privacy" className="text-brand-hover">Privacy Policy</a></li>
            <li><a href="/privacy" className="text-brand-hover">Terms</a></li>
            <li><a href="/privacy" className="text-brand-hover">FAQ</a></li>
          </ul>
        </div>

        {/* Discover + Social */}
        <div className="p-6 sm:col-span-2 lg:col-span-1">
          <h3 className="text-lg font-semibold sm:text-xl">Discover More</h3>
          <p className="mt-4 text-sm leading-7 text-neutral-600">
            Keeping you informed
          </p>

          {/* Interactive subscription flow */}
          {status === "success" ? (
            <p className="mt-3 text-sm font-semibold text-green-700">
              ✓ You&apos;re subscribed! We&apos;ll keep you updated.
            </p>
          ) : !showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="mt-3 inline-flex h-11 items-center justify-center rounded-xl brand-bg brand-hover px-7 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
            >
              Subscribe
            </button>
          ) : (
            <form onSubmit={handleSubscribe} className="mt-3 space-y-2">
              <label htmlFor="newsletter-email" className="block text-xs font-semibold text-neutral-600">
                Enter your email address
              </label>
              <div className="flex gap-2 max-w-sm">
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 min-w-0 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#079447] focus:border-transparent"
                />
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex h-10 items-center justify-center rounded-xl brand-bg brand-hover px-4 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 disabled:opacity-50"
                >
                  {status === "submitting" ? "..." : "Subscribe"}
                </button>
              </div>
            </form>
          )}

          <div className="mt-6">
            <h4 className="mb-3 text-sm font-semibold">Follow Us</h4>
            <div className="flex flex-wrap gap-3 social-icons">
              <a
                className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 transition hover:border-[#079447] hover:text-[#079447]"
                href="https://www.linkedin.com/company/cgi/"
                title="Follow Ooplab on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin text-xl" aria-hidden="true"></i>
              </a>
              <a
                href="https://github.com"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 transition hover:border-[#079447] hover:text-[#079447]"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                aria-label="GitHub"
              >
                <i className="bi bi-github text-xl" aria-hidden="true"></i>
              </a>
              <a
                href="https://twitter.com"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 transition hover:border-[#079447] hover:text-[#079447]"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
                aria-label="Twitter / X"
              >
                <i className="bi bi-twitter-x text-xl" aria-hidden="true"></i>
              </a>
              <a
                href="https://instagram.com"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 transition hover:border-[#079447] hover:text-[#079447]"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram text-xl" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-200 bg-white py-4 text-center text-sm text-neutral-600">
        © 2026 OopLabs Inc. All Rights Reserved.
      </div>
    </footer>
  );
}
