'use client';

import Footer from '../components/footer';
import Header from '../components/header';  
import ContactForm from '../components/contact-form';
import Image from "next/image";

export default function ContactPage() {
  return (
    <main>
        <div className="mx-auto w-full max-w-[1440px] px-5 py-7 sm:px-8 lg:px-20 lg:py-12">
    <Header />

      {/* Banner Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#fb2c36] to-[#8b1a23] py-16 sm:py-24 mt-7 rounded-[28px]">
        {/* Background elements */}
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-white/5 blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="relative z-10 mx-auto max-w-[1120px] px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-white">
              <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-4">
                Get in Touch
              </h1>
              <p className="text-xl text-white/90 mb-6">
                Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <i className="bi bi-envelope text-2xl"></i>
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-white/80">Ooplabhr@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <i className="bi bi-phone text-2xl"></i>
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-white/80">+91 7300637426</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <i className="bi bi-geo-alt text-2xl"></i>
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-white/80">246 Gyan Khand 1 Indrapuram</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5" />
              <Image
                src="/Assest/contact-us-oop.png"
                alt="Contact us"
                fill
                className=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-[1120px] px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form Column */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Other Ways to Contact */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Other ways to contact us
                </h3>
                <p className="text-gray-600 text-sm">
                  Connect with us through alternative channels to find what works best for you.
                </p>
              </div>

              <div className="space-y-6">
                {/* Find a location */}
                <div className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#fb2c36] hover:shadow-md transition">
                  <div className="flex items-start gap-3">
                    <i className="bi bi-geo-alt text-[#fb2c36] text-xl mt-1"></i>
                    <div>
                      <h4 className="font-semibold text-gray-900">Find a location</h4>
                      <p className="text-sm text-gray-600 mt-1">Discover our offices worldwide</p>
                    </div>
                  </div>
                </div>

    
                {/* Stay up to date */}
                <div className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#fb2c36] hover:shadow-md transition">
                  <div className="flex items-start gap-3">
                    <i className="bi bi-bell text-[#fb2c36] text-xl mt-1"></i>
                    <div>
                      <h4 className="font-semibold text-gray-900">Stay up to date</h4>
                      <p className="text-sm text-gray-600 mt-1">Subscribe to our newsletter</p>
                    </div>
                  </div>
                </div>

                {/* Follow us */}
                <div className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#fb2c36] hover:shadow-md transition">
                  <div className="flex items-start gap-3">
                    <i className="bi bi-share text-[#fb2c36] text-xl mt-1"></i>
                    <div>
                      <h4 className="font-semibold text-gray-900">Follow us on social media</h4>
                      <p className="text-sm text-gray-600 mt-1">Connect with us online</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
        </div>
  
    </main>
  );
}
