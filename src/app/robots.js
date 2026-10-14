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

// Shared by every crawler: all user-agents are listed in a single group
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
    rules: [{ userAgent: ["*", ...BOTS], allow: "/", disallow: DISALLOW }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
