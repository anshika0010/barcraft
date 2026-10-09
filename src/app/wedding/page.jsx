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
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Weddings: 1000 Servings Free",
  description:
    "Planning a wedding? Register with BarCraft and get 1000 cocktail and mocktail servings free for your celebration. See how it works, what's included and add-ons.",
  path: "/wedding",
});

export default function WeddingPage() {
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
      <FAQs/>
      </main>

      <Footer />
    </>
  );
}