"use client";

import Image from "next/image";

export default function IngredientsNutrition({ data }) {
  const productInfo = data?.product_information;
  const accent = data?.product.accent ;
  const accent2 = data?.product.accent2 ; 
  const bottleImage = data?.product.bottleImage ;
  const wrapper = data?.product.wrapper ; 
  console.log(accent);
  if (!productInfo) {
    return null;
  }

  const nutrition = Object.entries(
    productInfo.nutrition_per_100ml || {}
  );

  return (
    <>
      <section className="relative w-full overflow-hidden bg-black text-white">

        {/* =====================================================
            TOP PRODUCT / NUTRITION AREA
        ====================================================== */}

        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1440px]
            grid-cols-[1fr_0.95fr]
            gap-[40px]
            px-[84px]
            pt-[30px]

            max-[1100px]:grid-cols-[1fr_0.8fr]
            max-[1100px]:px-[50px]

            max-[800px]:grid-cols-1
            max-[800px]:px-6
            max-[800px]:pt-[80px]
          "
        >

          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div className="relative z-10">

            <h2
               style={{ color: accent }} // 🛠️ Safely handles runtime colors

              className="
                font-movault
                text-[92px]
                uppercase
                leading-[0.84]
                tracking-[-1px]

                xl:text-[98px]

                max-[1100px]:text-[76px]

                max-[800px]:text-[62px]

                max-[500px]:text-[48px]
              "
            >
              INGREDIENTS
              <br />
              AND NUTRITION
            </h2>

            <p
              className="
                mt-[24px]
                font-sf-pro
                text-[21px]
                leading-[1.25]
                text-white

                max-[800px]:text-[18px]
              "
            >
              {productInfo.nutrition_label ||
                "Nutrition information (approximate values, per 100ml)"}
            </p>

            {/* =================================================
                NUTRITION TABLE
            ================================================== */}

            <div
              className="
                mt-[54px]
                w-full
                max-w-[653px]
              "
            >
              {nutrition.map(([label, value]) => (
                <div
                  key={label}
                  className="
                    grid
                    grid-cols-2
                    border-b
                    border-white/50
                  "
                >
                  {/* Label */}

              <div
                style={{ backgroundColor: accent }} // 🛠️ Safely handles runtime colors
                className={`
                  flex
                  h-[61px]
                  items-center
                  px-[18px]
                  max-[500px]:h-[53px]
                  max-[500px]:px-[14px]
                `}
              >

                    <span
                      className="
                        font-movault
                        text-[29px]
                        uppercase
                        leading-none
                        text-white

                        max-[1100px]:text-[26px]

                        max-[500px]:text-[23px]
                      "
                    >
                      {label}
                    </span>
                  </div>

                  {/* Value */}

                  <div
                  style={{background : accent2}}
                    className="
                      flex
                      h-[61px]
                      items-center
                      
                      px-[34px]

                      max-[500px]:h-[53px]
                      max-[500px]:px-[20px]
                    "
                  >
                    <span
                      className="
                        font-movault
                        text-[29px]
                        uppercase
                        leading-none
                        text-white

                        max-[1100px]:text-[26px]

                        max-[500px]:text-[23px]
                      "
                    >
                      {value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =================================================
              RIGHT — BOTTLE
          ================================================== */}

          <BottleAnimation productName={data?.product?.name} bottleImage={bottleImage} wrapper={wrapper}/>
        </div>

        {/* =====================================================
            LOWER INGREDIENT INFORMATION
        ====================================================== */}

        <div
          className="
            mx-auto
            w-full
            max-w-[1440px]
            px-[84px]
            pb-[110px]

            max-[1100px]:px-[50px]

            max-[800px]:px-6
          "
        >
          <div>

            {/* Serving information */}

            <p
              className="
                mt-[36px]
                max-w-[620px]
                font-sf-pro
                text-[16px]
                leading-[1.35]
                text-white
              "
            >
              {productInfo.serving_information}
            </p>

            {/* Ingredients heading */}

            <h3
              style={{ color: accent }} // 🛠️ Safely handles runtime colors

              className="
                mt-[30px]
                font-movault
                text-[58px]
                uppercase
                leading-[0.85]

                max-[800px]:text-[48px]

                max-[500px]:text-[42px]
              "
            >
              INGREDIENTS
            </h3>

            {/* Ingredients */}

            <p
              className="
                mt-[28px]
                max-w-[690px]
                font-sf-pro
                text-[21px]
                leading-[1.38]
                text-white

                max-[800px]:text-[18px]
              "
            >
              {productInfo.ingredients}
            </p>

            {/* Manufacturer */}

            <p
              className="
                mt-[28px]
                max-w-[650px]
                font-sf-pro
                text-[16px]
                leading-[1.35]
                text-white
              "
            >
              {productInfo.manufacturer_note}
            </p>

          </div>
        </div>
      </section>
    </>
  );
}

/* ===========================================================
   BOTTLE ANIMATION
=========================================================== */

function BottleAnimation({ productName , bottleImage , wrapper}) {
  return (
    <div
      className="
        relative
        flex
        min-h-[760px]
        items-start
        justify-center
        overflow-visible

        max-[800px]:min-h-[650px]
        max-[600px]:min-h-[560px]
      "
    >
      <div
        className="
          relative
          h-[760px]
          w-[500px]

          max-[1100px]:h-[690px]
          max-[1100px]:w-[450px]

          max-[800px]:h-[650px]
          max-[800px]:w-[430px]

          max-[600px]:h-[560px]
          max-[600px]:w-[370px]

          max-[430px]:h-[500px]
          max-[430px]:w-[330px]
        "
      >
        {/* =================================================
            FIXED BOTTLE
        ================================================== */}

        <Image
          src={bottleImage}
          alt={productName || "BarCraft Mixer"}
          fill
          sizes="(max-width: 800px) 430px, 500px"
          className="pointer-events-none object-contain"
        />

        {/* =================================================
            MOVING LABEL WINDOW
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-[31%]
            top-[28.5%]
            z-10

            h-[50%]
            w-[44%]

            overflow-hidden

            rotate-[-17deg]
          "
        >
          {/* Repeated wrapper tiles */}

          <div className="flex h-full w-max screwdriver-label-track">
            {[0, 1, 2].map((item) => (
              <div
                key={item}
                className="
                  h-full
                  aspect-[1918/1664]
                  shrink-0
                  bg-[#1B1B1B]
                  bg-no-repeat
                  bg-[length:100%_100%]
                "
                style={{
                  backgroundImage:
                    `url(${wrapper})`,
                }}
              />
            ))}
          </div>

          {/* Cylinder shading */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-20
            "
            style={{
              background: `
                linear-gradient(
                  90deg,
                  rgba(0,0,0,0.75) 0%,
                  rgba(0,0,0,0.25) 10%,
                  rgba(255,255,255,0) 22%,
                  rgba(255,255,255,0.28) 34%,
                  rgba(255,255,255,0.10) 46%,
                  rgba(255,255,255,0) 60%,
                  rgba(255,255,255,0.08) 76%,
                  rgba(0,0,0,0.30) 90%,
                  rgba(0,0,0,0.80) 100%
                )
              `,
              mixBlendMode: "soft-light",
            }}
          />

          {/* Specular streak */}

          <div
            className="
              pointer-events-none
              absolute
              top-0
              bottom-0
              left-[31%]
              z-20
              w-[3%]
            "
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",
              filter: "blur(2px)",
              mixBlendMode: "screen",
            }}
          />
        </div>
      </div>
    </div>
  );
}