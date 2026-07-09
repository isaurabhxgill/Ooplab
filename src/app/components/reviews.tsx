"use client";

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type Review = {
  author: string;
  role: string;
  company: string;
  rating: number;
  image?: string;
  text: string;
};

interface ReviewsProps {
  reviews: Review[];
}

export default function Reviews({ reviews }: ReviewsProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollReviews = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const card = carouselRef.current.querySelector("div[role='review-card']");
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
          <p className="text-[32px] text-black uppercase tracking-[0.24em]">Reviews</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950">Trusted by product teams worldwide.</h2>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => scrollReviews("left")}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
            aria-label="Scroll reviews left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollReviews("right")}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
            aria-label="Scroll reviews right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={carouselRef}
        className="mt-6 flex gap-6 overflow-x-auto pb-3 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((review) => (
          <div
            role="review-card"
            key={review.author}
            className="snap-start min-w-[285px] max-w-[360px] flex-shrink-0 rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-slate-100">
                  <Image
                    src={review.image || "/Assest/avatar.png"}
                    alt={review.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-950">{review.author}</p>
                  <p className="text-sm text-slate-500">{review.role} · {review.company}</p>
                </div>
              </div>

              <div className="mt-1 flex items-center gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4 text-yellow-400"
                    aria-hidden
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.259 3.874a1 1 0 00.95.69h4.073c.969 0 1.371 1.24.588 1.81l-3.295 2.393a1 1 0 00-.364 1.118l1.259 3.874c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.295 2.393c-.784.57-1.839-.197-1.54-1.118l1.259-3.874a1 1 0 00-.364-1.118L2.764 9.301c-.783-.57-.38-1.81.588-1.81h4.073a1 1 0 00.95-.69l1.259-3.874z" />
                  </svg>
                ))}
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-600 font-semibold">{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
