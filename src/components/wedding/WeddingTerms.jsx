export default function WeddingTerms() {
  const terms = [
    "Each wedding receives 1000 BarCraft mixer servings.",
    "The customer selects four flavours.",
    "We supply only the mixer, delivery and instructions.",
    "Alcohol is not included.",
    "Soda, ice, cups and bartenders are not included. They need to be booked with us.",
    "BarCraft drinks are served only in BarCraft glasses, with BarCraft soda and BarCraft ice. For better preparation we recommend a BarCraft bartender. All of these are paid services.",
    "No purchase is required. Select the date, venue and number of guests.",
    "For guests above 1000, we charge a discounted ₹100 per serving, which includes glass, soda, ice and mixer.",
  ];

  return (
    <section className="w-full overflow-hidden bg-black py-[80px] md:py-[100px]">
      <div
        className="
          relative
          bg-[#FFD400]
          px-[84px]
          py-[72px]

          [clip-path:polygon(0_5%,100%_0%,100%_100%,0_90%)]

          max-[1100px]:px-[55px]
          max-[1100px]:py-[65px]

          max-[700px]:px-[28px]
          max-[700px]:py-[58px]

          max-[500px]:px-[20px]
          max-[500px]:py-[50px]

          max-[400px]:py-[45px]
        "
      >
        <div className="mx-auto w-full max-w-[1380px]">

          {/* =================================================
              HEADING
          ================================================== */}

          <h2
            className="
              font-movault
              text-[92px]
              uppercase
              leading-[0.82]
              tracking-[-1px]
              text-black

              xl:text-[100px]

              lg:text-[88px]

              md:text-[74px]

              max-[700px]:text-[62px]

              max-[500px]:text-[50px]

              max-[400px]:text-[43px]
            "
          >
            TERMS AND CONDITIONS
          </h2>


          {/* =================================================
              TERMS
          ================================================== */}

          <ul
            className="
              mt-[48px]
              mb-[10px]
              max-w-[1320px]
              space-y-[18px]

              md:mt-[45px]
              md:space-y-[17px]

              max-[700px]:mt-[38px]
              max-[700px]:space-y-[15px]
            "
          >
            {terms.map((term) => (
              <li
                key={term}
                className="
                  relative
                  pl-[28px]
                  font-sf-pro
                  text-[21px]
                  leading-[1.35]
                  text-black

                  md:text-[15px]

                  max-[700px]:pl-[22px]
                  max-[700px]:text-[17px]

                  max-[500px]:text-[16px]
                "
              >
                <span
                  className="
                    absolute
                    left-0
                    top-0
                  "
                >
                  •
                </span>

                {term}
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
}