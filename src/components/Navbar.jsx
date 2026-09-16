"use client";

import Image from "next/image";
import Link from "next/link";

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
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Recipes",
    href: "/recipes",
  },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav className="relative flex h-[86px] w-full items-center px-[28px] border-white/30
                    bg-white/[0.08]
                    backdrop-blur-md">
        {/* Navigation */}
        <div className="flex items-center gap-[76px]">
          {navItems.map((item, index) => (
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
                  index === 0
                    ? "text-[#FFD400]"
                    : "text-white hover:text-[#FFD400]"
                }
              `}
            >
              {item.label}
            </Link>
          ))}
        </div>

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
            className="h-auto w-[100px] object-contain"
          />
        </Link>

        {/* Search */}
        <div className="ml-auto">
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
        </div>
      </nav>
    </header>
  );
}