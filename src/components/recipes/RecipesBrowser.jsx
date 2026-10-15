"use client";

import { useState } from "react";
import CocktailOrMocktail from "@/components/recipes/CocktailOrMocktail";
import AllRecipes, { ALL_PRODUCTS } from "@/components/recipes/AllRecipes";

// Shares the product filter between the cocktail / mocktail cards and the
// recipe list, so clicking a card filters the list below it
export default function RecipesBrowser({ recipes }) {
  const [product, setProduct] = useState(ALL_PRODUCTS);

  const handleSelect = (nextProduct) => {
    setProduct(nextProduct);

    document
      .getElementById("all-recipes")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <CocktailOrMocktail
        recipes={recipes}
        activeProduct={product}
        onSelect={handleSelect}
      />
      <AllRecipes
        recipes={recipes}
        product={product}
        onProductChange={setProduct}
      />
    </>
  );
}
