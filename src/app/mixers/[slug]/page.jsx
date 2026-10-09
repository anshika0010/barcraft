import Navbar from "@/components/Navbar";
import Footer from "@/components/home/Footer";
import ProductHero from "@/components/mixers/ProductHero";
import HowToMake from "@/components/mixers/HowToMake";
import FAQs from "@/components/home/FAQs";
import MixerRecipes from "@/components/mixers/ScrewdriverRecipes";
import MoreMixers from "@/components/mixers/MoreMixers";
import IngredientsNutrition from "@/components/mixers/IngredientsNutrition";
import { notFound, permanentRedirect } from "next/navigation";

import {
  getMixerBySlug,
  getAllMixerSlugs,
} from "@/lib/mixers";
import { slugify } from "@/lib/slugify";
import {
  absoluteUrl,
  buildMetadata,
  toPlainText,
  JsonLd,
} from "@/lib/seo";

export async function generateStaticParams() {
  const slugs = getAllMixerSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

// Some data files keep FAQs as a list, others as { items: [...] }
const getFaqItems = (mixer) => {
  const faq = Array.isArray(mixer.faq) ? mixer.faq : mixer.faq?.items;

  return (faq || []).map((item) => ({
    question: item.question?.trim(),
    answer: item.answer?.trim(),
  }));
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const mixer = getMixerBySlug(slug);

  if (!mixer) {
    return { title: "Mixer Not Found" };
  }

  const name = mixer.product?.name?.trim();
  const tagline = mixer.product?.tagline?.trim();

  return buildMetadata({
    title: mixer.seo?.title
      ? { absolute: mixer.seo.title }
      : `${name}${tagline ? ` | ${tagline}` : ""}`,
    description:
      mixer.seo?.description || toPlainText(mixer.product?.description),
    path: `/mixers/${slugify(slug)}`,
    image: mixer.product?.bottleImage,
  });
}

export default async function MixerPage({ params }) {
  const { slug } = await params;

  const mixer = getMixerBySlug(slug);

  if (!mixer) {
    notFound();
  }

  // "/mixers/Screw%20Driver" → "/mixers/screw-driver" so search engines see one URL
  const cleanSlug = slugify(slug);
  if (slug !== cleanSlug) {
    permanentRedirect(`/mixers/${cleanSlug}`);
  }

  const name = mixer.product?.name?.trim();
  const url = absoluteUrl(`/mixers/${slug}`);
  const faqItems = getFaqItems(mixer);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name,
        description: toPlainText(mixer.product?.description, 500),
        image: absoluteUrl(mixer.product?.bottleImage || ""),
        url,
        category: "Cocktail Mixer",
        brand: { "@type": "Brand", name: "BarCraft" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Mixers", item: absoluteUrl("/mixers") },
          { "@type": "ListItem", position: 3, name, item: url },
        ],
      },
      ...(faqItems.length
        ? [
            {
              "@type": "FAQPage",
              mainEntity: faqItems.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: { "@type": "Answer", text: item.answer },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <Navbar />

      <main>
        <ProductHero data={mixer} />
        <HowToMake data={mixer}/>
        <MixerRecipes data={mixer} />
        <IngredientsNutrition data={mixer}/>
        {/* <MoreMixers data={mixer} /> */}
        <FAQs items={faqItems.length ? faqItems : undefined} />
      </main>

      <Footer />
    </>
  );
}
