// Kept separate from mixers.js so client components can use it without bundling mixer data
export function slugify(value = "") {
  return decodeURIComponent(value)
    .normalize("NFD")                    // Piña → Pina
    .replace(/[\u0300-\u036f]/g, "")     // remove accent
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")         // spaces → -
    .replace(/^-+|-+$/g, "");            // remove edge -
}
