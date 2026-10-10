import Navbar from "@/components/Navbar";
import FAQs from "@/components/home/FAQs";
import Footer from "@/components/home/Footer";
import { FAQS } from "@/data/faqs";
import { buildMetadata, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "FAQs",
  description:
    "Answers to common questions about BarCraft mixers: flavours, sizes, how to use them, which spirit to add and how many drinks a bottle makes.",
  path: "/faqs",
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
