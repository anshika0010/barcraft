import Navbar from "@/components/Navbar";
import Footer from "@/components/home/Footer";
import ProductHero from "@/components/mixers/ProductHero";
import HowToMake from "@/components/mixers/HowToMake";
import FAQs from "@/components/home/FAQs";
import MixerRecipes from "@/components/mixers/ScrewdriverRecipes";
import MoreMixers from "@/components/mixers/MoreMixers";
import IngredientsNutrition from "@/components/mixers/IngredientsNutrition";
import { notFound } from "next/navigation";


import {
  getMixerBySlug,
  getAllMixerSlugs,
} from "@/lib/mixers";

export async function generateStaticParams() {
  const slugs = getAllMixerSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}


export const metadata = {
  title: "The Flavor Archive | BarCraft Mixers",
  description:
    "Explore every BarCraft cocktail mixer: the Craft Botanical Collection, the High-Fidelity Classics and the Signature Syndicate.",
};


export default async function MixerPage({params}) {

 const { slug } = await params;


  console.log("SLUG RECEIVED:", slug);

  const mixer = getMixerBySlug(slug);

  console.log("MIXER FOUND:", !!mixer);

  if (!mixer) {
    notFound();
  }


  return (
    <>
      <Navbar />

      <ProductHero data={mixer} />
      <HowToMake data={mixer}/>
      <MixerRecipes data={mixer} />
      <IngredientsNutrition data={mixer}/>
      {/* <MoreMixers data={mixer} /> */}
      <FAQs />
      <Footer />
    </>
  );
}