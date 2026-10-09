import Script from "next/script";
import "./globals.css";
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  JsonLd,
} from "@/lib/seo";

const SITE_DESCRIPTION =
  "BarCraft Crafted Cocktail Mixers: bartender-inspired mixers for Mojito, Piña Colada, Appletini, Screwdriver and more. Make bar-quality cocktails and mocktails at home in seconds.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BarCraft | Crafted Cocktail & Mocktail Mixers",
    template: "%s | BarCraft",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "cocktail mixer",
    "mocktail mixer",
    "BarCraft",
    "mojito mixer",
    "pina colada mixer",
    "cocktail mixers India",
    "home bar",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_IN",
    url: SITE_URL,
    title: "BarCraft | Crafted Cocktail & Mocktail Mixers",
    description: SITE_DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, alt: "BarCraft Crafted Cocktail Mixer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BarCraft | Crafted Cocktail & Mocktail Mixers",
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: false, email: false, address: false },

  verification: {
    google: "B4gsgild0e0mGyDl3Vcsdz2-qPuG1Xck00iFL_F73eE",
    other: {
      "msvalidate.01": "3D8DB2D729E6AD52E55F3CC39AC38797",
      "p:domain_verify": "1add12a4aa841ba3e181e98db6d365b7",
    },
  },
};

export const viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NMNT9GW6"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>
        {/* End Google Tag Manager */}

        <JsonLd data={siteSchema} />

        {children}

        {/* Google Tag Manager — loaded after hydration so it doesn't block rendering */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NMNT9GW6');
          `}
        </Script>
      </body>
    </html>
  );
}
