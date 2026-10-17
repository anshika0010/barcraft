import Navbar from "@/components/Navbar";
import FAQs from "@/components/home/FAQs";
import Footer from "@/components/home/Footer";
import HowToMake from "@/components/mixers/HowToMake";
import WeddingAddOns from "@/components/booking/WeddingAddOns";
import WeddingHero from "@/components/booking/WeddingHero";
import WeddingHowItWorks from "@/components/booking/WeddingHowItWorks";
import WeddingIncluded from "@/components/booking/WeddingIncluded";
import WeddingRegistration from "@/components/booking/WeddingRegistration";
import WeddingTerms from "@/components/booking/WeddingTerms";
import { buildMetadata, LOGO_IMAGE } from "@/lib/seo";

export const metadata = buildMetadata({
  title: { absolute: "events Cocktail & Mocktail Drinks | BarCraft" },
  description:
    "Make event celebrations more memorable with cocktail and mocktail drink ideas from BarCraft. Explore refreshing flavours for receptions, parties and special occasions.",
  socialTitle: "event Cocktail & Mocktail Mixers | 1000 Servings Free",
  socialDescription:
    "Register your event with BarCraft: ten events get 1000 cocktail and mocktail mixer servings free, in four flavours. No purchase required.",
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