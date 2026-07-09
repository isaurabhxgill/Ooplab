import Image from "next/image";
import { notFound } from "next/navigation";
import Footer from "../../components/footer";
import Header from "../../components/header";
import CustomerStories from "../../components/customer-stories";
import Reviews from "../../components/reviews";
import { products } from "../data";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = (resolvedParams?.slug ?? "").toLowerCase();
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const isCarzPark = product.slug === "carzpark";

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

  return (
    <main className="min-h-screen bg-[#f5fbff] text-white">
      <Header />
      <div className="mx-auto w-full max-w-[1440px] px-6 py-10 sm:px-8">
        {isCarzPark ? (
          <section className="">
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-10 shadow-[0_35px_120px_rgba(0,0,0,0.35)] sm:px-10 lg:px-14">
             <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                  Home &gt; Products &gt; Car Parking Tag
                </div>
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Car Parking Tag
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  Premium windshield QR tag for cars that helps others contact you without revealing your personal number.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "Masked Calls",
                    "Emergency Alerts",
                    "Wrong Parking Alerts",
                    "Zero Spam",
                  ].map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="https://carzpark.com/shop"
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                  >
                    Buy Now
                  </a>
                  <a
                    href="https://carzpark.com/"
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
                  >
                    Visit Now
                  </a>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-[520px] rounded-[32px] bg-slate-900/90 p-4 shadow-[0_35px_120px_rgba(0,0,0,0.35)]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(15,118,210,0.18),transparent_35%)]" />
                <div className="relative overflow-hidden rounded-[28px] border border-white/10">
                  <Image
                    src="/Assest/cp-1.png"
                    alt="CarzPark product preview"
                    width={840}
                    height={560}
                    className="h-[300px] w-full object-cover"
                  />
                </div>
              </div>
            </div>
            </div>
           

            <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  title: "100% Private",
                  description: "Your number is never shared with anyone.",
                  image: "/Assest/cp-2.png",
                },
                {
                  title: "Spam Protected",
                  description: "AI filters spam and blocks unwanted contacts.",
                  image: "/Assest/cp-3.png",
                },
                {
                  title: "Instant Alerts",
                  description: "Get notified for wrong parking or emergencies.",
                  image: "/Assest/cp-4.png",
                },
                {
                  title: "Secure & Trusted",
                  description: "Enterprise-grade security to protect your identity.",
                  image: "/Assest/cp-5.png",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/80 p-6 shadow-[0_28px_80px_rgba(0,0,0,0.18)]"
                >
                  <div className="mb-4 h-24 overflow-hidden rounded-3xl bg-slate-900">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={360}
                      height={220}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-[32px] border border-white/10 bg-slate-900/80 p-8">
                <h2 className="text-2xl font-semibold text-white">Why CarzPark?</h2>
                <p className="mt-4 text-slate-400">
                  CarzPark is built to keep your car safe, your contact details private,
                  and your parking interactions smooth. This dashboard helps you
                  monitor activity, receive alerts, and manage privacy settings with ease.
                </p>
                <ul className="mt-6 space-y-4 text-slate-300">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <div className="overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/80 p-4 shadow-[0_28px_80px_rgba(0,0,0,0.18)]">
                  <Image
                    src="/Assest/cp-3.png"
                    alt="CarzPark dashboard card"
                    width={720}
                    height={420}
                    className="h-[260px] w-full rounded-[24px] object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/80 p-4 shadow-[0_28px_80px_rgba(0,0,0,0.18)]">
                  <Image
                    src="/Assest/cp-4.png"
                    alt="CarzPark usage preview"
                    width={720}
                    height={420}
                    className="h-[260px] w-full rounded-[24px] object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-14 rounded-[32px] border border-white/10 bg-slate-900/80 p-8 shadow-[0_35px_120px_rgba(0,0,0,0.25)]">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">FAQ</p>
                  <h2 className="mt-3 text-3xl font-semibold text-white">Frequently Asked Questions</h2>
                </div>
                <span className="inline-flex rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200">
                  CarzPark-specific answers
                </span>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {[
                  {
                    question: "How does CarzPark keep my mobile number private?",
                    answer:
                      "CarzPark uses a secure QR tag system so others can contact you through the app without ever seeing your actual phone number.",
                  },
                  {
                    question: "Can I receive alerts for wrong parking?",
                    answer:
                      "Yes — CarzPark sends instant notifications for wrong parking and emergency alerts so you stay informed in real time.",
                  },
                  {
                    question: "Does CarzPark block spam contacts?",
                    answer:
                      "Absolutely. The system filters and blocks spam before it reaches you, keeping your contact route clean and trusted.",
                  },
                  {
                    question: "Is my data secure with CarzPark?",
                    answer:
                      "Yes. CarzPark is built with enterprise-grade privacy and security, ensuring your vehicle and contact data remain protected.",
                  },
                ].map((item) => (
                  <div
                    key={item.question}
                    className="rounded-[24px] border border-white/10 bg-slate-950/90 p-6"
                  >
                    <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16">
              <CustomerStories stories={carzparkStories} />
            </div>

            <div className="mt-14">
              <Reviews reviews={carzparkReviews} />
            </div>
          </section>
          
        ) : (
          <section className="mx-auto max-w-[1200px] rounded-[32px] border border-white/10 bg-slate-950/95 px-6 py-10 shadow-[0_35px_120px_rgba(0,0,0,0.25)] sm:px-10">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">{product.tag}</p>
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  {product.title}
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  {product.description}
                </p>

                <div className="mt-10 space-y-4">
                  {product.features.map((feature) => (
                    <div key={feature} className="rounded-[22px] border border-white/10 bg-white/5 p-5">
                      <p className="text-sm text-slate-200">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-[0_35px_120px_rgba(0,0,0,0.18)]">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={840}
                  height={560}
                  className="h-full w-full rounded-[24px] object-cover"
                />
              </div>
            </div>
          </section>
        )}
      </div>
      <Footer />
    </main>
  );
}
