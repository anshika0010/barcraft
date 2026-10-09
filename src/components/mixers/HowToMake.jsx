"use client";

import Image from "next/image";

// Illustrations available in /public/mixers/steps (1.png … 4.png)
const STEP_IMAGE_COUNT = 4;

// Max steps per row on large screens; extra steps wrap to a new row
const MAX_LG_COLUMNS = 4;

export default function HowToMake({ data }) {
  const howToUse = data?.how_to_use;
  const step2 = data?.product?.step2;
  const accent = data?.product?.accent;

  if (!howToUse) {
    return null;
  }

  // "How to make a Screwdriver" → "SCREWDRIVER"
  const drinkName = howToUse.title
    ?.replace(/^How to make a\s*/i, "")
    ?.trim();

  const steps = howToUse.steps || [];
  const lgColumns = Math.min(steps.length, MAX_LG_COLUMNS) || 1;

  return (
    <section className="w-full overflow-hidden bg-black px-4 py-[50px] text-white sm:px-6 sm:py-[65px] md:px-8 lg:px-[34px] lg:py-[90px]">

      {/* =====================================================
          HEADING
      ====================================================== */}
      <div className="max-w-[650px]">
        <h2
          style={{ color: accent }} // 🛠️ Safely handles runtime colors
          className="
            font-movault
            text-[42px]
            uppercase
            leading-[0.84]
            tracking-[-1px]
            break-words

            min-[420px]:text-[50px]

            sm:text-[62px]

            md:text-[82px]

            lg:text-[96px]

            xl:text-[100px]
          "
        >
          HOW TO MAKE A
          <br />
          {drinkName}
        </h2>

        <p
          className="
            mt-[20px]
            max-w-[630px]
            font-sf-pro
            text-[15px]
            font-normal
            leading-[1.35]
            text-white

            sm:mt-[24px]
            sm:text-[17px]

            md:mt-[28px]
            md:text-[19px]
          "
        >
          {howToUse.description}
        </p>
      </div>

      {/* =====================================================
          STEPS
      ====================================================== */}
      <div
        style={{ "--lg-cols": lgColumns }}
        className="
          mt-[35px]
          grid
          grid-cols-1

          sm:mt-[50px]
          sm:grid-cols-2
          sm:gap-y-[30px]

          lg:mt-[65px]
          lg:grid-cols-[repeat(var(--lg-cols),minmax(0,1fr))]
          lg:gap-y-[50px]
        "
      >
        {steps.map((text, index) => {
          const imageSrc =
            index === 1 && step2
              ? step2
              : `/mixers/steps/${(index % STEP_IMAGE_COUNT) + 1}.png`;

          // Divider on the left of every step that isn't first in its row
          const smBorder = index % 2 !== 0 ? "sm:border-l" : "sm:border-l-0";
          const lgBorder =
            index % lgColumns !== 0 ? "lg:border-l" : "lg:border-l-0";

          return (
            <div
              key={`step-${index}`}
              className={`
                relative
                flex
                min-w-0
                flex-col
                items-center
                px-4
                py-[32px]
                border-white/30

                max-sm:border-b
                max-sm:last:border-b-0

                sm:px-[20px]
                sm:py-[10px]
                sm:border-white/60
                ${smBorder}

                lg:py-0
                ${lgBorder}

                xl:px-[35px]
              `}
            >

              {/* =================================================
                  ILLUSTRATION
              ================================================== */}
              <div
                className="
                  relative
                  flex
                  h-[160px]
                  w-full
                  max-w-[300px]
                  items-end
                  justify-center

                  sm:h-[180px]

                  md:h-[205px]

                  lg:h-[220px]
                "
              >
                <Image
                  src={imageSrc}
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
                style={{ backgroundColor: accent }} // 🛠️ Safely handles runtime colors
                className="
                  mt-[5px]
                  flex
                  h-[32px]
                  min-w-[110px]
                  items-center
                  justify-center
                  px-[16px]

                  md:h-[35px]
                  md:min-w-[120px]
                  md:px-[18px]
                "
              >
                <span
                  className="
                    font-sf-pro
                    text-[16px]
                    font-bold
                    leading-none
                    text-black

                    sm:text-[18px]

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
                  mt-[18px]
                  max-w-[280px]
                  text-center
                  font-sf-pro
                  text-[16px]
                  font-normal
                  leading-[1.15]
                  text-white

                  sm:mt-[22px]
                  sm:text-[17px]

                  md:mt-[24px]
                  md:text-[19px]
                "
              >
                {text}
              </p>

            </div>
          );
        })}
      </div>

    </section>
  );
}
