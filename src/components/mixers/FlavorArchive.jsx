"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { COLLECTIONS } from "./flavors";

const POUR_STEPS = [
  { title: "Choose your base", image: "/home/how-to-mix/steps/2.png" },
  { title: "Pour the mixer", image: "/home/how-to-mix/steps/3.png" },
  { title: "Bypass the bartender", image: "/home/how-to-mix/steps/4.png" },
];

export default function FlavorArchive() {
  return (
    <>
      <ArchiveHero />
      {COLLECTIONS.map((collection, index) => (
        <CollectionSection
          key={collection.id}
          collection={collection}
          number={index + 1}
        />
      ))}
      <PourSteps />
    </>
  );
}

/* =========================================================
   HERO
========================================================= */

function ArchiveHero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-black">
      <Image
        src="/home/how-to-mix/how-to-mix.jpg"
        alt="BarCraft cocktails on the bar"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
      <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black to-transparent" />

      <div
        className="
          relative z-10
          flex min-h-[100svh] flex-col justify-center
          px-4 pb-16 pt-[110px]
          sm:px-6
          lg:px-[28px] lg:pt-[130px]
        "
      >
        <h1 className="font-movault font-normal uppercase text-brand-yellow">
          <span className="block text-[clamp(40px,6.46vw,93px)] leading-[0.88]">
            The BarCraft
          </span>
          <span className="mt-[8px] block text-[clamp(64px,12.2vw,176px)] leading-[0.8]">
            Flavor Archive
          </span>
        </h1>

        <p
          className="
            mt-6 max-w-[560px]
            font-sf-pro text-[15px] font-medium leading-[20px] text-white
            sm:text-[17px]
            lg:mt-[38px] lg:text-[18.33px] lg:leading-[22px]
          "
        >
          Engineered to completely neutralize ethanol burn while delivering
          high-fidelity, complex profiles. Choose your base, pour the mixer,
          and bypass the bartender entirely.
        </p>

        {/* Collection jump links */}
        <nav
          aria-label="Collections"
          className="mt-8 flex flex-wrap gap-[7px] lg:mt-[48px]"
        >
          {COLLECTIONS.map((collection) => (
            <a
              key={collection.id}
              href={`#${collection.id}`}
              className="
                flex h-[35px] items-center
                border border-brand-yellow px-[14px]
                font-sf-pro text-[13px] font-semibold text-brand-yellow
                transition-colors duration-200
                hover:bg-brand-yellow hover:text-black
                sm:text-[14px]
              "
            >
              {collection.title.replace(/^The /, "")}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}

/* =========================================================
   COLLECTION
========================================================= */

function CollectionSection({ collection, number }) {
  return (
    <section
      id={collection.id}
      className="w-full scroll-mt-[64px] bg-black px-4 py-[60px] sm:px-6 md:scroll-mt-[86px] md:py-[80px] lg:px-[28px] lg:py-[100px]"
    >
      {/* Banner */}
      <div
        className="
          relative w-full overflow-hidden
          rounded-[28px]
          aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/8]
          md:rounded-[55px]
        "
      >
        <Image
          src={collection.banner}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: collection.bannerPosition ?? "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" />

        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:p-[48px]">
          <span className="font-sf-pro text-[13px] font-bold uppercase tracking-[0.2em] text-white/65">
            Collection {String(number).padStart(2, "0")}
          </span>
          <h2
            className="
              mt-3 font-movault font-normal uppercase leading-[0.9]
              text-brand-yellow
              text-[40px] sm:text-[52px] lg:text-[70px]
            "
          >
            {collection.title}
          </h2>
          <p className="mt-3 max-w-[560px] font-sf-pro text-[14px] font-medium leading-[18px] text-white sm:text-[16px] sm:leading-[20px]">
            {collection.tagline}
          </p>
        </div>
      </div>

      {/* Flavors */}
      {/* Four-flavor collections use a 4-up row so no card is orphaned */}
      <div
        className={`
          mt-10 grid grid-cols-1 gap-x-[6px] gap-y-10
          sm:grid-cols-2
          lg:mt-[55px]
          ${collection.flavors.length % 4 === 0 ? "lg:grid-cols-4" : "lg:grid-cols-3"}
        `}
      >
        {collection.flavors.map((flavor, index) => (
          <FlavorCard key={flavor.name} flavor={flavor} index={index} />
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   FLAVOR CARD
   Mirrors the home page MixerCard. Photos with a glass shot
   swap to it on hover, single photos zoom slightly; flavors
   without photography get a label card tinted with the
   flavor's accent colour.
========================================================= */


function FlavorCard({ flavor, index }) {
  const [selectedSize, setSelectedSize] = useState("600ml");

  const selectedImage =
    selectedSize === "60ml" && flavor.image60
      ? flavor.image60
      : flavor.image;

  const selectedHoverImage =
    selectedSize === "60ml"
      ? flavor.hoverImage60
      : flavor.hoverImage;

  return (
    <article className="min-w-0">
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

function LabelArt({ flavor, index }) {
  return (
    <div
      className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      style={{
        backgroundColor: "#0b0b0b",
        backgroundImage: `radial-gradient(120% 80% at 50% 100%, ${flavor.accent}cc 0%, ${flavor.accent}33 45%, transparent 75%)`,
      }}
    >
      {/* Oversized index number */}
      <span
        aria-hidden="true"
        className="absolute right-4 top-2 font-movault text-[120px] leading-none text-white/[0.06] sm:text-[150px]"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="absolute left-1/2 top-[14%] h-[40px] w-[110px] -translate-x-1/2 opacity-80">
        <Image
          src="/nav/nav-logo.png"
          alt=""
          fill
          sizes="110px"
          className="object-contain"
        />
      </div>

      <div className="absolute inset-x-6 bottom-8 text-center">
        <div
          className="mx-auto mb-5 h-[3px] w-[48px]"
          style={{ backgroundColor: flavor.accent }}
        />
        <p className="font-movault text-[clamp(44px,7vw,72px)] uppercase leading-[0.9] text-white">
          {flavor.name}
        </p>
        <p className="mt-3 font-sf-pro text-[11px] font-bold uppercase tracking-[0.25em] text-white/70">
          Crafted Cocktail Mixer
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   POUR STEPS
========================================================= */

function PourSteps() {
  return (
    <section className="w-full bg-black px-4 pb-[80px] pt-[20px] sm:px-6 lg:px-[28px] lg:pb-[100px]">
      <h2 className="text-center font-movault font-normal uppercase leading-[0.9] text-brand-yellow text-[38px] sm:text-[52px] lg:text-[88px]">
        Three steps. No bartender.
      </h2>

      <ol className="mx-auto mt-10 grid max-w-[1000px] grid-cols-1 gap-4 sm:grid-cols-3 lg:mt-[55px]">
        {POUR_STEPS.map((step, index) => (
          <li
            key={step.title}
            className="flex flex-col items-center rounded-[15px] bg-[#121212] px-6 py-8 text-center"
          >
            <span className="flex h-[24px] w-[88px] items-center justify-center bg-brand-yellow font-sf-pro text-[13px] font-bold uppercase leading-none text-black">
              Step {index + 1}
            </span>
            <div className="relative mt-6 h-[110px] w-[110px]">
              <Image
                src={step.image}
                alt=""
                fill
                sizes="110px"
                className="object-contain"
              />
            </div>
            <h3 className="mt-5 font-sf-pro text-[20px] font-semibold leading-[23px] text-white">
              {step.title}
            </h3>
          </li>
        ))}
      </ol>
    </section>
  );
}
