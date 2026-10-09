import Image from "next/image";
import Link from "next/link";

function getImageUrl(image) {
  if (!image) return "";

  if (
    image.startsWith("http://") ||
    image.startsWith("https://")
  ) {
    return image;
  }

  return `https://admin.barcraftmixer.com${image.startsWith("/") ? "" : "/"}${image}`;
}

function formatDate(date) {
  if (!date) return "";

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export default function BlogDetail({ post }) {
  const imageUrl = getImageUrl(post.image);

  return (
    <main className="min-h-screen bg-black text-white">

      {/* =====================================================
          HERO / ARTICLE HEADER
      ====================================================== */}

      <section
        className="
          px-[30px]
          pb-[70px]
          pt-[145px]

          md:px-8
          md:pb-[80px]

          max-[640px]:px-5
          max-[640px]:pb-[55px]
          max-[640px]:pt-[115px]
        "
      >
        <div className="mx-auto w-full max-w-[1380px]">

          {/* Back */}

          <Link
            href="/blog"
            className="
              inline-flex
              items-center
              gap-2
              font-sf-pro
              text-[14px]
              text-white/55
              transition-colors
              duration-300
              hover:text-[#FFD400]
            "
          >
            <span>←</span>
            <span>BACK TO BLOG</span>
          </Link>


          {/* Category */}

          {post.category && (
            <div
              className="
                mt-[38px]
                inline-flex
                bg-[#FFD400]
                px-[14px]
                py-[7px]
              "
            >
              <span
                className="
                  font-sf-pro
                  text-[13px]
                  font-bold
                  uppercase
                  leading-none
                  text-black
                "
              >
                {post.category}
              </span>
            </div>
          )}


          {/* Title */}

          <h1
            className="
              mt-[22px]
              max-w-[1150px]
              font-movault
              text-[100px]
              uppercase
              leading-[0.82]
              tracking-[-1px]
              text-[#FFD400]

              xl:text-[110px]

              lg:text-[88px]

              md:text-[72px]

              max-[640px]:text-[55px]

              max-[430px]:text-[46px]
            "
          >
            {post.title}
          </h1>


          {/* Meta */}

          <div
            className="
              mt-[25px]
              flex
              flex-wrap
              items-center
              gap-x-[20px]
              gap-y-[8px]
              font-sf-pro
              text-[15px]
              text-white/65
            "
          >
            {post.author && (
              <span>
                By {post.author}
              </span>
            )}

            {post.author && post.date && (
              <span className="text-white/30">
                •
              </span>
            )}

            {post.date && (
              <span>
                {formatDate(post.date)}
              </span>
            )}
          </div>

        </div>
      </section>


      {/* =====================================================
          HERO IMAGE
      ====================================================== */}

      {imageUrl && (
        <section className="px-[30px] md:px-8 max-[640px]:px-5">
          <div
            className="
              relative
              mx-auto
              aspect-[2/0.95]
              w-full
              max-w-[1380px]
              overflow-hidden

              max-[900px]:aspect-[1.3]

              max-[640px]:aspect-[1.05]
            "
          >
            <Image
              src={imageUrl=="NULL"?'/not-found.png':imageUrl}
              alt={post.title}
              fill
              priority
              sizes="
                (max-width: 640px) 100vw,
                (max-width: 1380px) 100vw,
                1380px
              "
              className="
                object-cover
                object-center
              "
            />
          </div>
        </section>
      )}


      {/* =====================================================
          ARTICLE CONTENT
      ====================================================== */}

      <section
        className="
          px-[30px]
          pb-[110px]
          pt-[70px]

          md:px-8
          md:pt-[60px]

          max-[640px]:px-5
          max-[640px]:pb-[80px]
          max-[640px]:pt-[45px]
        "
      >
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1380px]
            grid-cols-[minmax(0,820px)_1fr]
            gap-[100px]

            lg:gap-[65px]

            max-[900px]:grid-cols-1
            max-[900px]:gap-[45px]
          "
        >

          {/* =================================================
              ARTICLE
          ================================================== */}

          <article
            className="
              blog-content
              font-sf-pro
              text-[19px]
              leading-[1.6]
              text-white/90

              max-[640px]:text-[17px]
            "
            dangerouslySetInnerHTML={{
              __html: post.content || "",
            }}
          />


          {/* =================================================
              SIDE INFO
          ================================================== */}

          <aside
            className="
              h-fit
              border-t
              border-white/20
              pt-[18px]

              max-[900px]:border-t
            "
          >

            <p
              className="
                font-movault
                text-[27px]
                uppercase
                leading-none
                text-[#FFD400]
              "
            >
              BARCRAFT
            </p>

            <p
              className="
                mt-[12px]
                max-w-[280px]
                font-sf-pro
                text-[14px]
                leading-[1.45]
                text-white/50
              "
            >
              Crafted cocktail mixers made to bring the character
              of a well-crafted cocktail to every pour.
            </p>

            {post.category && (
              <div className="mt-[28px]">
                <p
                  className="
                    font-sf-pro
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[1px]
                    text-white/35
                  "
                >
                  CATEGORY
                </p>

                <p
                  className="
                    mt-[6px]
                    font-sf-pro
                    text-[15px]
                    text-[#FFD400]
                  "
                >
                  {post.category}
                </p>
              </div>
            )}

            {post.author && (
              <div className="mt-[22px]">
                <p
                  className="
                    font-sf-pro
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[1px]
                    text-white/35
                  "
                >
                  AUTHOR
                </p>

                <p
                  className="
                    mt-[6px]
                    font-sf-pro
                    text-[15px]
                    text-white
                  "
                >
                  {post.author}
                </p>
              </div>
            )}

          </aside>

        </div>
      </section>


      {/* =====================================================
          BACK TO BLOG
      ====================================================== */}

      <div
        className="
          border-t
          border-white/10
          px-[30px]
          py-[28px]

          md:px-8

          max-[640px]:px-5
        "
      >
        <div className="mx-auto w-full max-w-[1380px]">

          <Link
            href="/blog"
            className="
              inline-flex
              items-center
              gap-3
              font-movault
              text-[30px]
              uppercase
              leading-none
              text-[#FFD400]
              transition-transform
              duration-300
              hover:translate-x-1
            "
          >
            ← ALL ARTICLES
          </Link>

        </div>
      </div>

    </main>
  );
}