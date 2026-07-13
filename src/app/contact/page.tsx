import type { Metadata } from "next";
import Footer from '../components/footer';
import Header from '../components/header';
import ContactForm from '../components/contact-form';
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ooplab. Send us a message, book a consultation, or find us at our office in Indrapuram, India. We respond within one business day.",
  openGraph: {
    title: "Contact Ooplab — Get in Touch",
    description:
      "Reach out to start a project, ask a question, or book a consultation with the Ooplab team.",
    images: ["/Assest/contact-us-oop.png"],
  },
};

export default function ContactPage() {
  return (
    <main>
      <div className="mx-auto w-full max-w-[1440px]">
        <Header />

        {/* Banner Section */}
        <section className="relative mx-4 mt-7 overflow-hidden rounded-[28px] brand-gradient py-12 sm:mx-0 sm:py-24">
          {/* Background elements */}
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-white/5 blur-3xl translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10 mx-auto max-w-[1120px] px-6 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
              {/* Left: Text Content */}
              <div className="text-white">
                <h1 className="text-3xl font-bold leading-tight mb-4 sm:text-4xl lg:text-5xl">
                  Get in Touch
                </h1>
                <p className="text-base text-white/90 mb-6 sm:text-xl">
                  Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <i className="bi bi-envelope text-2xl" aria-hidden="true"></i>
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-white/80">Ooplabhr@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <i className="bi bi-phone text-2xl" aria-hidden="true"></i>
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-white/80">+91 7300637426</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <i className="bi bi-geo-alt text-2xl" aria-hidden="true"></i>
                    </div>
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-white/80">246 Gyan Khand 1 Indrapuram</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-2xl sm:h-80 md:h-96">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 to-white/5" />
                <Image
                  src="/Assest/contact-us-ooplab.png"
                  alt="Ooplab team at work — contact us"
                  fill
                  sizes="(max-width: 768px) 90vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-12 sm:py-24 bg-gray-50">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
              {/* Form Column */}
              <div className="lg:col-span-2">
                <ContactForm />
              </div>

              {/* Other Ways to Contact */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-bold mb-3 text-gray-900 sm:text-2xl">
                    Other ways to contact us
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Connect with us through alternative channels to find what works best for you.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Find a location */}
                  <div className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#079447] hover:shadow-md transition">
                    <div className="flex items-start gap-3">
                      <i className="bi bi-geo-alt text-[#079447] text-xl mt-1" aria-hidden="true"></i>
                      <div>
                        <h3 className="font-semibold text-gray-900">Find a location</h3>
                        <p className="text-sm text-gray-600 mt-1">Discover our offices worldwide</p>
                      </div>
                    </div>
                  </div>

                  {/* Stay up to date */}
                  <div className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#079447] hover:shadow-md transition">
                    <div className="flex items-start gap-3">
                      <i className="bi bi-bell text-[#079447] text-xl mt-1" aria-hidden="true"></i>
                      <div>
                        <h3 className="font-semibold text-gray-900">Stay up to date</h3>
                        <p className="text-sm text-gray-600 mt-1">Subscribe to our newsletter</p>
                      </div>
                    </div>
                  </div>

                  {/* Follow us */}
                  <div className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#079447] hover:shadow-md transition">
                    <div className="flex items-start gap-3">
                      <i className="bi bi-share text-[#079447] text-xl mt-1" aria-hidden="true"></i>
                      <div>
                        <h3 className="font-semibold text-gray-900">Follow us on social media</h3>
                        <p className="text-sm text-gray-600 mt-1">Connect with us online</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
