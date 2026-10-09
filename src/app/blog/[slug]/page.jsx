import { notFound } from "next/navigation";
import { cache } from "react";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/home/Footer";
import BlogDetail from "../../../components/blog/BlogDetail";
import {
  absoluteUrl,
  buildMetadata,
  toPlainText,
  JsonLd,
} from "@/lib/seo";

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
    updatedAt: blog.updatedAt,
    categoryId: blog.categoryId?._id,
    category: blog.categoryId?.name || "",
  };
});

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const post = await getBlogBySlug(slug);

  if (!post) {
    return {
      title: "Blog Not Found",
      robots: { index: false },
    };
  }

  return buildMetadata({
    title: post.title,
    description:
      toPlainText(post.excerpt || post.content) ||
      "Stories, recipes and cocktail inspiration from BarCraft.",
    path: `/blog/${post.slug}`,
    image: post.image || undefined,
    type: "article",
    openGraph: {
      ...(post.date && { publishedTime: new Date(post.date).toISOString() }),
      ...(post.author && { authors: [post.author] }),
    },
  });
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;

  const post = await getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const url = absoluteUrl(`/blog/${post.slug}`);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: toPlainText(post.excerpt || post.content),
        ...(post.image && { image: absoluteUrl(post.image) }),
        ...(post.date && { datePublished: new Date(post.date).toISOString() }),
        ...((post.updatedAt || post.date) && {
          dateModified: new Date(post.updatedAt || post.date).toISOString(),
        }),
        author: {
          "@type": post.author ? "Person" : "Organization",
          name: post.author || "BarCraft",
        },
        publisher: { "@id": `${absoluteUrl("/")}#organization` },
        mainEntityOfPage: url,
        ...(post.category && { articleSection: post.category }),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return (
    <main className="bg-black">
      <JsonLd data={schema} />
      <Navbar />

      <BlogDetail post={post} />

      <Footer />
    </main>
  );
}