import { absoluteUrl } from "@/lib/seo";
import { getAllMixerSlugs, getMixerBySlug } from "@/lib/mixers";
import { getRecipes } from "@/lib/recipes";

const BLOGS_API = "https://admin.barcraftmixer.com/barcraft/api/blogs/";

export const revalidate = 3600;

// Google only trusts <lastmod> when it reflects real changes, so we never fake it with "now"
const toDate = (value) => {
  const date = value ? new Date(value) : null;
  return date && !Number.isNaN(date.getTime()) ? date : undefined;
};

const latest = (dates) =>
  dates.filter(Boolean).sort((a, b) => b - a)[0];

const cleanSlug = (slug = "") =>
  encodeURI(String(slug).trim().replace(/^\/+|\/+$/g, ""));

// Next writes these straight into the XML without escaping, so a stray "&" would break the file
const xmlSafeUrl = (value) =>
  absoluteUrl(String(value).trim())
    .replace(/ /g, "%20")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const entry = (path, { images, ...rest } = {}) => {
  const imageUrls = [...new Set((images || []).filter(Boolean).map(xmlSafeUrl))];
  return {
    url: xmlSafeUrl(path),
    ...rest,
    ...(imageUrls.length && { images: imageUrls }),
  };
};

async function getBlogs() {
  try {
    const response = await fetch(BLOGS_API, { next: { revalidate: 3600 } });
    if (!response.ok) return [];

    const data = await response.json();
    if (!data.success || !Array.isArray(data.blogs)) return [];

    const seen = new Set();
    return data.blogs
      .filter((blog) => blog.status && blog.slug)
      .map((blog) => ({
        slug: cleanSlug(blog.slug),
        image: blog.image,
        lastModified: toDate(blog.updatedAt) || toDate(blog.createdAt),
      }))
      .filter((blog) => blog.slug && !seen.has(blog.slug) && seen.add(blog.slug));
  } catch (error) {
    console.error("SITEMAP BLOG ERROR:", error);
    return [];
  }
}

export default async function sitemap() {
  const [blogs, recipes] = await Promise.all([getBlogs(), getRecipes()]);

  const mixers = getAllMixerSlugs().map((slug) => ({
    slug,
    image: getMixerBySlug(slug)?.product?.image?.src,
  }));

  const blogPages = blogs.map((blog) =>
    entry(`/blog/${blog.slug}`, {
      lastModified: blog.lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
      images: [blog.image],
    })
  );

  const mixerPages = mixers.map((mixer) =>
    entry(`/mixers/${mixer.slug}`, {
      changeFrequency: "monthly",
      priority: 0.9,
      images: [mixer.image],
    })
  );

  const staticPages = [
    entry("/", {
      changeFrequency: "weekly",
      priority: 1,
      images: mixers.map((mixer) => mixer.image),
    }),
    entry("/mixers", {
      changeFrequency: "weekly",
      priority: 0.9,
      images: mixers.map((mixer) => mixer.image),
    }),
    entry("/recipes", {
      changeFrequency: "weekly",
      priority: 0.8,
      images: (recipes || []).map((recipe) => recipe.image),
    }),
    entry("/blog", {
      lastModified: latest(blogs.map((blog) => blog.lastModified)),
      changeFrequency: "daily",
      priority: 0.8,
    }),
    entry("/booking", { changeFrequency: "monthly", priority: 0.7 }),
    entry("/faqs", { changeFrequency: "monthly", priority: 0.6 }),
    entry("/privacy-policy", { changeFrequency: "yearly", priority: 0.2 }),
    entry("/terms-of-service", { changeFrequency: "yearly", priority: 0.2 }),
    entry("/cookie-policy", { changeFrequency: "yearly", priority: 0.2 }),
  ];

  return [...staticPages, ...mixerPages, ...blogPages];
}
