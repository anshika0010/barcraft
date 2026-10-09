import { SITE_URL } from "@/lib/seo";
import { getAllMixerSlugs } from "@/lib/mixers";

const BLOGS_API = "https://admin.barcraftmixer.com/barcraft/api/blogs/";

export const revalidate = 3600;

async function getBlogEntries() {
  try {
    const response = await fetch(BLOGS_API, { next: { revalidate: 3600 } });
    if (!response.ok) return [];

    const data = await response.json();
    if (!data.success || !Array.isArray(data.blogs)) return [];

    return data.blogs
      .filter((blog) => blog.status && blog.slug)
      .map((blog) => ({
        url: `${SITE_URL}/blog/${blog.slug}`,
        lastModified: new Date(blog.updatedAt || blog.createdAt || Date.now()),
        changeFrequency: "monthly",
        priority: 0.6,
      }));
  } catch (error) {
    console.error("SITEMAP BLOG ERROR:", error);
    return [];
  }
}

export default async function sitemap() {
  const now = new Date();

  const staticPages = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/mixers", priority: 0.9, changeFrequency: "weekly" },
    { path: "/recipes", priority: 0.8, changeFrequency: "weekly" },
    { path: "/wedding", priority: 0.7, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.7, changeFrequency: "daily" },
  ].map(({ path, ...rest }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    ...rest,
  }));

  const mixerPages = getAllMixerSlugs().map((slug) => ({
    url: `${SITE_URL}/mixers/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...mixerPages, ...(await getBlogEntries())];
}
