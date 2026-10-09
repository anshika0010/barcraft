"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Link from 'next/link' ;
const flavor = [
  {
    id: 1,
    name: "Mojito",
    description: "Zesty lime and fresh mint with balanced sweetness. BarCraft Crafted Cocktail Mixers bring the character of a well-crafted cocktail to every pour, with a smooth, consistent serve and none of the complexity of traditional cocktail making.",
    image: "/NEW BARCRAFT IMAGES/MOJITO H600ml.jpeg",
    image60: "/60ml images/MOJITOO SMALL.jpg",
    accent: "#c8102e",
    href:'/mixers/Mojito',
    hoverImage: "/home/barcraft-mixers/mojito-glass.png",
  },

  {
    id: 2,
    name: "Screw Driver",
    description: "Juicy sweet orange with fresh citrus acidity and subtle peel notes. BarCraft Crafted Cocktail Mixers bring the character of a well-crafted cocktail to every pour, with a smooth, consistent serve and none of the complexity of traditional cocktail making.",
    accent: "#d3f83d",
    image: "/NEW BARCRAFT IMAGES/screwdriver600ml.jpeg",
    image60: "/60ml images/screwdriver 60ml.jpg",
    hoverImage: "/home/barcraft-mixers/screwdriver.png",
    href:"/mixers/Screw Driver"
  },
  {
    id: 3,
    name: "Spicy Mango",
    description: "Juicy ripe mango, zesty lime and warming chilli, finishing with a subtle salty tang. BarCraft Crafted Cocktail Mixers bring the character of a well-crafted cocktail to every pour, with a smooth, consistent serve and none of the complexity of traditional cocktail making.",
    hoverImage: "/home/barcraft-mixers/spicy-mango.png",
            accent: "#edf048",
        image: "/NEW BARCRAFT IMAGES/spicy mango600ml.jpeg",
        image60: "/60ml images/spicy mango 60ml.jpg",
    href:"/mixers/Spicy Mango"
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
        {flavor.map((flavor) => (
          <MixerCard key={flavor.id} flavor={flavor} />
        ))}
      </div>
    </section>
  );
}

function MixerCard({ flavor, index }) {
  const [selectedSize, setSelectedSize] = useState("600ml");

  const selectedImage =
    selectedSize === "60ml" && flavor.image60 ? flavor.image60 : flavor.image;

  const selectedHoverImage =
    selectedSize === "60ml" ? flavor.hoverImage60 : flavor.hoverImage;

  return (
    <article className="min-w-0">
      <Link href={`${flavor.href}`}>
      <div className="group relative aspect-[0.76] w-full overflow-hidden">
        <AnimatePresence mode="sync">
          {selectedImage ? (
            selectedHoverImage ? (
              <motion.div
                key={`${selectedSize}-hover`}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  opacity: { duration: 0.45, ease: "easeInOut" },
                  scale: { duration: 0.6, ease: "easeOut" },
                }}
              >
                <Image
                  src={selectedImage}
                  alt={`BarCraft ${flavor.name} Mixer`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                  style={{
                    objectPosition: flavor.imagePosition ?? "center",
                  }}
                />

                <Image
                  src={selectedHoverImage}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </motion.div>
            ) : (
              <motion.div
                key={selectedSize}
                className="absolute inset-0"
                initial={{
                  opacity: 0,
                  scale: 1.04,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={selectedImage}
                  alt={`BarCraft ${flavor.name} Mixer`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                  style={{
                    objectPosition: flavor.imagePosition ?? "center",
                  }}
                />
              </motion.div>
            )
          ) : (
            <LabelArt flavor={flavor} index={index} />
          )}
        </AnimatePresence>
      </div>
    </Link>
      <div className="mt-4 lg:mt-7">
        <h3 className="font-sf-pro text-[16px] font-semibold leading-[17px] text-white">
          BarCraft {flavor.name} Mixer
        </h3>

        <p className="mt-[6px] max-w-[430px] font-sf-pro text-[14px] font-normal leading-[18px] text-white/60">
          {flavor.description}
        </p>

        <div className="mt-[13px] flex gap-[7px]">
          <button
            type="button"
            onClick={() => setSelectedSize("600ml")}
            className={`h-[35px] w-[113px] cursor-pointer font-sf-pro text-[17px] font-semibold leading-none ${
              selectedSize === "600ml"
                ? "bg-brand-yellow text-black"
                : "border border-brand-yellow bg-transparent text-brand-yellow"
            }`}
          >
            600ml
          </button>

          <button
            type="button"
            onClick={() => setSelectedSize("60ml")}
            className={`h-[35px] w-[113px] cursor-pointer font-sf-pro text-[17px] font-semibold leading-none ${
              selectedSize === "60ml"
                ? "bg-brand-yellow text-black"
                : "border border-brand-yellow bg-transparent text-brand-yellow"
            }`}
          >
            60ml
          </button>
        </div>
      </div>
    </article>
  );
}
