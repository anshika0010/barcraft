"use client";

import Image from "next/image";
import Link from "next/link";

export default function ComingSoon() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-15%]
          top-[-20%]
          h-[750px]
          w-[750px]
          rounded-full
          bg-[#FF7504]/10
          blur-[140px]

          max-[700px]:h-[450px]
          max-[700px]:w-[450px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-20%]
          left-[-10%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#FF7504]/[0.06]
          blur-[120px]
        "
      />


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <section
        className="
          relative
          z-10
          flex
          min-h-screen
          w-full
          items-center
          px-[72px]
          pb-[70px]
          pt-[130px]

          max-[1100px]:px-[50px]

          max-[800px]:px-7
          max-[800px]:pt-[115px]

          max-[500px]:px-5
          max-[500px]:pb-[45px]
        "
      >

        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1440px]
            grid-cols-[1fr_0.8fr]
            items-center
            gap-[50px]

            max-[800px]:grid-cols-1
          "
        >

          {/* =================================================
              LEFT SIDE
          ================================================== */}
          <div className="relative z-20">

            {/* Small label */}

            <div
              className="
                mb-[22px]
                inline-flex
                items-center
                bg-[#701D02]
                px-[15px]
                py-[8px]
              "
            >
              <span
                className="
                  font-movault
                  text-[18px]
                  uppercase
                  leading-none
                  text-[#FFAB98]
                "
              >
                Bartender Inspired
              </span>
            </div>


            {/* Main heading */}

            <h1
              className="
                max-w-[900px]
                font-movault
                text-[120px]
                uppercase
                leading-[0.76]
                tracking-[-2px]
                text-[#FF7504]

                xl:text-[135px]

                max-[1100px]:text-[105px]

                max-[900px]:text-[88px]

                max-[800px]:max-w-[700px]
                max-[800px]:text-[82px]

                max-[600px]:text-[68px]

                max-[430px]:text-[56px]
              "
            >
              COMING
              <br />
              SOON
            </h1>


            {/* Description */}

            <p
              className="
                mt-[30px]
                max-w-[590px]
                font-sf-pro
                text-[19px]
                font-normal
                leading-[1.35]
                text-white/90

                max-[800px]:text-[18px]

                max-[500px]:text-[16px]
              "
            >
              Something worth pouring is on its way.
              BarCraft Crafted Cocktail Mixers are made to
              bring the character of a well-crafted cocktail
              to every pour.
            </p>


            {/* Accent line */}

            <div className="mt-[32px] h-[2px] w-[120px] bg-[#FF7504]" />


            {/* CTA area */}

            <div
              className="
                mt-[28px]
                flex
                items-center
                gap-[14px]
                flex-wrap
              "
            >

              <Link
                href="/"
                className="
                  inline-flex
                  h-[52px]
                  items-center
                  justify-center
                  bg-[#FF7504]
                  px-[26px]
                  font-sf-pro
                  text-[15px]
                  font-bold
                  uppercase
                  tracking-[0.3px]
                  text-black
                  transition-transform
                  duration-300
                  hover:scale-[1.02]
                "
              >
                BACK TO HOME
              </Link>

              <span
                className="
                  font-sf-pro
                  text-[13px]
                  uppercase
                  tracking-[1px]
                  text-white/45
                "
              >
                Crafted for better pours.
              </span>

            </div>

          </div>


          {/* =================================================
              RIGHT SIDE — BOTTLE
          ================================================== */}

          <div
            className="
              relative
              flex
              min-h-[700px]
              items-center
              justify-center

              max-[1100px]:min-h-[620px]

              max-[900px]:min-h-[560px]

              max-[800px]:order-first
              max-[800px]:min-h-[500px]
            "
          >

            {/* Orange halo */}

            <div
              className="
                absolute
                h-[420px]
                w-[420px]
                rounded-full
                bg-[#FF7504]/10
                blur-[60px]

                max-[800px]:h-[320px]
                max-[800px]:w-[320px]
              "
            />


            {/* Bottle */}

            <div
              className="
                relative
                h-[700px]
                w-[470px]
                animate-coming-bottle

                max-[1100px]:h-[630px]
                max-[1100px]:w-[420px]

                max-[900px]:h-[560px]
                max-[900px]:w-[380px]

                max-[800px]:h-[500px]
                max-[800px]:w-[340px]

                max-[500px]:h-[440px]
                max-[500px]:w-[300px]
              "
            >
              <Image
                src="/mixers/IngredientsNutrition/NNN-1.png"
                alt="BarCraft Screwdriver Mixer"
                fill
                priority
                sizes="
                  (max-width: 500px) 300px,
                  (max-width: 800px) 340px,
                  (max-width: 1100px) 420px,
                  470px
                "
                className="
                  object-contain
                  drop-shadow-[0_30px_45px_rgba(0,0,0,0.55)]
                "
              />
            </div>


            {/* Vertical text */}

            <div
              className="
                absolute
                right-[12px]
                top-1/2
                -translate-y-1/2
                rotate-90
                origin-center

                max-[800px]:right-[-8px]

                max-[500px]:hidden
              "
            >
              <span
                className="
                  font-movault
                  text-[22px]
                  uppercase
                  tracking-[1px]
                  text-[#FF7504]
                "
              >
                BARCRAFT / CRAFTED COCKTAIL MIXER
              </span>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          BOTTOM INFORMATION
      ====================================================== */}
      <div
        className="
          absolute
          inset-x-0
          bottom-[22px]
          z-20
          flex
          items-center
          justify-between
          px-[72px]

          max-[1100px]:px-[50px]

          max-[800px]:px-7

          max-[500px]:px-5
        "
      >

        <p
          className="
            font-sf-pro
            text-[11px]
            uppercase
            tracking-[1.5px]
            text-white/35
          "
        >
          © 2026 BarCraft
        </p>

        <p
          className="
            font-sf-pro
            text-[11px]
            uppercase
            tracking-[1.5px]
            text-white/35

            max-[500px]:hidden
          "
        >
          Crafted Cocktail Mixer
        </p>

      </div>

    </main>
  );
}