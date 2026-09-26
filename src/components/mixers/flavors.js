// Content for the /mixers "Flavor Archive" page.
// `image` is set for flavors that have product photography (`hoverImage`
// adds a glass shot swapped in on hover; `imagePosition` adjusts the crop).
// The rest render as a colour-coded label card using `accent`.

export const COLLECTIONS = [
  {
    id: "craft-botanical",
    title: "The Craft Botanical Collection",
    tagline:
      "Rooted in bold, nostalgic profiles and complex spices. Built for high-contrast drinking.",
    banner: "/home/crafted-to-elevate.png",
    flavors: [
      {
        name: "Spicy Pink Guava",
        description:
          "Ripe pink guava and tart lime, cut with fiery chili powder and grounded by an earthy finish of roasted jeera.",
        accent: "#e8577a",
        image: "/spicy-pink-guava.png",
      },
      {
        name: "Smoked Aam Panna",
        description:
          "A sharp, tangy strike of raw mango paired with crisp mint and deep roasted jeera.",
        accent: "#b5c93a",
        image: "/smoked-aam.png",
      },
      {
        name: "Spiced Lychee",
        description:
          "Sweet, translucent lychee balanced by the acidic snap of fresh lime and a warm, lingering ginger heat.",
        accent: "#f2c6c9",
        image: "/spiced-lichy.png",
      },
      {
        name: "Kokum Cranberry",
        description:
          "Deep, earthy kokum layered with tart cranberry and aromatic fresh rosemary.",
        accent: "#8e1f4c",
        image: "/canberry.png",
      },
    ],
  },
  {
    id: "high-fidelity-classics",
    title: "The High-Fidelity Classics",
    tagline:
      "The global lounge standards, re-engineered for a flawless, 15-second pour.",
    banner: "/home/poured-praised/poured-praised.jpg",
    flavors: [
      {
        name: "Moscow Mule",
        description: "Intense, raw ginger heat sharply balanced with fresh lime.",
        accent: "#d9a520",
        image: "/Moscow Mule.png",
        hoverImage: "/home/barcraft-mixers/moscow-mule-glass.png",
      },
      {
        name: "Mojito",
        description: "Crisp, cooling garden mint paired with a sharp citrus bite.",
        accent: "#9bc53d",
        image: "/Mojito.png",
        hoverImage: "/home/barcraft-mixers/mojito-glass.png",
      },
      {
        name: "Cosmopolitan",
        description:
          "Bright citrus and sharp cranberry with a perfectly dry finish.",
        accent: "#c8102e",
        image: "/Cosmopolitan.png",
        hoverImage: "/home/barcraft-mixers/cosmopolitan-glass.png",
      },
      {
        name: "Daiquiri",
        description:
          "The definitive, master-level balance of sharp lime and clean sweetness.",
        accent: "#c9e27a",
        image: "/Daiquiri.png",
      },
      {
        name: "Cuba Libre",
        description:
          "Rich, spiced cola notes engineered with a precise lime acidic snap.",
        accent: "#6b3a1f",
        image: "/Cuba Libre.png",
      },
      {
        name: "Piña Colada",
        description:
          "Rich, creamy coconut layered seamlessly with ripe, golden pineapple.",
        accent: "#f5deb3",
        image: "/Piña Colada.png",
      },
      {
        name: "Mai Tai",
        description:
          "A tropical, complex collision of almond, citrus, and deep island fruits.",
        accent: "#e07b24",
        image: "/Mai Tai.png",
      },
      {
        name: "Planter’s Punch",
        description:
          "A bold, heavily spiced blend of dark fruit notes and tropical citrus.",
        accent: "#b3401e",
        image: "/Planter’s Punch.png",
      },
      {
        name: "Hurricane",
        description:
          "A chaotic, high-energy mix of passion fruit, orange, and heavy fruit botanicals.",
        accent: "#f0582b",
        image: "/Hurricane.png",
      },
    ],
  },
  {
    id: "signature-syndicate",
    title: "The Signature Syndicate",
    tagline:
      "Aggressive, multi-layered fusions designed for high-end nightlife and high-volume parties.",
    banner: "/evening cocktail.jpeg",
    bannerPosition: "center 55%",
    flavors: [
      {
        name: "Witcher Blood",
        description:
          "A dark, complex strike of blood orange and tart pomegranate, finished with sharp lemon and a lingering ginger beer heat.",
        accent: "#7a0f1c",
        image: "/Witcher Blood.png",
      },
      {
        name: "Devil’s Lemonade",
        description:
          "A heavy, tart pour of classic lemonade and rich pomegranate, structurally built to carry dark, heavy spirits like bourbon.",
        accent: "#d4202c",
        // File is named "Devil's Blood" but the label is Devil's Lemonade
        image: "/Devil's Blood.png",
      },
      {
        name: "Watermelon Mint",
        description:
          "Cold-pressed summer watermelon spiked heavily with sharp lime and fresh mint.",
        accent: "#f25c6e",
        image: "/Watermelon Mint.png",
      },
      {
        name: "Sex on the Beach",
        description:
          "Ripe peach and sweet orange, immediately cut by a tart cranberry and cherry finish.",
        accent: "#f7934c",
        image: "/Sex on the Beach.png",
      },
      // {
      //   name: "Sex on the Brain",
      //   description:
      //     "A heavy sensory overload of sweet melon, peach, golden pineapple, and sharp citrus orange.",
      //   accent: "#f4b942",
      // },
    ],
  },
];
