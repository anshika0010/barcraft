"use client";

import Image from "next/image";
import Link from "next/link";

export default function WeddingHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}
      <Image
        src="/wedding/wedding-hero.png"
        alt="BarCraft wedding cocktails"
        fill
        priority
        sizes="100vw"
        className="
          object-cover
          object-center

          max-[900px]:object-[58%_center]
          max-[640px]:object-[62%_center]
        "
      />

      {/* =====================================================
          DARK OVERLAY
      ====================================================== */}
      <div className="absolute inset-0 bg-black/15" />

      {/* Right-side darkening for readability */}
      <div
        className="
          absolute
          inset-y-0
          right-0
          w-[58%]
          bg-gradient-to-l
          from-black/60
          via-black/25
          to-transparent

          max-[900px]:w-[70%]

          max-[640px]:w-full
          max-[640px]:bg-black/40
        "
      />

      {/* =====================================================
          BOTTOM GRADIENT
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-[32%]
          bg-gradient-to-t
          from-black
          via-black/55
          to-transparent
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div
        className="
          relative
          z-10
          flex
          min-h-screen
          items-center
          justify-end

          px-[44px]
          pb-[35px]
          pt-[115px]

          max-[1100px]:px-[32px]

          max-[900px]:px-7

          max-[640px]:
            items-end
            justify-center
            px-5
            pb-[55px]
            pt-[110px]
        "
      >
        <div
          className="
            w-full
            max-w-[585px]
            text-center

            max-[640px]:max-w-[520px]
          "
        >
          {/* =================================================
              HEADING
          ================================================== */}
          <h1
            className="
              font-movault
              text-[76px]
              uppercase
              leading-[0.82]
              tracking-[-1px]
              text-[#FFD400]

              xl:text-[84px]

              max-[1100px]:text-[68px]

              max-[900px]:text-[60px]

              max-[640px]:text-[52px]

              max-[430px]:text-[43px]
            "
          >
            10 WEDDINGS
            <br />
            1000 SERVINGS. FREE
          </h1>

          {/* =================================================
              DESCRIPTION
          ================================================== */}
          <p
            className="
              mx-auto
              mt-[21px]
              max-w-[525px]
              font-sf-pro
              text-[17px]
              leading-[1.2]
              text-white

              md:text-[18px]

              max-[640px]:text-[16px]

              max-[430px]:text-[15px]
            "
          >
            Register your wedding with BarCraft. Ten registered
            weddings will get 1000 BarCraft mixer servings in
            four flavours of your choice. No purchase required.
          </p>

          {/* =================================================
              CTA
          ================================================== */}
          <div className="mt-[38px]">
            <Link
              href="#register"
              className="
                inline-flex
                h-[52px]
                items-center
                justify-between
                bg-[#FFD400]
                px-[11px]
                pl-[14px]
                font-movault
                text-[28px]
                uppercase
                leading-none
                text-black

                transition-transform
                duration-300
                hover:scale-[1.02]

                max-[640px]:h-[50px]
                max-[640px]:text-[24px]

                max-[430px]:text-[21px]
              "
            >
              <span>
                REGISTER YOUR WEDDING
              </span>

              <span
                className="
                  ml-[26px]
                  flex
                  h-[40px]
                  w-[40px]
                  shrink-0
                  items-center
                  justify-center
                  bg-black
                  font-sf-pro
                  text-[24px]
                  text-white

                  max-[640px]:ml-[18px]
                  max-[640px]:h-[38px]
                  max-[640px]:w-[38px]
                "
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}