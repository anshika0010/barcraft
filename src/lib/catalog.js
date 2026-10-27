import { COLLECTIONS } from "@/components/mixers/flavors";
import { slugify } from "@/lib/slugify";

// "screw-driver" and "screwdriver" are the same mixer
const matchKey = (slug = "") => slug.replace(/-/g, "");

const sameText = (a = "", b = "") =>
  a.trim().toLowerCase() === b.trim().toLowerCase();

const toFlavor = (product) => ({
  name: product.name,
  description: product.description,
  accent: product.accent,
  image: product.image,
  image60: product.image60,
  hoverImage: product.hoverImage,
  slug: product.slug,
  available: true,
});

// Groups the products from the API into the catalogue's collections. Only API
// mixers are shown; the catalogue just supplies the collection sections and the
// order. A product whose category matches no collection goes in the first one,
// and collections left without mixers are dropped.
export function mergeCatalog(products = []) {
  const byKey = new Map(products.map((product) => [matchKey(product.slug), product]));
  const placed = new Set();

  const collections = COLLECTIONS.map((collection) => ({
    ...collection,
    flavors: collection.flavors
      .map((flavor) => byKey.get(matchKey(slugify(flavor.name ?? ""))))
      .filter((product) => product && !placed.has(product.slug) && placed.add(product.slug))
      .map(toFlavor),
  }));

  for (const product of products) {
    if (placed.has(product.slug)) continue;

    const collection =
      collections.find((item) => sameText(item.title, product.category)) ??
      collections[0];
    collection?.flavors.push(toFlavor(product));
  }

  return collections.filter((collection) => collection.flavors.length > 0);
}
