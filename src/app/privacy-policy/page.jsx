import Link from "next/link";
import LegalPage from "@/components/legal/LegalPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How BarCraft collects, uses and protects your personal information when you visit barcraftmixer.com or register for our wedding offer.",
  path: "/privacy-policy",
});

const LAST_UPDATED = "10 October 2026";
const CONTACT_EMAIL = "barcraft_social@tcc-international.com";

const SECTIONS = [
  {
    title: "Who we are",
    body: [
      <>
        BarCraft (&ldquo;BarCraft&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or
        &ldquo;our&rdquo;) makes crafted cocktail and mocktail mixers. The
        Website is an informational site that showcases our products, recipes
        and offers; you cannot buy products or create an account on it. This
        Privacy Policy explains how we handle personal information when you
        visit www.barcraftmixer.com (the &ldquo;Website&rdquo;), contact us or
        register for one of our offers.
      </>,
      "By using the Website, you agree to the practices described in this policy. If you do not agree, please do not use the Website.",
    ],
  },
  {
    title: "Information we collect",
    body: ["We collect only what we need to respond to you and run the Website:"],
    list: [
      <>
        <strong>Information you give us.</strong> When you register for the
        BarCraft wedding offer, we ask for your name, phone number, email
        address, wedding venue and full address, wedding date, expected number
        of guests, and your chosen flavours and add-ons. If you email or message
        us, we receive whatever you choose to share.
      </>,
      <>
        <strong>Information collected automatically.</strong> Like most
        websites, we receive technical data such as your IP address, browser
        and device type, pages visited, referring site and the time of your
        visit.
      </>,
      <>
        <strong>Cookies and analytics.</strong> We use Google Tag Manager and
        related Google analytics tools, which may place cookies or similar
        technologies on your device to help us understand how the Website is
        used.
      </>,
    ],
  },
  {
    title: "How we use your information",
    list: [
      "To respond to your wedding offer registration, confirm availability and get in touch about the flavours and add-on services you are interested in.",
      "To contact you about your registration or enquiry by phone, email or messaging.",
      "To understand how visitors use the Website and improve our content, products and experience.",
      "To keep the Website secure and prevent fraud or misuse.",
      "To comply with applicable laws and respond to lawful requests from authorities.",
    ],
    after: [
      "We will only send you marketing messages where you have agreed to receive them, and you can opt out at any time.",
    ],
  },
  {
    title: "How we share your information",
    body: [
      "We do not sell or rent your personal information. We share it only when needed:",
    ],
    list: [
      "With service providers who help us run our business, such as hosting, analytics and event partners, who may only use it to provide services to us.",
      "With bartenders or partners you book through us, limited to what they need to serve your event.",
      "When required by law, court order or a government authority, or to protect the rights and safety of BarCraft, our customers or others.",
      "As part of a merger, acquisition or sale of business assets, in which case your information would remain protected by this policy.",
    ],
  },
  {
    title: "Third-party links and services",
    body: [
      "The Website links to our pages on Instagram, Pinterest, X and YouTube, and may embed content from other services. These platforms have their own privacy policies, and we are not responsible for how they handle your information. We encourage you to review their policies before sharing data with them.",
    ],
  },
  {
    title: "Cookies",
    body: [
      "Cookies are small files stored on your device. We use a small number of analytics cookies to measure traffic. You can block or delete them through your browser settings.",
      <>
        For details, see our{" "}
        <Link
          href="/cookie-policy"
          className="text-brand-yellow underline underline-offset-4 hover:text-white"
        >
          Cookie Policy
        </Link>
        .
      </>,
    ],
  },
  {
    title: "Data retention",
    body: [
      "We keep personal information only for as long as needed for the purposes described above, including to respond to your registration or enquiry and to meet legal, accounting or reporting requirements. After that, we delete or anonymise it.",
    ],
  },
  {
    title: "Data security",
    body: [
      "We use reasonable technical and organisational measures to protect your information from unauthorised access, loss or misuse. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    title: "Your rights",
    body: [
      "Subject to applicable law, including India's Digital Personal Data Protection Act, 2023, you may:",
    ],
    list: [
      "Ask for a summary of the personal information we hold about you.",
      "Ask us to correct, complete or update inaccurate information.",
      "Ask us to delete your information where it is no longer needed.",
      "Withdraw your consent at any time, without affecting processing already carried out.",
      "Raise a grievance with us about how your information is handled.",
    ],
    after: [
      <>
        To exercise any of these rights, email us at{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-brand-yellow underline underline-offset-4 hover:text-white"
        >
          {CONTACT_EMAIL}
        </a>
        . We will respond within a reasonable time.
      </>,
    ],
  },
  {
    title: "Age restrictions",
    body: [
      "Our mixers are intended for use in cocktails and mocktails. Any alcoholic drinks made with BarCraft should only be consumed by people of legal drinking age in their state. The Website is not directed at children, and we do not knowingly collect personal information from anyone under 18. If you believe a child has shared information with us, please contact us and we will delete it.",
    ],
  },
  {
    title: "Changes to this policy",
    body: [
      "We may update this Privacy Policy from time to time. The latest version will always be available on this page with the date it was last updated. Please check back periodically.",
    ],
  },
  {
    title: "Contact us",
    body: [
      <>
        If you have any questions about this Privacy Policy or your personal
        information, write to us at{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-brand-yellow underline underline-offset-4 hover:text-white"
        >
          {CONTACT_EMAIL}
        </a>
        . You can also read our{" "}
        <Link
          href="/faqs"
          className="text-brand-yellow underline underline-offset-4 hover:text-white"
        >
          FAQs
        </Link>{" "}
        for answers to common questions.
      </>,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy."
      lastUpdated={LAST_UPDATED}
      sections={SECTIONS}
    />
  );
}
