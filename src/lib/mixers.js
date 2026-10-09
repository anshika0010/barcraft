import mojito from "@/data/BarCraft_Mojito.json";
import screwdriver from "@/data/BarCraft_Screwdriver.json";
import pinaColada from "@/data/BarCraft_Pina_Colada.json";
import spicyMango from "@/data/BarCraft_Spicy_Mango.json";
import sexOnTheBeach from "@/data/BarCraft_Sex_on_the_Beach.json";
import appletini from "@/data/BarCraft_Appletini.json";
import { slugify } from "@/lib/slugify";

const mixers = {
  mojito,
  "screw-driver":screwdriver,
  "pina-colada": pinaColada,
  "spicy-mango": spicyMango,
  "sex-on-the-beach": sexOnTheBeach,
  appletini,
};


export function getMixerBySlug(slug) {
  if (!slug) return null;

  const normalizedSlug = slugify(slug);


  return mixers[normalizedSlug] ?? null;
}

export function getAllMixerSlugs() {
  return Object.keys(mixers);
}