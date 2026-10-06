"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MixerRecipes({ data }) {
  const recipes = data?.recipes?.items || [];

  if (!recipes.length) {
    return null;
  }

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-black
        px-[72px]
        pb-[100px]
        pt-[105px]

        max-[1100px]:px-10

        max-[900px]:px-6
        max-[900px]:pt-[95px]

        max-[640px]:px-5
        max-[640px]:pt-[85px]
      "
    >
      {/* =====================================================
          HEADING
      ====================================================== */}

      <div className="max-w-[900px]">
        <h2
          className="
            font-movault
            text-[92px]
            uppercase
            leading-[0.82]
            tracking-[-1px]
            text-[#FF7504]

            xl:text-[98px]

            max-[1100px]:text-[78px]

            max-[900px]:text-[68px]

            max-[640px]:text-[54px]

            max-[420px]:text-[46px]
          "
        >
          {data?.recipes?.title || "MIXER RECIPES"}
        </h2>

        <p
          className="
            mt-[25px]
            max-w-[850px]
            font-sf-pro
            text-[20px]
            font-normal
            leading-[1.25]
            text-white

            max-[640px]:mt-[20px]
            max-[640px]:text-[16px]
          "
        >
          {data?.recipes?.description}
        </p>
      </div>

      {/* =====================================================
          RECIPE GRID
      ====================================================== */}

      <div
        className="
          mt-[72px]
          grid
          grid-cols-3
          gap-[15px]

          max-[900px]:grid-cols-2

          max-[640px]:mt-[45px]
          max-[640px]:grid-cols-1
        "
      >
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={recipe.name || index}
            recipe={recipe}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

/* ===========================================================
   RECIPE CARD
=========================================================== */

function RecipeCard({ recipe, index }) {
  const [hovered, setHovered] = useState(false);

  /*
    Your JSON currently stores:

    "details": "100ml | Vodka | Highball glass"

    Convert that into the three values your UI needs.
  */
  const detailParts = (recipe.details || "")
    .split("|")
    .map((item) => item.trim());

  const measure = detailParts[0] || "";
  const spirit = detailParts[1] || "";
  const glass = detailParts[2] || "";

  /*
    IMPORTANT:
    The current JSON does not have recipe.image.

    We use recipe.image when it exists and a temporary fallback
    otherwise.

    Once we add "image" to each recipe in JSON, this will
    automatically use it.
  */
  const image =
    recipe.image || "/mixers/recipes/classic-screwdriver.png";

  return (
    <article
      className="
        group
        relative
        aspect-[0.9]
        overflow-hidden
        rounded-[20px]
        bg-[#100B08]
        cursor-pointer
      "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* =====================================================
          IMAGE
      ====================================================== */}

      <Image
        src={image}
        alt={recipe.name}
        fill
        sizes="
          (max-width: 640px) 100vw,
          (max-width: 900px) 50vw,
          33vw
        "
        className="
          object-cover
          object-center
          transition-transform
          duration-[1100ms]
          ease-out
          group-hover:scale-[1.015]
        "
      />

      {/* =====================================================
          IMAGE DARKEN
      ====================================================== */}

      <div
        className={`
          absolute
          inset-0
          bg-black
          transition-opacity
          duration-[1100ms]
          ease-out

          ${
            hovered
              ? "opacity-[0.28]"
              : "opacity-0"
          }
        `}
      />

      {/* =====================================================
          DEFAULT ORANGE BOTTOM SHAPE
      ====================================================== */}

      <div
        className={`
          absolute
          inset-x-0
          bottom-0
          z-20
          h-[94px]
          overflow-hidden

          transition-all
          duration-[1000ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${
            hovered
              ? "opacity-0"
              : "opacity-100"
          }
        `}
      >
        {/* Orange wave */}

        <svg
          className="
            absolute
            bottom-0
            left-0
            h-[125px]
            w-full
          "
          viewBox="0 0 1000 180"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="
              M 0 115
              C 125 75, 230 42, 365 52
              C 500 62, 600 92, 700 105
              C 820 118, 910 88, 1000 62
              L 1000 180
              L 0 180
              Z
            "
            fill="#FF7504"
          />
        </svg>

        {/* Recipe title */}

        <h3
          className="
            absolute
            bottom-[18px]
            left-[18px]
            z-10
            font-movault
            text-[40px]
            uppercase
            leading-[0.9]
            text-black

            max-[1100px]:text-[32px]
            tracking-wide
            max-[640px]:text-[30px]
          "
        >
          {recipe.name}
        </h3>
      </div>

      {/* =====================================================
          HOVER PANEL
      ====================================================== */}

      <div
        className={`
          absolute
          inset-x-0
          bottom-0
          z-30
          overflow-hidden
          bg-[#963D00]

          transition-all
          duration-[1100ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${
            hovered
              ? "h-full"
              : "h-0"
          }
        `}
      >
        {/* =================================================
            ORANGE TOP WAVE
        ================================================== */}

        <svg
          className="
            absolute
            left-0
            top-0
            h-[105px]
            w-full
          "
          viewBox="0 0 1000 180"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="
              M 0 0
              L 1000 0
              L 1000 55
              C 875 72, 780 108, 650 125
              C 500 145, 360 155, 225 125
              C 125 103, 55 75, 0 45
              Z
            "
            fill="#FF7504"
          />
        </svg>

        {/* =================================================
            CONTENT
        ================================================== */}

        <div
          className="
            relative
            flex
            h-full
            flex-col
            px-[23px]
            pb-[20px]
            pt-[18px]

            max-[1100px]:px-[18px]

            max-[640px]:px-[22px]
          "
        >
          {/* =================================================
              RECIPE NAME
          ================================================== */}

          <h3
            className="
              relative
              z-10
              font-movault
              text-[34px]
              uppercase
              leading-[0.85]
              text-black

              max-[1100px]:text-[29px]

              max-[640px]:text-[34px]
            "
          >
            {recipe.name}
          </h3>

          {/* =================================================
              INGREDIENTS
          ================================================== */}

          <div
            className="
              relative
              z-10
              mt-[58px]
            "
          >
            <h4
              className="
                font-movault
                text-[38px]
                uppercase
                leading-none
                text-white

                max-[1100px]:text-[33px]

                max-[640px]:text-[37px]
              "
            >
              INGREDIENTS
            </h4>

            {/* Recipe metadata */}

            <p
              className="
                mt-[12px]
                font-sf-pro
                text-[17px]
                font-medium
                uppercase
                leading-[1.2]
                text-white

                max-[1100px]:text-[15px]
              "
            >
              {measure}
              {" | "}
              {spirit}
              {" | "}
              {glass}
            </p>

            {/* Ingredient list */}

            <ul
              className="
                mt-[20px]
                space-y-[14px]
              "
            >
              {(recipe.ingredients || []).map(
                (ingredient, ingredientIndex) => (
                  <li
                    key={`${ingredient}-${ingredientIndex}`}
                    className="
                      flex
                      items-start
                      gap-[11px]
                      font-sf-pro
                      text-[17px]
                      leading-[1.15]
                      text-white

                      max-[1100px]:text-[15px]
                    "
                  >
                    <span
                      className="
                        mt-[7px]
                        h-[4px]
                        w-[4px]
                        shrink-0
                        rounded-full
                        bg-white
                      "
                    />

                    <span>{ingredient}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* =================================================
              FULL RECIPE BUTTON
          ================================================== */}

          <div
            className="
              relative
              z-10
              mt-auto
            "
          >
            <Link
              href={recipe.recipe_url || recipe.url || "#"}
              onClick={(event) => event.stopPropagation()}
              className="
                flex
                h-[59px]
                w-full
                items-center
                justify-between
                bg-[#FF7504]
                px-[15px]

                transition-transform
                duration-300

                hover:scale-[0.99]
              "
            >
              <span
                className="
                  font-movault
                  text-[31px]
                  uppercase
                  leading-none
                  text-white

                  max-[1100px]:text-[26px]
                "
              >
                SEE FULL RECIPE
              </span>

              <span
                className="
                  flex
                  h-[47px]
                  w-[47px]
                  items-center
                  justify-center
                  bg-black
                  font-sf-pro
                  text-[27px]
                  text-white
                "
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}