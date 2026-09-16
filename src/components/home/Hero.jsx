import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative aspect-[16/9] w-full overflow-hidden bg-black">
      {/* Background */}
      <Image
        src="/Hero/hero-bg.jpg"
        alt="BarCraft Mojito Cocktail Mixer"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Content */}
      <div className="absolute inset-0 z-10">
        <div
          className="
            absolute
            left-[28px]
            top-1/2
            -translate-y-1/2
            w-[620px]
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
                text-[93.01px]
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
                text-[175.89px]
                leading-[0.78]
              "
            >
              Perfect Mojito
            </span>
          </h1>

          {/* Description */}
          <p
            className="
                mt-[38px]
                max-w-[505px]
                font-sf-pro
                text-[18.33px]
                font-medium
                leading-[22px]
                text-white
            "
            >
            Refreshingly crafted with zesty lime and cool mint, BARCRAFT
            Mojito Cocktail Mixer brings the essence of a classic mojito to
            your glass. Just mix, pour, and enjoy a bar-quality experience at
            home.
          </p>
        </div>
      </div>
    </section>
  );
}