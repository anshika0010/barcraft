"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Link from 'next/link' ;


// `products` are the live mixers from the product API
export default function MixersSection({ products = [] }) {
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
        {products.map((product) => (
          <MixerCard
            key={product.slug}
            flavor={{ ...product, href: `/mixers/${product.slug}` }}
          />
        ))}
      </div>
    </section>
  );
}

function MixerCard({ flavor, index }) {
  const [selectedSize, setSelectedSize] = useState("550ml");

  const selectedImage =
    selectedSize === "50ml" && flavor.image60 ? flavor.image60 : flavor.image;

  const selectedHoverImage =
    selectedSize === "50ml" ? flavor.hoverImage60 : flavor.hoverImage;

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
            // No photo uploaded yet: show the mixer's colour instead
            <div
              className="absolute inset-0"
              style={{ backgroundColor: flavor.accent }}
            />
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
            onClick={() => setSelectedSize("550ml")}
            className={`h-[35px] w-[113px] cursor-pointer font-sf-pro text-[17px] font-semibold leading-none ${
              selectedSize === "550ml"
                ? "bg-brand-yellow text-black"
                : "border border-brand-yellow bg-transparent text-brand-yellow"
            }`}
          >
            550ml
          </button>

          <button
            type="button"
            onClick={() => setSelectedSize("50ml")}
            className={`h-[35px] w-[113px] cursor-pointer font-sf-pro text-[17px] font-semibold leading-none ${
              selectedSize === "50ml"
                ? "bg-brand-yellow text-black"
                : "border border-brand-yellow bg-transparent text-brand-yellow"
            }`}
          >
            50ml
          </button>
        </div>
      </div>
    </article>
  );
}
