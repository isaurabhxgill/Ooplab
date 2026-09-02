"use client";

import { useEffect, useRef, useState } from "react";

const highlights = [
  { value: 20, suffix: "+", label: "Products Shipped" },
  { value: 50, suffix: "+", label: "Clients Worldwide" },
  { value: 3,  suffix: "yrs", label: "In Business" },
  { value: 98, suffix: "%",  label: "Client Satisfaction" },
];

function useCounter(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        let start = 0;
        const step = Math.ceil(target / (duration / 16));
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(start);
        }, 16);
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCounter(value);
  return (
    <div className="flex flex-col items-center rounded-[28px] border border-white/10 bg-white/5 p-8 text-center">
      <span ref={ref} className="text-5xl font-extrabold text-white">
        {count}{suffix}
      </span>
      <p className="mt-2 text-sm text-on-ink-muted">{label}</p>
    </div>
  );
}

export default function StatCards() {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {highlights.map((h) => <StatCard key={h.label} {...h} />)}
    </div>
  );
}
