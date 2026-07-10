
import Image from "next/image";

const navItems = ["Services", "Products", "About", "Book a call"];

// Route mapping for navigation items
const getHref = (item: string): string => {
  if (item.toLowerCase() === "about") return "/about";
  return `/#${item.toLowerCase().replaceAll(" ", "-")}`;
};

export default function Header() {
  return (
    <header className="mx-auto flex h-16 px-5 w-full items-center justify-between bg-white px-6 shadow-[0_18px_50px_rgba(15,23,42,0.03)] sm:h-20 sm:px-9">
      <a
        aria-label="Ooplab"
        className=""
        href="/"
      >
    <Image
  src="/Assest/Ologo.png" // Double check if your folder is named "Asset" or "Assest"
  alt="Ooplab Logo"
  width={170}           // Increased slightly so the sub-text remains legible
  height={120}         
  style={{ width: 'auto' }}
  
/
>
      </a>

      <nav aria-label="Primary navigation" className="hidden items-center gap-10 md:flex">
        {navItems.map((item) =>
          item === "Book a call" ? (
            <a
              key={item}
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-[#2f6ae9] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(47,106,233,0.2)] transition hover:bg-[#255bd3]"
              aria-label="Book a call"
            >
              {item}
            </a>
          ) : (
            <a
              className="text-base font-medium text-[#667085] transition hover:text-[#2f6ae9]"
              href={getHref(item)}
              key={item}
            >
              {item}
            </a>
          )
        )}
      </nav>
    </header>
  );
}
