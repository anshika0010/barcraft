import Navbar from "@/components/Navbar";
import Footer from "@/components/home/Footer";
import RecipesHero from "@/components/recipes/RecipesHero";
import CocktailOrMocktail from "@/components/recipes/CocktailOrMocktail";
import AllRecipes from "@/components/recipes/AllRecipes";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cocktail & Mocktail Recipes",
  description:
    "Easy cocktail and mocktail recipes made with BarCraft mixers. Step-by-step drinks you can make at home in under a minute.",
  path: "/recipes",
});

export default function RecipesPage() {
  return (
    <>
      <Navbar />

      <main>
        <RecipesHero />
        <CocktailOrMocktail />
        <AllRecipes />
        {/* Other recipe sections will come here */}
      </main>

      <Footer />
    </>
  );
}