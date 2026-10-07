import mojito from "@/data/BarCraft_Mojito.json";
import screwdriver from "@/data/BarCraft_Screwdriver.json";
import pinaColada from "@/data/BarCraft_Pina_Colada.json";
import spicyMango from "@/data/BarCraft_Spicy_Mango.json";
import sexOnTheBeach from "@/data/BarCraft_Sex_on_the_Beach.json";
import appletini from "@/data/BarCraft_Appletini.json";

const mixers = {
  mojito,
  screwdriver,
  "pina-colada": pinaColada,
  "spicy-mango": spicyMango,
  "sex-on-the-beach": sexOnTheBeach,
  appletini,
};

function slugify(value) {
  return decodeURIComponent(value)
    .normalize("NFD")                    // Piña → Pina
    .replace(/[\u0300-\u036f]/g, "")     // remove accent
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")         // spaces → -
    .replace(/^-+|-+$/g, "");            // remove edge -
}

export function getMixerBySlug(slug) {
  if (!slug) return null;

  const normalizedSlug = slugify(slug);

  console.log("ORIGINAL SLUG:", slug);
  console.log("NORMALIZED SLUG:", normalizedSlug);

  return mixers[normalizedSlug] ?? null;
}

export function getAllMixerSlugs() {
  return Object.keys(mixers);
}