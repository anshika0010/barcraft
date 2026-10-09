"use client";

import Image from "next/image";
import {
  UserRoundCheck,
  MousePointer2,
  ClipboardList,
  GlassWater,
} from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "REGISTER",
    description:
      "Register with your wedding date, venue and number of guests.",
    Icon: UserRoundCheck,
  },
  {
    number: "02",
    title: "FLAVOUR",
    description:
      "Choose four BarCraft flavours.",
    Icon: MousePointer2,
  },
  {
    number: "03",
    title: "INSTRUCTIONS",
    description:
      "We deliver the mixer with simple preparation instructions.",
    Icon: ClipboardList,
  },
  {
    // Kept as "03" because that is how it appears in the supplied reference.
    number: "03",
    title: "CHOOSE DRINK",
    description:
      "You bring the alcohol. Book soda, ice, glasses and bartenders with us if you need them.",
    Icon: GlassWater,
  },
];

export default function WeddingHowItWorks() {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-black
        px-[30px]
        pb-[90px]
        pt-[45px]

        lg:px-[30px]
        lg:pb-[90px]

        md:px-6
        md:pt-[55px]

        max-[700px]:px-5
        max-[700px]:pb-[70px]
        max-[700px]:pt-[50px]
      "
    >
      <div className="mx-auto w-full max-w-[1380px]">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="flex flex-col items-center text-center">

          <div
            className="
              inline-flex
              h-[23px]
              items-center
              justify-center
              rounded-full
              bg-[#FFD400]
              px-[30px]

              max-[500px]:h-[21px]
              max-[500px]:px-[25px]
            "
          >
            <span
              className="
                font-sf-pro
                text-[14px]
                font-medium
                leading-none
                text-black

                max-[500px]:text-[12px]
              "
            >
              Process
            </span>
          </div>

          <h2
            className="
              mt-[23px]
              font-movault
              text-[82px]
              uppercase
              leading-[0.82]
              tracking-wide
              text-[#FFD400]

              xl:text-[88px]

              lg:text-[78px]

              md:text-[68px]

              max-[700px]:text-[58px]

              max-[500px]:text-[48px]
            "
          >
            HOW IT WORKS
          </h2>

        </div>


        {/* =====================================================
            CONTENT
        ====================================================== */}

        <div
          className="
            mt-[70px]
            grid
            grid-cols-[1fr_0.98fr]
            gap-[62px]

            xl:gap-[70px]

            lg:gap-[50px]

            md:mt-[60px]

            max-[900px]:grid-cols-1
            max-[900px]:gap-[60px]

            max-[700px]:mt-[45px]
            max-[700px]:gap-[45px]
          "
        >

          {/* =================================================
              IMAGE
          ================================================== */}

          <div
            className="
              relative
              h-[545px]
              w-full
              overflow-hidden

              max-[1100px]:h-[500px]

              max-[900px]:h-auto
              max-[900px]:aspect-[1.16]

              max-[700px]:aspect-[1.1]

              max-[500px]:aspect-[0.95]
            "
          >
            <Image
              src="/wedding/how-it-works.png"
              alt="BarCraft wedding cocktails"
              fill
              sizes="
                (max-width: 900px) 100vw,
                50vw
              "
              className="
                object-cover
                object-center
              "
            />
          </div>


          {/* =================================================
              PROCESS TIMELINE
          ================================================== */}

          <div className="relative">

            {/* Vertical line */}

              <div
                className="
                  absolute
                  left-[129px]
                  top-[15px]
                  bottom-[8px]
                  w-[2px]
                  bg-[#FFD400]
                  md:h-[400px]
                  max-[700px]:left-[108px]

                  max-[500px]:left-[92px]
                "
              />


            <div className="flex flex-col gap-[52px]">

              {STEPS.map((step) => {
                const Icon = step.Icon;

                return (
                      <div
                        key={`${step.number}-${step.title}`}

                        className="
                          relative
                          grid
                          grid-cols-[108px_1fr]
                          items-start
                          gap-[46px]

                          max-[700px]:grid-cols-[88px_1fr]
                          max-[700px]:gap-[38px]

                          max-[500px]:grid-cols-[72px_1fr]
                          max-[500px]:gap-[32px]
                        "
                      >

             {/* DOTS */}
                         <span
                        className="
                          absolute
                          left-[130px]
                          top-[24px]
                          z-20
                          h-[12px]
                          w-[12px]
                          -translate-x-1/2
                          rounded-full
                          bg-[#FFD400]

                          max-[700px]:left-[108px]
                          max-[700px]:h-[11px]
                          max-[700px]:w-[11px]

                          max-[500px]:left-[92px]
                          max-[500px]:h-[10px]
                          max-[500px]:w-[10px]
                        "
                      />
                    {/* =================================================
                        ICON
                    ================================================== */}

                    <div className="relative z-10 flex justify-center">

                      <div
                        className="
                          flex
                          h-[54px]
                          w-[54px]
                          items-center
                          justify-center
                          rounded-full
                          bg-[#FFD400]

                          max-[700px]:h-[48px]
                          max-[700px]:w-[48px]

                          max-[500px]:h-[42px]
                          max-[500px]:w-[42px]
                        "
                      >
                        <Icon
                          size={29}
                          strokeWidth={1.9}
                          className="
                            text-black

                            max-[700px]:h-[25px]
                            max-[700px]:w-[25px]

                            max-[500px]:h-[22px]
                            max-[500px]:w-[22px]
                          "
                        />
                      </div>

                    </div>


                    {/* =================================================
                        CONTENT
                    ================================================== */}

                    <div className="pt-[5px]">

                      <h3
                        className="
                          font-movault
                          text-[31px]
                          uppercase
                          leading-[0.86]
                          tracking-wide
                          text-[#FFD400]

                          lg:text-[29px]

                          max-[700px]:text-[27px]

                          max-[500px]:text-[24px]
                        "
                      >
                        {step.number} {step.title}
                      </h3>

                      <p
                        className="
                          mt-[11px]
                          max-w-[470px]
                          font-sf-pro
                          text-[17px]
                          leading-[1.23]
                          text-white

                          lg:text-[16px]

                          max-[700px]:text-[16px]

                          max-[500px]:text-[15px]
                        "
                      >
                        {step.description}
                      </p>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}