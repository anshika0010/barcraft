"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const CONTENT = {
  heading: {
    firstLine: "Crafted to",
    secondLine: "Elevate every",
    thirdLine: "Pour",
  },

  paragraphOne:
    "At BarCraft, we believe a great cocktail begins with great ingredients. Our cocktail mixers are thoughtfully crafted to bring together vibrant flavours, premium-quality ingredients, and bartender-inspired expertise—making it easier to create refreshing, delicious drinks at home.",

  paragraphTwo:
    "Whether you're hosting friends, celebrating a special moment, or simply unwinding after a long day, BarCraft makes every pour an opportunity to create something memorable. Just mix, pour, and enjoy—because exceptional cocktails should be effortless, inviting, and crafted for every occasion.",
};

export default function CraftedToElevate() {
  const [viewport, setViewport] = useState({
    width: 1440,
    height: 900,
  });

  const sectionRef = useRef(null);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId;

    const update = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();

      // Read the live window height: this effect only runs once, so
      // `viewport` state here would be stuck at its initial value.
      const scrollableDistance =
        sectionRef.current.offsetHeight - window.innerHeight;

      if (scrollableDistance <= 0) {
        setProgress(0);
        return;
      }

      const current = Math.max(
        0,
        Math.min(-rect.top, scrollableDistance)
      );

      setProgress(current / scrollableDistance);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(update);
    };

    update();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(rafId);

      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // NOTE: this previously set viewport to itself (viewport.width,
  // viewport.height) and never read the real window size, so
  // initialWidth/coverWidth/coverHeight were always computed off
  // the 1440x900 default, even on other screen sizes. Reading the
  // actual window dimensions here fixes the zoom/scale math on
  // any viewport that isn't 1440x900.
  useEffect(() => {
    const updateViewport = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateViewport();

    window.addEventListener("resize", updateViewport);

    return () => {
      window.removeEventListener("resize", updateViewport);
    };
  }, []);


  const imageProgress = clamp(mapRange(progress, 0, 0.55), 0, 1);

  
  const isMobile = viewport.width < 768;

  const initialWidth = isMobile
    ? viewport.width * 0.55
    : Math.min(465, viewport.width * 0.325);

  /*
   * Final size.
   *
   * At the end we make the image cover the entire viewport.
   */
  const viewportWidth = viewport.width;
  const viewportHeight = viewport.height;

  const imageNaturalRatio = 910 / 1028;

  const coverHeight = viewportHeight;
  const coverWidth = coverHeight * imageNaturalRatio;

  const scaleToCover = Math.max(
    viewportWidth / initialWidth,
    coverWidth / initialWidth
  );

  const imageScale = lerp(1, scaleToCover, easeInOut(imageProgress));

  // ==========================================================
  // IMAGE Y POSITION
  // ==========================================================

  // On phones there's no room beside the heading, so the image starts
  // below it and glides back to center as it zooms to full screen.
  const imageStartY = isMobile ? viewport.height * 0.14 : 0;

  const imageY = lerp(imageStartY, 0, easeInOut(imageProgress));

  // ==========================================================
  // HEADING
  // ==========================================================

  const headingProgress = clamp(mapRange(progress, 0.05, 0.48), 0, 1);

  const headingY = lerp(
    0,
    -viewport.height * 1.15,
    easeInCubic(headingProgress)
  );

  const headingOpacity = 1;

  // ==========================================================
  // PARAGRAPH 1
  // ==========================================================
const paragraphOneEnter = clamp(mapRange(progress, 0.40, 0.65), 0, 1);

  const paragraphOneLeave = clamp(mapRange(progress, 0.72, 0.86), 0, 1);

  const paragraphOneY = lerp(90, 0, easeOutCubic(paragraphOneEnter));

  const paragraphOneOpacity = paragraphOneEnter * (1 - paragraphOneLeave);

  // ==========================================================
  // PARAGRAPH 2
  // ==========================================================

  const paragraphTwoEnter = clamp(mapRange(progress, 0.70, 1), 0, 1);

  const paragraphTwoY = lerp(140, 0, easeOutCubic(paragraphTwoEnter));

  const paragraphTwoOpacity = paragraphTwoEnter;

  return (
    <section ref={sectionRef} className="relative h-[300vh] w-full bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* ==================================================
            HEADING — BACKGROUND COPY
            z-10: lowest of the stack, so the image (z-20) can
            scale up and cover it. Includes the full heading,
            "every" included — this copy gets covered.
        ================================================== */}

        <div
          className="
            absolute
            left-4
            top-[32%]
            z-10
            sm:left-6
            md:top-1/2
            lg:left-[28px]
          "
          style={{
            transform: `
              translateY(calc(-50% + ${headingY}px))
            `,
            opacity: headingOpacity,
          }}
        >
          <HeadingText />
        </div>

        {/* ==================================================
            IMAGE
            z-20: above the background heading, so it covers it
            as it scales up over the scroll.
        ================================================== */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            z-20
          "
          style={{
            width: `${initialWidth}px`,
            transform: `
              translate(-50%, -50%)
              translateY(${imageY}px)
              scale(${imageScale})
            `,
            transformOrigin: "center center",
          }}
        >
          <Image
            src="/home/crafted-to-elevate.png"
            alt="BarCraft cocktail"
            width={910}
            height={1028}
            priority
            className="block h-auto w-full"
          />
        </div>

        {/* ==================================================
            HEADING — FOREGROUND COPY ("every" only)
            z-25: above the image. Identical position/size/
            transform to the background copy, so "every" lands
            in exactly the same spot — every other word is
            rendered invisible (still takes up its layout space,
            just isn't painted) so nothing else shows through.
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-4
            top-[32%]
            z-[25]
            sm:left-6
            md:top-1/2
            lg:left-[28px]
          "
          style={{
            transform: `
              translateY(calc(-50% + ${headingY}px))
            `,
            opacity: headingOpacity,
          }}
        >
          <HeadingText onlyEvery />
        </div>

        {/* ==================================================
            DARK OVERLAY
            Stays above the image to dim it for the paragraph
            text that comes later.
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[20]
            bg-black
          "
          style={{
            opacity: lerp(0, 0.2, imageProgress),
          }}
        />

        {/* ==================================================
            BOTTOM GRADIENT
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            z-30
            h-[45%]
            bg-gradient-to-t
            from-black
            via-black/40
            to-transparent
          "
          style={{
            opacity: imageProgress,
          }}
        />

        {/* ==================================================
            PARAGRAPH 1
        ================================================== */}

        <div
          className="
            absolute
            bottom-[35%]
            left-1/2
            z-50
            w-[min(930px,95vw)]
            sm:w-[min(930px,90vw)]
          "
          style={{
            opacity: paragraphOneOpacity,
            transform: `
              translate(-50%, ${paragraphOneY}px)
            `,
          }}
        >
          <p
            className="
              font-sf-pro
              text-center
              text-[15px]
              font-semibold
              leading-[25px]
              sm:text-[25px]
              lg:text-[25px]
              lg:leading-[30px]
              text-white
            "
          >
            {CONTENT.paragraphOne}
          </p>
        </div>

        {/* ==================================================
            PARAGRAPH 2
        ================================================== */}

        <div
          className="
            absolute
            bottom-[25%]
            left-1/2
            z-50
            w-[min(930px,90vw)]
            sm:w-[min(930px,80vw)]
          "
          style={{
            opacity: paragraphTwoOpacity,
            transform: `
              translate(-50%, ${paragraphTwoY}px)
            `,
          }}
        >
          <p
            className="
              font-sf-pro
              text-center
              text-[15px]
              font-semibold
              leading-[25px]
              sm:text-[25px]
              lg:text-[25px]
              lg:leading-[30px]
              text-white
            "
          >
            {CONTENT.paragraphTwo}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================
   HEADING TEXT
   Rendered twice at identical position/size (see JSX above):
   once fully visible behind the image, once with everything
   except "every" set invisible, in front of the image. Using
   one shared component guarantees both copies stay pixel-
   identical in layout, so "every" never drifts out of place.
========================================================== */

function HeadingText({ onlyEvery = false }) {
  // `invisible` keeps the element's box in the layout flow
  // (so surrounding text doesn't reflow / shift) but doesn't
  // paint it — exactly what we need for the hidden words in
  // the foreground copy.
  const hideUnlessEvery = onlyEvery ? "invisible" : "";

  return (
    <h2
      className="
        font-movault
        font-normal
        uppercase
        leading-none
        text-brand-yellow
      "
    >
      {/* CRAFTED TO */}

      <span
        className={`
          block
          text-[15vw] md:text-[min(9.13vw,131.46px)]
          leading-[0.9]
          ${hideUnlessEvery}
        `}
      >
        {CONTENT.heading.firstLine}
      </span>

      {/* ELEVATE EVERY */}

      <span
        className="
          block
          whitespace-nowrap
          text-[30vw] md:text-[min(18.26vw,262.91px)]
          leading-[0.77]
        "
      >
        <span className={hideUnlessEvery}>Elevate</span>

        {" "}

        <span className="outline-yellow">every</span>
      </span>

      {/* POUR */}

      <span
        className={`
          block
          text-[30vw] md:text-[min(18.26vw,262.91px)]
          leading-[0.77]
          ${hideUnlessEvery}
        `}
      >
        {CONTENT.heading.thirdLine}
      </span>
    </h2>
  );
}

/* ==========================================================
   HELPERS
========================================================== */

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function mapRange(value, inputMin, inputMax) {
  return (value - inputMin) / (inputMax - inputMin);
}

function lerp(start, end, amount) {
  return start + (end - start) * amount;
}

function easeInOut(value) {
  return value < 0.5
    ? 2 * value * value
    : 1 - Math.pow(-2 * value + 2, 2) / 2;
}

function easeInCubic(value) {
  return value * value * value;
}

function easeOutCubic(value) {
  return 1 - Math.pow(1 - value, 3);
}