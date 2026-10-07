import Navbar from "@/components/Navbar";
import Footer from "@/components/home/Footer";
import RecipesHero from "@/components/recipes/RecipesHero";
import CocktailOrMocktail from "@/components/recipes/CocktailOrMocktail";
import AllRecipes from "@/components/recipes/AllRecipes";
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