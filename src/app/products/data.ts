export type Product = {
  slug: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  previewImages?: string[];
  features: string[];
  previewType: "mobile" | "desktop";
};

export const products: Product[] = [
  {
    slug: "carzpark",
    tag: "CarzPark",
    title: "AI-Powered Vehicle Privacy & Safety Platform",
    description:
      "CarzPark is an AI-powered vehicle communication platform that enables secure, privacy-first interaction between vehicle owners and the public.",
    image: "/Assest/hero-1.png",
    previewType: "mobile",
    previewImages: [
      "/Assest/CPM_1.png",
      "/Assest/CPM_2.png",
      "/Assest/CPM_3.png",
    ],
    features: [
      "Privacy-first communication without sharing personal phone numbers.",
      "Smart QR vehicle tags for quick and secure contact.",
      "AI-powered spam protection for safe and trusted interactions.",
    ],
  },
  {
    slug: "BharatExit",
    tag: "BharatExit",
    title: "Indian micro-SaaS, B2B tools, and bootstrapped digital businesses"
,previewType: "desktop",
    description:
      "BharatExit is a verified marketplace for Indian micro-SaaS, B2B tools, and bootstrapped digital businesses. Sellers get a clean, fast exit. Investors get audited metrics, NDA-gated deal rooms, and escrow — all in one flow.",
    image: "/Assest/hero-1.png",
     previewImages: [
      "/Assest/Sharkin.png",
    ],
  features: [
  "Close deals in 48 hours, not months with automated verification.",
  "Every metric is reconciled with Razorpay, Stripe, or analytics pixels.",
  "Built for India with UPI/IMPS escrow and Aadhaar-based KYC.",
  "Blind pitches, NDA-protected data rooms, and zero hidden fees.",
],
  }
];
