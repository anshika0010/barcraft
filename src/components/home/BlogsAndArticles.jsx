"use client";

import Image from "next/image";

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
    <section className="w-full bg-black px-[28px] py-[85px]">
      {/* =====================================================
          SECTION TITLE
      ====================================================== */}
      <h2
        className="
          font-movault
          text-[64px]
          font-normal
          uppercase
          leading-[0.9]
          text-brand-yellow

          max-[900px]:text-[52px]
          max-[600px]:text-[40px]
        "
      >
        Blogs and Articles
      </h2>

      {/* =====================================================
          BLOG GRID
      ====================================================== */}
      <div
        className="
          mt-[55px]
          grid
          grid-cols-3
          gap-[16px]

          max-[700px]:grid-cols-1
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
                sizes="
                  (max-width: 700px) 100vw,
                  33vw
                "
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