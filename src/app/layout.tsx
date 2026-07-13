import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import OoplabChatbot from "./components/chatbot/OoplabChatbot";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://ooplab.in";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Ooplab — Scalable Digital Solutions",
    template: "%s | Ooplab",
  },
  description:
    "Ooplab is a premium digital product studio building scalable web applications, mobile apps, AI integrations, and enterprise systems for startups and modern businesses.",
  keywords: [
    "Ooplab",
    "digital product studio",
    "web development India",
    "mobile app development",
    "AI integrations",
    "Next.js",
    "React",
    "enterprise software",
    "SaaS development",
  ],
  authors: [{ name: "Ooplab", url: BASE_URL }],
  creator: "Ooplab",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Ooplab",
    title: "Ooplab — Scalable Digital Solutions",
    description:
      "Premium digital product studio building scalable web apps, mobile apps, and AI products for modern businesses.",
    images: [
      {
        url: "/Assest/Ologo.png",
        width: 1200,
        height: 630,
        alt: "Ooplab — Digital Product Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ooplab — Scalable Digital Solutions",
    description:
      "Premium digital product studio building scalable web apps, mobile apps, and AI products.",
    images: ["/Assest/Ologo.png"],
    creator: "@ooplab",
  },
  icons: {
    icon: "/Assest/Ologo-mini.png",
    shortcut: "/Assest/Ologo.png",
    apple: "/Assest/Ologo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <OoplabChatbot />
      </body>
    </html>
  );
}

