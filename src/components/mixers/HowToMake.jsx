"use client";

import Image from "next/image";

// Illustrations available in /public/mixers/steps (1.png … 4.png)
const STEP_IMAGE_COUNT = 4;

export default function HowToMake({ data }) {
  const howToUse = data?.how_to_use;
  const step2 = data?.product.step2 ;
  const accent = data?.product.accent ; 
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
            style={{ color: accent }} // 🛠️ Safely handles runtime colors

          className="
            font-movault
            text-[68px]
            uppercase
            leading-[0.84]
            tracking-[-1px]
            

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
        style={{ "--step-count": steps.length }}
        className="
          mt-[45px]
          grid
          grid-cols-1

          sm:mt-[55px]
          sm:grid-cols-2

          lg:grid-cols-[repeat(var(--step-count),minmax(0,1fr))]

          lg:mt-[65px]
        "
      >
        {steps.map((text, index) => (
          <div
            key={`step-${index}`}
            className="
              relative
              flex
              min-w-0
              flex-col
              items-center
              px-[20px]
              py-[40px]

              max-sm:border-b
              max-sm:border-white/30
              max-sm:last:border-b-0

              sm:py-[35px]
              sm:max-lg:even:border-l
              sm:border-white/60

              lg:py-0
              lg:not-first:border-l

              xl:px-[35px]
            "
          >

            {/* =================================================
                ILLUSTRATION
            ================================================== */}
            <div
              className={`
                relative
                flex
                h-[190px]
                w-full
                items-end
                justify-center

                md:h-[205px]

                lg:h-[220px]
              "
            >{ index==1?
              

              <Image
                src={`${step2}`}
                alt={text}
                width={300}
                height={230}
                className="
                  h-full
                  w-full
                  object-contain
                "
              />

              
              :
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
              }
            </div>

            {/* =================================================
                STEP LABEL
            ================================================== */}
            <div
              style={{ backgroundColor: accent }} // 🛠️ Safely handles runtime colors

              className="
                mt-[5px]
                flex
                h-[35px]
                min-w-[120px]
                items-center
                justify-center
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