import Navbar from "@/components/Navbar";
import Footer from "@/components/home/Footer";
import ProductHero from "@/components/mixers/ProductHero";
import HowToMake from "@/components/mixers/HowToMake";
import FAQs from "@/components/home/FAQs";
import MixerRecipes from "@/components/mixers/ScrewdriverRecipes";
import MoreMixers from "@/components/mixers/MoreMixers";
import IngredientsNutrition from "@/components/mixers/IngredientsNutrition";
import { notFound, permanentRedirect } from "next/navigation";

import { getProductBySlug, getProducts } from "@/lib/products";
import { slugify } from "@/lib/slugify";
import {
  absoluteUrl,
  buildMetadata,
  toPlainText,
  JsonLd,
} from "@/lib/seo";

// Products added in the admin show up within a minute, without a redeploy
export const revalidate = 60;

export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => ({
    slug: product.slug,
  }));
}

const getFaqItems = (mixer) =>
  (mixer.faq || []).filter((item) => item.question && item.answer);

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const mixer = await getProductBySlug(slug);

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
    socialTitle: mixer.seo?.open_graph?.title,
    socialDescription: mixer.seo?.open_graph?.description,
    path: `/mixers/${slugify(slug)}`,
    image: mixer.product?.image?.src,
  });
}

export default async function MixerPage({ params }) {
  const { slug } = await params;

  const mixer = await getProductBySlug(slug);

  if (!mixer) {
    notFound();
  }

  // "/mixers/Jamun%20Mojito" → "/mixers/jamun-mojito" so search engines see one URL
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
        image: absoluteUrl(mixer.product?.image?.src || ""),
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
