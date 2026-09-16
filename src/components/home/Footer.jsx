"use client";

import Image from "next/image";
import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Terms of Service", href: "#" },
  { label: "Refund Policy", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Shipping Policy", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Contact us", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative min-h-[560px] w-full overflow-hidden bg-black">
      {/* =====================================================
          TOP FOOTER AREA
      ====================================================== */}
      <div
        className="
          relative
          z-20
          flex
          min-h-[225px]
          items-start
          justify-between
          px-[30px]
          pt-[48px]

          max-[800px]:flex-col
          max-[800px]:gap-[45px]
        "
      >
        {/* =================================================
            FOOTER LINKS
        ================================================== */}
        <nav className="flex flex-col gap-[9px]">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="
                font-sf-pro
                text-[13px]
                leading-[17px]
                font-normal
                text-white/50
                transition-colors
                duration-200
                hover:text-white
                gap-[11px]   
              "
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* =================================================
            NEWSLETTER
        ================================================== */}
        <div
          className="
            mr-[23px]
            w-[500px]
            
            max-[1000px]:w-[400px]
            max-[800px]:mr-0
            max-[800px]:w-full
            max-[800px]:max-w-[500px]
          "
        >
          <p
            className="
              mb-[17px]
              font-sf-pro
              text-[11px]
              font-bold
              uppercase
              leading-none
              text-white/65
            "
          >
            Your next cocktail awaits
          </p>

          <form
            className="flex h-[42px] w-full"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="email"
              placeholder="Email"
              aria-label="Email address"
              className="
                min-w-0
                flex-1
                border
                border-white/65
                bg-transparent
                px-[11px]
                font-sf-pro
                text-[10px]
                text-white
                outline-none
                placeholder:text-white
              "
            />

            <button
              type="submit"
              className="
                ml-[5px]
                w-[100px]
                shrink-0
                bg-brand-yellow
                font-sf-pro
                text-[10px]
                font-medium
                text-black
                transition-transform
                duration-200
                hover:scale-[1.02]
              "
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* =====================================================
          DIVIDER
      ====================================================== */}
      <div className="relative z-20 mx-[5px] h-px bg-white/35" />

      {/* =====================================================
          COPYRIGHT / SOCIALS
      ====================================================== */}
      <div
        className="
          relative
          z-20
          flex
          min-h-[80px]
          items-center
          justify-between
          px-[30px]

          max-[800px]:flex-col
          max-[800px]:items-start
          max-[800px]:gap-[20px]
          max-[800px]:py-[20px]
        "
      >
        {/* LEFT */}
        <div className="flex items-center gap-[42px]">
          <p
            className="
              font-sf-pro
              text-[12px]
              font-normal
              leading-none
              text-white/40
            "
          >
            © 2026 Round The Cocktails Pvt Ltd | All rights reserved
          </p>

          <Link
            href="#"
            className="
              font-sf-pro
              text-[12px]
              font-normal
              leading-none
              text-white/40
              transition-colors
              hover:text-white
            "
          >
            Privacy Policy
          </Link>
        </div>

        {/* SOCIAL ICONS */}
        <div className="mr-[23px] flex items-center gap-[32px]">
          <PinterestIcon />
          <InstagramIcon />
          <XIcon />
          <YoutubeIcon />
        </div>
      </div>

      {/* =====================================================
          TAGLINE
      ====================================================== */}
      <div className="relative z-20 px-[30px] pt-[5px]">
        <p
          className="
            max-w-[190px]
            font-sf-pro
            text-[10px]
            font-normal
            leading-[12px]
            text-white/40
          "
        >
          High quality cocktails mixers, because
          <br />
          you deserve.
        </p>
      </div>

      {/* =====================================================
          GIANT BARCRAFT LOGO
      ====================================================== */}

      {/* 
          IMPORTANT:
          Put your WHITE footer logo here:
          
          public/footer.png

          If you have placed it somewhere else, change the
          src below accordingly.
      */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[-1px]
          left-1/2
          z-10
          h-[310px]
          w-[1050px]
          -translate-x-1/2

          max-[1100px]:bottom-[-30px]
          max-[1100px]:h-[270px]
          max-[1100px]:w-[900px]

          max-[800px]:bottom-[-35px]
          max-[800px]:h-[210px]
          max-[800px]:w-[700px]

          max-[600px]:bottom-[-3px]
          max-[600px]:h-[160px]
          max-[600px]:w-[540px]
        "
      >
        <Image
          src="/home/footer/footer.png"
          alt=""
          fill
          sizes="1050px"
          className="
            object-contain
        opacity-[0.1]
          "
        />
      </div>
    </footer>
  );
}

/* =========================================================
   SOCIAL ICONS
========================================================= */

function PinterestIcon() {
  return (
    <a
      href="#"
      aria-label="Pinterest"
      className="text-white/55 transition-colors hover:text-white"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-[22px] w-[22px]"
        fill="currentColor"
      >
        <path d="M12 2a10 10 0 0 0-3.65 19.31c-.08-1.64-.01-3.61.41-5.48l1.06-4.49s-.27-.54-.27-1.34c0-1.25.73-2.18 1.64-2.18.77 0 1.14.58 1.14 1.27 0 .78-.5 1.95-.76 3.03-.22.9.45 1.63 1.34 1.63 1.61 0 2.85-1.7 2.85-4.15 0-2.17-1.56-3.69-3.78-3.69-2.57 0-4.08 1.93-4.08 3.92 0 .78.3 1.62.67 2.08.07.08.08.15.06.28l-.25 1.03c-.04.17-.14.21-.32.13-1.19-.55-1.93-2.28-1.93-3.68 0-3 2.18-5.76 6.28-5.76 3.3 0 5.87 2.35 5.87 5.49 0 3.28-2.07 5.92-4.94 5.92-.96 0-1.86-.5-2.17-1.1l-.59 2.25c-.21.83-.78 1.87-1.16 2.5.87.27 1.78.41 2.73.41A10 10 0 1 0 12 2Z" />
      </svg>
    </a>
  );
}

function InstagramIcon() {
  return (
    <a
      href="#"
      aria-label="Instagram"
      className="text-white/55 transition-colors hover:text-white"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-[22px] w-[22px] fill-none stroke-current"
        strokeWidth="1.8"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle
          cx="17.5"
          cy="6.5"
          r="0.8"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    </a>
  );
}

function XIcon() {
  return (
    <a
      href="#"
      aria-label="X"
      className="text-white/55 transition-colors hover:text-white"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-[22px] w-[22px]"
      >
        <path
          d="M5 4L19 20M19 4L5 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    </a>
  );
}

function YoutubeIcon() {
  return (
    <a
      href="#"
      aria-label="YouTube"
      className="text-white/55 transition-colors hover:text-white"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-[22px] w-[22px]"
      >
        <path
          d="M21 7.2a2.8 2.8 0 0 0-2-2C17.2 4.7 12 4.7 12 4.7s-5.2 0-7 .5a2.8 2.8 0 0 0-2 2C2.5 9 2.5 12 2.5 12s0 3 .5 4.8a2.8 2.8 0 0 0 2 2c1.8.5 7 .5 7 .5s5.2 0 7-.5a2.8 2.8 0 0 0 2-2c.5-1.8.5-4.8.5-4.8s0-3-.5-4.8Z"
          fill="currentColor"
        />
        <path d="M10 9l5 3-5 3V9Z" fill="black" />
      </svg>
    </a>
  );
}