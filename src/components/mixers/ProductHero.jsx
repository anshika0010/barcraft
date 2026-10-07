"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProductHero({ data }) {
  const product = data?.product;

  // Convert JSON facts object into the structure your UI already uses
  const details = Object.entries(product?.facts || {}).map(
    ([title, content]) => ({
      title: title.toUpperCase(),
      content,
    })
  );

  // Get bottle sizes directly from JSON
  const bottleSizes = product?.sizes || [];

  // Default selected bottle size
  const getDefaultSize = () => {
    const selected = bottleSizes.find((item) => item.selected);
    return selected?.size || bottleSizes[0]?.size || "";
  };

  const [selectedSize, setSelectedSize] = useState(getDefaultSize);

  // Keep selected size synced if another flavor/data is loaded
  useEffect(() => {
    setSelectedSize(getDefaultSize());
  }, [product?.name]);

  // Open FLAVOUR by default
  const [openItems, setOpenItems] = useState(
    details.map((item) => item.title === "FLAVOUR")
  );

  // Reset accordion state when flavor changes
  useEffect(() => {
    setOpenItems(details.map((item) => item.title === "FLAVOUR"));
  }, [product?.name]);

  const toggleItem = (index) => {
    setOpenItems((current) =>
      current.map((open, i) => (i === index ? !open : open))
    );
  };

  // Safety fallback
  if (!product) {
    return null;
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative min-h-screen overflow-hidden">
        {/* =================================================
            BACKGROUND
        ================================================= */}
        <Image
          src="/mixers/screws.png"
          alt={product?.image?.alt || product?.name || "BarCraft Mixer"}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* subtle overall darkening */}
        <div className="absolute inset-0 bg-black/5" />

        {/* bottom black gradient */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-[42%]
            bg-gradient-to-t
            from-black
            via-black/70
            to-transparent
          "
        />

        {/* =================================================
            CONTENT
        ================================================= */}
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-screen
            w-full
            max-w-[1500px]
            px-[34px]
            pb-[40px]
            pt-[135px]

            max-[900px]:px-6
            max-[900px]:pt-[120px]

            max-[640px]:px-5
            max-[640px]:pt-[105px]
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}
          <div
            className="
              relative
              z-20
              w-full
              max-w-[650px]

              max-[1100px]:max-w-[570px]
              max-[900px]:max-w-[520px]
              max-[640px]:max-w-full
            "
          >
            {/* =================================================
                BARTENDER INSPIRED
            ================================================= */}
            {product.badge && (
              <div
                className="
                  mb-[18px]
                  inline-flex
                  items-center
                  bg-[#701D02]
                  px-[14px]
                  py-[7px]
                "
              >
                <span
                  className="
                    font-movault
                    text-[18px]
                    leading-none
                    text-[#FFAB98]
                    uppercase
                    tracking-wide
                    md:text-[28px]
                  "
                >
                  {product.badge}
                </span>
              </div>
            )}

            {/* =================================================
                TITLE
            ================================================= */}
            <h1
              className="
                font-movault
                text-[76px]
                uppercase
                leading-[0.82]
                tracking-[-1px]
                text-white

                xl:text-[92px]
                tracking-wide

                max-[1100px]:text-[72px]
                max-[900px]:text-[65px]
                max-[640px]:text-[52px]
                max-[420px]:text-[43px]
              "
            >
              {product.name}
            </h1>

            {/* =================================================
                DESCRIPTION
            ================================================= */}
            <p
              className="
                mt-[22px]
                max-w-[615px]
                font-sf-pro
                text-[17px]
                font-medium
                leading-[1.3]
                text-white

                md:text-[18px]
                max-[640px]:text-[16px]
              "
            >
              {product.description}
            </p>

            {/* =================================================
                DETAILS
            ================================================= */}
            {details.length > 0 && (
              <div
                className="
                  mt-[28px]
                  w-full
                  max-w-[605px]
                  border
                  border-[#FFAB98]/80

                  max-[640px]:mt-[24px]
                "
              >
                {details.map((item, index) => {
                  const isOpen = openItems[index];

                  return (
                    <div
                      key={item.title}
                      className="
                        border-b
                        border-[#FFAB98]/80
                        last:border-b-0
                      "
                    >
                      {/* HEADER */}
                      <button
                        type="button"
                        onClick={() => toggleItem(index)}
                        className="
                          flex
                          w-full
                          items-center
                          justify-between
                          px-[13px]
                          py-[10px]
                          text-left
                        "
                      >
                        <span
                          className="
                            font-movault
                            text-[32px]
                            uppercase
                            leading-none
                            text-white
                            tracking-wide
                            max-[640px]:text-[24px]
                          "
                        >
                          {item.title}
                        </span>

                        <span
                          className="
                            font-sf-pro
                            text-[31px]
                            font-light
                            leading-none
                            text-white
                          "
                        >
                          {isOpen ? "×" : "+"}
                        </span>
                      </button>

                      {/* CONTENT */}
                      <div
                        className={`
                          grid
                          transition-all
                          duration-300
                          ease-in-out
                          ${
                            isOpen
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }
                        `}
                      >
                        <div className="overflow-hidden">
                          <div
                            className="
                              border-t
                              border-[#FFAB98]/80
                              px-[13px]
                              py-[12px]
                            "
                          >
                            <p
                              className="
                                font-sf-pro
                                text-[16px]
                                font-medium
                                leading-[1.2]
                                text-white

                                max-[640px]:text-[15px]
                              "
                            >
                              {item.content}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* =================================================
                BOTTLE SIZE
            ================================================= */}
            {bottleSizes.length > 0 && (
              <div
                className="
                  mt-[20px]
                  flex
                  flex-col
                  items-start
                  gap-[10px]
                "
              >
                <div
                  className="
                    mr-[4px]
                    font-sf-pro
                    text-[13px]
                    font-bold
                    uppercase
                    text-[#FFAB98]
                  "
                >
                  Bottle size
                </div>

                <div className="flex flex-wrap gap-[10px]">
                  {bottleSizes.map((item) => {
                    const size = item.size;
                    const selected = selectedSize === size;

                    return (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`
                          min-w-[75px]
                          border
                          border-[#FFAB98]
                          px-[16px]
                          py-[8px]
                          font-sf-pro
                          text-[13px]
                          font-bold
                          uppercase
                          transition-all
                          duration-200

                          ${
                            selected
                              ? "bg-[#701D02] text-white"
                              : "bg-transparent text-white"
                          }
                        `}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}