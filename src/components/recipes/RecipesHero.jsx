import Image from "next/image";

export default function RecipesHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">

      {/* =====================================================
          HERO BACKGROUND
      ====================================================== */}

      <Image
        src="/recipes/recipes-hero.png"
        alt="BarCraft cocktails"
        fill
        priority
        sizes="100vw"
        className="
          object-cover
          object-center

          max-[640px]:object-[58%_center]
        "
      />

      {/* =====================================================
          DARK OVERLAY
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-black/10
        "
      />

      {/* =====================================================
          BOTTOM GRADIENT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-[58%]
          bg-gradient-to-t
          from-black
          via-black/65
          to-transparent
        "
      />

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          flex
          min-h-screen
          items-end
          px-[32px]
          pb-[30px]
          pt-[120px]

          max-[900px]:px-7
          max-[900px]:pb-[35px]

          max-[640px]:px-5
          max-[640px]:pb-[28px]
          max-[640px]:pt-[100px]
        "
      >

        <div
          className="
            w-full
            max-w-[900px]
          "
        >

          {/* =================================================
              MAIN HEADING
          ================================================== */}

          <h1
            className="
              max-w-[850px]
              font-movault
              tracking-wide
              text-[106px]
              uppercase
              leading-[0.82]
              tracking-[-1.5px]
              text-[#FFD400]

              xl:text-[115px]

              max-[1100px]:text-[92px]

              max-[900px]:text-[78px]

              max-[640px]:text-[60px]

              max-[480px]:text-[50px]
            "
          >
            CRAFT YOUR
            <br />
            OWN COCKTAIL EXPERIENCE
          </h1>


          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <p
            className="
              mt-[25px]
              max-w-[650px]
              font-sf-pro
              text-[20px]
              font-normal
              leading-[1.2]
              text-white

              md:text-[21px]

              max-[640px]:mt-[20px]
              max-[640px]:text-[17px]
            "
          >
            36 recipes for BarCraft mixers. Precision in every pour.
            <br className="max-[500px]:hidden" />
            Pleasure in every sip.
          </p>

        </div>

      </div>

    </section>
  );
}