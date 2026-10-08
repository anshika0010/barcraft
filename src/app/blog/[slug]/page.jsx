import { notFound } from "next/navigation";
import { cache } from "react";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/home/Footer";
import BlogDetail from "../../../components/blog/BlogDetail";

const BLOGS_API =
  "https://admin.barcraftmixer.com/barcraft/api/blogs/";

const normalizeSlug = (value = "") =>
  decodeURIComponent(value)
    .trim()
    .replace(/\/+$/, "")
    .toLowerCase();

const getBlogBySlug = cache(async (slug) => {
  const response = await fetch(BLOGS_API, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(`Blogs API failed: ${response.status}`);
  }

  const data = await response.json();

  if (!data.success || !Array.isArray(data.blogs)) {
    throw new Error("Invalid blogs API response");
  }

  const normalizedSlug = normalizeSlug(slug);

  const blog = data.blogs.find(
    (item) =>
      item.status &&
      normalizeSlug(item.slug) === normalizedSlug
  );

  if (!blog) {
    return null;
  }

  return {
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
  };
});

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const post = await getBlogBySlug(slug);

  if (!post) {
    return {
      title: "Blog Not Found | BarCraft",
    };
  }

  return {
    title: `${post.title} | BarCraft`,
    description:
      post.excerpt ||
      "Stories, recipes and cocktail inspiration from BarCraft.",
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;

  const post = await getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-black">
      <Navbar />

      <BlogDetail post={post} />

      <Footer />
    </main>
  );
}