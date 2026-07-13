import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Ooplab's full range of digital services: web and mobile development, AI integrations, cloud architecture, UI/UX design, and enterprise systems.",
  openGraph: {
    title: "Services — Ooplab Digital Product Studio",
    description:
      "From strategy to launch: web apps, mobile apps, AI products, cloud solutions, and enterprise systems built by Ooplab.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
