import Navbar from "@/components/Navbar";
import Footer from "@/components/home/Footer";
import RecipesHero from "@/components/recipes/RecipesHero";
import RecipesBrowser from "@/components/recipes/RecipesBrowser";
import { buildMetadata, LOGO_IMAGE } from "@/lib/seo";
import { getRecipes } from "@/lib/recipes";

export const metadata = buildMetadata({
  title: { absolute: "Easy Cocktail & Mocktail Recipes at Home | BarCraft" },
  description:
    "Find easy cocktail and mocktail recipes with simple ingredients and refreshing flavours. Explore drink ideas, mixing tips and garnishes for every occasion.",
  socialTitle: "Cocktail & Mocktail Recipes | Easy Home Drinks | BarCraft",
  socialDescription:
    "Easy cocktail and mocktail recipes with BarCraft mixers. Make a Mojito, Screwdriver or party jug at home in India in under a minute.",
  path: "/recipes",
  image: LOGO_IMAGE,
});

export default async function RecipesPage() {
  const recipes = await getRecipes();

  return (
    <>
      <Navbar />

      <main>
        <RecipesHero />
        <RecipesBrowser recipes={recipes} />
        {/* Other recipe sections will come here */}
      </main>

      <Footer />
    </>
  );
}