import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <section
        className="mx-auto w-full max-w-[1120px] py-6 sm:py-10"
        id="contact"
      >
        <div className="relative overflow-hidden rounded-[28px] bg-[#fb2c36] px-8 py-12 text-white bg-gradient-to-r from-[#fb2c36] to-[#8b1a23] sm:px-14 sm:py-16">
          {/* Glow */}
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-black/20 blur-3xl" />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="max-w-3xl text-[34px] font-bold leading-tight sm:text-[44px]">
              Let&apos;s Build Your Next Big Product
            </h2>

            <a
              href="/contact"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-xl bg-white px-8 text-sm font-semibold text-[#111827] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-3">
        <div className="p-6">
       <a
               aria-label="Ooplab"
               className=""
               href="/"
             >
           <Image
         src="/Assest/Ologo.png" // Double check if your folder is named "Asset" or "Assest"
         alt="Ooplab Logo"
         width={300}           // Increased slightly so the sub-text remains legible
         height={170}         
         style={{ width: 'auto' }}
       />
             </a>

          <p className="mt-2 text-xl text-black font-bold text-neutral-600">
           
Building Scalable Digital Solutions for Modern Businesses
          </p>

        </div>
        <div className=" bg-gray-100 p-6">
          <h3 className="mb-7 text-2xl font-semibold">Company</h3>

          <ul className="space-y-3 text-sm text-neutral-600">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Articles</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
    
        <div className=" bg-[#ece9f60] p-6">
          <h3 className="text-2xl font-semibold">Discover More</h3>

          <p className="mt-6 text-sm leading-8 text-neutral-600">
            Keeping you informed
          </p>
          <button className="mt-2 inline-flex h-12 items-center justify-center rounded-xl bg-[#2f6ae9] px-8 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1  hover:shadow-xl">
            Subscribe
          </button>

          <div>
            <h4 className="mb-2 mt-6 text-base font-semibold">Follow Us</h4>

            <div className="flex gap-4 social-icons">
              <a
                className="flex h-14 w-14 items-center justify-center rounded-full border border-neutral-300 transition hover:border-[#fb2c36] hover:text-[#fb2c36]"
                href="https://www.linkedin.com/company/cgi/"
                title="Follow CGI on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin text-xl" aria-hidden="true"></i>
                <span className="sr-only">LinkedIn</span>
              </a>

              <a
                href="https://github.com"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-neutral-300 transition hover:border-[#fb2c36] hover:text-[#fb2c36]"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <i className="bi bi-github text-xl" aria-hidden="true"></i>
                <span className="sr-only">GitHub</span>
              </a>

              <a
                href="https://twitter.com"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-neutral-300 transition hover:border-[#fb2c36] hover:text-[#fb2c36]"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
              >
                <i className="bi bi-twitter-x text-xl" aria-hidden="true"></i>
                <span className="sr-only">Twitter</span>
              </a>

              <a
                href="https://instagram.com"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-neutral-300 transition hover:border-[#fb2c36] hover:text-[#fb2c36]"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <i className="bi bi-instagram text-xl" aria-hidden="true"></i>
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-200 bg-white py-4 text-center text-sm text-neutral-600">
        © 2026 OopLabs Inc.
      </div>
    </footer>
  );
}
