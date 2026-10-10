"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  // { label: "FAQs", href: "#" },
  // { label: "Contact us", href: "#" },
];

const SOCIAL_LINKS = [
  {
    label: "Pinterest",
    href: "https://in.pinterest.com/barcraft_official/",
    Icon: PinterestIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/barcraft_official/",
    Icon: InstagramIcon,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/barcraft_official", // <-- confirm handle
    Icon: XIcon,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@barcraft_official",
    Icon: YoutubeIcon,
  },
];


export default function Footer() {
  return (
    <footer
      className="
        relative
        w-full
        overflow-hidden
        bg-black
      "
    >
      {/* =====================================================
          TOP FOOTER AREA
      ====================================================== */}
      <div
        className="
          relative z-20
          flex flex-col gap-8
          px-4 pt-10
          sm:px-6
          md:flex-row md:items-start md:justify-between md:gap-10
          lg:px-[30px] lg:pt-[48px]
        "
      >
        {/* FOOTER LINKS */}
        {FOOTER_LINKS.length > 0 && (
          <nav className="flex flex-col gap-[9px]">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="
                  font-sf-pro text-[13px] leading-[17px] font-normal
                  text-white/50 transition-colors duration-200
                  hover:text-white
                "
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}

        {/* BACK TO TOP */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="
            group flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center
            self-end rounded-full border border-white/35
            text-white/55 transition-colors duration-200
            hover:border-white hover:text-white
            md:self-start
          "
        >
          <ArrowUp
            size={20}
            strokeWidth={1.8}
            className="transition-transform duration-200 group-hover:-translate-y-0.5"
          />
        </button>
      </div>

      {/* =====================================================
          DIVIDER
      ====================================================== */}
      <div className="relative z-20 mx-[5px] mt-10 h-px bg-white/35 md:mt-[60px]" />

      {/* =====================================================
          COPYRIGHT / SOCIALS
      ====================================================== */}
      <div
        className="
          relative z-20
          flex flex-col-reverse items-start gap-5
          px-4 py-6
          sm:px-6
          md:min-h-[80px] md:flex-row md:items-center md:justify-between md:py-0
          lg:px-[30px]
        "
      >
        <p
          className="
            font-sf-pro text-[11px] font-normal leading-[1.4]
            text-white/40
            sm:text-[12px]
          "
        >
          © 2026| All rights reserved
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-6 sm:gap-8 md:mr-[23px]">
          {SOCIAL_LINKS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-white/55 transition-colors duration-200 hover:text-white"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      {/* =====================================================
          TAGLINE
      ====================================================== */}
      <div className="relative z-20 px-4 sm:px-6 lg:px-[30px] md:pt-[5px]">
        <p
          className="
            max-w-[220px] font-sf-pro text-[10px] font-normal
            leading-[13px] text-white/40
          "
        >
          High quality cocktails mixers, because
          <br />
          you deserve.
        </p>
      </div>

      {/* =====================================================
          GIANT BARCRAFT LOGO
          Sits in normal flow at the very bottom, full width;
          aspect ratio matches footer.png (7658x1607).
      ====================================================== */}
      <div
        className="
          pointer-events-none
          relative z-10 mt-13
          aspect-[7658/1740]
          w-full
        "
      >
        <Image
          src="/home/footer/footer.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom "
        />
      </div>
    </footer>
  );
}



function PinterestIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.65 19.31c-.08-1.64-.01-3.61.41-5.48l1.06-4.49s-.27-.54-.27-1.34c0-1.25.73-2.18 1.64-2.18.77 0 1.14.58 1.14 1.27 0 .78-.5 1.95-.76 3.03-.22.9.45 1.63 1.34 1.63 1.61 0 2.85-1.7 2.85-4.15 0-2.17-1.56-3.69-3.78-3.69-2.57 0-4.08 1.93-4.08 3.92 0 .78.3 1.62.67 2.08.07.08.08.15.06.28l-.25 1.03c-.04.17-.14.21-.32.13-1.19-.55-1.93-2.28-1.93-3.68 0-3 2.18-5.76 6.28-5.76 3.3 0 5.87 2.35 5.87 5.49 0 3.28-2.07 5.92-4.94 5.92-.96 0-1.86-.5-2.17-1.1l-.59 2.25c-.21.83-.78 1.87-1.16 2.5.87.27 1.78.41 2.73.41A10 10 0 1 0 12 2Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] fill-none stroke-current" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[20px] w-[20px]" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" aria-hidden="true">
      <path
        d="M21 7.2a2.8 2.8 0 0 0-2-2C17.2 4.7 12 4.7 12 4.7s-5.2 0-7 .5a2.8 2.8 0 0 0-2 2C2.5 9 2.5 12 2.5 12s0 3 .5 4.8a2.8 2.8 0 0 0 2 2c1.8.5 7 .5 7 .5s5.2 0 7-.5a2.8 2.8 0 0 0 2-2c.5-1.8.5-4.8.5-4.8s0-3-.5-4.8Z"
        fill="currentColor"
      />
      <path d="M10 9l5 3-5 3V9Z" fill="black" />
    </svg>
  );
}