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