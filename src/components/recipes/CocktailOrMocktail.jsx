"use client";

import { ALL_PRODUCTS } from "@/components/recipes/AllRecipes";

const OPTIONS = [
  {
    id: "cocktail",
    category: "Coctail-Mixers",
    title: "COCKTAIL RECIPES",
    description:
      "Pick a mixer, add your favourite spirit and finish with chilled soda.",
    points: [
      "Label serves, tall drinks and spirit twists",
      "Party jugs and short serves",
    ],
  },
  {
    id: "mocktail",
    category: "Mocktail-Flavors",
    title: "MOCKTAIL RECIPES",
    description:
      "No spirit needed. Ice, 25ml of mixer and chilled soda is all it takes.",
    points: [
      "Ready in about 30 seconds",
      "Good for drivers, fasting days and family gatherings",
    ],
  },
];

const sameName = (a = "", b = "") =>
  a.trim().toLowerCase() === b.trim().toLowerCase();

export default function CocktailOrMocktail({
  recipes,
  activeProduct,
  onSelect,
}) {
  const allRecipes = recipes ?? [];

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
          {OPTIONS.map((option) => {
            const matching = allRecipes.filter((recipe) =>
              sameName(recipe.product, option.category)
            );
            // Use the exact spelling from the API so it matches the dropdown
            const product = matching[0]?.product;
            const isActive = Boolean(product) && activeProduct === product;

            return (
              <RecipeOption
                key={option.id}
                option={option}
                count={matching.length}
                isActive={isActive}
                onClick={() =>
                  onSelect(isActive || !product ? ALL_PRODUCTS : product)
                }
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}


/* ===========================================================
   OPTION CARD
=========================================================== */

function RecipeOption({ option, count, isActive, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={`
        flex
        min-h-[485px]
        cursor-pointer
        flex-col
        border
        text-left
        px-[15px]
        py-[22px]

        transition-colors
        duration-300
        hover:border-white
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-white

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
        {count > 0 ? `${count} recipes` : "\u00A0"}
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


   

    </button>
  );
}