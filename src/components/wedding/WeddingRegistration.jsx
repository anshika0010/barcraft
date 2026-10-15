"use client";

import { useEffect, useState } from "react";
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

const BOOKING_API =
  process.env.NEXT_PUBLIC_BOOKING_API ||
  "https://api.barcraftmixer.com/barcraft/api/booking";

const REQUIRED_FLAVOURS = 4;
const MAX_GUESTS = 10000;

const NAME_PATTERN = /^[\p{L}][\p{L}\s.'-]*$/u;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Indian mobile number, optionally prefixed with +91, 91 or 0.
const PHONE_PATTERN = /^(?:\+?91|0)?[6-9]\d{9}$/;

function getToday() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${now.getFullYear()}-${month}-${day}`;
}

function validateField(name, rawValue) {
  const value = rawValue.trim();

  switch (name) {
    case "name":
      if (!value) return "Please enter your name.";
      if (value.length < 2) return "Name must be at least 2 characters.";
      if (value.length > 60) return "Name must be under 60 characters.";
      if (!NAME_PATTERN.test(value)) {
        return "Name can only contain letters, spaces, dots, hyphens and apostrophes.";
      }
      return "";

    case "phone": {
      if (!value) return "Please enter your phone / WhatsApp number.";
      const digits = value.replace(/[\s-]/g, "");
      if (!PHONE_PATTERN.test(digits)) {
        return "Enter a valid 10-digit mobile number.";
      }
      return "";
    }

    case "venue":
      if (!value) return "Please enter the venue.";
      if (value.length < 3) return "Venue must be at least 3 characters.";
      return "";

    case "guests": {
      if (!value) return "Please enter the number of guests.";
      if (!/^\d+$/.test(value)) return "Number of guests must be a whole number.";
      const guests = Number(value);
      if (guests < 1) return "There must be at least 1 guest.";
      if (guests > MAX_GUESTS) {
        return `Number of guests can't be more than ${MAX_GUESTS}.`;
      }
      return "";
    }

    case "fullAddress":
      if (!value) return "Please enter the full address.";
      if (value.length < 10) return "Please enter a complete address.";
      return "";

    case "eventDate":
      if (!value) return "Please choose the event date.";
      if (value < getToday()) return "Event date can't be in the past.";
      return "";

    case "email":
      if (!value) return "Please enter your email.";
      if (!EMAIL_PATTERN.test(value)) return "Enter a valid email address.";
      return "";

    default:
      return "";
  }
}

function validateFlavours(flavours) {
  if (flavours.length !== REQUIRED_FLAVOURS) {
    return `Please choose exactly ${REQUIRED_FLAVOURS} flavours (${flavours.length} selected).`;
  }
  return "";
}

export default function WeddingRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    venue: "",
    fullAddress : "",
    guests: "",
    eventDate: "",
    email: "",
  });

  const [selectedFlavours, setSelectedFlavours] = useState([]);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    // Re-check as the user types once the field has already shown an error.
    if (touched[name] || attemptedSubmit) {
      setErrors((current) => ({
        ...current,
        [name]: validateField(name, value),
      }));
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;

    setTouched((current) => ({ ...current, [name]: true }));
    setErrors((current) => ({
      ...current,
      [name]: validateField(name, value),
    }));
  };

  const fieldError = (name) =>
    touched[name] || attemptedSubmit ? errors[name] : "";

  const toggleFlavour = (flavour) => {
    setSelectedFlavours((current) => {
      if (current.includes(flavour)) {
        return current.filter((item) => item !== flavour);
      }

      if (current.length >= REQUIRED_FLAVOURS) {
        return current;
      }

      return [...current, flavour];
    });
  };

  useEffect(() => {
    if (attemptedSubmit) {
      setErrors((current) => ({
        ...current,
        flavours: validateFlavours(selectedFlavours),
      }));
    }
  }, [selectedFlavours, attemptedSubmit]);

  const toggleAddOn = (addOn) => {
    setSelectedAddOns((current) => {
      if (current.includes(addOn)) {
        return current.filter((item) => item !== addOn);
      }

      return [...current, addOn];
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (submitting || submitted) return;

    setAttemptedSubmit(true);
    setSubmitError("");

    const nextErrors = {};

    Object.entries(formData).forEach(([name, value]) => {
      nextErrors[name] = validateField(name, value);
    });
    nextErrors.flavours = validateFlavours(selectedFlavours);

    setErrors(nextErrors);

    const firstInvalid = Object.keys(nextErrors).find(
      (name) => nextErrors[name]
    );

    if (firstInvalid) {
      const target = document.getElementById(firstInvalid);

      target?.scrollIntoView({ behavior: "smooth", block: "center" });
      if (firstInvalid !== "flavours") target?.focus({ preventScroll: true });
      return;
    }

    const cleanData = Object.fromEntries(
      Object.entries(formData).map(([name, value]) => [name, value.trim()])
    );

    setSubmitting(true);

    try {
      const response = await fetch(BOOKING_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: cleanData.name,
          phone: cleanData.phone.replace(/[\s-]/g, ""),
          venue: cleanData.venue,
          address: cleanData.fullAddress,
          guestNumber: String(Number(cleanData.guests)),
          date: cleanData.eventDate,
          email: cleanData.email,
          flavour: selectedFlavours,
          addon: selectedAddOns,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Registration failed. Please try again."
        );
      }

      setSuccessMessage(
        result.message || "Registration successful, our team will contact you soon."
      );
      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof TypeError
          ? "Couldn't reach the server. Please check your connection and try again."
          : error.message
      );
    } finally {
      setSubmitting(false);
    }
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

          <h2
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
            REGISTER 
          </h2>

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
          noValidate
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
              autoComplete="name"
              maxLength={60}
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={fieldError("name")}
              required
            />

            <FormField
              label="PHONE / WHATSAPP NUMBER"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              maxLength={16}
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              error={fieldError("phone")}
              required
            />

            <FormField
              label="VENUE"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              onBlur={handleBlur}
              error={fieldError("venue")}
              required
            />
            <FormField
              label="NUMBER OF GUESTS"
              name="guests"
              type="number"
              inputMode="numeric"
              min="1"
              max={MAX_GUESTS}
              value={formData.guests}
              onChange={handleChange}
              onBlur={handleBlur}
              error={fieldError("guests")}
              required
            />

            
            <FormField
              label="FULL ADDRESS"
              name="fullAddress"
              value={formData.fullAddress}
              onChange={handleChange}
              onBlur={handleBlur}
              error={fieldError("fullAddress")}
              required
            />

          </div>


          {/* =================================================
              EVENT DATE
          ================================================== */}

          <div className="mt-[43px] max-[700px]:mt-[30px]">


            <FieldLabel htmlFor="eventDate">
              EVENT DATE
            </FieldLabel>

            <div className="relative mt-[12px]">

              <input
                id="eventDate"
                type="date"
                name="eventDate"
                min={getToday()}
                value={formData.eventDate}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                aria-invalid={Boolean(fieldError("eventDate"))}
                aria-describedby={fieldError("eventDate") ? "eventDate-error" : undefined}
                suppressHydrationWarning
                className={`
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

                  ${fieldError("eventDate") ? INVALID_INPUT_CLASSES : ""}
                `}
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

            <ErrorText id="eventDate-error" message={fieldError("eventDate")} />

          </div>


          {/* =================================================
              EMAIL
          ================================================== */}

          <div className="mt-[43px] max-[700px]:mt-[30px]">

            <FieldLabel htmlFor="email">
              EMAIL
            </FieldLabel>

            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              aria-invalid={Boolean(fieldError("email"))}
              aria-describedby={fieldError("email") ? "email-error" : undefined}
              className={`
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

                ${fieldError("email") ? INVALID_INPUT_CLASSES : ""}
              `}
            />

            <ErrorText id="email-error" message={fieldError("email")} />

          </div>


          {/* =================================================
              FLAVOURS
          ================================================== */}

          <SelectionBox
            id="flavours"
            title={`CHOOSE EXACTLY ${REQUIRED_FLAVOURS} FLAVOURS`}
            items={FLAVOURS}
            selectedItems={selectedFlavours}
            onToggle={toggleFlavour}
            maxSelection={REQUIRED_FLAVOURS}
          />

          <ErrorText id="flavours-error" message={errors.flavours} />


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
              SUBMIT
          ================================================== */}

          <button
            type="submit"
            disabled={submitted || submitting}
            aria-busy={submitting}
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
                : submitting
                  ? "SUBMITTING..."
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

          <ErrorText id="submit-error" message={submitError} />

          {successMessage && (
            <p
              role="status"
              className="
                mt-[16px]
                font-sf-pro
                text-[17px]
                leading-[1.3]
                text-[#FFD400]

                max-[700px]:text-[15px]
              "
            >
              {successMessage}
            </p>
          )}

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
  onBlur,
  error,
  required = false,
  ...inputProps
}) {
  const errorId = `${name}-error`;

  return (
    <div className="flex flex-col justify-start">

      <FieldLabel htmlFor={name}>
        {label}
      </FieldLabel>

      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        {...inputProps}
        className={`
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

          ${error ? INVALID_INPUT_CLASSES : ""}
        `}
      />

      <ErrorText id={errorId} message={error} />

    </div>
  );
}


/* ===========================================================
   ERROR TEXT
=========================================================== */

const INVALID_INPUT_CLASSES = "ring-[3px] ring-[#FF4D4D]";

function ErrorText({ id, message }) {
  if (!message) return null;

  return (
    <p
      id={id}
      role="alert"
      className="
        mt-[10px]
        font-sf-pro
        text-[15px]
        leading-[1.3]
        text-[#FF6B6B]

        max-[700px]:text-[14px]
      "
    >
      {message}
    </p>
  );
}


/* ===========================================================
   FIELD LABEL
=========================================================== */

function FieldLabel({ children, htmlFor }) {
  return (
    <label
      htmlFor={htmlFor}
      className="
        block
        text-[18px]
        uppercase
        leading-none
        text-white
        tracking-wide

        max-[1023px]:text-[20px]
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
  id,
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
      id={id}
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