import Navbar from "@/components/Navbar";
import FAQs from "@/components/home/FAQs";
import Footer from "@/components/home/Footer";
import HowToMake from "@/components/mixers/HowToMake";
import WeddingAddOns from "@/components/wedding/WeddingAddOns";
import WeddingHero from "@/components/wedding/WeddingHero";
import WeddingHowItWorks from "@/components/wedding/WeddingHowItWorks";
import WeddingIncluded from "@/components/wedding/WeddingIncluded";
import WeddingRegistration from "@/components/wedding/WeddingRegistration";
import WeddingTerms from "@/components/wedding/WeddingTerms";
import { buildMetadata, LOGO_IMAGE } from "@/lib/seo";

export const metadata = buildMetadata({
  title: { absolute: "Wedding Cocktail & Mocktail Drinks | BarCraft" },
  description:
    "Make wedding celebrations more memorable with cocktail and mocktail drink ideas from BarCraft. Explore refreshing flavours for receptions, parties and special occasions.",
  socialTitle: "Wedding Cocktail & Mocktail Mixers | 1000 Servings Free",
  socialDescription:
    "Register your wedding with BarCraft: ten weddings get 1000 cocktail and mocktail mixer servings free, in four flavours. No purchase required.",
  path: "/booking",
  image: LOGO_IMAGE,
});

export default function BookingPage() {
  return (
    <>
      <Navbar />

      <main>
        <WeddingHero />
        <WeddingHowItWorks/>
        <WeddingRegistration/>
        <WeddingTerms/>
        <WeddingIncluded/>
        <WeddingAddOns/>    
        {/* Wedding registration/details sections */}
      <FAQs limit={5} viewMoreHref="/faqs" />
      </main>

      <Footer />
    </>
  );
}