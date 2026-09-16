import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
import CraftedToElevate from "../components/home/CraftedToElevate";
import MixersSection from "../components/home/MixersSection";
import HowToMix from "../components/home/HowToMix";
import PouredAndPraised from "../components/home/PouredAndPraised";
import TwoServeBottle from "../components/home/TwoServeBottle";
import BlogsAndArticles from "../components/home/BlogsAndArticles";
import FAQs from "../components/home/FAQs";
import Footer from "../components/home/Footer";
export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />

      <Hero />

      <CraftedToElevate />
      <MixersSection/>
      <HowToMix />
      <PouredAndPraised />
      <TwoServeBottle />
      <BlogsAndArticles />
      <FAQs />
      <Footer />
    </main>
  );
}