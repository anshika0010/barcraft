import Link from "next/link";
import LegalPage from "@/components/legal/LegalPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cookie Policy",
  description:
    "What cookies barcraftmixer.com uses, why we use them and how you can control or turn them off in your browser.",
  path: "/cookie-policy",
});

const LAST_UPDATED = "10 October 2026";
const CONTACT_EMAIL = "barcraft_social@tcc-international.com";

const linkClass =
  "text-brand-yellow underline underline-offset-4 hover:text-white";

const SECTIONS = [
  {
    title: "About this policy",
    body: [
      <>
        This Cookie Policy explains how BarCraft (&ldquo;we&rdquo;,
        &ldquo;us&rdquo; or &ldquo;our&rdquo;) uses cookies and similar
        technologies on www.barcraftmixer.com (the &ldquo;Website&rdquo;). It
        should be read together with our{" "}
        <Link href="/privacy-policy" className={linkClass}>
          Privacy Policy
        </Link>
        .
      </>,
      "The Website is an informational site that showcases our mixers, recipes, blog and offers. There is no shop, cart, checkout or user account on it, so we use very few cookies.",
    ],
  },
  {
    title: "What are cookies?",
    body: [
      "Cookies are small text files that a website saves on your computer or phone when you visit it. They let the site recognise your device on later visits and help the site owner understand how the site is used. Similar technologies, such as pixels and local storage, work in a comparable way, and we refer to all of them as “cookies” in this policy.",
    ],
  },
  {
    title: "Cookies we use",
    body: [
      "Because the Website does not have logins or purchases, it does not need cookies to remember a basket or keep you signed in. The cookies that may be set are:",
    ],
    list: [
      <>
        <strong>Analytics cookies.</strong> We use Google Tag Manager to load
        Google analytics tools. These set cookies (such as{" "}
        <code>_ga</code> and <code>_ga_*</code>) that tell us how many people
        visit, which pages they view, how long they stay and how they found the
        Website. This information is aggregated and helps us improve our
        content. These cookies typically last up to 2 years.
      </>,
      <>
        <strong>Third-party content cookies.</strong> If a page includes
        content from another service, such as an embedded YouTube video, that
        service may set its own cookies when you view or play it.
      </>,
    ],
    after: [
      "We do not use cookies for advertising, and we do not use them to identify you personally.",
    ],
  },
  {
    title: "Third-party cookies",
    body: [
      "Analytics and embedded-content cookies are set by third parties, mainly Google. These companies process the data under their own privacy policies. When you follow our links to Instagram, Pinterest, X or YouTube, you leave the Website and those platforms' own cookie policies apply.",
    ],
    list: [
      <>
        Google:{" "}
        <a
          href="https://policies.google.com/technologies/cookies"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          How Google uses cookies
        </a>
      </>,
    ],
  },
  {
    title: "How to control cookies",
    body: [
      "You can choose to block or delete cookies at any time. Turning off cookies will not stop you from browsing the Website; it only means we will not be able to count your visit in our analytics.",
    ],
    list: [
      "Browser settings: most browsers let you view, block and delete cookies in their privacy or security settings. Check the help section of Chrome, Safari, Firefox, Edge or whichever browser you use.",
      <>
        Google Analytics opt-out: you can install Google&rsquo;s{" "}
        <a
          href="https://tools.google.com/dlpage/gaoptout"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          opt-out browser add-on
        </a>{" "}
        to stop your visits being measured on any website.
      </>,
      "Private browsing: using incognito or private mode clears cookies when you close the window.",
    ],
  },
  {
    title: "Changes to this policy",
    body: [
      "We may update this Cookie Policy if we change the cookies we use or if the law requires it. The latest version will always be on this page, with the date it was last updated.",
    ],
  },
  {
    title: "Contact us",
    body: [
      <>
        If you have any questions about how we use cookies, email us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
          {CONTACT_EMAIL}
        </a>
        .
      </>,
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy."
      lastUpdated={LAST_UPDATED}
      sections={SECTIONS}
    />
  );
}
