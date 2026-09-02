"use client";

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type ArticleItem = {
  title: string;
  description: string;
  category: string;
  date: string;
  image: string;
  href: string;
};

interface ArticleProps {
  articles: ArticleItem[];
}

export default function Article({ articles }: ArticleProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollArticles = (direction: "left" | "right") => {
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
          <p className="text-[32px] uppercase tracking-[0.24em] text-Black">Latest Articles</p>
          <h2 className="mt-3 text-3xl font-bold text-ink-950">Insights for growth-minded teams.</h2>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => scrollArticles("left")}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink-700 shadow-sm transition hover:border-line-strong hover:bg-paper"
            aria-label="Scroll articles left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollArticles("right")}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink-700 shadow-sm transition hover:border-line-strong hover:bg-paper"
            aria-label="Scroll articles right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={carouselRef}
        className="mt-6 flex gap-6 overflow-x-auto pb-3 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {articles.map((article) => (
          <article
            key={article.title}
            className="snap-start min-w-[285px] max-w-[320px] flex-shrink-0 overflow-hidden rounded-[28px] border border-line bg-white shadow-[0_20px_60px_rgba(6,48,27,0.08)]"
          >
              <div className="relative h-52 w-full overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(max-width: 640px) 100vw, 320px"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.24em] text-fg-subtle">
                <span>{article.category}</span>
                <span>{article.date}</span>
              </div>
              <h3 className="text-xl font-semibold text-ink-950">{article.title}</h3>
              <p className="mt-4 text-sm leading-7 text-fg-muted">{article.description}</p>
              <a
                href={article.href}
                className="mt-6 inline-flex text-sm font-semibold text-brand-600 hover:text-brand-500"
              >
                Read article →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
