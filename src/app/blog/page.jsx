// import Navbar from "../../components/Navbar";
// import BlogIndex from "../../components/blog/BlogIndex";
// import Footer from "../../components/home/Footer";

// export const metadata = {
//   title: "Blogs & Articles | BarCraft",
//   description:
//     "Stories from behind the bar: cocktail recipes, techniques and the craft of the perfect pour.",
// };

// export default function BlogPage() {
//   return (
//     <main className="bg-black">
//       <Navbar />
//       <BlogIndex />
//       <Footer />
//     </main>
//   );
// }


import Navbar from "../../components/Navbar";
import BlogIndex from "../../components/blog/BlogIndex";
import Footer from "../../components/home/Footer";
import { buildMetadata, LOGO_IMAGE } from "@/lib/seo";

export const metadata = buildMetadata({
  title: { absolute: "Cocktail & Mocktail Tips | Recipes & Drink Inspiration | BarCraft" },
  description:
    "Explore cocktail tips, easy drink recipes, flavour inspiration and home bartending ideas on the BarCraft blog. Find new ways to make every pour special.",
  socialTitle: "BarCraft Blog | Cocktail & Mocktail Recipes, Mixer Guides",
  socialDescription:
    "Easy cocktail and mocktail recipes, mixer guides and home bar tips from BarCraft. Learn to make a Mojito, Piña Colada and more at home in India.",
  path: "/blog",
  image: LOGO_IMAGE,
});

const BLOGS_API =
  "https://admin.barcraftmixer.com/barcraft/api/blogs/";

const CATEGORIES_API =
  "https://admin.barcraftmixer.com/barcraft/api/blogcategory";

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
        image: blog.image,
        content: blog.content,
        author: blog.author,
        date: blog.createdAt,
        categoryId: blog.categoryId?._id,
        category: blog.categoryId?.name || "",
      }));
  } catch (error) {
    console.error("BLOG API ERROR:", error);
    return [];
  }
}

async function getCategories() {
  try {
    const response = await fetch(CATEGORIES_API, {
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }

    const data = await response.json();

    if (!data.success) {
      return [];
    }

    return data.categories
      .filter((category) => category.status)
      .map((category) => ({
        id: category._id,
        name: category.name,
        slug: category.slug,
      }));
  } catch (error) {
    console.error("CATEGORY API ERROR:", error);
    return [];
  }
}

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getBlogs(),
    getCategories(),
  ]);

  return (
    <main className="bg-black">
      <Navbar />

      <BlogIndex
        posts={posts}
        categories={categories}
      />

      <Footer />
    </main>
  );
}
