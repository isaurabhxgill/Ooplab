import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Footer from "../../components/footer";
import Header from "../../components/header";
import CustomerStories from "../../components/customer-stories";
import Reviews from "../../components/reviews";
import { products } from "../data";
import {
  ArrowRight,
  Shield,
  Zap,
  Eye,
  Lock,
  CheckCircle2,
  ExternalLink,
  TrendingUp,
  Clock,
  Activity,
  HelpCircle,
  QrCode,
  BellRing,
  Award,
  ChevronRight,
  MapPin,
  MessageSquare,
  Wallet,
  Users
} from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = (resolvedParams?.slug ?? "").toLowerCase();
  const product = products.find((item) => item.slug.toLowerCase() === slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: product.tag,
    description: product.description,
    openGraph: {
      title: `${product.tag} — ${product.title}`,
      description: product.description,
      images: product.previewImages?.[0]
        ? [{ url: product.previewImages[0], alt: product.tag }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.tag} — ${product.title}`,
      description: product.description,
      images: product.previewImages?.[0] ? [product.previewImages[0]] : [],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = (resolvedParams?.slug ?? "").toLowerCase();
  const product = products.find((item) => item.slug.toLowerCase() === slug);

  if (!product) {
    notFound();
  }

  const isCarzPark = product.slug.toLowerCase() === "carzpark";
  const isEventSync = product.slug.toLowerCase() === "eventsync";

  const carzparkStories = [
    {
      title: "Safe Parking Communication",
      subtitle: "Neighborhood drivers",
      quote: "CarzPark helped our community avoid accidental damage by letting people contact us privately.",
      company: "Urban Parkers",
      image: "/Assest/cp-2.png",
    },
    {
      title: "Instant Wrong Parking Alerts",
      subtitle: "Fleet managers",
      quote: "We receive immediate alerts when someone parks poorly, and the privacy-first flow keeps everyone comfortable.",
      company: "SafeRide Logistics",
      image: "/Assest/cp-3.png",
    },
  ];

  const carzparkReviews = [
    {
      author: "Maya Patel",
      role: "Community Organizer",
      company: "Neighborhood Watch",
      rating: 5,
      text: "CarzPark eliminated unwanted calls while giving people a safe way to reach us about parking issues.",
    },
    {
      author: "Rohit Desai",
      role: "Fleet Supervisor",
      company: "Metro Transports",
      rating: 5,
      text: "The instant wrong-parking alerts are a game changer for our drivers and fleet security.",
    },
  ];

  const bharatexitStories = [
    {
      title: "Exit in 48 Hours",
      subtitle: "Micro-SaaS Founders",
      quote: "I listed InvoiceZen on BharatExit, connected my Stripe, and had audited metrics verified instantly. Vetted investors placed bids and we closed the deal via INR escrow in 48 hours.",
      company: "InvoiceZen (Acquired)",
      image: "/Assest/cp-2.png",
    },
    {
      title: "Seamless Deal Sourcing",
      subtitle: "Active Investors",
      quote: "BharatExit removes all the friction of side-project M&A. Audited Razorpay integrations and blind pitches mean I don't waste time on empty spreadsheets. The legal templates are a huge bonus.",
      company: "SaaS Buyouts India",
      image: "/Assest/cp-3.png",
    },
  ];

  const bharatexitReviews = [
    {
      author: "Vikram Sen",
      role: "Founder",
      company: "MandiPrice",
      rating: 5,
      text: "Sold my bootstrapped project in record time. Zero brokerage, Aadhaar verification, and local escrow. BharatExit is exactly what Indian indie hackers needed.",
    },
    {
      author: "Pooja Mehta",
      role: "M&A Lead",
      company: "Kalaari Dev",
      rating: 5,
      text: "Audited deal metrics and NDA-gated rooms make due diligence painless. Highly recommended for domestic investors.",
    },
  ];

  // ── EventSync data ───────────────────────────────────────────────
  const eventsyncStories = [
    {
      title: "Google I/O Extended Delhi NCR",
      subtitle: "Corporate Organizers",
      quote: "EventSync confirmed 40 verified crew members in under 3 hours. Live geofenced check-in meant zero no-shows and zero paperwork for our team.",
      company: "Google Developer Groups",
      image: "/Assest/cp-2.png",
    },
    {
      title: "Volunteer Payout Experience",
      subtitle: "Student Volunteers",
      quote: "I earned ₹2,800 over two days at a Razorpay summit. UPI payout hit my account the very next morning. Super smooth.",
      company: "EventSync Volunteer Network",
      image: "/Assest/cp-3.png",
    },
  ];

  const eventsyncReviews = [
    {
      author: "Priya Sharma",
      role: "Events Head",
      company: "TechMeet India",
      rating: 5,
      text: "EventSync is the only platform that removes the chaos from event staffing. From intake to payout — everything just works.",
    },
    {
      author: "Arjun Menon",
      role: "Operations Lead",
      company: "Nasscom Events",
      rating: 5,
      text: "Geofenced check-in alone saved us 2 hours of admin on event day. The WhatsApp broadcast to volunteers is a brilliant touch.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5fbff] text-slate-800">
      <Header />
      <div className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-8 sm:py-12">
        {isEventSync ? (
          // ==========================================
          // EVENTSYNC PRODUCT LAYOUT
          // ==========================================
          <section className="space-y-10">
            {/* Hero Card */}
            <div className="relative overflow-hidden rounded-[32px] bg-[#18181B] p-8 sm:p-12">
              {/* Glow orbs */}
              <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-[#3ECF8E]/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-10 right-0 h-64 w-64 rounded-full bg-[#3ECF8E]/6 blur-3xl" />
              <div className="relative z-10 flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  {/* Live badge */}
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#3ECF8E]/10 px-3 py-1 ring-1 ring-[#3ECF8E]/20">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3ECF8E] opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3ECF8E]" />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#3ECF8E]">
                      Live Operations Active · 5 Cities
                    </span>
                  </div>
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#3ECF8E]">
                    EventSync
                  </p>
                  <h1 className="mt-3 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                    High-precision staffing for{" "}
                    <span className="relative inline-block">
                      India's biggest
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#3ECF8E]" />
                    </span>{" "}
                    tech events.
                  </h1>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400">
                    Orchestrate technical crew, hospitality teams, and site leads for corporate summits across India — with zero friction and full real-time visibility.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href="https://eventsync-xi.vercel.app/intake"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-[#3ECF8E] px-5 py-2.5 text-sm font-bold text-[#18181B] transition hover:opacity-90"
                    >
                      Deploy Crew <ExternalLink className="h-4 w-4" />
                    </a>
                    <a
                      href="https://eventsync-xi.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      Visit Site <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 lg:gap-6">
                  {[
                    { value: "12,400+", label: "Vetted Volunteers", sub: "Age-verified & trained" },
                    { value: "4.8s", label: "Avg Response Time", sub: "To crew confirmation" },
                    { value: "₹45.2M", label: "Payouts Disbursed", sub: "T+1 via UPI" },
                    { value: "15+", label: "Tier 1 Cities", sub: "Active coverage" },
                  ].map((s) => (
                    <div key={s.label} className="rounded-2xl border border-white/8 bg-white/5 p-4">
                      <div className="text-2xl font-bold text-white">{s.value}</div>
                      <div className="mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400">{s.label}</div>
                      <div className="mt-0.5 text-[10px] text-[#3ECF8E]">{s.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Three Apps */}
            <div className="rounded-[32px] border border-white/10 bg-[#18181B] p-8 sm:p-10">
              <p className="font-mono text-xs font-medium uppercase tracking-widest text-[#3ECF8E]">Platform</p>
              <h2 className="mt-3 text-3xl font-extrabold text-white">One platform. Three powerful apps.</h2>
              <p className="mt-2 text-slate-400">Built for every stakeholder in the event staffing chain — from corporate organizers to field supervisors.</p>
              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {[
                  {
                    emoji: "🏢",
                    role: "For Organizers",
                    name: "Client Web App",
                    desc: "Submit event briefs, choose roles and headcount, get crew confirmed within 4 hours. Live budget estimator included.",
                    href: "https://eventsync-xi.vercel.app/intake",
                    cta: "Submit Event Intake →",
                    dark: false,
                  },
                  {
                    emoji: "⚙️",
                    role: "For EventSync Ops",
                    name: "Admin Portal",
                    desc: "Full command center: shift roster, volunteer management, WhatsApp broadcast, live check-in, and analytics.",
                    href: "https://eventsync-xi.vercel.app/admin",
                    cta: "Open Command Center →",
                    dark: true,
                  },
                  {
                    emoji: "📱",
                    role: "For Volunteers",
                    name: "Volunteer App",
                    desc: "Browse local shifts, apply with a buddy, clock in via geofence, and receive daily UPI payouts. Android & iOS.",
                    href: "https://eventsync-xi.vercel.app/download",
                    cta: "Download the App →",
                    dark: false,
                  },
                ].map((app) => (
                  <a
                    key={app.name}
                    href={app.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`group relative overflow-hidden rounded-2xl p-7 ring-1 transition-all hover:ring-[#3ECF8E]/40 ${app.dark
                      ? "bg-[#3ECF8E]/10 ring-[#3ECF8E]/20"
                      : "bg-white/5 ring-white/10 hover:bg-white/8"
                      }`}
                  >
                    <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-[#3ECF8E]/15 text-xl">{app.emoji}</div>
                    <div className="font-mono text-[10px] font-medium uppercase tracking-widest text-[#3ECF8E]">{app.role}</div>
                    <h3 className="mt-2 text-xl font-bold text-white">{app.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">{app.desc}</p>
                    <span className="mt-6 inline-flex text-sm font-medium text-[#3ECF8E]/70 transition group-hover:text-[#3ECF8E]">{app.cta}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Why EventSync — 4 feature cards */}
            <div className="rounded-[32px] bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.04)] sm:p-10">
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#3ECF8E]">Why EventSync</p>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900">Built for the speed of live events.</h2>
              <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {[
                  { icon: Zap, title: "4-Hour Crew Confirmation", desc: "Submit requirements. Our ops team confirms verified crew in under 4 hours, guaranteed." },
                  { icon: MapPin, title: "Geofenced Check-In", desc: "Supervisors verify attendance via GPS-locked clock-in — no paper, no disputes." },
                  { icon: MessageSquare, title: "WhatsApp Bridge", desc: "Shift drops broadcast to city-specific volunteer communities with one click." },
                  { icon: Wallet, title: "Daily UPI Payouts", desc: "Volunteers paid T+1 via UPI. No float, no delays, no angry crew." },
                ].map((f) => (
                  <div key={f.title} className="rounded-2xl bg-slate-50 p-6 ring-1 ring-black/5">
                    <f.icon className="h-7 w-7 text-[#3ECF8E]" />
                    <h3 className="mt-4 text-base font-bold text-slate-900">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cities Coverage */}
            <div className="rounded-[32px] bg-[#18181B] p-8 sm:p-10">
              <p className="font-mono text-xs font-medium uppercase tracking-widest text-[#3ECF8E]">Coverage</p>
              <h2 className="mt-3 text-3xl font-extrabold text-white">Active across India's top tech hubs.</h2>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Delhi NCR", "Bengaluru", "Mumbai", "Hyderabad", "Pune", "Chennai", "Kolkata", "Ahmedabad", "Jaipur"].map((city) => (
                  <span key={city} className="flex items-center gap-1.5 rounded-full border border-[#3ECF8E]/20 bg-[#3ECF8E]/8 px-4 py-1.5 text-sm font-medium text-[#3ECF8E]">
                    <MapPin className="h-3 w-3" />{city}
                  </span>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            {/* <div className="mt-4">
              <CustomerStories stories={eventsyncStories} />
            </div>
            <div className="mt-4">
              <Reviews reviews={eventsyncReviews} />
            </div> */}

            {/* Final CTA */}
            <div className="rounded-[32px] bg-[#3ECF8E] p-10 text-center">
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#18181B]/60">Get started</p>
              <h2 className="mt-3 text-3xl font-extrabold text-[#18181B]">Your next event deserves precision.</h2>
              <p className="mt-3 text-[#18181B]/70">Submit requirements in under 2 minutes. Crew confirmed in 4 hours.</p>
              <a
                href="https://eventsync-xi.vercel.app/intake"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#18181B] px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
              >
                Start Event Intake <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </section>
        ) : isCarzPark ? (
          // ==========================================
          // CARZPARK PRODUCT LAYOUT
          // ==========================================
          <section className="space-y-12">
            {/* Hero Card */}
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-950 via-[#0a1128] to-slate-950 px-6 py-12 shadow-[0_35px_120px_rgba(0,0,0,0.4)] sm:px-10 lg:px-16">
              {/* Floating tech background shapes */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
              <div className="pointer-events-none absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-400">
                    <QrCode className="h-3.5 w-3.5" />
                    Windshield QR Tag
                  </div>

                  <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
                    AI-Powered Vehicle <br className="hidden sm:inline" />
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                      Privacy & Safety
                    </span>
                  </h1>

                  <p className="max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                    Premium windshield QR tag for Indian vehicle owners. Let others contact you anonymously in emergency, wrong-parking, or tow-zone situations without exposing your mobile number.
                  </p>

                  <div className="flex flex-wrap gap-2.5">
                    {["Masked Calls", "Emergency Alerts", "Wrong Parking", "Zero Spam", "DPDP Compliant"].map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/5 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-200"
                      >
                        <CheckCircle2 className="h-3 w-3 text-cyan-400" />
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                    <a
                      href="https://carzpark.com/shop"
                      target="_blank"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-[0_12px_30px_rgba(6,182,212,0.3)] transition hover:-translate-y-0.5 hover:bg-cyan-400"
                    >
                      Buy windshield tag
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <a
                      href="https://carzpark.com/"
                      target="_blank"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
                    >
                      Visit Platform
                      <ExternalLink className="h-4 w-4 text-slate-400" />
                    </a>
                  </div>
                </div>

                {/* Hero Graphic */}
                <div className="relative mx-auto w-full max-w-[500px]">
                  <div className="absolute -inset-2 rounded-[36px] bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 blur-xl" />
                  <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/90 p-3 shadow-2xl">
                    <div className="relative overflow-hidden rounded-[24px]">
                      <Image
                        src="/Assest/cp-1.png"
                        alt="CarzPark Windshield Stickers"
                        width={840}
                        height={560}
                        className="h-[280px] w-full object-cover transition-transform duration-500 hover:scale-105"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-lg bg-black/60 px-4 py-2.5 backdrop-blur-md">
                        <span className="text-xs font-semibold text-white">Smart QR Sticker Preview</span>
                        <span className="rounded bg-cyan-500/20 px-2 py-0.5 text-[10px] font-bold text-cyan-400 uppercase">Live</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Features Grid */}
            <div className="space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-500">Value Proposition</p>
                <h2 className="mt-2 text-3xl font-extrabold text-slate-950">Why vehicle owners choose CarzPark</h2>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    title: "100% Identity Shield",
                    description: "No caller can see your phone number. All calls and messages are fully routed anonymously through our secure proxy.",
                    icon: Shield,
                    color: "text-cyan-400",
                    image: "/Assest/cp-2.png"
                  },
                  {
                    title: "Spam & Abuse Protection",
                    description: "Tired of marketing calls? CarzPark's built-in block engine screens and flags spammers before they ever reach your phone.",
                    icon: Zap,
                    color: "text-amber-400",
                    image: "/Assest/cp-3.png"
                  },
                  {
                    title: "Instant Parking Alerts",
                    description: "Get notified immediately if your vehicle is blocking someone, parked in a tow-away zone, or involved in an emergency.",
                    icon: BellRing,
                    color: "text-rose-400",
                    image: "/Assest/cp-4.png"
                  },
                  {
                    title: "DPDP Law Compliant",
                    description: "Designed for India. Fully aligned with the Digital Personal Data Protection Act, keeping user privacy guarded at all times.",
                    icon: Award,
                    color: "text-emerald-400",
                    image: "/Assest/cp-5.png"
                  }
                ].map((item) => (
                  <div
                    key={item.title}
                    className="group overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_15px_45px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="mb-4 overflow-hidden rounded-2xl bg-slate-50 border border-slate-100">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={360}
                        height={200}
                        className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <item.icon className={`h-5 w-5 ${item.color}`} />
                      <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* App Screen Showcase */}
            <div className="rounded-[32px] bg-slate-950 p-8 text-white relative overflow-hidden">
              <div className="pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
              <div className="relative z-10 text-center max-w-2xl mx-auto mb-12">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-400">Mobile Interface</p>
                <h2 className="mt-2 text-3xl font-extrabold text-white">Privacy in your pocket</h2>
                <p className="mt-3 text-slate-400">Manage tags, view live emergency alerts, and control caller blocking directly from the premium mobile app dashboard.</p>
              </div>

              <div className="relative z-10 grid gap-8 md:grid-cols-3 max-w-5xl mx-auto items-center justify-center">
                {[
                  {
                    title: "1. Scan & Contact Screen",
                    desc: "What others see when scanning your tag. Clean layout to send wrong parking or general notifications.",
                    img: "/Assest/CPM_1.png"
                  },
                  {
                    title: "2. Anonymous Messenger",
                    desc: "Real-time, two-way anonymous chat dashboard to coordinate car moving without revealing phone numbers.",
                    img: "/Assest/CPM_2.png"
                  },
                  {
                    title: "3. Tag Management Hub",
                    desc: "Toggle notification rules, view alerts history, set active statuses, and customize emergency contacts.",
                    img: "/Assest/CPM_3.png"
                  }
                ].map((screen, idx) => (
                  <div key={screen.title} className="flex flex-col items-center text-center space-y-4">
                    <div className="relative h-[400px] w-[210px] rounded-[36px] p-2 bg-slate-900 border border-white/10 shadow-2xl transition duration-500 hover:scale-105">
                      <div className="absolute left-1/2 top-4 z-20 h-4 w-16 -translate-x-1/2 rounded-full bg-black" /> {/* Island */}
                      <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-slate-950">
                        <Image
                          src={screen.img}
                          alt={screen.title}
                          fill
                          sizes="200px"
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="max-w-xs">
                      <h4 className="text-base font-bold text-white">{screen.title}</h4>
                      <p className="mt-1 text-xs text-slate-400 leading-5">{screen.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CarzPark FAQ */}
            <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.04)] sm:p-10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-500">FAQ</p>
                  <h2 className="mt-2 text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
                </div>
                <span className="inline-flex rounded-full bg-cyan-50 px-3.5 py-1.5 text-xs font-bold text-cyan-600">
                  CarzPark Mobility Labs
                </span>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {[
                  {
                    question: "How does the anonymous calling feature work?",
                    answer: "When someone scans the QR windshield tag, they are directed to a private web calling portal. The portal routes the call/SMS to you via secure virtual numbers, hiding both your phone number and the scanner's phone number."
                  },
                  {
                    question: "Can I use it in apartments or corporate parks?",
                    answer: "Yes, absolutely! It is heavily used in housing societies, co-working facilities, and commercial business parks in India to report wrong-parking blockages without personal altercations."
                  },
                  {
                    question: "Does the scanner need to install the app?",
                    answer: "No. The person scanning your QR sticker does not need to download any app. They can scan it with their native phone camera, opening a safe web screen instantly."
                  },
                  {
                    question: "What happens if someone spams my QR tag?",
                    answer: "Our system runs an AI screening layer on messages and allows you to block callers with a single tap. Spammers are permanently blacklisted across our platform."
                  }
                ].map((faq) => (
                  <div key={faq.question} className="rounded-2xl bg-slate-50 border border-slate-100 p-5">
                    <h3 className="text-base font-bold text-slate-900 flex items-start gap-2">
                      <HelpCircle className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                      {faq.question}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 pl-7">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials & Reviews */}
            {/* <div className="mt-8">
              <CustomerStories stories={carzparkStories} />
            </div>

            <div className="mt-8">
              <Reviews reviews={carzparkReviews} />
            </div> */}
          </section>
        ) : (
          // ==========================================
          // BHARATEXIT (SHARKIN) PRODUCT LAYOUT
          // ==========================================
          <section className="space-y-12">
            {/* Hero Card */}
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-950 via-[#061e14] to-slate-950 px-6 py-12 shadow-[0_35px_120px_rgba(0,0,0,0.4)] sm:px-10 lg:px-16">
              {/* Floating glow effects */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
              <div className="pointer-events-none absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />

              <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-400">
                    <Activity className="h-3.5 w-3.5 animate-pulse text-emerald-400" />
                    India&apos;s Micro-SaaS M&amp;A Layer
                  </div>

                  <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
                    Exit your side-project. <br className="hidden sm:inline" />
                    <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                      Acquire the next one.
                    </span>
                  </h1>

                  <p className="max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                    BharatExit turns months of legal friction and metric disputes into a seamless 48-hour flow. Verified API metrics, blind video pitches, Aadhaar KYC, and secure INR escrow.
                  </p>

                  <div className="flex flex-wrap gap-2.5">
                    {["Razorpay/Stripe Verified", "NDA-Gated Rooms", "48h Auctions", "INR Escrow", "Blind Video Pitches"].map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/5 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-200"
                      >
                        <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                    <a
                      href="https://sharkin-three.vercel.app/marketplace"
                      target="_blank"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-[0_12px_30px_rgba(16,185,129,0.3)] transition hover:-translate-y-0.5 hover:bg-emerald-400"
                    >
                      Browse marketplace
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <a
                      href="https://sharkin-three.vercel.app/register"
                      target="_blank"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
                    >
                      Sell your SaaS
                      <ExternalLink className="h-4 w-4 text-slate-400" />
                    </a>
                  </div>
                </div>

                {/* Hero Dashboard Screenshot */}
                <div className="relative mx-auto w-full max-w-[520px]">
                  <div className="absolute -inset-2 rounded-[28px] bg-gradient-to-r from-emerald-500 to-teal-500 opacity-20 blur-xl" />
                  <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-slate-900/90 p-2 shadow-2xl">
                    <div className="relative overflow-hidden rounded-[18px]">
                      <Image
                        src="/Assest/Sharkin.png"
                        alt="BharatExit Deal Room Platform"
                        width={840}
                        height={560}
                        className="h-[194px] w-full object-cover transition-transform duration-500 hover:scale-105"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-lg bg-black/60 px-4 py-2.5 backdrop-blur-md">
                        <span className="text-xs font-semibold text-white">Deal flow Board</span>
                        <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-400 uppercase">Beta</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Platform Stats Row */}
            <div className="grid gap-6 grid-cols-3 text-center rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Active Listings</p>
                <p className="mt-1.5 text-3xl font-extrabold text-slate-900 sm:text-4xl">9</p>
              </div>
              <div className="border-x border-slate-100">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Total Bids</p>
                <p className="mt-1.5 text-3xl font-extrabold text-slate-900 sm:text-4xl">18</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">GMV (Bids)</p>
                <p className="mt-1.5 text-3xl font-extrabold text-emerald-600 sm:text-4xl">₹2.4 Cr</p>
              </div>
            </div>

            {/* Featured Listings Section */}
            <div className="space-y-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-500">Live Deal Flow</p>
                  <h2 className="mt-1 text-3xl font-extrabold text-slate-900">Featured active listings</h2>
                </div>
                <span className="text-sm font-medium text-slate-500">Auto-updated metrics</span>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: "InvoiceZen",
                    desc: "GST invoicing SaaS · 1,200 users",
                    status: "Live",
                    mrr: "₹3.8L",
                    ttm: "₹42L",
                    churn: "2.1%",
                    mult: "3.6x",
                    asking: "₹1.5Cr"
                  },
                  {
                    title: "CampusHire",
                    desc: "College recruiting API · 84 orgs",
                    status: "48h Auction",
                    mrr: "₹2.1L",
                    ttm: "₹24L",
                    churn: "1.4%",
                    mult: "4.0x",
                    asking: "₹96L"
                  },
                  {
                    title: "MandiPrice",
                    desc: "Agri price alerts · 9,400 users",
                    status: "Live",
                    mrr: "₹1.4L",
                    ttm: "₹15L",
                    churn: "3.2%",
                    mult: "3.2x",
                    asking: "₹48L"
                  }
                ].map((listing) => (
                  <div
                    key={listing.title}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_15px_40px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div>
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition">{listing.title}</h3>
                          <p className="text-xs text-slate-500 mt-0.5">{listing.desc}</p>
                        </div>
                        <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-600 uppercase tracking-wider">
                          {listing.status}
                        </span>
                      </div>

                      <div className="mt-6 grid grid-cols-4 gap-2 border-t border-slate-100 pt-4">
                        <div>
                          <p className="text-[10px] font-bold text-slate-400 uppercase">MRR</p>
                          <p className="text-sm font-semibold text-slate-800">{listing.mrr}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-slate-400 uppercase">TTM</p>
                          <p className="text-sm font-semibold text-slate-800">{listing.ttm}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-slate-400 uppercase">Churn</p>
                          <p className="text-sm font-semibold text-slate-800">{listing.churn}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-slate-400 uppercase">Mult</p>
                          <p className="text-sm font-semibold text-slate-800">{listing.mult}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Asking Price</p>
                        <p className="text-xl font-extrabold text-emerald-600">{listing.asking}</p>
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700 transition group-hover:border-emerald-500/40 group-hover:bg-emerald-500/5 group-hover:text-emerald-600">
                        Details
                        <ChevronRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Playbook / Step Walkthrough */}
            <div className="rounded-[32px] bg-slate-950 p-8 text-white relative overflow-hidden">
              <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
              <div className="relative z-10 text-center max-w-2xl mx-auto mb-12">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-400">The Playbook</p>
                <h2 className="mt-2 text-3xl font-extrabold text-white">How BharatExit works</h2>
                <p className="mt-3 text-slate-400">We verify pipeline listings and release escrow directly to your INR account — designed for digital business builders.</p>
              </div>

              <div className="relative z-10 grid gap-6 md:grid-cols-4 max-w-6xl mx-auto">
                {[
                  {
                    step: "01",
                    title: "Verified Engine",
                    desc: "Connect Razorpay, Stripe, Cashfree, or GA. We pull audited metrics automatically. No lies, no spreadsheet gymnastics.",
                    icon: Activity
                  },
                  {
                    step: "02",
                    title: "Blind Pitch",
                    desc: "Provide a 3-minute video walkthrough. Protect your IP with NDA-gated deal rooms and strict blind listing filters.",
                    icon: Eye
                  },
                  {
                    step: "03",
                    title: "48-Hour Auction",
                    desc: "Vetted and KYC-verified buyers place binding offers. Select your winner, accept LOIs, and sign immediately.",
                    icon: Clock
                  },
                  {
                    step: "04",
                    title: "INR Escrow Lock",
                    desc: "Virtual accounts lock funds locally. Avoid international compliance delays. Cash is released instantly on handover.",
                    icon: Lock
                  }
                ].map((item) => (
                  <div key={item.step} className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 transition duration-300 hover:border-emerald-500/20 hover:bg-white/10">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-slate-500 border border-white/10 rounded px-2 py-0.5">{item.step}</span>
                      <item.icon className="h-5 w-5 text-emerald-400" />
                    </div>
                    <h3 className="mt-6 text-lg font-bold text-white group-hover:text-emerald-400 transition">{item.title}</h3>
                    <p className="mt-2.5 text-xs leading-5 text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* BharatExit FAQ */}
            <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.04)] sm:p-10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-500">FAQ</p>
                  <h2 className="mt-2 text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
                </div>
                <span className="inline-flex rounded-full bg-emerald-50 px-3.5 py-1.5 text-xs font-bold text-emerald-600">
                  Secure M&amp;A Layer
                </span>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {[
                  {
                    question: "How are metrics verified on BharatExit?",
                    answer: "Instead of manually uploading CSV files or spreadsheets, founders connect integration read keys for Stripe, Razorpay, or billing gateways. BharatExit reconciles these with analytics pixels to verify MRR and TTM."
                  },
                  {
                    question: "How does the blind pitch protect my IP?",
                    answer: "Buyers cannot view sensitive details, tech stacks, or code walkthroughs until they complete Aadhaar-based KYC verification, sign a binding digital NDA, and receive explicit approval from the founder."
                  },
                  {
                    question: "Who can buy and sell on the marketplace?",
                    answer: "BharatExit is custom-built for domestic buyers, angels, and SaaS builders in India. Escrow contracts and payments are settled locally in INR, eliminating compliance hurdles."
                  },
                  {
                    question: "What is the fee structure for exits?",
                    answer: "Sellers list completely free of charge. Upon successful escrow execution and asset handover completion, BharatExit takes a flat 4% matching escrow fee. No hidden broker charges."
                  }
                ].map((faq) => (
                  <div key={faq.question} className="rounded-2xl bg-slate-50 border border-slate-100 p-5">
                    <h3 className="text-base font-bold text-slate-900 flex items-start gap-2">
                      <HelpCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      {faq.question}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 pl-7">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials & Reviews */}
            {/* <div className="mt-8">
              <CustomerStories stories={bharatexitStories} />
            </div>

            <div className="mt-8">
              <Reviews reviews={bharatexitReviews} />
            </div> */}
          </section>
        )}
      </div>
      <Footer />
    </main>
  );
}

