import { slugify } from "@/lib/slugify";

const PRODUCTS_API = "https://admin.barcraftmixer.com/barcraft/api/product/?limit=100";

// Same on every label, so it isn't stored per product in the admin
const MANUFACTURER_NOTE =
  "Marketed by: Nutri Next, Noida, Uttar Pradesh, India. Scan the QR code on the pack for manufacturer details.";
const SERVE_ML = 25;

const text = (value) => String(value ?? "").trim();
const capitalize = (value) => {
  const clean = text(value);
  return clean.charAt(0).toUpperCase() + clean.slice(1);
};
const list = (values) => capitalize((values || []).map(text).filter(Boolean).join(", "));

// "BarCraft Piña Colada Mixer" → "pina-colada", to match the /mixers/mojito style.
// Built from the name because the admin turns "ñ" into "-" ("barcraft-pi-a-colada-mixer").
export const toMixerSlug = (name = "") =>
  slugify(name).replace(/^barcraft-/, "").replace(/-mixer$/, "");

// "BarCraft Cosmopolitan Mixer" → "Cosmopolitan"
const toDrinkName = (name = "") =>
  text(name).replace(/^barcraft\s+/i, "").replace(/\s+mixer$/i, "");

// "550 ml" → "550ml"
const toSize = (name = "") => text(name).replace(/\s+/g, "").toLowerCase();

const findColor = (colors, name) =>
  (colors || []).find((color) => text(color.name).toLowerCase() === name)?.hex;

// Dark shade of the accent, used behind text on the accent colour
const darken = (hex = "", amount = 0.28) => {
  const match = /^#?([0-9a-f]{6})$/i.exec(text(hex));
  if (!match) return "#1B1B1B";
  const value = parseInt(match[1], 16);
  const channel = (shift) => Math.round(((value >> shift) & 255) * amount);
  return `#${[16, 8, 0].map((shift) => channel(shift).toString(16).padStart(2, "0")).join("")}`;
};

// The admin doesn't store the "100ml | Vodka | Highball glass" line for these
// recipes, so it is worked out from the ingredients and first step
function recipeDetails(ingredients, steps) {
  if (ingredients[0]?.includes("|")) return ingredients.shift();

  const pours = ingredients
    .map((item) => /^(?:about\s+)?(\d+)\s*ml\s+(.+)$/i.exec(item))
    .filter(Boolean);
  const total = pours.reduce((sum, [, ml]) => sum + Number(ml), 0);
  const spirit = pours
    .map(([, , name]) => name)
    .find((name) => !/barcraft|soda|water|tonic|juice|ginger ale|lemonade/i.test(name));
  // "Fill a rocks glass with ice." → "Rocks glass", "Fill a jug with ice." → "Jug"
  const glass = /fill an?\s+(.+?)\s+with\b/i.exec(steps[0] || "")?.[1];

  return [total ? `${total}ml` : "", spirit || "No spirit", capitalize(glass)].join(" | ");
}

function toRecipe(recipe) {
  const ingredients = (recipe.ingredient || []).map(text).filter(Boolean);
  const steps = (recipe.makingstep || []).map(text).filter(Boolean);

  return {
    id: recipe._id,
    name: text(recipe.name),
    slug: recipe.slug,
    image: recipe.image,
    details: recipeDetails(ingredients, steps),
    ingredients,
  };
}

// Maps an API product to the shape the mixer page components expect
function normalizeProduct(product) {
  const name = text(product.name);
  const drink = toDrinkName(name);
  const accent = findColor(product.colors, "head") || "#FFD400";
  const variants = (product.variants || []).filter((variant) => variant.name);
  const [main, small] = [
    variants.find((variant) => toSize(variant.name) !== "50ml") || variants[0],
    variants.find((variant) => toSize(variant.name) === "50ml"),
  ];
  const flavour = product.flavour || {};
  const steps = product.making?.steps || [];
  // The same recipe can be linked twice in the admin; show it once
  const seenRecipes = new Set();
  const recipes = (product.recipe || []).filter((recipe) => {
    const key = text(recipe.name).toLowerCase();
    if (recipe.status === false || !key || seenRecipes.has(key)) return false;
    seenRecipes.add(key);
    return true;
  });
  const seo = product.seo || {};

  return {
    slug: toMixerSlug(product.name),
    seo: {
      title: text(seo.metaTitle) || undefined,
      description: text(seo.metaDescription) || undefined,
      open_graph: {
        title: text(seo.ogTitle) || undefined,
        description: text(seo.ogDescription) || undefined,
      },
    },
    product: {
      name,
      drink,
      category: text(product.categoryId?.name),
      badge: "Bartender Inspired",
      tagline: text(flavour.name),
      description: text(product.description || product.shortDes),
      shortDescription: capitalize(flavour.des) || text(product.shortDes),
      facts: {
        ...(flavour.name && {
          Flavour: `${text(flavour.name)}: ${capitalize(flavour.des)}`,
        }),
        ...(product.serve && { Serve: text(product.serve) }),
        ...(product.spirits?.length && { Spirits: list(product.spirits) }),
        ...(product.pairs?.length && { "Pairs with": list(product.pairs) }),
      },
      image: {
        src: product.featureImage || main?.image,
        alt: `${name}: ${capitalize(flavour.des)}`,
      },
      cardImage: main?.image || product.featureImage,
      cardImage60: small?.image,
      glassImage: product.image,
      bg: main?.banners,
      bg60: small?.banners,
      wrapper: main?.label,
      bottleImage: product.bottleImage,
      accent,
      accent2: darken(accent),
      sizes: variants.map((variant, index) => ({
        size: toSize(variant.name),
        selected: index === 0,
      })),
    },
    how_to_use: steps.length
      ? {
          title: `How to make a ${drink}`,
          description: text(product.making?.description),
          steps: steps.map((step) => text(step.description)),
          images: steps.map((step) => step.image),
        }
      : null,
    recipes: {
      title: `${drink} Mixer Recipes`,
      description: `${recipes.length} ways to enjoy ${name}.`,
      items: recipes.map(toRecipe),
    },
    product_information: {
      nutrition_per_100ml: Object.fromEntries(
        (product.nutrition || []).map((item) => [text(item.name), text(item.value)])
      ),
      serving_information: [
        `Serving size: ${SERVE_ML}ml.`,
        ...variants
          .map((variant) => toSize(variant.name))
          .sort((a, b) => parseInt(a, 10) - parseInt(b, 10))
          .map((size) => `Servings per ${size} bottle: ${Math.floor(parseInt(size, 10) / SERVE_ML)}.`),
      ].join(" "),
      ingredients: text(product.intgredient),
      manufacturer_note: MANUFACTURER_NOTE,
    },
    faq: (product.faq || []).map((item) => ({
      question: text(item.question),
      answer: text(item.answer),
    })),
  };
}

// Returns [] when the API can't be reached so pages still render
export async function getProducts() {
  try {
    const response = await fetch(PRODUCTS_API, { next: { revalidate: 60 } });
    if (!response.ok) return [];

    const data = await response.json();
    if (!data.success || !Array.isArray(data.product)) return [];

    return data.product
      .filter((product) => product.status && product.slug && product.name)
      .map(normalizeProduct);
  } catch (error) {
    console.error("PRODUCTS API ERROR:", error);
    return [];
  }
}

export async function getProductBySlug(slug) {
  if (!slug) return null;
  const products = await getProducts();
  return products.find((product) => product.slug === slugify(slug)) ?? null;
}

// The small, serialisable summary used by cards and search
export const toProductCard = ({ slug, product }) => ({
  slug,
  name: product.drink,
  category: product.category,
  description: product.shortDescription,
  accent: product.accent,
  image: product.cardImage,
  image60: product.cardImage60,
  hoverImage: product.glassImage,
});

export async function getProductCards() {
  return (await getProducts()).map(toProductCard);
}
