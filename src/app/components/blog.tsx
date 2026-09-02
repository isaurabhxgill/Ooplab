"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type BlogPost = {
  title: string;
  excerpt: string;
  tag: string;
  date: string;
  href: string;
};

interface BlogProps {
  posts: BlogPost[];
}

export default function Blog({ posts }: BlogProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollPosts = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const card = carouselRef.current.querySelector("article");
    const gap = 24;
    const cardWidth = card?.getBoundingClientRect().width ?? 320;

    carouselRef.current.scrollBy({
      left: direction === "left" ? -(cardWidth + gap) : cardWidth + gap,
      behavior: "smooth",
    });
  };

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[32px] text-black uppercase tracking-[0.24em]">From the blog</p>
          <h2 className="mt-3 text-3xl font-bold text-ink-950">Updates, guides, and product thinking.</h2>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => scrollPosts("left")}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink-700 shadow-sm transition hover:border-line-strong hover:bg-paper"
            aria-label="Scroll blog posts left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollPosts("right")}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink-700 shadow-sm transition hover:border-line-strong hover:bg-paper"
            aria-label="Scroll blog posts right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div
        ref={carouselRef}
        className="mt-6 flex gap-6 overflow-x-auto pb-3 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {posts.map((post) => (
          <article
            key={post.title}
            className="snap-start min-w-[285px] max-w-[420px] flex-shrink-0 rounded-[28px] border border-line bg-white p-6 shadow-[0_20px_60px_rgba(6,48,27,0.08)]"
          >
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-fg-subtle">
              <span>{post.tag}</span>
              <span>{post.date}</span>
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-ink-950">{post.title}</h3>
            <p className="mt-4 text-sm leading-7 text-fg-muted">{post.excerpt}</p>
            <a
              href={post.href}
              className="mt-6 inline-flex text-sm font-semibold text-brand-600 hover:text-brand-500"
            >
              Continue reading →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
