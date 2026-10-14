const RECIPES_API = "https://api.barcraftmixer.com/barcraft/api/recipe?limit=100";

// The admin stores "100ML | VODKA | HIGHBALL GLASS" as the first ingredient line
const parseDetails = (line = "") => {
  const [measure = "", spirit = "", glass = ""] = line
    .split("|")
    .map((part) => part.trim());
  return { measure, spirit, glass };
};

// Maps an API recipe to the shape the recipe cards expect
function normalizeRecipe(recipe) {
  const ingredients = (recipe.ingredient || [])
    .map((item) => String(item).trim())
    .filter(Boolean);

  const details = ingredients[0]?.includes("|")
    ? parseDetails(ingredients.shift())
    : { measure: "", spirit: "", glass: "" };

  return {
    id: recipe._id,
    slug: recipe.slug,
    name: recipe.name?.trim() || "",
    product: recipe.categoryId?.name?.trim() || "",
    glassware: details.glass,
    spirit: details.spirit,
    image: recipe.image,
    details,
    ingredients,
    directions: (recipe.makingstep || [])
      .map((step) => String(step).trim())
      .filter(Boolean),
  };
}

// Returns null when the API can't be reached so the page can fall back
export async function getRecipes() {
  try {
    const response = await fetch(RECIPES_API, { next: { revalidate: 60 } });
    if (!response.ok) return null;

    const data = await response.json();
    if (!data.success || !Array.isArray(data.recipes)) return null;

    return data.recipes
      .filter((recipe) => recipe.status && recipe.name && recipe.image)
      .map(normalizeRecipe);
  } catch (error) {
    console.error("RECIPES API ERROR:", error);
    return null;
  }
}
