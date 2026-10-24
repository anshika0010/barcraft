import { absoluteUrl } from "@/lib/seo";

const BLOGS_API = "https://admin.barcraftmixer.com/barcraft/api/blogs/";

// Rebuilt at most once an hour, so new blogs show up without a redeploy
export const revalidate = 3600;

// Mixer pages in the order they should appear in the sitemap
const MIXER_SLUGS = [
  "appletini",
  "screw-driver",
  "spicy-mango",
  "mojito",
  "pina-colada",
  "sex-on-the-beach",
];

// The newest blogs are linked from the homepage, so they get a higher priority
const FEATURED_BLOG_COUNT = 3;

// "2026-10-23T11:54:57.123Z" → "2026-10-23T11:54:57+00:00"
const formatDate = (date) => date.toISOString().replace(/\.\d{3}Z$/, "+00:00");

const toDate = (value) => {
  const date = value ? new Date(value) : null;
  return date && !Number.isNaN(date.getTime()) ? date : null;
};

const escapeXml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const cleanSlug = (slug = "") =>
  encodeURI(String(slug).trim().replace(/^\/+|\/+$/g, ""));

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
        lastModified: toDate(blog.updatedAt) || toDate(blog.createdAt),
      }))
      .filter((blog) => blog.slug && !seen.has(blog.slug) && seen.add(blog.slug));
  } catch (error) {
    console.error("SITEMAP BLOG ERROR:", error);
    return [];
  }
}

const urlTag = ({ path, lastModified, priority }) => `<url>
<loc>${escapeXml(absoluteUrl(path))}</loc>
<lastmod>${formatDate(lastModified)}</lastmod>
<priority>${priority.toFixed(4)}</priority>
</url>`;

export async function GET() {
  const blogs = await getBlogs();
  const now = new Date();

  const page = (path, priority) => ({ path, lastModified: now, priority });
  const blogPage = (blog, priority) => ({
    path: `/blog/${blog.slug}`,
    lastModified: blog.lastModified || now,
    priority,
  });

  const urls = [
    page("/", 1),
    page("/mixers", 0.8),
    page("/recipes", 0.8),
    page("/booking", 0.8),
    page("/blog", 0.8),
    ...MIXER_SLUGS.map((slug) => page(`/mixers/${slug}`, 0.8)),
    ...blogs.slice(0, FEATURED_BLOG_COUNT).map((blog) => blogPage(blog, 0.8)),
    page("/faqs", 0.8),
    ...blogs.slice(FEATURED_BLOG_COUNT).map((blog) => blogPage(blog, 0.64)),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(urlTag).join("\n")}
</urlset>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
