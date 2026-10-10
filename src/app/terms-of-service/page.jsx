import Link from "next/link";
import LegalPage from "@/components/legal/LegalPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "The terms that apply when you use barcraftmixer.com, including use of our content, recipes, offers and third-party links.",
  path: "/terms-of-service",
});

const LAST_UPDATED = "10 October 2026";
const CONTACT_EMAIL = "barcraft_social@tcc-international.com";

const linkClass =
  "text-brand-yellow underline underline-offset-4 hover:text-white";

const SECTIONS = [
  {
    title: "Acceptance of these terms",
    body: [
      <>
        These Terms of Service (&ldquo;Terms&rdquo;) apply to your use of
        www.barcraftmixer.com (the &ldquo;Website&rdquo;), run by BarCraft
        (&ldquo;BarCraft&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or
        &ldquo;our&rdquo;). By using the Website, you agree to these Terms, our{" "}
        <Link href="/privacy-policy" className={linkClass}>
          Privacy Policy
        </Link>{" "}
        and our{" "}
        <Link href="/cookie-policy" className={linkClass}>
          Cookie Policy
        </Link>
        . If you do not agree, please do not use the Website.
      </>,
    ],
  },
  {
    title: "About the Website",
    body: [
      "The Website is an informational site that showcases BarCraft mixers, recipes, articles and offers. You cannot buy products, make payments or create an account on it. Any purchase of BarCraft products made through a retailer, marketplace or other seller is governed by that seller's own terms.",
    ],
  },
  {
    title: "Product information",
    body: [
      "We try to keep product descriptions, images, ingredients, nutrition details and serving suggestions accurate and up to date. However, packaging, recipes and formulations may change, and colours or sizes may look different on your screen. Always read the label on the product itself, especially if you have allergies or dietary requirements.",
    ],
  },
  {
    title: "Recipes and responsible drinking",
    body: [
      "Recipes and serving ideas on the Website are for general guidance only. Many of our mixers can be used for both cocktails and mocktails.",
    ],
    list: [
      "Alcoholic drinks should only be made and consumed by people of legal drinking age in their state or country.",
      "Please drink responsibly, and never drink and drive.",
      "BarCraft mixers do not contain alcohol, and we do not sell or supply alcohol through the Website.",
    ],
  },
  {
    title: "Wedding offer and promotions",
    body: [
      <>
        From time to time we may run offers, such as the BarCraft wedding
        offer. Submitting a registration on the Website is an expression of
        interest, not a confirmed booking. Each offer has its own terms and
        conditions, which are shown on the relevant page (for example, the{" "}
        <Link href="/wedding" className={linkClass}>
          wedding page
        </Link>
        ) and apply in addition to these Terms. We may change, pause or end any
        offer at any time, and availability is subject to confirmation by our
        team.
      </>,
    ],
  },
  {
    title: "Acceptable use",
    body: ["When using the Website, you agree not to:"],
    list: [
      "Use it for any unlawful purpose or in breach of these Terms.",
      "Submit false, misleading or someone else's information through any form.",
      "Try to gain unauthorised access to the Website, its servers or any connected systems.",
      "Introduce viruses, malware or anything else that could harm the Website or its users.",
      "Scrape, copy or harvest content or data from the Website using automated means without our written permission.",
    ],
  },
  {
    title: "Intellectual property",
    body: [
      "All content on the Website, including the BarCraft name and logo, product names, packaging designs, photographs, videos, recipes, articles, graphics and fonts, is owned by or licensed to BarCraft and protected by intellectual property laws.",
      "You may view and share pages from the Website for personal, non-commercial use. You may not copy, reproduce, modify, republish or use our content or trademarks for any commercial purpose without our prior written consent.",
    ],
  },
  {
    title: "Third-party links",
    body: [
      "The Website links to third-party websites and platforms, such as Instagram, Pinterest, X and YouTube, and to retailers that may sell our products. We do not control these sites and are not responsible for their content, products, services or privacy practices. Visiting them is at your own risk and subject to their own terms.",
    ],
  },
  {
    title: "Disclaimer",
    body: [
      "The Website and its content are provided on an “as is” and “as available” basis. While we work to keep it accurate and available, we do not guarantee that the Website will always be uninterrupted, error-free or free of viruses, or that all information on it is complete or current.",
    ],
  },
  {
    title: "Limitation of liability",
    body: [
      "To the fullest extent permitted by law, BarCraft will not be liable for any indirect, incidental or consequential loss or damage arising from your use of, or inability to use, the Website or its content, including reliance on any recipe or information on it. Nothing in these Terms limits any liability that cannot be excluded under applicable law.",
    ],
  },
  {
    title: "Changes to these terms",
    body: [
      "We may update these Terms from time to time. The latest version will always be available on this page with the date it was last updated. By continuing to use the Website after changes are posted, you accept the updated Terms.",
    ],
  },
  {
    title: "Governing law",
    body: [
      "These Terms are governed by the laws of India. Any dispute arising from them or from your use of the Website will be subject to the exclusive jurisdiction of the competent courts in India.",
    ],
  },
  {
    title: "Contact us",
    body: [
      <>
        If you have any questions about these Terms, email us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
          {CONTACT_EMAIL}
        </a>
        .
      </>,
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service."
      lastUpdated={LAST_UPDATED}
      sections={SECTIONS}
    />
  );
}
