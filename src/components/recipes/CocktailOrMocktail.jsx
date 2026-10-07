"use client";

import Link from "next/link";

const OPTIONS = [
  {
    id: "cocktail",
    count: "30 recipes",
    title: "COCKTAIL RECIPES",
    description:
      "Pick a mixer, add your favourite spirit and finish with chilled soda.",
    points: [
      "Label serves, tall drinks and spirit twists",
      "Party jugs and short serves",
    ],
    href: "/recipes/cocktails",
    active: true,
  },
  {
    id: "mocktail",
    count: "6 recipes",
    title: "MOCKTAIL RECIPES",
    description:
      "No spirit needed. Ice, 15ml of mixer and chilled soda is all it takes.",
    points: [
      "Ready in about 30 seconds",
      "Good for drivers, fasting days and family gatherings",
    ],
    href: "/recipes/mocktails",
    active: false,
  },
];

export default function CocktailOrMocktail() {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-black
        px-[30px]
        py-[90px]

        lg:px-[30px]
        lg:py-[100px]

        md:px-6
        md:py-[85px]

        max-[640px]:px-5
        max-[640px]:py-[70px]
      "
    >
      <div className="mx-auto w-full max-w-[1380px]">

        {/* =====================================================
            HEADING
        ====================================================== */}

        <div
          className="
            mx-auto
            max-w-[760px]
            text-center
          "
        >
          <h2
            className="
              font-movault
              text-[92px]
              uppercase
              leading-[0.82]
              tracking-[-1px]
              text-white

              xl:text-[100px]

              lg:text-[88px]

              md:text-[74px]

              max-[640px]:text-[57px]

              max-[430px]:text-[47px]
            "
          >
            COCKTAIL OR MOCKTAIL?
          </h2>

          <p
            className="
              mx-auto
              mt-[27px]
              max-w-[620px]
              font-sf-pro
              text-[20px]
              leading-[1.25]
              text-white

              md:text-[19px]

              max-[640px]:mt-[20px]
              max-[640px]:text-[17px]

              max-[430px]:text-[16px]
            "
          >
            Every BarCraft mixer works both ways. Add your spirit
            for a cocktail, or leave it out for a mocktail.
          </p>
        </div>


        {/* =====================================================
            OPTIONS
        ====================================================== */}

        <div
          className="
            mt-[72px]
            grid
            grid-cols-2
            gap-[24px]

            xl:gap-[24px]

            lg:gap-[20px]

            md:mt-[65px]
            md:gap-[18px]

            max-[640px]:mt-[50px]
            max-[640px]:grid-cols-1
            max-[640px]:gap-[22px]
          "
        >
          {OPTIONS.map((option) => (
            <RecipeOption
              key={option.id}
              option={option}
            />
          ))}
        </div>

      </div>
    </section>
  );
}


/* ===========================================================
   OPTION CARD
=========================================================== */

function RecipeOption({ option }) {
  const isActive = option.active;

  return (
    <article
      className={`
        flex
        min-h-[485px]
        flex-col
        border
        px-[15px]
        py-[22px]

        transition-colors
        duration-300

        md:min-h-[455px]
        md:px-[15px]

        max-[640px]:min-h-0
        max-[640px]:px-[14px]
        max-[640px]:py-[20px]

        ${
          isActive
            ? "border-[#FFD400] bg-[#FFD400] text-black"
            : "border-[#FFD400] bg-black text-[#FFD400]"
        }
      `}
    >

      {/* =================================================
          COUNT
      ================================================== */}

      <p
        className={`
          font-sf-pro
          text-[24px]
          font-normal
          leading-none

          md:text-[22px]

          max-[640px]:text-[19px]

          ${
            isActive
              ? "text-black"
              : "text-[#FFD400]"
          }
        `}
      >
        {option.count}
      </p>


      {/* =================================================
          TITLE
      ================================================== */}

      <h3
        className={`
          mt-[30px]
          font-movault
          text-[64px]
          uppercase
          leading-[0.82]
          tracking-[-1px]

          xl:text-[72px]

          lg:text-[61px]

          md:text-[53px]

          max-[640px]:mt-[26px]
          max-[640px]:text-[58px]

          max-[430px]:text-[48px]

          ${
            isActive
              ? "text-black"
              : "text-[#FFD400]"
          }
        `}
      >
        {option.title}
      </h3>


      {/* =================================================
          DESCRIPTION
      ================================================== */}

      <p
        className={`
          mt-[25px]
          max-w-[610px]
          font-sf-pro
          text-[21px]
          font-medium
          leading-[1.25]

          md:text-[19px]

          max-[640px]:mt-[22px]
          max-[640px]:text-[17px]

          ${
            isActive
              ? "text-black"
              : "text-[#FFD400]"
          }
        `}
      >
        {option.description}
      </p>


      {/* =================================================
          BULLETS
      ================================================== */}

      <ul
        className="
          mt-[19px]
          space-y-[8px]
        "
      >
        {option.points.map((point) => (
          <li
            key={point}
            className={`
              flex
              items-start
              gap-[12px]
              font-sf-pro
              text-[20px]
              leading-[1.25]

              md:text-[18px]

              max-[640px]:text-[16px]

              ${
                isActive
                  ? "text-black"
                  : "text-[#FFD400]"
              }
            `}
          >
            <span className="shrink-0">
              •
            </span>

            <span>
              {point}
            </span>
          </li>
        ))}
      </ul>


      {/* =================================================
          CTA
      ================================================== */}

      <Link
        href={option.href}
        className={`
          mt-auto
          flex
          min-h-[60px]
          w-full
          items-center
          justify-between
          px-[15px]

          transition-transform
          duration-300
          hover:scale-[0.995]

          max-[640px]:mt-[40px]
          max-[640px]:min-h-[56px]

          ${
            isActive
              ? "bg-black text-[#FFD400]"
              : "bg-[#FFD400] text-black"
          }
        `}
      >

        <span
          className="
            font-movault
            text-[31px]
            uppercase
            leading-none

            md:text-[28px]

            max-[640px]:text-[27px]
          "
        >
          SEE FULL RECIPES
        </span>


        <span
          className={`
            flex
            h-[48px]
            w-[48px]
            shrink-0
            items-center
            justify-center

            max-[640px]:h-[44px]
            max-[640px]:w-[44px]

            ${
              isActive
                ? "bg-[#FFD400] text-black"
                : "bg-black text-white"
            }
          `}
        >
          <span className="font-sf-pro text-[27px] leading-none">
            →
          </span>
        </span>

      </Link>

    </article>
  );
}