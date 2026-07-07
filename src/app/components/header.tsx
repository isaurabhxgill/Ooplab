
import Image from "next/image";

const navItems = ["Services", "About", "Case Studies", "Testimonials", "Contact"];

// Route mapping for navigation items
const getHref = (item: string): string => {
  return `/#${item.toLowerCase().replaceAll(" ", "-")}`;
};

export default function Header() {
  return (
    <header className="mx-auto flex h-16 w-full max-w-[1120px] items-center justify-between rounded-[10px] bg-white px-6 shadow-[0_18px_50px_rgba(15,23,42,0.03)] sm:h-20 sm:px-9">
      <a
        aria-label="Ooplab"
        className="flex items-center gap-1.5 text-[30px] font-bold tracking-[0] text-red-500 sm:text-xl"
        href="/"
      >
        <span aria-hidden="true">Ooplab</span>
      </a>

      <nav aria-label="Primary navigation" className="hidden items-center gap-10 md:flex">
        {navItems.map((item) => (
          <a
            className="text-sm font-medium text-[#667085] transition hover:text-red-500 hover:underline"
            href={getHref(item)}
            key={item}
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}
