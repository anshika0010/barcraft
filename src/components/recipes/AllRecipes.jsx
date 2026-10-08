"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown } from "lucide-react";

const RECIPES = [
  {
    id: 1,
    name: "CLASSIC SCREWDRIVER",
    product: "Screwdriver",
    glassware: "HIGHBALL GLASS",
    spirit: "VODKA",
    image: "/mixers/recipes/classic-screwdriver.png",
    details: {
      measure: "100ML",
      spirit: "VODKA",
      glass: "HIGHBALL GLASS",
    },
    ingredients: [
      "FRESH ICE",
      "45ML VODKA",
      "15ML BarCraft Screwdriver Mixer",
      "40ML CHILLED SODA",
    ],
  },

  {
    id: 2,
    name: "VIRGIN SCREWDRIVER",
    product: "Screwdriver",
    glassware: "HIGHBALL GLASS",
    spirit: "NO SPIRIT",
    image: "/mixers/recipes/classic-screwdriver.png",
    details: {
      measure: "100ML",
      spirit: "NO SPIRIT",
      glass: "HIGHBALL GLASS",
    },
    ingredients: [
      "ICE",
      "15ML BarCraft Screwdriver Mixer",
      "85ML CHILLED SODA",
      "AN ORANGE SLICE TO GARNISH",
    ],
  },

  {
    id: 3,
    name: "TALL ORANGE COOLER",
    product: "Screwdriver",
    glassware: "HIGHBALL GLASS",
    spirit: "TEQUILA",
    image: "/mixers/recipes/classic-screwdriver.png",
    details: {
      measure: "200ML",
      spirit: "TEQUILA",
      glass: "HIGHBALL GLASS",
    },
    ingredients: [
      "FRESH ICE",
      "45ML TEQUILA",
      "15ML BarCraft Screwdriver Mixer",
      "140ML CHILLED SODA",
    ],
  },

  {
    id: 4,
    name: "TEQUILA ORANGE FIZZ",
    product: "Screwdriver",
    glassware: "HIGHBALL GLASS",
    spirit: "GIN",
    image: "/mixers/recipes/classic-screwdriver.png",
    details: {
      measure: "100ML",
      spirit: "GIN",
      glass: "HIGHBALL GLASS",
    },
    ingredients: [
      "FRESH ICE",
      "45ML GIN",
      "15ML BarCraft Screwdriver Mixer",
      "40ML TONIC WATER",
    ],
  },

  {
    id: 5,
    name: "SCREWDRIVER PARTY PITCHER",
    product: "Screwdriver",
    glassware: "JUG OR PITCHER",
    spirit: "WHITE RUM",
    image: "/mixers/recipes/screwdriver-party-pitcher.png",
    details: {
      measure: "1L",
      spirit: "WHITE RUM",
      glass: "JUG OR PITCHER",
    },
    ingredients: [
      "ICE",
      "450ML VODKA",
      "150ML BarCraft Screwdriver Mixer",
      "ABOUT 400ML CHILLED SODA",
    ],
  },

  {
    id: 6,
    name: "SHORT DAIQUIRI",
    product: "Screwdriver",
    glassware: "ROCKS GLASS",
    spirit: "WHITE RUM",
    image: "/mixers/recipes/short-daiquiri.png",
    details: {
      measure: "75ML",
      spirit: "WHITE RUM",
      glass: "ROCKS GLASS",
    },
    ingredients: [
      "FRESH ICE",
      "45ML VODKA",
      "15ML BarCraft Screwdriver Mixer",
      "15ML CHILLED SODA",
    ],
  },
    {
    id: 7,
    name: "CLASSIC MOJITO",
    product: "MOJITO",
    glassware: "HIGHBALL GLASS",
    spirit: "VODKA",
    image: "/mixers/recipes/classic-mojito.png",
    details: {
      measure: "100ML",
      spirit: "VODKA",
      glass: "HIGHBALL GLASS",
    },
    ingredients: [
      "FRESH ICE",
      "45ML TEQUILA",
      "15ML BarCraft Screwdriver Mixer",
      "140ML CHILLED SODA",
    ],
    directions :[
      'Fill a Highball glass with ice',
      'Pour in 45ML of White Rum',
      'Add 15ML of Barcraft Mojito Mixer',
      'Top up with 40ML of chilled Soda',
      'Stir Gently and Garnish with a mint sprig'
    ]
  },

  {
    id: 8,
    name: "VIRGIN MOJITO",
    product: "MOJITO",
    glassware: "HIGHBALL GLASS",
    spirit: "NO SPIRIT",
    image: "/mixers/recipes/classic-mojito.png",
    details: {
      measure: "100ML",
      spirit: "NO SPIRIT",
      glass: "HIGHBALL GLASS",
    },
    ingredients: [
      "ICE",
      "15ML BarCraft Mojito Mixer",
      "85ML CHILLED SODA",
      "AN MINT SPRIG TO GARNISH",
    ],
    
    directions :[
      'Fill a Highball glass with ice',
      'Add 15ML of Barcraft Mojito Mixer',
      'Top up with 85ML of chilled Soda',
      'Stir and Garnish with a mint sprig'
    ]
  },

  {
    id: 9,
    name: "TALL GARDEN MOJITO",
    product: "MOJITO",
    glassware: "HIGHBALL GLASS",
    spirit: "TEQUILA",
    image: "/mixers/recipes/classic-mojito.png",
    details: {
      measure: "200ML",
      spirit: "TEQUILA",
      glass: "HIGHBALL GLASS",
    },
    ingredients: [
      "FRESH ICE",
      "45ML TEQUILA",
      "15ML BarCraft Mojito Mixer",
      "140ML CHILLED SODA",
    ],
    directions :[
      'Fill a Highball glass with ice',
      'Pour in 45ML of Vodka',
      'Add 15ML of Barcraft Mojito Mixer',
      'Top up with 140ML of chilled Soda',
      'Stir Gently and Garnish with a mint sprig'
    ]
  },

  {
    id: 10,
    name: "GIN MINT FIZZ",
    product: "MOJITO",
    glassware: "HIGHBALL GLASS",
    spirit: "GIN",
    image: "/mixers/recipes/classic-mojito.png",
    details: {
      measure: "100ML",
      spirit: "GIN",
      glass: "HIGHBALL GLASS",
    },
    ingredients: [
      "FRESH ICE",
      "45ML GIN",
      "15ML BarCraft Mojito Mixer",
      "40ML LEMON SODA",
    ],
    directions :[
      'Fill a Highball glass with ice',
      'Pour in 45ML of Gin',
      'Add 15ML of Barcraft Mojito Mixer',
      'Top up with 40ML of Lemon Soda',
      'Stir Gently and Garnish with a mint sprig'
    ]
  },

  {
    id:11,
    name: "MOJITO PARTY PITCHER",
    product: "MOJITO",
    glassware: "JUG OR PITCHER",
    spirit: "WHITE RUM",
    image: "/mixers/recipes/mojito-party-pitcher.png",
    details: {
      measure: "1L",
      spirit: "WHITE RUM",
      glass: "JUG OR PITCHER",
    },
    ingredients: [
      "ICE",
      "450ML WHITE RUM",
      "150ML BarCraft Mojito Mixer",
      "ABOUT 400ML CHILLED SODA",
    ],
    directions :[
      'Fill a Large Jug with ice',
      'Pour in 450ML of White Rum',
      'Add 150ML of Barcraft Mojito Mixer and Stir Well',
      'just before serving , Top up with 400ML of Lemon Soda',
      'Pour Over fresh ice in Glasses and Garnish with a mint sprig'
    ]
  },

  {
    id: 12,
    name: "SHORT MINT SMASH",
    product: "MOJITO",
    glassware: "ROCKS GLASS",
    spirit: "WHITE RUM",
    image: "/mixers/recipes/short-mint-smash.png",
    details: {
      measure: "75ML",
      spirit: "WHITE RUM",
      glass: "ROCKS GLASS",
    },
    ingredients: [
      "FRESH ICE",
      "45ML WHITE RUM",
      "15ML BarCraft MOJITO Mixer",
      "15ML CHILLED SODA",
    ],
    directions :[
      'Fill a Rocks glass with ice',
      'Pour in 45ML of White Rum',
      'Add 15ML of Barcraft Mojito Mixer',
      'Top up with 15ML of Chilled Soda',
      'Stir Gently and Garnish with a lime wheel'
    ]
  },
];
function RecipeCard({ recipe }) {
  if (recipe.product === "MOJITO") {
    return <MojitoRecipeCard recipe={recipe} />;
  }

  return <ScrewdriverRecipeCard recipe={recipe} />;
}


export default function AllRecipes() {
const [product, setProduct] = useState("All products");
const [glassware, setGlassware] = useState("All glassware");
const [spirit, setSpirit] = useState("All spirits");
const [search, setSearch] = useState("");

const [currentPage, setCurrentPage] = useState(1);

const RECIPES_PER_PAGE = 12;


/* =====================================================
   FILTER RECIPES FIRST
===================================================== */

const filteredRecipes = useMemo(() => {
  const query = search.trim().toLowerCase();

  return RECIPES.filter((recipe) => {
    const matchesProduct =
      product === "All products" ||
      recipe.product === product;

    const matchesGlassware =
      glassware === "All glassware" ||
      recipe.glassware === glassware;

    const matchesSpirit =
      spirit === "All spirits" ||
      recipe.spirit === spirit;

    const matchesSearch =
      !query ||
      recipe.name.toLowerCase().includes(query) ||
      recipe.product.toLowerCase().includes(query);

    return (
      matchesProduct &&
      matchesGlassware &&
      matchesSpirit &&
      matchesSearch
    );
  });
}, [product, glassware, spirit, search]);


/* =====================================================
   PAGINATION
===================================================== */

const totalPages = Math.max(
  1,
  Math.ceil(filteredRecipes.length / RECIPES_PER_PAGE)
);

const startIndex =
  (currentPage - 1) * RECIPES_PER_PAGE;

const currentRecipes = filteredRecipes.slice(
  startIndex,
  startIndex + RECIPES_PER_PAGE
);


/* =====================================================
   RESET TO PAGE 1 WHEN FILTERS CHANGE
===================================================== */

useEffect(() => {
  setCurrentPage(1);
}, [product, glassware, spirit, search]);

  const clearFilters = () => {
    setProduct("All products");
    setGlassware("All glassware");
    setSpirit("All spirits");
    setSearch("");
  };

  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-black
        px-[30px]
        pb-[110px]
        pt-[80px]

        max-[1100px]:px-[24px]

        max-[640px]:px-5
        max-[640px]:pt-[65px]
      "
    >
      <div className="mx-auto w-full max-w-[1380px]">

        {/* =====================================================
            HEADING
        ====================================================== */}

        <h2
          className="
            font-movault
            text-[68px]
            uppercase
            leading-[0.82]
            tracking-[-1px]
            text-[#FFD400]

            lg:text-[72px]

            max-[640px]:text-[55px]

            max-[430px]:text-[47px]
          "
        >
          ALL RECIPES
        </h2>


        {/* =====================================================
            FILTERS
        ====================================================== */}

        <div
          className="
            mt-[48px]
            grid
            grid-cols-[203px_203px_203px_1fr_136px]
            gap-[14px]

            max-[1100px]:grid-cols-[1fr_1fr]
            max-[1100px]:gap-[12px]

            max-[640px]:grid-cols-1
            max-[640px]:mt-[35px]
          "
        >

          <FilterSelect
            value={product}
            onChange={setProduct}
            options={[
              "All products",
              "Screwdriver",
            ]}
          />

          <FilterSelect
            value={glassware}
            onChange={setGlassware}
            options={[
              "All glassware",
              "HIGHBALL GLASS",
              "ROCKS GLASS",
              "JUG OR PITCHER",
            ]}
          />

          <FilterSelect
            value={spirit}
            onChange={setSpirit}
            options={[
              "All spirits",
              "VODKA",
              "GIN",
              "TEQUILA",
              "WHITE RUM",
              "NO SPIRIT",
            ]}
          />

          {/* Search */}

          <div
            className="
              flex
              h-[58px]
              items-center
              border
              border-white/70
              px-[18px]

              max-[1100px]:col-span-2

              max-[640px]:col-span-1
            "
          >
            <input
              type="text"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search.."
              className="
                min-w-0
                flex-1
                bg-transparent
                font-sf-pro
                text-[18px]
                text-white
                outline-none
                placeholder:text-white/55
              "
            />

            <Search
              size={21}
              strokeWidth={1.8}
              className="shrink-0 text-white"
            />
          </div>


          {/* Clear all */}

          <button
            type="button"
            onClick={clearFilters}
            className="
              h-[58px]
              border
              border-white/70
              bg-transparent
              font-sf-pro
              text-[18px]
              text-white
              transition-colors
              duration-300
              hover:border-[#FFD400]
              hover:text-[#FFD400]

              max-[1100px]:col-span-2

              max-[640px]:col-span-1
            "
          >
            Clear all
          </button>

        </div>


        {/* =====================================================
            RESULTS
        ====================================================== */}

            {filteredRecipes.length > 0 ? (
            <>
                {/* =====================================================
                    RECIPE GRID
                ====================================================== */}

                <div
                className="
                    mt-[112px]
                    grid
                    grid-cols-3
                    gap-x-[15px]
                    gap-y-[25px]

                    max-[900px]:mt-[80px]
                    max-[900px]:grid-cols-2
                    max-[900px]:gap-[15px]

                    max-[640px]:mt-[55px]
                    max-[640px]:grid-cols-1
                "
                >
                {currentRecipes.map((recipe) => (
                    <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    />
                ))}
                </div>

                {/* =====================================================
                    PAGINATION
                ====================================================== */}

                {totalPages > 1 && (
                <RecipePagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPrevious={() =>
                    setCurrentPage((page) =>
                        Math.max(1, page - 1)
                    )
                    }
                    onNext={() =>
                    setCurrentPage((page) =>
                        Math.min(totalPages, page + 1)
                    )
                    }
                />
                )}
            </>
            ) : (
            <div
                className="
                flex
                min-h-[300px]
                items-center
                justify-center
                text-center
                "
            >
                <p className="font-sf-pro text-[20px] text-white/60">
                No recipes found.
                </p>
            </div>
            )}

      </div>
    </section>
  );
}


/* ===========================================================
   FILTER SELECT
=========================================================== */

function FilterSelect({
  value,
  onChange,
  options,
}) {
  return (
    <div className="relative">

      <select
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        className="
          h-[58px]
          w-full
          appearance-none
          border
          border-white/70
          bg-black
          px-[16px]
          pr-[45px]
          font-sf-pro
          text-[18px]
          text-white
          outline-none
          focus:border-[#FFD400]
        "
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="bg-black text-white"
          >
            {option}
          </option>
        ))}
      </select>

      <ChevronDown
        size={18}
        strokeWidth={1.6}
        className="
          pointer-events-none
          absolute
          right-[16px]
          top-1/2
          -translate-y-1/2
          text-white
        "
      />

    </div>
  );
}


/* ===========================================================
   RECIPE CARD
   Same interaction/style as ScrewdriverRecipes
=========================================================== */

function ScrewdriverRecipeCard({ recipe }) {
  const [hovered, setHovered] = useState(false);

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
        src={recipe.image}
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
          duration-[1200ms]
          ease-out
          group-hover:scale-[1.015]
        "
      />


      {/* =====================================================
          IMAGE OVERLAY
      ====================================================== */}

      <div
        className={`
          absolute
          inset-0
          bg-black
          transition-opacity
          duration-[1200ms]
          ${
            hovered
              ? "opacity-[0.3]"
              : "opacity-0"
          }
        `}
      />


      {/* =====================================================
          DEFAULT ORANGE WAVE
      ====================================================== */}

      <div
        className={`
          absolute
          inset-x-0
          bottom-0
          z-20
          h-[96px]
          overflow-hidden
          transition-opacity
          duration-[1100ms]

          ${
            hovered
              ? "opacity-0"
              : "opacity-100"
          }
        `}
      >

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

        <h3
          className="
            absolute
            bottom-[18px]
            left-[30px]
            z-10
            font-movault
            text-[38px]
            uppercase
            leading-[0.9]
            text-black
            tracking-wide
            max-[1100px]:text-[26px]

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
          duration-[1200ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${
            hovered
              ? "h-full"
              : "h-0"
          }
        `}
      >

        {/* Orange curved top */}

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


        {/* Hover content */}

        <div className="relative z-10 flex h-full flex-col px-[23px] pb-[20px] pt-[18px]">

          <h3
            className="
              font-movault
              text-[42px]
              uppercase
              leading-[0.85]
              text-black
              text-center
              max-[1100px]:text-[28px]
              tracking-wide
              max-[640px]:text-[34px]
            "
          >
            {recipe.name}
          </h3>


          <div className="mt-[58px]">

            <h4
              className="
                font-movault
                text-[37px]
                uppercase
                leading-none
                text-white
                tracking-wider
                max-[1100px]:text-[31px]
              "
            >
              INGREDIENTS
            </h4>

            <p
              className="
                mt-[12px]
                font-sf-pro
                text-[16px]
                font-medium
                uppercase
                leading-[1.2]
                text-white
              "
            >
              {recipe.details.measure}
              {" | "}
              {recipe.details.spirit}
              {" | "}
              {recipe.details.glass}
            </p>


            <ul className="mt-[19px] space-y-[13px]">
              {recipe.ingredients.map((ingredient) => (
                <li
                  key={ingredient}
                  className="
                    flex
                    items-start
                    gap-[10px]
                    font-sf-pro
                    text-[16px]
                    leading-[1.15]
                    text-white
                  "
                >
                  <span className="mt-[6px] h-[4px] w-[4px] shrink-0 rounded-full bg-white" />
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>

          </div>


          {/* CTA */}


        </div>

      </div>

    </article>
  );
}

function RecipePagination({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
}) {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div
      className="
        mt-[80px]
        flex
        items-center
        gap-[20px]

        max-[640px]:mt-[55px]
        max-[640px]:gap-[12px]
      "
    >

      {/* =================================================
          PREVIOUS
      ================================================== */}

      <button
        type="button"
        onClick={onPrevious}
        disabled={isFirstPage}
        className={`
          flex
          h-[58px]
          min-w-[130px]
          items-center
          justify-center
          px-[18px]

          font-movault
          text-[28px]
          uppercase
          leading-none

          transition-all
          duration-300

          max-[640px]:h-[52px]
          max-[640px]:min-w-[105px]
          max-[640px]:text-[24px]

            ${isFirstPage
            ? "bg-[#5D5200] text-black/75 cursor-not-allowed"
            : "bg-[#FFD400] text-black hover:bg-[#FFE44D]"
            }
        `}
      >
        PREVIOUS
      </button>


      {/* =================================================
          PAGE COUNT
      ================================================== */}

      <span
        className="
          whitespace-nowrap
          font-sf-pro
          text-[18px]
          font-normal
          text-white

          max-[640px]:text-[16px]
        "
      >
        Page {currentPage} of {totalPages}
      </span>


      {/* =================================================
          NEXT
      ================================================== */}

      <button
        type="button"
        onClick={onNext}
        disabled={isLastPage}
        className={`
          flex
          h-[58px]
          min-w-[100px]
          items-center
          justify-center
          px-[18px]

          font-movault
          text-[28px]
          uppercase
          leading-none

          transition-all
          duration-300

          max-[640px]:h-[52px]
          max-[640px]:min-w-[85px]
          max-[640px]:text-[24px]
            ${isLastPage
            ? "bg-[#5D5200] text-black/75 cursor-not-allowed"
            : "bg-[#FFD400] text-black hover:bg-[#FFE44D]"
            }
        `}
      >
        NEXT
      </button>

    </div>
  );
}

function MojitoRecipeCard({ recipe }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="
        group
        relative
        aspect-[0.9]
        overflow-hidden
        rounded-[20px]
        bg-[#0A1108]
        cursor-pointer
      "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >

      {/* =====================================================
          IMAGE
      ====================================================== */}

      <Image
        src={recipe.image}
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
          duration-[1200ms]
          ease-out
          group-hover:scale-[1.015]
        "
      />


      {/* =====================================================
          IMAGE OVERLAY
      ====================================================== */}

      <div
        className={`
          absolute
          inset-0
          bg-black
          transition-opacity
          duration-[1200ms]

          ${
            hovered
              ? "opacity-[0.28]"
              : "opacity-0"
          }
        `}
      />


      {/* =====================================================
          DEFAULT GREEN WAVE
      ====================================================== */}

      <div
        className={`
          absolute
          inset-x-0
          bottom-0
          z-20
          h-[96px]
          overflow-hidden
          transition-opacity
          duration-[1100ms]

          ${
            hovered
              ? "opacity-0"
              : "opacity-100"
          }
        `}
      >

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
            fill="#C4D900"
          />
        </svg>


        <h1
          className="
            absolute
            bottom-[18px]
            left-[18px]
            z-10
            font-movault
            text-[38px]
            uppercase
            leading-[0.9]
            text-black
            tracking-wide
            max-[1100px]:text-[26px]

            max-[640px]:text-[30px]
          "
        >
          {recipe.name}
        </h1>

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
          bg-[#475000]

          transition-all
          duration-[1200ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${
            hovered
              ? "h-full"
              : "h-0"
          }
        `}
      >

        {/* =================================================
            GREEN TOP WAVE
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
            fill="#C4D900"
          />
        </svg>


        {/* =================================================
            CONTENT
        ================================================== */}

        <div
          className="
            relative
            z-10
            flex
            h-full
            flex-col
            px-[27px]
            pb-[20px]
            pt-[18px]

            max-[1100px]:px-[20px]
          "
        >

          {/* Recipe name */}

          <h3
            className="
              font-movault
              text-[45px]
              uppercase
              leading-[0.85]
              text-black
              tracking-wide
              uppercase
              max-[1100px]:text-[28px]
              text-center
              max-[640px]:text-[34px]
            "
          >
            {recipe.name}
          </h3>


          {/* =================================================
              INGREDIENTS
          ================================================== */}

          <div className="mt-[52px]">

            <h4
              className="
                font-movault
                text-[34px]
                uppercase
                leading-none
                text-white

                max-[1100px]:text-[30px]
              "
            >
              INGREDIENTS
            </h4>

            <ul className="mt-[14px] space-y-[10px]">
              {recipe.ingredients.map((ingredient) => (
                <li
                  key={ingredient}
                  className="
                    flex
                    items-start
                    gap-[9px]
                    font-sf-pro
                    text-[16px]
                    leading-[1.15]
                    text-white

                    max-[1100px]:text-[15px]
                  "
                >
                  <span className="mt-[6px] h-[4px] w-[4px] shrink-0 rounded-full bg-white" />

                  <span>
                    {ingredient}
                  </span>
                </li>
              ))}
            </ul>

          </div>


          {/* =================================================
              DIRECTIONS
          ================================================== */}

          <div className="mt-[16px]">

            <h4
              className="
                font-movault
                text-[34px]
                uppercase
                leading-none
                text-white

                max-[1100px]:text-[30px]
              "
            >
              DIRECTIONS
            </h4>

            <ol
              className="
                mt-[12px]
                space-y-[7px]
                pl-[18px]
                font-sf-pro
                text-[15px]
                leading-[1.18]
                text-white

                list-decimal
              "
            >
              {recipe.directions?.map((direction, index) => (
                <li key={`${recipe.id}-direction-${index}`}>
                  {direction}
                </li>
              ))}
            </ol>

          </div>

        </div>

      </div>

    </article>
  );
}