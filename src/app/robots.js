import { SITE_URL } from "@/lib/seo";

// Search engines and AI crawlers we explicitly welcome
const BOTS = [
  "Googlebot",
  "Bingbot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  "Bytespider",
  "CCBot",
  "Amazonbot",
  "meta-externalagent",
  "DuckAssistBot",
];

// Crawlers only follow their own group, so every group gets these rules
const DISALLOW = [
  "/api/",
  "/*?utm_",
  "/*&utm_",
  "/*?fbclid=",
  "/*?gclid=",
  "/*?ref=",
  "/*?sort=",
  "/*?filter=",
];

export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: DISALLOW },
      ...BOTS.map((userAgent) => ({ userAgent, allow: "/", disallow: DISALLOW })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
