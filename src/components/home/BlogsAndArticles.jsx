import Image from "next/image";
import Link from "next/link";

const BLOGS_API =
  "https://admin.barcraftmixer.com/barcraft/api/blogs/";

async function getBlogs() {
  try {
    const response = await fetch(BLOGS_API, {
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch blogs");
    }

    const data = await response.json();

    if (!data.success) {
      return [];
    }

    return data.blogs
      .filter((blog) => blog.status)
      .map((blog) => ({
        id: blog._id,
        slug: blog.slug,
        title: blog.title,
        excerpt: blog.description,
        image: blog.image || "/not-found.png",
      }))
      .slice(0, 3);
  } catch (error) {
    console.error("BLOG API ERROR:", error);
    return [];
  }
}

export default async function BlogsAndArticles() {
  const blogs = await getBlogs();

  return (
    <section className="w-full bg-black px-4 py-[60px] sm:px-6 md:py-[70px] lg:px-[28px] lg:py-[85px]">
      
      {/* SECTION TITLE */}
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

      {/* BLOG GRID */}
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
        {blogs.map((blog) => (
          <article key={blog.id} className="min-w-0">
            
            {/* IMAGE */}
            <Link href={`/blog/${blog.slug}`}>
              <div
                className="
                  relative
                  aspect-[1.43]
                  w-full
                  overflow-hidden
                "
              >
                <Image
                  src={blog.image || "/not-found.png"}
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
            </Link>

            {/* TITLE */}
            <Link href={`/blog/${blog.slug}`}>
              <h3
                className="
                  mt-[15px]
                  font-sf-pro
                  text-[14px]
                  font-bold
                  leading-[17px]
                  text-white
                  transition-opacity
                  duration-200
                  hover:opacity-70
                "
              >
                {blog.title}
              </h3>
            </Link>

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
              {blog.excerpt?.slice(0, 150)}..{" "}
              <Link
                href={`/blog/${blog.slug}`}
                className="font-bold text-red-500 transition-opacity duration-200 hover:opacity-70"
              >
                read more
              </Link>
            </p>
          </article>
        ))}
      </div>

      {/* NO BLOGS */}
      {blogs.length === 0 && (
        <div className="py-16 text-center">
          <p className="font-sf-pro text-[16px] text-white/60">
            No blogs available at the moment.
          </p>
        </div>
      )}
    </section>
  );
}