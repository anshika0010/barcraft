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
import { buildMetadata, LOGO_IMAGE } from "@/lib/seo";

export const metadata = buildMetadata({
  title: { absolute: "BarCraft Mixer | Cocktail & Mocktail Mixers in India" },
  description:
    "Make bar-style drinks at home with BarCraft cocktail and mocktail mixers. Explore refreshing flavours, easy recipes and drink ideas for every occasion in India.",
  socialTitle: "BarCraft | Cocktail & Mocktail Mixers India",
  socialDescription:
    "BarCraft cocktail and mocktail mixers for home bars in India. Pour 15ml mixer, add your spirit or soda, and make a Mojito, Piña Colada or Appletini.",
  path: "/",
  image: LOGO_IMAGE,
});

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
      <FAQs limit={5} viewMoreHref="/faqs" />
      <Footer />
    </main>
  );
}