"use client";

import { useState } from "react";
import { CalendarDays } from "lucide-react";

const FLAVOURS = [
  "Appletini",
  "Mojito",
  "Piña Colada",
  "Screwdriver",
  "Sex on the beach",
  "Spicy Mango",
];

const ADD_ONS = [
  "Glasses",
  "Soda",
  "Ice",
  "Bartender",
];

export default function WeddingRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    venue: "",
    fullAddress : "",
    guests: "",
    weddingDate: "",
    email: "",
  });

  const [selectedFlavours, setSelectedFlavours] = useState([]);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const toggleFlavour = (flavour) => {
    setSelectedFlavours((current) => {
      if (current.includes(flavour)) {
        return current.filter((item) => item !== flavour);
      }

      if (current.length >= 4) {
        return current;
      }

      return [...current, flavour];
    });
  };

  const toggleAddOn = (addOn) => {
    setSelectedAddOns((current) => {
      if (current.includes(addOn)) {
        return current.filter((item) => item !== addOn);
      }

      return [...current, addOn];
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedFlavours.length !== 4) {
      alert("Please choose exactly 4 flavours.");
      return;
    }

    if (!acceptedTerms) {
      alert("Please accept the wedding offer terms and conditions.");
      return;
    }

    console.log({
      ...formData,
      flavours: selectedFlavours,
      addOns: selectedAddOns,
    });

    setSubmitted(true);
  };

  return (
    <section
    id="register"
      className="
        w-full
        overflow-hidden
        bg-black
        px-[30px]
        pb-[110px]
        pt-[85px]

        max-[1100px]:px-[24px]

        max-[700px]:px-5
        max-[700px]:pb-[80px]
        max-[700px]:pt-[65px]
      "
    >
      <div className="mx-auto w-full max-w-[1380px]">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="max-w-[900px]">

          <h1
            className="
              font-movault
              text-[106px]
              uppercase
              leading-[0.8]
              tracking-[-1.5px]
              text-[#FFD400]

              xl:text-[115px]

              lg:text-[95px]

              md:text-[78px]

              max-[700px]:text-[63px]

              max-[500px]:text-[52px]

              max-[390px]:text-[45px]
            "
          >
            REGISTER YOUR WEDDING
          </h1>

          <p
            className="
              mt-[24px]
              max-w-[720px]
              font-sf-pro
              text-[20px]
              leading-[1.25]
              text-white

              md:text-[19px]

              max-[700px]:text-[17px]

              max-[500px]:text-[16px]
            "
          >
            No purchase required. Tell us the date, venue and number of
            guests, then choose four flavours.
          </p>

        </div>


        {/* =====================================================
            FORM
        ====================================================== */}

        <form
          onSubmit={handleSubmit}
          className="
            mt-[82px]
            w-full
            
            max-[700px]:mt-[55px]
          "
        >

          {/* =================================================
              TOP TWO-COLUMN FIELDS
          ================================================== */}

          <div
            className="
              grid
              grid-cols-2
              gap-x-[35px]
              gap-y-[43px]

              max-[700px]:grid-cols-1
              max-[700px]:gap-y-[30px]
            "
          >

            <FormField
              label="NAME"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <FormField
              label="PHONE / WHATSAPP NUMBER"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <FormField
              label="VENUE"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              required
            />
            <FormField
              label="NUMBER OF GUESTS"
              name="guests"
              type="number"
              min="1"
              value={formData.guests}
              onChange={handleChange}
              required
            />

            
            <FormField
              label="FULL ADDRESS"
              name="fullAddress"
              value={formData.fullAddress}
              onChange={handleChange}
              required
              labelStyle="text-xl"
            />

          </div>


          {/* =================================================
              WEDDING DATE
          ================================================== */}

          <div className="mt-[43px] max-[700px]:mt-[30px]">


            <FieldLabel>
              WEDDING DATE
            </FieldLabel>

            <div className="relative mt-[12px]">

              <input
                type="date"
                name="weddingDate"
                value={formData.weddingDate}
                onChange={handleChange}
                required
                className="
                  h-[66px]
                  w-full
                  appearance-none
                  rounded-[2px]
                  bg-[#FFD400]
                  px-[17px]
                  pr-[60px]
                  font-sf-pro
                  text-[21px]
                  text-black
                  outline-none

                  max-[700px]:h-[60px]
                  max-[700px]:text-[18px]

                  [&::-webkit-calendar-picker-indicator]:absolute
                  [&::-webkit-calendar-picker-indicator]:right-[28px]
                  [&::-webkit-calendar-picker-indicator]:cursor-pointer
                  [&::-webkit-calendar-picker-indicator]:opacity-0
                "
              />

              <CalendarDays
                size={25}
                strokeWidth={2}
                className="
                  pointer-events-none
                  absolute
                  right-[28px]
                  top-1/2
                  -translate-y-1/2
                  text-black

                  max-[700px]:right-[20px]
                "
              />

            </div>

          </div>


          {/* =================================================
              EMAIL
          ================================================== */}

          <div className="mt-[43px] max-[700px]:mt-[30px]">

            <FieldLabel>
              EMAIL
            </FieldLabel>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="
                mt-[12px]
                h-[66px]
                w-full
                rounded-[2px]
                bg-[#FFD400]
                px-[17px]
                font-sf-pro
                text-[21px]
                text-black
                outline-none

                max-[700px]:h-[60px]
                max-[700px]:text-[18px]
              "
            />

          </div>


          {/* =================================================
              FLAVOURS
          ================================================== */}

          <SelectionBox
            title="CHOOSE EXACTLY 4 FLAVOURS"
            items={FLAVOURS}
            selectedItems={selectedFlavours}
            onToggle={toggleFlavour}
            maxSelection={4}
          />


          {/* =================================================
              ADD-ONS
          ================================================== */}

          <SelectionBox
            title="ADD-ONS YOU WANT US TO QUOTE (OPTIONAL)"
            items={ADD_ONS}
            selectedItems={selectedAddOns}
            onToggle={toggleAddOn}
          />


          {/* =================================================
              TERMS
          ================================================== */}

          <label
            className="
              mt-[55px]
              flex
              cursor-pointer
              items-center
              gap-[16px]

              max-[700px]:mt-[40px]
              max-[500px]:items-start
            "
          >

            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(event) =>
                setAcceptedTerms(event.target.checked)
              }
              className="
                peer
                sr-only
              "
            />

            <span
              className="
                flex
                h-[29px]
                w-[29px]
                shrink-0
                items-center
                justify-center
                border-2
                border-[#FFD400]
                bg-black
                peer-checked:bg-[#FFD400]
              "
            >
              {acceptedTerms && (
                <span className="font-sf-pro text-[21px] font-bold text-black">
                  ✓
                </span>
              )}
            </span>

            <span
              className="
                font-sf-pro
                text-[18px]
                leading-[1.3]
                text-white

                max-[700px]:text-[16px]
              "
            >
              I accept the{" "}
              <a
                href="/wedding/terms"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) =>
                  event.stopPropagation()
                }
                className="
                  text-[#FFD400]
                  underline
                  underline-offset-[3px]
                "
              >
                wedding offer terms and conditions.
              </a>
            </span>

          </label>


          {/* =================================================
              SUBMIT
          ================================================== */}

          <button
            type="submit"
            disabled={submitted}
            className="
              mt-[50px]
              flex
              h-[60px]
              w-[620px]
              max-w-full
              items-center
              justify-between
              bg-[#FFD400]
              px-[16px]
              font-movault
              text-[31px]
              uppercase
              leading-none
              text-black
              transition-transform
              duration-300
              hover:scale-[0.995]

              disabled:cursor-not-allowed
              disabled:opacity-60

              max-[700px]:mt-[40px]
              max-[700px]:h-[56px]
              max-[700px]:text-[27px]

              max-[500px]:text-[23px]
            "
          >

            <span>
              {submitted
                ? "REGISTERED"
                : "REGISTER MY WEDDING"}
            </span>

            <span
              className="
                flex
                h-[44px]
                w-[44px]
                shrink-0
                items-center
                justify-center
                bg-black
                font-sf-pro
                text-[25px]
                text-white

                max-[500px]:h-[40px]
                max-[500px]:w-[40px]
              "
            >
              →
            </span>

          </button>

        </form>

      </div>
    </section>
  );
}


/* ===========================================================
   FORM FIELD
=========================================================== */

function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  min,
}) {
  return (
    <div>

      <FieldLabel>
        {label}
      </FieldLabel>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        min={min}
        className="
          mt-[12px]
          h-[66px]
          w-full
          rounded-[2px]
          bg-[#FFD400]
          px-[17px]
          font-sf-pro
          text-[21px]
          text-black
          outline-none

          max-[700px]:h-[60px]
          max-[700px]:text-[18px]
        "
      />

    </div>
  );
}


/* ===========================================================
   FIELD LABEL
=========================================================== */

function FieldLabel({ children }) {
  return (
    <label
      className="
        block
        font-sf-pro
        text-[27px]
        uppercase
        leading-none
        text-white
        tracking-wide

        md:text-[27px]

        max-[700px]:text-[25px]

        max-[500px]:text-[23px]
      "
    >
      {children}
    </label>
  );
}


/* ===========================================================
   SELECTION BOX
=========================================================== */

function SelectionBox({
  title,
  items,
  selectedItems,
  onToggle,
  maxSelection,
}) {
  const isLimited =
    typeof maxSelection === "number";

  return (
    <div
      className="
        relative
        mt-[55px]
        bg-[#FFD400]
        px-[32px]
        pb-[35px]
        pt-[52px]

        max-[700px]:mt-[40px]
        max-[700px]:px-[20px]
        max-[700px]:pb-[25px]
        max-[700px]:pt-[45px]
      "
    >

      {/* =================================================
          TITLE TAB
      ================================================== */}

      <div
        className="
          absolute
          left-[70px]
          top-0
          -translate-y-1/2
          bg-black
          px-[38px]
          py-[11px]

          max-[700px]:left-[20px]
          max-[700px]:px-[20px]
          max-[700px]:py-[9px]
        "
      >
        <span
          className="
            font-sf-pro
            text-[28px]
            uppercase
            leading-none
            text-white

            max-[700px]:text-[22px]

            max-[500px]:text-[19px]
          "
        >
          {title}
        </span>
      </div>


      {/* =================================================
          OPTIONS GRID
      ================================================== */}

      <div
        className="
          grid
          grid-cols-3
          gap-x-[80px]
          gap-y-[28px]

          max-[1000px]:gap-x-[45px]

          max-[800px]:grid-cols-2
          max-[800px]:gap-x-[30px]

          max-[500px]:grid-cols-1
          max-[500px]:gap-y-[20px]
        "
      >
        {items.map((item) => {
          const selected = selectedItems.includes(item);

          const disabled =
            isLimited &&
            !selected &&
            selectedItems.length >= maxSelection;

          return (
            <label
              key={item}
              className={`
                flex
                cursor-pointer
                items-center
                gap-[38px]
                font-sf-pro
                text-[22px]
                text-black

                max-[800px]:gap-[24px]
                max-[800px]:text-[19px]

                max-[500px]:gap-[18px]
                max-[500px]:text-[18px]

                ${
                  disabled
                    ? "cursor-not-allowed opacity-40"
                    : ""
                }
              `}
            >

              <input
                type="checkbox"
                checked={selected}
                disabled={disabled}
                onChange={() => onToggle(item)}
                className="peer sr-only"
              />

              <span
                className="
                  flex
                  h-[30px]
                  w-[30px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-[5px]
                  bg-black

                  max-[500px]:h-[27px]
                  max-[500px]:w-[27px]
                "
              >
                {selected && (
                  <span className="font-sf-pro text-[20px] font-bold text-[#FFD400]">
                    ✓
                  </span>
                )}
              </span>

              <span>
                {item}
              </span>

            </label>
          );
        })}
      </div>


      {/* Selection counter */}

      {isLimited && (
        <p
          className="
            mt-[25px]
            font-sf-pro
            text-[14px]
            font-medium
            text-black/60
          "
        >
          {selectedItems.length} / {maxSelection} selected
        </p>
      )}

    </div>
  );
}