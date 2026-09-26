"use client";

import Image from "next/image";
import { useState } from "react";

const STEPS = [
  {
    id: 1,
    title: "Fill It Generously",
    description:
      "The cold is half the craft. Start with a glass filled generously with plenty of ice. A well-chilled drink brings out the best in every sip, keeping your cocktail crisp, refreshing, and perfectly balanced from the first pour to the last.",
    image: "/home/how-to-mix/steps/1.png",
  },
  {
    id: 2,
    title: "Add Your Spirit, or Keep It Zero-Proof",
    description:
      "Make it your own. Pour 50ml of your favourite spirit for a classic cocktail experience, or skip the alcohol and add soda for a refreshing zero-proof serve. Either way, our mixer brings the flavour, balance, and character to every glass.",
    image: "/home/how-to-mix/steps/2.png",
  },
  {
    id: 3,
    title: "Top It Up with Your Barcraft Mixer",
    description:
      "Bring your drink to life with a generous pour of your Bartisans mixer. Crafted to complement your favourite spirit or shine on its own, our mixer adds layers of flavour, refreshing character, and the perfect finishing touch to your serve.",
    image: "/home/how-to-mix/steps/3.png",
  },
  {
    id: 4,
    title: "Stir Once, Garnish, Done.",
    description:
      "Give your drink a gentle stir to bring the spirit, mixer, and ice together in perfect harmony. Finish with your favourite garnish—a citrus twist, fresh herbs, or a slice of fruit—to add a final touch of flavour and flair.",
    image: "/home/how-to-mix/steps/4.png",
  },
];

export default function HowToMix() {
  const [activeStep, setActiveStep] = useState(0);

  const previousStep = () => {
    setActiveStep((current) =>
      current === 0 ? STEPS.length - 1 : current - 1
    );
  };

  const nextStep = () => {
    setActiveStep((current) =>
      current === STEPS.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="relative h-screen min-h-[680px] w-full overflow-hidden bg-black md:min-h-[760px]">
      {/* =====================================================
          FIXED BACKGROUND
      ====================================================== */}
      <div className="absolute inset-0">
        <Image
          src="/home/how-to-mix/how-to-mix.png"
          alt="How to mix a BarCraft cocktail"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Dim the image on narrow screens, where the steps sit over it */}
      <div className="pointer-events-none absolute inset-0 z-[5] bg-black/45 md:hidden" />

      {/* =====================================================
          TOP BLACK FADE
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-10
          h-[220px]
          bg-gradient-to-b
          from-black
          via-black/75
          to-transparent
        "
      />

      {/* =====================================================
          TITLE
      ====================================================== */}
      <div className="absolute left-4 top-[88px] z-30 sm:left-6 md:top-[36px] lg:left-[28px]">
        <h2
          className="
            font-movault
            text-[40px]
            font-normal
            uppercase
            leading-[0.9]
            text-brand-yellow
            sm:text-[50px]
            lg:text-[64px]
          "
        >
          How To Mix
        </h2>
      </div>

      {/* =====================================================
          STEP NAVIGATION / CONTENT
      ====================================================== */}
      <div
        className="
          absolute
          left-1/2
          top-[calc(50%+40px)]
          z-30
          flex
          w-[min(340px,calc(100%-32px))]
          -translate-x-1/2
          -translate-y-1/2
          flex-col
          items-center
          text-center
          text-white

          md:left-[4%]
          md:top-1/2
          md:w-[310px]
          md:translate-x-0

          xl:left-[5.5%]
          xl:w-[340px]
        "
      >
        {/* =================================================
            UP BUTTON
        ================================================== */}
        <button
          type="button"
          onClick={previousStep}
          aria-label="Previous step"
          className="
            mb-[38px]
            flex
            h-[28px]
            w-[28px]
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-brand-yellow
            text-black
            transition-transform
            duration-200
            hover:scale-110
          "
        >
          <svg
            viewBox="0 0 24 24"
            className="h-[15px] w-[15px]"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path
              d="M6 14L12 8L18 14"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* =================================================
            HORIZONTAL STEP STRIP
        ================================================== */}
        <div className="relative mb-[32px] h-[24px] w-[88px] overflow-hidden">
          <div
            className="
              absolute
              left-0
              top-0
              flex
              h-[24px]
              transition-transform
              duration-500
              ease-[cubic-bezier(0.65,0,0.35,1)]
            "
            style={{
              transform: `translateX(-${activeStep * 88}px)`,
            }}
          >
            {STEPS.map((step) => (
              <div
                key={step.id}
                className="
                  flex
                  h-[24px]
                  w-[88px]
                  shrink-0
                  items-center
                  justify-center
                  bg-brand-yellow
                "
              >
                <span className="font-sf-pro text-[13px] font-bold uppercase leading-none text-black">
                  Step {step.id}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* =================================================
            VERTICAL STEP CONTENT
        ================================================== */}
        <div className="relative h-[350px] w-full overflow-hidden md:h-[330px]">
          <div
            className="
              absolute
              left-0
              top-0
              w-full
              transition-transform
              duration-500
              ease-[cubic-bezier(0.65,0,0.35,1)]
            "
            style={{
              // Percent of the strip's own height, so each step can
              // change height per breakpoint without breaking the slide.
              transform: `translateY(-${(activeStep * 100) / STEPS.length}%)`,
            }}
          >
            {STEPS.map((step) => (
              <div
                key={step.id}
                className="
                  flex
                  h-[350px]
                  w-full
                  md:h-[330px]
                  flex-col
                  items-center
                "
              >
                {/* STEP IMAGE */}
                <div className="relative mb-[22px] h-[145px] w-[145px] shrink-0">
                  <Image
                    src={step.image}
                    alt=""
                    fill
                    sizes="145px"
                    className="object-contain"
                  />
                </div>

                {/* STEP TITLE */}
                <h3
                  className="
                    max-w-[330px]
                    font-sf-pro
                    text-[20px]
                    font-semibold
                    leading-[23px]
                    text-white
                  "
                >
                  {step.title}
                </h3>

                {/* STEP DESCRIPTION */}
                <p
                  className="
                    mt-[11px]
                    max-w-[320px]
                    font-sf-pro
                    text-[12px]
                    font-normal
                    leading-[15px]
                    md:text-[11px]
                    md:leading-[13px]
                    text-white
                  "
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* =================================================
            DOWN BUTTON
        ================================================== */}
        <button
          type="button"
          onClick={nextStep}
          aria-label="Next step"
          className="
            mt-[18px]
            flex
            h-[28px]
            w-[28px]
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-brand-yellow
            text-black
            transition-transform
            duration-200
            hover:scale-110
          "
        >
          <svg
            viewBox="0 0 24 24"
            className="h-[15px] w-[15px]"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path
              d="M6 10L12 16L18 10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}