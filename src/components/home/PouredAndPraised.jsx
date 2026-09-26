"use client";

import Image from "next/image";
import { useState } from "react";

const REVIEWS = [
  {
    id: 1,
    title: "The Perfect Party Pour",
    review:
      "I served this mocktail at a house party, and it was a hit! Everyone loved the refreshing taste and the beautiful presentation. It’s such a lovely alternative to regular soft drinks and makes the whole experience feel more premium. Perfect for hosting guests or enjoying a chilled drink at home.",
    name: "Karan Malhotra",
  },
  {
    id: 2,
    title: "Made for Good Moments",
    review:
      "There’s something really special about enjoying a beautifully crafted mocktail. The flavour is fresh, balanced, and feels perfect for relaxing after a long day. I enjoyed mine with friends, and it made the evening feel a little more memorable. Definitely a drink I would recommend for gatherings and celebrations.",
    name: "Riya Kapoor",
  },
  {
    id: 3,
    title: "Refreshment, Reimagined",
    review:
      "I absolutely loved the taste! It has that premium café-style feel, with a lovely blend of flavours that makes it genuinely enjoyable. I especially liked how refreshing it was on a warm afternoon. A great option for anyone looking to enjoy a delicious drink without alcohol.",
    name: "Ananya Sharma",
  },
  {
    id: 4,
    title: "A Little Taste Of Happiness",
    review:
      "This mocktail was such a refreshing surprise! The flavours are beautifully balanced, not too sweet, and every sip feels so smooth. I served it during a small get-together at home, and everyone loved it. It’s the perfect drink when you want something special, refreshing, and completely alcohol-free.",
    name: "Aarav Mehta",
  },
];

export default function PouredAndPraised() {
        const [activeIndex, setActiveIndex] = useState(0);
        const [nextIndex, setNextIndex] = useState(null);
        const [direction, setDirection] = useState(null);
        const [isAnimating, setIsAnimating] = useState(false);

        const changeReview = (newIndex, newDirection) => {
        if (isAnimating || newIndex === activeIndex) return;

        setNextIndex(newIndex);
        setDirection(newDirection);
        setIsAnimating(true);
        };

        const goNext = () => {
        const newIndex =
            activeIndex === REVIEWS.length - 1 ? 0 : activeIndex + 1;

        changeReview(newIndex, "next");
        };

        const goPrevious = () => {
        const newIndex =
            activeIndex === 0 ? REVIEWS.length - 1 : activeIndex - 1;

        changeReview(newIndex, "previous");
        };

        const handleAnimationEnd = () => {
        if (nextIndex === null) return;

        setActiveIndex(nextIndex);
        setNextIndex(null);
        setDirection(null);
        setIsAnimating(false);
        };

  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* =====================================================
          SECTION
      ====================================================== */}
      <div className="relative flex min-h-screen w-full flex-col bg-black">
        {/* ===================================================
            SECTION TITLE
        ==================================================== */}
        <div className="relative z-30 px-4 pt-[50px] sm:px-6 lg:px-[28px]">
          <h2
            className="
              font-movault
              text-[40px]
              font-normal
              uppercase
              leading-[0.9]
              text-brand-yellow
              sm:text-[52px]
              lg:text-[64px]
            "
          >
            Poured &amp; Praised
          </h2>
        </div>

        {/* ===================================================
            IMAGE + REVIEW AREA
        ==================================================== */}
        <div
          className="
            relative
            mx-auto
            mt-8
            h-[460px]
            w-[calc(100%-32px)]
            max-w-[1200px]
            overflow-hidden
            rounded-[28px]

            min-[400px]:h-[500px]

            md:mt-[58px]
            md:w-[calc(100%-100px)]
            md:rounded-[55px]

            xl:h-[545px]
            xl:w-[calc(100%-150px)]
          "
        >
          {/* =================================================
              FIXED BACKGROUND
          ================================================== */}
          <Image
            src="/home/poured-praised/poured-praised.jpg"
            alt="BarCraft cocktail being prepared"
            fill
            priority
            sizes="(max-width: 768px) calc(100vw - 32px), 1200px"
            className="object-cover object-center"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/10" />


            {/* =================================================
                REVIEW PAGES
            ================================================= */}
            <div className="absolute inset-0 flex items-center justify-center max-md:pb-[40px]">
            {/* CURRENT PAGE */}
            <ReviewPage
                review={REVIEWS[activeIndex]}
                className={
                isAnimating
                    ? direction === "next"
                    ? "review-page-current-up"
                    : "review-page-current-down"
                    : ""
                }
            />

            {/* NEXT / PREVIOUS PAGE */}
            {nextIndex !== null && (
                <ReviewPage
                review={REVIEWS[nextIndex]}
                className={
                    direction === "next"
                    ? "review-page-next"
                    : "review-page-previous"
                }
                onAnimationEnd={handleAnimationEnd}
                />
            )}
            </div>

          {/* =================================================
              LEFT ARROW
          ================================================== */}
          <button
            type="button"
            onClick={goPrevious}
            aria-label="Previous review"
            className="
              absolute
              bottom-[12px]
              left-[calc(50%-52px)]
              z-30
              flex
              h-[42px]
              w-[42px]
              items-center
              justify-center
              text-white
              transition-transform
              duration-200
              hover:scale-110

              md:bottom-auto
              md:left-[45px]
              md:top-1/2
              md:-translate-y-1/2
            "
          >
            <svg
              viewBox="0 0 32 32"
              className="h-[32px] w-[32px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                d="M20 6L10 16L20 26"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* =================================================
              RIGHT ARROW
          ================================================== */}
          <button
            type="button"
            onClick={goNext}
            aria-label="Next review"
            className="
              absolute
              bottom-[12px]
              right-[calc(50%-52px)]
              z-30
              flex
              h-[42px]
              w-[42px]
              items-center
              justify-center
              text-white
              transition-transform
              duration-200
              hover:scale-110

              md:bottom-auto
              md:right-[45px]
              md:top-1/2
              md:-translate-y-1/2
            "
          >
            <svg
              viewBox="0 0 32 32"
              className="h-[32px] w-[32px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                d="M12 6L22 16L12 26"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}






function ReviewPage({ review, className = "", onAnimationEnd }) {
  return (
    <div
      onAnimationEnd={onAnimationEnd}
      className={`
        absolute
        h-[475px]
        w-[395px]
        shrink-0
        scale-[0.72]
        min-[400px]:scale-[0.82]
        md:scale-100

        ${className}
      `}
    >
      {/* PAPER */}
      <Image
        src="/home/poured-praised/page.png"
        alt=""
        fill
        sizes="395px"
        className="object-contain"
      />

      {/* CONTENT */}
      <div className="absolute inset-0 flex flex-col items-center text-center">
        {/* LOGO */}
        <div className="absolute top-[58px] h-[32px] w-[100px] opacity-[0.12]">
          <Image
            src="/home/poured-praised/logo.png"
            alt=""
            fill
            sizes="100px"
            className="object-contain"
          />
        </div>

        {/* TITLE */}
        <h3
          className="
            absolute
            left-[35px]
            right-[35px]
            top-[102px]
            font-movault
            text-[27px]
            font-normal
            uppercase
            leading-[0.95]
            text-[#8b6200]
          "
        >
          {review.title}
        </h3>

        {/* STARS */}
        <div
          className="
            absolute
            top-[153px]
            font-sf-pro
            text-[29px]
            font-medium
            leading-none
            tracking-[-2px]
            text-[#806000]
          "
        >
          ★★★★★
        </div>

        {/* DIVIDER */}
        <div
          className="
            absolute
            left-[35px]
            right-[35px]
            top-[190px]
            border-t
            border-[#8b6200]/15
          "
        />

        {/* REVIEW */}
        <p
          className="
            absolute
            left-[42px]
            right-[42px]
            top-[207px]
            font-sf-pro
            text-[11px]
            font-normal
            leading-[13px]
            text-[#252525]
          "
        >
          “{review.review}”
        </p>

        {/* REVIEWER */}
        <div
          className="
            absolute
            bottom-[79px]
            h-[48px]
            w-[48px]
            overflow-hidden
            rounded-full
          "
        >
          <Image
            src="/home/poured-praised/reviewer.png"
            alt=""
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>

        {/* NAME */}
        <p
          className="
            absolute
            bottom-[39px]
            left-[30px]
            right-[30px]
            font-movault
            text-[25px]
            font-normal
            uppercase
            leading-none
            text-[#8b6200]
          "
        >
          {review.name}
        </p>
      </div>
    </div>
  );
}