"use client";

import Image from "next/image";

interface PhoneMockupProps {
  image: string;
  alt?: string;
  className?: string;
  large?: boolean;
}

export default function PhoneMockup({
  image,
  alt,
  className = "",
  large = false,
}: PhoneMockupProps) {
  return (
    <div
      className={`
      relative
      bg-[#111]
      rounded-[42px]
      border-[8px]
      border-[#1d1d1d]
      shadow-[0_35px_80px_rgba(0,0,0,.35)]
      overflow-hidden
      ${large ? "w-[220px] h-[455px]" : "w-[180px] h-[370px]"}
      ${className}
    `}
    >
      {/* Speaker */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 h-7 w-28 rounded-full bg-black" />

      {/* Screenshot */}
      <Image
        src={image}
        alt={alt || ""}
        fill
        className="object-cover rounded-[32px]"
      />

      {/* Reflection */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

      {/* Side buttons */}
      <div className="absolute left-[-8px] top-24 h-12 w-[4px] rounded-full bg-neutral-700" />
      <div className="absolute left-[-8px] top-40 h-16 w-[4px] rounded-full bg-neutral-700" />

      <div className="absolute right-[-8px] top-32 h-20 w-[4px] rounded-full bg-neutral-700" />
    </div>
  );
}