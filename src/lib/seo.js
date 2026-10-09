export const SITE_URL = "https://www.barcraftmixer.com";
export const SITE_NAME = "BarCraft";
export const DEFAULT_OG_IMAGE = "/mixers/IngredientsNutrition/NNN-1.png";

export const absoluteUrl = (path = "/") =>
  path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;

// Shared metadata builder so every page gets canonical, Open Graph and Twitter tags
export function buildMetadata({
  title,
  description,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  type = "website",
  noIndex = false,
  openGraph = {},
  ...rest
}) {
  const url = absoluteUrl(path);
  // Page titles get the "| BarCraft" suffix from the root template; OG/Twitter need it spelled out
  const fullTitle =
    typeof title === "object" ? title.absolute : `${title} | ${SITE_NAME}`;
  const images = [{ url: absoluteUrl(image), alt: fullTitle }];

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_IN",
      type,
      images,
      ...openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: images.map((img) => img.url),
    },
    ...(noIndex && { robots: { index: false, follow: true } }),
    ...rest,
  };
}

// Strips HTML tags from CMS content for use in meta descriptions
export const toPlainText = (html = "", max = 160) => {
  const text = html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  return text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text;
};

export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
