"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Mixers",
    href: "/mixers",
  },
  {
    label: "Recipes",
    href: "/recipes",
  },
    {
    label: "Booking",
    href: "/wedding",
  },
    {
    label: "Blog",
    href: "/blog",
  },
 
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav className="relative flex h-[64px] w-full items-center px-4 border-white/30
                    bg-white/[0.08]
                    backdrop-blur-md
                    sm:px-6 md:h-[86px] lg:px-[28px]">
        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex lg:gap-[76px]">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`
                font-sf-pro
                text-[15px]
                font-bold
                transition-colors
                duration-300
                
                ${
                  item.href === pathname
                    ? "text-[#FFD400]"
                    : "text-white hover:text-[#FFD400]"
                }
              `}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="flex h-10 w-10 items-center justify-center text-white md:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {menuOpen ? (
              <path d="M6 6L18 18M18 6L6 18" />
            ) : (
              <path d="M4 7H20M4 12H20M4 17H20" />
            )}
          </svg>
        </button>

        {/* Logo */}
        <Link
          href="/"
          aria-label="BarCraft"
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
          "
        >
          <Image
            src="/nav/nav-logo.png"
            alt="BarCraft"
            width={100}
            height={70}
            priority
            className="h-auto w-[80px] object-contain md:w-[100px]"
          />
        </Link>

{/* Search */}
        {/* <div className="ml-auto">
         <div
                className="
                    flex
                    h-[48px]
                    w-[372px]
                    items-center
                    rounded-full
                    border
                    border-white/30
                    bg-white
                  
                    px-[16px]
                "
                >
            <input
              type="text"
              placeholder="Search...."
              aria-label="Search"
              className="
                w-full
                bg-transparent
                text-[15px]
                font-medium
                text-black
                outline-none
                placeholder:text-grey
              "
            />
          </div>
        </div> */}
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="flex flex-col border-t border-white/10 bg-black/90 px-4 py-2 backdrop-blur-md sm:px-6 md:hidden"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`
                py-3
                font-sf-pro
                text-[16px]
                font-bold
                ${item.href === pathname ? "text-[#FFD400]" : "text-white"}
              `}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
      
    </header>
  );
}