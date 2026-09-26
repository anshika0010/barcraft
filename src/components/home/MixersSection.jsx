import Image from "next/image";

const MIXERS = [
  {
    id: 1,
    name: "BarCraft Mojito Mixer",
    description: "Refreshing Lime & Mint Cocktail Mixer",
    image: "/home/barcraft-mixers/mojito.png",
    hoverImage: "/home/barcraft-mixers/mojito-glass.png",
  },
  {
    id: 2,
    name: "BarCraft Cosmopolitan Mixer",
    description: "Cranberry & Citrus Cocktail Mixer",
    image: "/home/barcraft-mixers/cosmopolitan.png",
    hoverImage: "/home/barcraft-mixers/cosmopolitan-glass.png",
  },
  {
    id: 3,
    name: "BarCraft Moscow Mule Mixer",
    description: "Real Ginger & Lime Cocktail Mixer",
    image: "/home/barcraft-mixers/moscow-mule.png",
    hoverImage: "/home/barcraft-mixers/moscow-mule-glass.png",
  },
];

export default function MixersSection() {
  return (
    <section className="w-full bg-black px-4 py-[60px] sm:px-6 md:py-[80px] lg:px-[28px] lg:py-[100px]">
      {/* Section heading */}

      <h2
        className="
          font-movault
          text-[40px]
          font-normal
          sm:text-[52px]
          lg:text-[70px]
          uppercase
          leading-none
          text-brand-yellow
        "
      >
        BarCraft Mixers
      </h2>

      {/* Products */}

      <div
        className="
          mt-8
          grid
          grid-cols-1
          gap-x-[6px]
          gap-y-10
          sm:grid-cols-2
          lg:mt-[55px]
          lg:grid-cols-3
        "
      >
        {MIXERS.map((mixer) => (
          <MixerCard
            key={mixer.id}
            mixer={mixer}
          />
        ))}
      </div>
    </section>
  );
}

function MixerCard({ mixer }) {
  return (
    <article className="min-w-0">
      {/* Image */}

        <div className="group relative aspect-[0.76] w-full overflow-hidden">
        {/* Normal image */}
        <Image
            src={mixer.image}
            alt={mixer.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="
            object-cover
            transition-opacity
            duration-500
            ease-in-out
            group-hover:opacity-0
            "
        />

        {/* Hover image */}
        <Image
            src={mixer.hoverImage}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="
            object-cover
            opacity-0
            transition-opacity
            duration-500
            ease-in-out
            group-hover:opacity-100
            "
        />
        </div>

      {/* Product information */}
      <div className="mt-4 lg:mt-7">
      <div className="mt-[10px]">
        <h3
          className="
            font-sf-pro
            text-[16px]
            font-semibold
            leading-[17px]
            text-white
          "
        >
          {mixer.name}
        </h3>

        <p
          className="
            font-sf-pro
            text-[14px]
            font-normal
            leading-[16px]
            text-white/60
          "
        >
          {mixer.description}
        </p>
      </div>

      {/* Size buttons */}

      <div className="mt-[13px] flex gap-[7px]">
        <button
          type="button"
          className="
            h-[35px]
            w-[113px]
            bg-brand-yellow
            font-sf-pro
            text-[17px]
            font-semibold
            leading-none
            text-black
          "
        >
          600ml
        </button>

        <button
          type="button"
          className="
            h-[35px]
            w-[113px]
            border
            border-brand-yellow
            bg-transparent
            font-sf-pro
            text-[17px]
            font-semibold
            leading-none
            text-brand-yellow
          "
        >
          60ml
        </button>
        </div>
      </div>
    </article>
  );
}