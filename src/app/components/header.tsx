"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const navItems = ["Services", "Products", "About", "Book a call"];

// Route mapping for navigation items
const getHref = (item: string): string => {
  if (item.toLowerCase() === "about") return "/about";
  if (item.toLowerCase() === "services") return "/services";
  if (item.toLowerCase() === "products") return "/#products";
  return `/#${item.toLowerCase().replaceAll(" ", "-")}`;
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change / resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 mx-auto flex h-16 w-full items-center justify-between border-b border-white/20 bg-white/80 px-5 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/70 sm:h-20 sm:px-9">
      {/* Logo */}
      <a aria-label="Ooplab home" href="/">
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
      </a>

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
              className="text-base font-medium text-[#667085] transition text-brand-hover"
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
        className="flex items-center justify-center rounded-md p-2 text-[#667085] transition hover:bg-slate-50 md:hidden"
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
        className={`absolute left-0 top-full z-40 w-full overflow-hidden bg-white shadow-[0_8px_32px_rgba(15,23,42,0.12)] transition-all duration-300 ease-in-out md:hidden ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
      >
        <ul className="flex flex-col divide-y divide-slate-100 px-5 py-2">
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
                  className="flex items-center gap-2 text-base font-medium text-[#0f172a] text-brand-hover"
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
