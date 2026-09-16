"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const MARQUEE_TEXT = "2 SERVE BOTTLE";

// Both bottle PNGs are 1024x1536 (2:3). Sizing lives ONLY here —
// the <img> tags below fill this box (object-contain), so this
// single value is the source of truth for bottle size at every
// screen width instead of fighting with fixed px/vh classes.
const BOTTLE_WIDTH = "clamp(260px, 24vw, 480px)";
const BOTTLE_ASPECT = "1024 / 1536";

export default function TwoServeBottle() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="relative h-screen w-full overflow-hidden">
        {/* =====================================================
            BACKGROUND
        ====================================================== */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/home/2-serve-bottle/2-serve-bottle.png"
            alt="BarCraft bar scene"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* =====================================================
            BLACK FADE
        ====================================================== */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            z-40
            h-[210px]
            bg-gradient-to-b
            from-black
            via-black/90
            to-transparent
          "
        />

        {/* =====================================================
            GREEN BOTTLE
            BEHIND MARQUEE — pulled in closer to center
        ====================================================== */}
        <div
          className="absolute bottom-[-5px] z-10"
          style={{
            left: "calc(50% - 9vw)",
            transform: "translateX(-50%)",
            width: BOTTLE_WIDTH,
            aspectRatio: BOTTLE_ASPECT,
          }}
        >
          <img
            src="/home/2-serve-bottle/green-bottle.png"
            alt="BarCraft Mojito mixer"
            className="h-full w-full object-contain object-bottom"
          />
        </div>

        {/* =====================================================
            MARQUEE
            BETWEEN GREEN AND RED BOTTLES
        ====================================================== */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-[65%]
            z-20
            -translate-y-1/2
            overflow-hidden
            md:top-[55%]
          "
        >
          <MarqueeText />
        </div>

        {/* =====================================================
            RED BOTTLE
            IN FRONT OF MARQUEE — pulled in closer to center
        ====================================================== */}
        <div
          className="absolute bottom-[-5px] z-30"
          style={{
            left: "calc(50% + 6vw)",
            transform: "translateX(-50%)",
            width: BOTTLE_WIDTH,
            aspectRatio: BOTTLE_ASPECT,
          }}
        >
          <img
            src="/home/2-serve-bottle/red-bottle.png"
            alt="BarCraft Cosmopolitan mixer"
            className="h-full w-full object-contain object-bottom"
          />
        </div>

        {/* =====================================================
            DESCRIPTION
        ====================================================== */}
        <div
          className="
            absolute
            bottom-[60px]
            left-[65%]
            z-50
            w-[390px]
            p-[16px]

            max-[1200px]:left-[67%]
            max-[1200px]:w-[330px]

            max-[900px]:left-[68%]
            max-[900px]:w-[280px]

            max-[600px]:bottom-[35px]
            max-[600px]:left-[20px]
            max-[600px]:w-[calc(100%-40px)]
          "
        >
          <p
            className="
              font-sf-pro
              text-sm
              font-bold
              leading-[21.02px]
              text-white
              [text-shadow:0_2px_10px_rgba(0,0,0,0.85)]

              max-[900px]:text-[17px]
              max-[900px]:leading-[18px]

              max-[600px]:text-[15px]
              max-[600px]:leading-[17px]
            "
          >
            Crafted for intimate moments and effortless entertaining, our
            2-serve cocktail mixer bottles bring bar-inspired flavour to your
            glass. Just pour, mix, and enjoy a perfectly balanced cocktail
            made for sharing.
          </p>

          <button
            type="button"
            className="
              mt-[18px]
              h-[32px]
              min-w-[88px]
              bg-brand-yellow
              px-[16px]
              font-sf-pro
              text-[13px]
              font-bold
              leading-none
              text-black
              transition-transform
              duration-200
              hover:scale-105
            "
          >
            View all
          </button>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   MARQUEE TEXT
========================================================= */

function MarqueeText() {
  const items = Array.from({ length: 6 });

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex w-max whitespace-nowrap"
        initial={{ x: "0%" }}
        animate={{ x: "-16.666666%" }}
        transition={{
          duration: 5,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {items.map((_, index) => (
          <div
            key={index}
            className="
              shrink-0
              px-[25px]
              font-movault
              text-6xl
              uppercase
              tracking-normal
              text-white
              md:text-8xl
            "
          >
            {MARQUEE_TEXT}
          </div>
        ))}
      </motion.div>
    </div>
  );
}