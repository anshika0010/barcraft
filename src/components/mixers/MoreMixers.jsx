import Image from "next/image";
import Link from "next/link";

export default function MoreMixers({ data }) {
  const mixers = data?.related_flavors || [];

  if (!mixers.length) {
    return null;
  }

  return (
    <section
      className="
        w-full
        bg-black
        px-[84px]
        pb-[110px]
        pt-[90px]

        max-[1100px]:px-[50px]

        max-[900px]:px-7
        max-[900px]:pt-[75px]

        max-[640px]:px-5
        max-[640px]:pt-[65px]
      "
    >
      {/* =====================================================
          HEADING
      ====================================================== */}

      <div className="max-w-[650px]">
        <h2
          className="
            font-movault
            text-[92px]
            uppercase
            leading-[0.84]
            tracking-[-1px]
            text-[#FF7504]

            xl:text-[98px]

            max-[1100px]:text-[78px]

            max-[900px]:text-[68px]

            max-[640px]:text-[54px]

            max-[420px]:text-[46px]
          "
        >
          MORE BARCRAFT CRAFTED
          <br />
          COCKTAIL MIXERS
        </h2>
      </div>

      {/* =====================================================
          MIXER GRID
      ====================================================== */}

      <div
        className="
          mt-[96px]
          grid
          grid-cols-4
          gap-[24px]

          max-[1100px]:gap-[18px]

          max-[900px]:grid-cols-2
          max-[900px]:gap-x-[20px]
          max-[900px]:gap-y-[55px]

          max-[640px]:mt-[60px]
          max-[640px]:grid-cols-1
          max-[640px]:gap-y-[50px]
        "
      >
        {mixers.map((mixer) => (
          <MixerCard
            key={mixer.url || mixer.name}
            mixer={mixer}
          />
        ))}
      </div>
    </section>
  );
}

/* ===========================================================
   MIXER CARD
=========================================================== */

function MixerCard({ mixer }) {
  /*
    Example:
    /mixers/pina-colada
        ↓
    pina-colada
        ↓
    /mixers/moreMixers/pina-colada.png
  */

  const slug =
    mixer.url
      ?.split("/")
      .filter(Boolean)
      .pop()
      ?.toLowerCase() || "";

  const image =
    `/mixers/moreMixers/${slug}.png`;

  /*
    Convert:
    "BarCraft Piña Colada Mixer"
        ↓
    "PIÑA COLADA MIXER"

    We keep the actual JSON name/content,
    only removing "BARCRAFT" for the visual card title.
  */
  const displayName = mixer.name
    ?.replace(/^BarCraft\s+/i, "")
    ?.toUpperCase();

  return (
    <Link
      href={mixer.url || "#"}
      className="
        group
        block
        w-full
      "
    >
      {/* =================================================
          IMAGE
      ================================================== */}

      <div
        className="
          relative
          aspect-[1/1.15]
          w-full
          overflow-hidden
        "
      >
        <Image
          src={image}
          alt={mixer.name}
          fill
          sizes="
            (max-width: 640px) 100vw,
            (max-width: 900px) 50vw,
            25vw
          "
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.025]
          "
        />
      </div>

      {/* =================================================
          PRODUCT NAME
      ================================================== */}

      <h3
        className="
          mt-[17px]
          font-movault
          text-[28px]
          uppercase
          leading-[0.9]
          text-[#FF7504]

          xl:text-[30px]

          max-[1100px]:text-[25px]

          max-[900px]:text-[27px]

          max-[640px]:text-[30px]
        "
      >
        {displayName}
      </h3>

      {/* =================================================
          DESCRIPTION
      ================================================== */}

      <p
        className="
          mt-[10px]
          max-w-[340px]
          font-sf-pro
          text-[16px]
          font-normal
          leading-[1.25]
          text-white

          max-[1100px]:text-[15px]

          max-[640px]:max-w-[500px]
          max-[640px]:text-[16px]
        "
      >
        {mixer.description}
      </p>
    </Link>
  );
}