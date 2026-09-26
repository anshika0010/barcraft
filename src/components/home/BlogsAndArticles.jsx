"use client";

import Image from "next/image";
import Link from "next/link";

const BLOGS = [
  {
    id: 1,
    title: "The Art Behind Every Pour",
    description:
      "Every great cocktail begins with more than just ingredients—it begins with craft, precision, and a passion for the perfect pour. Behind every shake, stir, and garnish is a story of creativity and dedication. Discover the art of bartending and the little details that transform an ordinary drink into an unforgettable experience.",
    image: "/home/Blogs/1.png",
  },
  {
    id: 2,
    title: "A Toast to Crafted Perfection",
    description:
      "A great cocktail is more than a drink; it’s an experience built through balance, flavor, and attention to detail.",
    image: "/home/Blogs/2.png",
  },
  {
    id: 3,
    title: "Behind Every Great Cocktail",
    description:
      "Crafting a memorable cocktail takes precision, creativity, and an eye for detail. From selecting the right ingredients to adding the perfect garnish, every step contributes to the final experience.",
    image: "/home/Blogs/3.png",
  },
];

export default function BlogsAndArticles() {
  return (
    <section className="w-full bg-black px-4 py-[60px] sm:px-6 md:py-[70px] lg:px-[28px] lg:py-[85px]">
      {/* =====================================================
          SECTION TITLE
      ====================================================== */}
      <div className="flex flex-wrap items-end justify-between gap-4">
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
          Blogs and Articles
        </h2>

        <Link
          href="/blog"
          className="
            flex
            h-[32px]
            min-w-[88px]
            items-center
            justify-center
            bg-brand-yellow
            px-[16px]
            font-sf-pro
            text-[13px]
            font-bold
            leading-none
            text-black
            transition-transform
            duration-200
            hover:scale-105
          "
        >
          View all
        </Link>
      </div>

      {/* =====================================================
          BLOG GRID
      ====================================================== */}
      <div
        className="
          mt-8
          grid
          grid-cols-1
          gap-x-[16px]
          gap-y-10
          sm:grid-cols-2
          lg:mt-[55px]
          lg:grid-cols-3
        "
      >
        {BLOGS.map((blog) => (
          <article key={blog.id} className="min-w-0">
            {/* IMAGE */}
            <div
              className="
                relative
                aspect-[1.43]
                w-full
                overflow-hidden
              "
            >
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="
                  object-cover
                  transition-transform
                  duration-500
                  ease-out
                  hover:scale-[1.02]
                "
              />
            </div>

            {/* TITLE */}
            <h3
              className="
                mt-[15px]
                font-sf-pro
                text-[14px]
                font-bold
                leading-[17px]
                text-white
              "
            >
              {blog.title}
            </h3>

            {/* DESCRIPTION */}
            <p
              className="
                mt-[14px]
                max-w-[430px]
                font-sf-pro
                text-[13px]
                font-normal
                leading-[16px]
                text-white/65
              "
            >
              {blog.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}