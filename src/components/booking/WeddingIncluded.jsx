export default function WeddingIncluded() {
  const includedItems = [
    "1000 BarCraft mixer servings",
    "Four flavours of your choice",
    "Delivery to your venue",
    "Preparation instructions",
  ];

  const notIncludedItems = [
    "Alcohol",
    "Soda, ice and cups",
    "Bartenders",
  ];

  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-black
        px-[30px]
        py-[95px]

        max-[1100px]:px-[24px]

        max-[700px]:px-5
        max-[700px]:py-[75px]
      "
    >
      <div className="mx-auto w-full max-w-[1290px]">

        {/* =====================================================
            MAIN HEADING
        ====================================================== */}

        <h2
          className="
            text-center
            font-movault
            text-[84px]
            uppercase
            leading-[0.82]
            tracking-[-1px]
            text-[#FFD400]

            xl:text-[92px]

            lg:text-[80px]

            md:text-[68px]

            max-[700px]:text-[57px]

            max-[500px]:text-[47px]
          "
        >
          WHAT IS INCLUDED
        </h2>


        {/* =====================================================
            CARDS
        ====================================================== */}

        <div
          className="
            mt-[70px]
            grid
            grid-cols-2
            gap-[24px]

            lg:gap-[20px]

            max-[700px]:mt-[50px]
            max-[700px]:grid-cols-1
            max-[700px]:gap-[20px]
          "
        >

          {/* =================================================
              INCLUDED
          ================================================== */}

          <div
            className="
              flex
              min-h-[415px]
              flex-col
              bg-[#FFD400]
              px-[32px]
              py-[32px]

              lg:min-h-[400px]

              md:px-[28px]

              max-[700px]:min-h-0
              max-[700px]:px-[24px]
              max-[700px]:py-[28px]
            "
          >

            <h3
              className="
                font-movault
                text-[64px]
                uppercase
                leading-[0.82]
                tracking-[-1px]
                text-black

                xl:text-[70px]

                lg:text-[60px]

                md:text-[54px]

                max-[700px]:text-[52px]

                max-[500px]:text-[44px]
              "
            >
              INCLUDED
            </h3>


            <div
              className="
                mt-[38px]
                space-y-[22px]

                max-[700px]:mt-[32px]
                max-[700px]:space-y-[18px]
              "
            >
              {includedItems.map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-start
                    gap-[14px]
                  "
                >

                  <span
                    className="
                      mt-[1px]
                      shrink-0
                      font-sf-pro
                      text-[27px]
                      font-bold
                      leading-none
                      text-[#5CAA18]

                      max-[700px]:text-[24px]
                    "
                  >
                    ✓
                  </span>

                  <p
                    className="
                      font-sf-pro
                      text-[22px]
                      font-normal
                      leading-[1.2]
                      text-black

                      lg:text-[20px]

                      max-[700px]:text-[18px]
                    "
                  >
                    {item}
                  </p>

                </div>
              ))}
            </div>

          </div>


          {/* =================================================
              NOT INCLUDED
          ================================================== */}

          <div
            className="
              flex
              min-h-[415px]
              flex-col
              border-2
              border-[#FFD400]
              bg-black
              px-[32px]
              py-[32px]

              lg:min-h-[400px]

              md:px-[28px]

              max-[700px]:min-h-0
              max-[700px]:px-[24px]
              max-[700px]:py-[28px]
            "
          >

            <h3
              className="
                font-movault
                text-[64px]
                uppercase
                leading-[0.82]
                tracking-[-1px]
                text-[#FFD400]

                xl:text-[70px]

                lg:text-[60px]

                md:text-[54px]

                max-[700px]:text-[52px]

                max-[500px]:text-[44px]
              "
            >
              NOT INCLUDED
            </h3>


            <div
              className="
                mt-[38px]
                space-y-[22px]

                max-[700px]:mt-[32px]
                max-[700px]:space-y-[18px]
              "
            >
              {notIncludedItems.map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-start
                    gap-[14px]
                  "
                >

                  <span
                    className="
                      mt-[1px]
                      shrink-0
                      font-sf-pro
                      text-[28px]
                      font-medium
                      leading-none
                      text-red-500

                      max-[700px]:text-[25px]
                    "
                  >
                    ×
                  </span>

                  <p
                    className="
                      font-sf-pro
                      text-[22px]
                      font-normal
                      leading-[1.2]
                      text-[#FFD400]

                      lg:text-[20px]

                      max-[700px]:text-[18px]
                    "
                  >
                    {item}
                  </p>

                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}