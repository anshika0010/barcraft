// import Image from "next/image";
// import Link from "next/link";

// // No articles are published yet. Add entries here and the grid below
// // renders automatically in place of the empty state:
// // { slug, title, excerpt, image, date: "2026-10-01" }
// export const POSTS = [];

// export default function BlogIndex() {
//   return (
//     <>
//       <BlogHero />
//       <section className="w-full bg-black px-4 py-[60px] sm:px-6 md:py-[70px] lg:px-[28px] lg:py-[85px]">
//         {POSTS.length > 0 ? <PostGrid posts={POSTS} /> : <EmptyState />}
//       </section>
//     </>
//   );
// }



// /* =========================================================
//    POST GRID
//    Same card style as the home page Blogs & Articles section.
// ========================================================= */

// function PostGrid({ posts }) {
//   return (
//     <div className="grid grid-cols-1 gap-x-[16px] gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
//       {posts.map((post) => (
//         <article key={post.slug} className="min-w-0">
//           <div className="relative aspect-[1.43] w-full overflow-hidden">
//             <Image
//               src={post.image}
//               alt={post.title}
//               fill
//               sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//               className="object-cover transition-transform duration-500 ease-out hover:scale-[1.02]"
//             />
//           </div>
//           {post.date && (
//             <time
//               dateTime={post.date}
//               className="mt-[15px] block font-sf-pro text-[12px] uppercase tracking-[0.15em] text-white/45"
//             >
//               {new Date(post.date).toLocaleDateString("en-IN", {
//                 day: "numeric",
//                 month: "long",
//                 year: "numeric",
//               })}
//             </time>
//           )}
//           <h3 className="mt-[10px] font-sf-pro text-[14px] font-bold leading-[17px] text-white">
//             {post.title}
//           </h3>
//           <p className="mt-[14px] max-w-[430px] font-sf-pro text-[13px] leading-[16px] text-white/65">
//             {post.excerpt}
//           </p>
//         </article>
//       ))}
//     </div>
//   );
// }


"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function BlogIndex({
  posts = [],
  categories = [],
}) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "all") {
      return posts;
    }

    return posts.filter(
      (post) => post.categoryId === selectedCategory
    );
  }, [posts, selectedCategory]);

  return (
    <>
      <BlogHero />

      <section className="w-full bg-black px-4 py-[60px] sm:px-6 md:py-[70px] lg:px-[28px] lg:py-[85px]">

        {posts.length > 0 && (
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        )}

        {filteredPosts.length > 0 ? (
          <PostGrid posts={filteredPosts} />
        ) : (
          <EmptyState />
        )}

      </section>
    </>
  );
}

function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}) {
  return (
    <div className="mb-[45px] flex flex-wrap gap-[8px]">
      <button
        onClick={() => onCategoryChange("all")}
        className={`h-[40px] px-[20px] font-sf-pro text-[14px] font-semibold uppercase transition-colors ${
          selectedCategory === "all"
            ? "bg-brand-yellow text-black"
            : "border border-white/20 text-white hover:border-brand-yellow hover:text-brand-yellow"
        }`}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`h-[40px] px-[20px] font-sf-pro text-[14px] font-semibold uppercase transition-colors ${
            selectedCategory === category.id
              ? "bg-brand-yellow text-black"
              : "border border-white/20 text-white hover:border-brand-yellow hover:text-brand-yellow"
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

function PostGrid({ posts }) {
  return (
    <div className="grid grid-cols-1 gap-x-[16px] gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <article key={post.id} className="min-w-0">

          <Link href={`/blog/${post.slug}`}>
            <div className="relative aspect-[1.43] w-full overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 ease-out hover:scale-[1.02]"
              />
            </div>
          </Link>

          <div className="mt-[15px] flex items-center gap-3">
            {post.category && (
              <span className="font-sf-pro text-[11px] font-bold uppercase tracking-[0.15em] text-brand-yellow">
                {post.category}
              </span>
            )}

            {post.date && (
              <time
                dateTime={post.date}
                className="font-sf-pro text-[12px] uppercase tracking-[0.15em] text-white/45"
              >
                {new Date(post.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            )}
          </div>

          <Link href={`/blog/${post.slug}`}>
            <h3 className="mt-[10px] font-sf-pro text-[14px] font-bold leading-[17px] text-white transition-colors hover:text-brand-yellow">
              {post.title}
            </h3>
          </Link>

          <p className="mt-[14px] max-w-[430px] font-sf-pro text-[13px] leading-[16px] text-white/65">
            {post.excerpt}
          </p>

        </article>
      ))}
    </div>
  );
}

/* =========================================================
   HERO
========================================================= */

function BlogHero() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="relative min-h-[70svh] w-full lg:min-h-[640px]">
        <Image
          src="/home/Blogs/1.png"
          alt="Bartender crafting a cocktail"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />
        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black to-transparent" />

        <div
          className="
            relative z-10
            flex min-h-[70svh] flex-col justify-end
            px-4 pb-12 pt-[110px]
            sm:px-6
            lg:min-h-[640px] lg:px-[28px] lg:pb-[64px]
          "
        >
          <span className="font-sf-pro text-[13px] font-bold uppercase tracking-[0.2em] text-white/65">
            The BarCraft Journal
          </span>
          <h1 className="mt-3 font-movault font-normal uppercase leading-[0.85] text-brand-yellow text-[clamp(56px,10vw,150px)]">
            Blogs &amp; Articles
          </h1>
          <p
            className="
              mt-6 max-w-[560px]
              font-sf-pro text-[15px] font-medium leading-[20px] text-white
              sm:text-[17px]
              lg:text-[18.33px] lg:leading-[22px]
            "
          >
            Stories from behind the bar: recipes, techniques, and the craft
            that turns an ordinary drink into an unforgettable pour.
          </p>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   EMPTY STATE
========================================================= */

function EmptyState() {
  return (
    <div
      className="
        mx-auto flex max-w-[826px] flex-col items-center
        rounded-[28px] bg-[#121212] px-6 py-14 text-center
        sm:px-12
        md:rounded-[55px] md:py-[80px]
      "
    >
      <div className="relative h-[110px] w-[110px] opacity-90">
        <Image
          src="/home/how-to-mix/steps/4.png"
          alt=""
          fill
          sizes="110px"
          className="object-contain"
        />
      </div>

      <span className="mt-8 flex h-[24px] items-center bg-brand-yellow px-[12px] font-sf-pro text-[13px] font-bold uppercase leading-none text-black">
        Coming soon
      </span>

      <h2 className="mt-6 font-movault font-normal uppercase leading-[0.9] text-brand-yellow text-[40px] sm:text-[52px] lg:text-[64px]">
        Still shaking things up
      </h2>

      <p className="mt-5 max-w-[480px] font-sf-pro text-[15px] leading-[20px] text-white/65">
        No stories have been poured yet. Our first articles are on their way.
        Until then, explore the full flavor archive and find your next
        favourite mixer.
      </p>

      <div className="mt-9 flex flex-wrap justify-center gap-[7px]">
        <Link
          href="/mixers"
          className="flex h-[40px] items-center bg-brand-yellow px-[20px] font-sf-pro text-[15px] font-semibold text-black transition-transform duration-200 hover:scale-105"
        >
          Explore mixers
        </Link>
        <Link
          href="/"
          className="flex h-[40px] items-center border border-brand-yellow px-[20px] font-sf-pro text-[15px] font-semibold text-brand-yellow transition-colors duration-200 hover:bg-brand-yellow hover:text-black"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}