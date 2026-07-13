import type { Metadata } from "next";
import Header from "../components/header";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Ooplab. Learn how we collect, use, and protect your information when you use our website and services.",
  openGraph: {
    title: "Privacy Policy — Ooplab",
    description: "Our policies regarding your data privacy and security.",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f5fbff] text-[#0f172a]">
      <div className="mx-auto w-full max-w-[1440px]">
        <Header />

        <section className="mx-4 mt-7 sm:mx-auto max-w-[1120px] overflow-hidden rounded-[28px] brand-gradient py-12 sm:py-16 text-white text-center relative">
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl -translate-x-1/2 -translate-y-1/2" />

          <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-white/5 blur-3xl translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10 max-w-[800px] mx-auto px-6">
            <h1 className="text-3xl font-bold sm:text-5xl">
              Privacy Policy
            </h1>

            <p className="mt-4 text-base text-white/90 sm:text-lg">
              Effective Date: July 13, 2026. Your privacy and trust are paramount to us.
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-20 px-6 sm:px-8 bg-white my-8 rounded-[28px] shadow-sm max-w-[1120px] mx-auto border border-gray-100">
          <div className="prose prose-slate max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#0b1220] mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 leading-7">
                We collect information you provide directly to us when filling out our contact forms, subscribing to our newsletter, or collaborating on projects. This includes names, email addresses, phone numbers, company details, and project requirements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0b1220] mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 leading-7">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-5 mt-2 text-gray-600 space-y-2">
                <li>Respond to your inquiries and deliver digital consulting services.</li>
                <li>Keep you updated with newsletters and announcements (when subscribed).</li>
                <li>Analyze website performance and optimize user experience.</li>
                <li>Fulfill legal obligations and prevent spam or malicious activity.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0b1220] mb-4">3. Data Sharing and Security</h2>
              <p className="text-gray-600 leading-7">
                Ooplab does not sell, rent, or trade your personal data. We implement industry-standard encryption and security protocols to safeguard your credentials and information. We only share details with trusted hosting, email newsletter, or communication utilities necessary to deliver our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0b1220] mb-4">4. Your Rights and Choices</h2>
              <p className="text-gray-600 leading-7">
                You can opt-out of our newsletter at any time by clicking the unsubscribe link or contacting us directly at <span className="font-semibold text-[#079447]">Ooplabhr@gmail.com</span>. You also have the right to request access to or deletion of any personal data we hold about you.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0b1220] mb-4">5. Updates to This Policy</h2>
              <p className="text-gray-600 leading-7">
                We may update our Privacy Policy periodically to reflect changes in our workflows or regulatory updates. We encourage you to check this page periodically for any modifications.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
