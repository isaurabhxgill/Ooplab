"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = ["Services", "Products", "About", "Book a call"];

// Route mapping for navigation items
const getHref = (item: string): string => {
  if (item.toLowerCase() === "about") return "/about";
  if (item.toLowerCase() === "services") return "/services";
  if (item.toLowerCase() === "products") return "/#products";
  return `/#${item.toLowerCase().replaceAll(" ", "-")}`;
};

type Props = {
  /**
   * "ink" for pages whose hero is a dark band: the bar starts transparent with
   * light type and resolves to solid paper once the hero has scrolled away.
   */
  variant?: "paper" | "ink";
};

export default function Header({ variant = "paper" }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close menu on route change / resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Over a dark hero the bar is transparent until the hero is behind us.
  useEffect(() => {
    if (variant !== "ink") return;
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const onInk = variant === "ink" && !scrolled;

  return (
    <header
      className={`sticky top-0 z-50 mx-auto flex h-16 w-full items-center justify-between px-5 transition-colors duration-500 sm:h-20 sm:px-9 ${
        onInk
          ? "border-b border-white/10 bg-ink-950/55 backdrop-blur-xl"
          : "border-b border-line bg-paper-raised/80 shadow-[0_8px_30px_rgba(6,48,27,0.06)] backdrop-blur-xl supports-[backdrop-filter]:bg-paper-raised/70"
      }`}
    >
      {/* Logo */}
      <Link aria-label="Ooplab home" href="/">
        <Image
          src="/Assest/Ologo.png"
          alt="Ooplab Logo"
          width={200}
          height={140}
          style={{
            width: "auto",
            height: "auto",
            maxHeight: "95px",
          }}
          priority
        />
      </Link>

      {/* Desktop nav */}
      <nav aria-label="Primary navigation" className="hidden items-center gap-10 md:flex">
        {navItems.map((item) =>
          item === "Book a call" ? (
            <a
              key={item}
              href="contact"
              className="inline-flex items-center gap-2 rounded-md brand-bg px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(7,148,71,0.2)] transition hover:opacity-90"
              aria-label="Book a call"
            >
              {item}
            </a>
          ) : (
            <a
              className={`text-base font-medium transition ${
                onInk
                  ? "text-on-ink/85 hover:text-brand-300"
                  : "text-fg-muted text-brand-hover"
              }`}
              href={getHref(item)}
              key={item}
            >
              {item}
            </a>
          )
        )}
      </nav>

      {/* Mobile hamburger button */}
      <button
        type="button"
        className={`flex items-center justify-center rounded-md p-2 transition md:hidden ${
          onInk ? "text-on-ink hover:bg-white/10" : "text-fg-muted hover:bg-paper"
        }`}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen((v) => !v)}
      >
        {menuOpen ? (
          <i className="bi bi-x-lg text-xl" aria-hidden="true" />
        ) : (
          <i className="bi bi-list text-2xl" aria-hidden="true" />
        )}
      </button>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 top-16 z-40 bg-black/20 backdrop-blur-sm sm:top-20 md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu panel */}
      <nav
        id="mobile-menu"
        aria-label="Mobile navigation"
        className={`absolute left-0 top-full z-40 w-full overflow-hidden bg-white shadow-[0_8px_32px_rgba(6,48,27,0.12)] transition-all duration-300 ease-in-out md:hidden ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
      >
        <ul className="flex flex-col divide-y divide-paper-sunk px-5 py-2">
          {navItems.map((item) =>
            item === "Book a call" ? (
              <li key={item} className="py-3">
                <a
                  href="#contact"
                  className="flex w-full items-center justify-center rounded-md brand-bg px-4 py-3 text-sm font-semibold text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ) : (
              <li key={item} className="py-3">
                <a
                  href={getHref(item)}
                  className="flex items-center gap-2 text-base font-medium text-[#11201a] text-brand-hover"
                  onClick={() => setMenuOpen(false)}
                >
                  <i className="bi bi-arrow-right-short text-[#079447] text-lg" aria-hidden="true" />
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
}
