"use client";

import { useState } from "react";
import Link from "next/link";
import { FAQS } from "@/data/faqs";

export default function FAQs({
  items = FAQS,
  limit,
  viewMoreHref,
  as: Heading = "h2",
  className = "",
}) {
  const [openIndex, setOpenIndex] = useState(1);
  const visibleItems = limit ? items.slice(0, limit) : items;
  const showViewMore = Boolean(viewMoreHref) && items.length > visibleItems.length;

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      className={`w-full bg-black px-4 py-[60px] sm:px-6 lg:px-[28px] lg:py-[70px] ${className}`}
    >
      {/* =====================================================
          HEADING
      ====================================================== */}
      <Heading
        className="
          text-center
          font-movault
          text-[38px]
          font-normal
          uppercase
          leading-[0.9]
          text-brand-yellow
          sm:text-[52px]
          lg:text-[88px]
          xl:text-[120px]
        "
      >
        Frequently Asked Questions.
      </Heading>

      {/* =====================================================
          FAQ LIST
      ====================================================== */}
      <div
        className="
          mx-auto
          mt-10
          w-full
          max-w-[826px]
          lg:mt-[65px]
        "
      >
        <div className="flex flex-col gap-[25px]">
          {visibleItems.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <FAQItem
                key={faq.question}
                faq={faq}
                index={index}
                isOpen={isOpen}
                onClick={() => toggleFAQ(index)}
              />
            );
          })}
        </div>

        {/* VIEW MORE */}
        {showViewMore && (
          <div className="mt-10 flex justify-center lg:mt-[50px]">
            <Link
              href={viewMoreHref}
              className="
                flex
                h-[40px]
                min-w-[130px]
                items-center
                justify-center
                bg-brand-yellow
                px-[22px]
                font-sf-pro
                text-[14px]
                font-bold
                leading-none
                text-black
                transition-transform
                duration-200
                hover:scale-105
              "
            >
              View more
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

function FAQItem({ faq, index, isOpen, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={isOpen}
      className={`
        w-full
        overflow-hidden
        rounded-[15px]
        text-left
        transition-all
        duration-400
        ease-in-out

        ${
          isOpen
            ? "bg-white text-black"
            : "bg-[#121212] text-white hover:bg-[#181818]"
        }
      `}
    >
      {/* ===================================================
          QUESTION ROW
      ==================================================== */}
      <div
        className="
          flex
          min-h-[55px]
          w-full
          items-center
          gap-[28px]
          px-[20px]

          max-[600px]:gap-[14px]
          max-[600px]:px-[14px]
        "
      >
        {/* NUMBER */}
        <span
          className={`
            flex
            h-[22px]
            w-[22px]
            shrink-0
            items-center
            justify-center
            rounded-full
            font-sf-pro
            text-[12px]
            font-medium

            ${
              isOpen
                ? "bg-[#d3d3d3] text-[#444]"
                : "bg-[#292929] text-white/80"
            }
          `}
        >
          {index + 1}
        </span>

        {/* QUESTION */}
        <span
          className="
            flex-1
            font-sf-pro
            text-[15px]
            font-medium
            leading-[18px]

            max-[600px]:text-[14px]
          "
        >
          {faq.question}
        </span>

        {/* ICON */}
        <span
          className={`
            flex
            h-[22px]
            w-[22px]
            shrink-0
            items-center
            justify-center
            rounded-full
            font-sf-pro
            text-[19px]
            font-medium
            leading-none

            ${
              isOpen
                ? "bg-black text-white"
                : "bg-white text-black"
            }
          `}
        >
          {isOpen ? "×" : "+"}
        </span>
      </div>

      {/* ===================================================
          ANSWER
      ==================================================== */}
      <div
        className={`
          grid
          transition-[grid-template-rows]
          duration-400
          ease-in-out

          ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
        `}
      >
        <div className="overflow-hidden">
          <div
            className="
              pb-[25px]
              pl-[73px]
              pr-[60px]
              pt-[2px]

              max-[600px]:pb-[20px]
              max-[600px]:pl-[50px]
              max-[600px]:pr-[35px]
            "
          >
            <p
              className="
                font-sf-pro
                text-[15px]
                font-normal
                leading-[19px]
                whitespace-pre-line
                text-[#555]

                max-[600px]:text-[13px]
                max-[600px]:leading-[17px]
              "
            >
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </button>
  );
}