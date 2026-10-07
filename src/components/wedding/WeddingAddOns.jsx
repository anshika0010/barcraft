const ADD_ON_SERVICES = [
  {
    title: "BARCRAFT GLASSES",
    description:
      "Branded glasses for serving BarCraft drinks.",
  },
  {
    title: "BARCRAFT SODA",
    description:
      "Chilled soda made for our mixers.",
  },
  {
    title: "BARCRAFT ICE",
    description:
      "Clean ice for every serving.",
  },
  {
    title: "BARCRAFT BARTENDER",
    description:
      "Trained bartenders for better preparation. Recommended.",
  },
];

export default function WeddingAddOns() {
  return (
    <section
      className="
        w-full
        bg-[#FFD400]
        px-[30px]
        py-[82px]

        max-[1100px]:px-[24px]
        max-[700px]:px-5
        max-[700px]:py-[65px]
      "
    >
      <div className="mx-auto w-full max-w-[1380px]">

        {/* =====================================================
            HEADING
        ====================================================== */}

        <h2
          className="
            font-movault
            text-[88px]
            uppercase
            leading-[0.82]
            tracking-[-1px]
            text-black

            xl:text-[96px]

            lg:text-[84px]

            md:text-[70px]

            max-[700px]:text-[58px]

            max-[500px]:text-[48px]

            max-[400px]:text-[42px]
          "
        >
          ADD-ON SERVICES (PAID)
        </h2>


        {/* =====================================================
            DESCRIPTION
        ====================================================== */}

        <p
          className="
            mt-[27px]
            max-w-[1250px]
            font-sf-pro
            text-[21px]
            leading-[1.3]
            text-black

            lg:text-[19px]

            md:text-[18px]

            max-[700px]:mt-[20px]
            max-[700px]:text-[17px]

            max-[500px]:text-[16px]
          "
        >
          BarCraft drinks are served in BarCraft glasses with BarCraft
          soda and BarCraft ice. We recommend a BarCraft bartender for
          better preparation. All of these are paid and booked with us.
        </p>


        {/* =====================================================
            SERVICE CARDS
        ====================================================== */}

        <div
          className="
            mt-[46px]
            grid
            grid-cols-4
            gap-[20px]

            xl:gap-[22px]

            lg:gap-[18px]

            max-[900px]:grid-cols-2
            max-[900px]:gap-[18px]

            max-[700px]:mt-[35px]

            max-[560px]:grid-cols-1
          "
        >
          {ADD_ON_SERVICES.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}


/* ===========================================================
   SERVICE CARD
=========================================================== */

function ServiceCard({ title, description }) {
  return (
    <div
      className="
        flex
        min-h-[212px]
        flex-col
        items-center
        justify-center
        rounded-[20px]
        bg-black
        px-[28px]
        py-[28px]
        text-center

        transition-transform
        duration-300
        hover:-translate-y-[4px]

        max-[900px]:min-h-[200px]

        max-[560px]:min-h-[185px]
      "
    >

      <h3
        className="
          max-w-[280px]
          font-movault
          text-[31px]
          uppercase
          leading-[0.85]
          text-[#FFD400]

          xl:text-[33px]

          lg:text-[29px]

          md:text-[28px]

          max-[560px]:text-[30px]
        "
      >
        {title}
      </h3>


      <p
        className="
          mt-[22px]
          max-w-[250px]
          font-sf-pro
          text-[18px]
          leading-[1.22]
          text-white

          lg:text-[17px]

          md:text-[16px]

          max-[560px]:text-[17px]
        "
      >
        {description}
      </p>

    </div>
  );
}