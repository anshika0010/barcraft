import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-black lg:aspect-[16/9] lg:min-h-0">
      {/* Background */}
      <Image
        src="/Hero/hero-bg.jpg"
        alt="BarCraft Mojito Cocktail Mixer"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Readability fade for narrow screens, where text sits over the image */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent lg:hidden" />

      {/* Content */}
      <div className="absolute inset-0 z-10">
        <div
          className="
            absolute
            left-4
            right-4
            top-1/2
            -translate-y-1/2
            sm:left-6
            lg:left-[28px]
            lg:right-auto
            lg:w-[620px]
          "
        >
          {/* Heading */}
          <h1
            className="
              font-movault
              uppercase
              text-brand-yellow
              font-normal
            "
          >
            <span
              className="
                block
                text-[clamp(40px,6.46vw,93.01px)]
                leading-[0.88]
              "
            >
              Craft Your
            </span>

            <span
              className="
                mt-[8px]
                block
                whitespace-nowrap
                text-[clamp(64px,12.2vw,175.89px)]
                leading-[0.78]
              "
            >
             Perfect Cocktail 
            </span>
          </h1>

          {/* Description */}
          <p
            className="
                mt-6
                max-w-[505px]
                lg:mt-[38px]
                font-sf-pro
                text-[15px]
                font-medium
                leading-[20px]
                sm:text-[17px]
                lg:text-[18.33px]
                lg:leading-[22px]
                text-white
            "
            >
           Great drinks don't need a bar. BarCraft cocktail mixers bring the taste of a classic mojito, cosmopolitan or moscow mule to your glass in a few easy steps. Add ice, pour your mixer, and finish with a garnish. Add your favourite spirit if you like, or keep it zero-proof.
          </p>
        </div>
      </div>
    </section>
  );
}