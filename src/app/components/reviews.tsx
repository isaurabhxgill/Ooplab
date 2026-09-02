"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

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

const getInitials = (name: string) => {
  const parts = name.split(" ");
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
};

const getAvatarBg = (name: string) => {
  const colors = [
    "bg-orange-100 text-orange-700 border-orange-200/50",
    "bg-brand-50 text-brand-700 border-brand-100/50",
    "bg-brand-50 text-brand-700 border-brand-100/50",
    "bg-brand-50 text-brand-700 border-brand-100/50",
    "bg-brand-50 text-brand-700 border-brand-100/50",
    "bg-pink-100 text-pink-700 border-pink-200/50",
    "bg-yellow-100 text-yellow-700 border-yellow-200/50",
    "bg-brand-50 text-brand-700 border-brand-100/50",
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % colors.length;
  return colors[index];
};

export default function Reviews({ reviews }: ReviewsProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el || reviews.length <= 1) return;

    let timer: NodeJS.Timeout;

    const startAutoScroll = () => {
      timer = setInterval(() => {
        const card = el.querySelector("div[role='review-card']");
        if (!card) return;
        const gap = 24;
        const cardWidth = card.getBoundingClientRect().width;
        const scrollAmount = cardWidth + gap;

        // Check if we are near the end of the scroll area
        const isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 15;
        if (isAtEnd) {
          el.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          el.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          });
        }
      }, 4000); // Auto scrolls every 4 seconds
    };

    startAutoScroll();

    const stopAutoScroll = () => clearInterval(timer);

    // Pause auto-scroll on hover or touch actions
    el.addEventListener("mouseenter", stopAutoScroll);
    el.addEventListener("mouseleave", startAutoScroll);
    el.addEventListener("touchstart", stopAutoScroll);
    el.addEventListener("touchend", startAutoScroll);

    return () => {
      clearInterval(timer);
      el.removeEventListener("mouseenter", stopAutoScroll);
      el.removeEventListener("mouseleave", startAutoScroll);
      el.removeEventListener("touchstart", stopAutoScroll);
      el.removeEventListener("touchend", startAutoScroll);
    };
  }, [reviews]);

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[32px] text-black uppercase tracking-[0.24em]">Reviews</p>
          <h2 className="mt-3 text-3xl font-bold text-ink-950">Trusted by product teams worldwide.</h2>
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
            className="snap-start min-w-[285px] max-w-[360px] flex-shrink-0 rounded-[28px] border border-line bg-white p-6 shadow-[0_20px_60px_rgba(6,48,27,0.08)] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full shrink-0">
                    {review.image ? (
                      <Image
                        src={review.image}
                        alt={review.author}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className={`h-full w-full flex items-center justify-center font-bold text-sm border ${getAvatarBg(review.author)}`}>
                        {getInitials(review.author)}
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-ink-950">{review.author}</p>
                    <p className="text-sm text-fg-subtle">{review.role} · {review.company}</p>
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

              <p className="mt-5 text-sm leading-7 text-fg-muted font-semibold">{review.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
