"use client";

import Image from "next/image";

export default function HowToMake({ data }) {
  const howToUse = data?.how_to_use;

  if (!howToUse) {
    return null;
  }

  // "How to make a Screwdriver" → "SCREWDRIVER"
  const drinkName = howToUse.title
    ?.replace(/^How to make a\s*/i, "")
    ?.trim();

  const steps = howToUse.steps || [];

  return (
    <section className="w-full bg-black px-5 py-[70px] text-white md:px-8 lg:px-[34px] lg:py-[90px]">

      {/* =====================================================
          HEADING
      ====================================================== */}
      <div className="max-w-[650px]">
        <h2
          className="
            font-movault
            text-[68px]
            uppercase
            leading-[0.84]
            tracking-[-1px]
            text-[#FF3F00]

            md:text-[82px]

            lg:text-[96px]

            xl:text-[100px]

            max-[640px]:text-[58px]

            max-[420px]:text-[48px]
          "
        >
          HOW TO MAKE A
          <br />
          {drinkName}
        </h2>

        <p
          className="
            mt-[28px]
            max-w-[630px]
            font-sf-pro
            text-[18px]
            font-normal
            leading-[1.35]
            text-white

            md:text-[19px]

            max-[640px]:mt-[22px]
            max-[640px]:text-[16px]
          "
        >
          {howToUse.description}
        </p>
      </div>

      {/* =====================================================
          STEPS
      ====================================================== */}
      <div
        className="
          mt-[55px]
          grid
          grid-cols-4

          lg:mt-[65px]

          max-[900px]:grid-cols-2

          max-[640px]:mt-[45px]
          max-[640px]:grid-cols-1
        "
      >
        {steps.map((text, index) => (
          <div
            key={`step-${index}`}
            className={`
              relative
              flex
              min-w-0
              flex-col
              items-center
              px-[25px]

              lg:px-[35px]

              max-[900px]:py-[35px]

              max-[640px]:border-b
              max-[640px]:border-white/30
              max-[640px]:py-[40px]
              max-[640px]:last:border-b-0

              ${
                index !== 0
                  ? "border-l border-white/60 max-[900px]:border-l-0"
                  : ""
              }

              ${
                index === 2
                  ? "max-[900px]:border-l max-[640px]:border-l-0"
                  : ""
              }
            `}
          >

            {/* =================================================
                ILLUSTRATION
            ================================================== */}
            <div
              className="
                relative
                flex
                h-[190px]
                w-full
                items-end
                justify-center

                md:h-[205px]

                lg:h-[220px]
              "
            >
              <Image
                src={`/mixers/steps/${index + 1}.png`}
                alt={text}
                width={300}
                height={230}
                className="
                  h-full
                  w-full
                  object-contain
                "
              />
            </div>

            {/* =================================================
                STEP LABEL
            ================================================== */}
            <div
              className="
                mt-[5px]
                flex
                h-[35px]
                min-w-[135px]
                items-center
                justify-center
                bg-[#FF3F00]
                px-[18px]
              "
            >
              <span
                className="
                  font-sf-pro
                  text-[18px]
                  font-bold
                  leading-none
                  text-black

                  md:text-[19px]
                "
              >
                STEP {index + 1}
              </span>
            </div>

            {/* =================================================
                STEP DESCRIPTION
            ================================================== */}
            <p
              className="
                mt-[24px]
                max-w-[280px]
                text-center
                font-sf-pro
                text-[18px]
                font-normal
                leading-[1.1]
                text-white

                md:text-[19px]

                max-[640px]:mt-[20px]
                max-[640px]:text-[17px]
              "
            >
              {text}
            </p>

          </div>
        ))}
      </div>

    </section>
  );
}