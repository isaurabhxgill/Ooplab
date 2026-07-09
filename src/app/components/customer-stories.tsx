"use client";

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type CustomerStory = {
  title: string;
  subtitle: string;
  quote: string;
  company: string;
  image: string;
};

interface CustomerStoriesProps {
  stories: CustomerStory[];
}

export default function CustomerStories({ stories }: CustomerStoriesProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollStories = (direction: "left" | "right") => {
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
          <p className="text-[32px] text-black uppercase tracking-[0.24em]">Customer Stories</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950">See how customers use our products.</h2>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => scrollStories("left")}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
            aria-label="Scroll stories left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollStories("right")}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
            aria-label="Scroll stories right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={carouselRef}
        className="mt-6 flex gap-6 overflow-x-auto pb-3 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {stories.map((story) => (
          <article
            key={story.title}
            className="snap-start min-w-[285px] max-w-[360px] flex-shrink-0 overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
          >
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-3xl bg-slate-100">
                <Image
                  src={story.image}
                  alt={story.company}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-base font-semibold text-slate-950">{story.title}</p>
                <p className="mt-1 text-sm text-slate-500">{story.subtitle}</p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-7 text-slate-600">{story.quote}</p>
            <div className="mt-6 text-sm font-semibold text-slate-900">{story.company}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
