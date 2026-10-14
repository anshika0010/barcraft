import Navbar from "@/components/Navbar";
import FAQs from "@/components/home/FAQs";
import Footer from "@/components/home/Footer";
import { FAQS } from "@/data/faqs";
import { buildMetadata, JsonLd, LOGO_IMAGE } from "@/lib/seo";

export const metadata = buildMetadata({
  title: { absolute: "BarCraft FAQs - Cocktail & Mocktail Mixer Questions" },
  description:
    "Have questions about BarCraft mixers? Learn how to prepare cocktails and mocktails, choose serving options and get the most out of your favourite flavours.",
  socialTitle: "Cocktail Mixer FAQs - Usage, Flavours & Serving | BarCraft",
  socialDescription:
    "Answers about BarCraft cocktail and mocktail mixers: flavours, sizes, how to use them, which spirit to add and how many drinks a bottle makes.",
  path: "/faqs",
  image: LOGO_IMAGE,
});

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function FAQsPage() {
  return (
    <>
      <JsonLd data={schema} />
      <Navbar />

      <main className="min-h-screen bg-black">
        <FAQs as="h1" className="pt-[130px] lg:pt-[170px]" />
      </main>

      <Footer />
    </>
  );
}
