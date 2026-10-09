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
        name:"Appletini",
        description:"NULL",
        accent:"#21e268",
        image:"/NEW BARCRAFT IMAGES/appletini600ml.jpeg",
        image60:"/60ml images/appletini 60ml.jpg",
        bg:"/background-images/appletini-big-1.jpg",

      },
      {
        name: "Spicy Pink Guava",
        description:
          "Ripe pink guava and tart lime, cut with fiery chili powder and grounded by an earthy finish of roasted jeera.",
        accent: "#e8577a",
        image: "/NEW BARCRAFT IMAGES/pink-guava.jpg",
                image60: "/60ml images/PINK GUAVA & LIME SMALL.jpg",

        

      },
      {
        name: "Smoked Aam Panna",
        description:"A sharp, tangy strike of raw mango paired with crisp mint and deep roasted jeera.",
        accent: "#b5c93a",
        image: "/NEW BARCRAFT IMAGES/RAW MANGO MINT 1.jpg",
        image60: "/60ml images/RAW MANGO MINT SMALL.jpg",



      },
      {
        name: "Spiced Lychee",
        description:"Sweet, translucent lychee balanced by the acidic snap of fresh lime and a warm, lingering ginger heat.",
        accent: "#f2c6c9",
        image: "/NEW BARCRAFT IMAGES/spiced-lychee.jpg",
                        image60: "/60ml images/SPICED LYCHEE & GINGER SMALL.jpg",


      },
      {
        name: "Kokum Cranberry",
        description:
          "Deep, earthy kokum layered with tart cranberry and aromatic fresh rosemary.",
        accent: "#8e1f4c",
                image: "/NEW BARCRAFT IMAGES/Kokum-Cranberry-600ml.jpeg",

                        image60: "/60ml images/Kokum-Cranberry-60ml.jpeg",

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
        image: "/NEW BARCRAFT IMAGES/MOSCOW MULE 1.jpg",
        image60: "/60ml images/MOSCOW MULE SMALL.jpg",
      },
      {
        name: "Mojito",
        description: "Crisp, cooling garden mint paired with a sharp citrus bite.",
        accent: "#9bc53d",
        image: "/NEW BARCRAFT IMAGES/MOJITO H600ml.jpeg",
                image60: "/60ml images/MOJITOO SMALL.jpg",
        bg:"/background-images/mojito big  1.jpg",

      },
      {
        name: "Cosmopolitan",
        description:
          "Bright citrus and sharp cranberry with a perfectly dry finish.",
        accent: "#c8102e",
        image: "/NEW BARCRAFT IMAGES/COSMOPOLITAN 1.jpg",
        image60: "/60ml images/cosmopolitan small.jpg",

      },
      {
        name: "Daiquiri",
        description:
          "The definitive, master-level balance of sharp lime and clean sweetness.",
        accent: "#c9e27a",
        image: "/NEW BARCRAFT IMAGES/LIME AND CANE.jpg",
                image60: "/60ml images/lime-and-cane.jpg",

      },
      {
        name: "Cuba Libre",
        description:
          "Rich, spiced cola notes engineered with a precise lime acidic snap.",
        accent: "#6b3a1f",
        image: "/NEW BARCRAFT IMAGES/cuba-libre.jpg",
                image60: "/60ml images/CUBA LIBRE.jpg",


      },
      {
        name: "Piña Colada",
        description:
          "Rich, creamy coconut layered seamlessly with ripe, golden pineapple.",
        accent: "#f5deb3",
        image: "/NEW BARCRAFT IMAGES/PINA COLADA600ml.jpeg",
                image60: "/60ml images/PINA COLADA.jpg",
        bg:"/background-images/pina colada big  1.jpg",

      },
      {
        name: "Mai Tai",
        description:
          "A tropical, complex collision of almond, citrus, and deep island fruits.",
        accent: "#e07b24",
        image: "/NEW BARCRAFT IMAGES/mai-tai.jpg",
                image60: "/60ml images/MAI TAI SMALL.jpg",

      },
      {
        name: "Planter’s Punch",
        description:
          "A bold, heavily spiced blend of dark fruit notes and tropical citrus.",
        accent: "#b3401e",
        image: "/NEW BARCRAFT IMAGES/PLANTER PUNCH  1.jpg",
                image60: "/60ml images/PLANTER,S PUNCH SMALL.jpg",

      },
      // {
      //   name: "Hurricane",
      //   description:
      //     "A chaotic, high-energy mix of passion fruit, orange, and heavy fruit botanicals.",
      //   accent: "#f0582b",
      //   image: "/NEW BARCRAFT IMAGES/HURRICANE  1.jpg",
      //           image60: "/60ml images/HURRICANE SMALL.jpg",

      // },
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
        name:"Screw Driver",
        description:"NULL",
        accent:"#f76227",
        image:"/NEW BARCRAFT IMAGES/screwdriver600ml.jpeg",
        image60:"/60ml images/screwdriver 60ml.jpg",
        bg:"/background-images/screwdriver big 1.jpg",

      },
      {
        name:"Spicy Mango",
        description:"NULL",
        accent:"#edf048",
        image:"/NEW BARCRAFT IMAGES/spicy mango600ml.jpeg",
        image60:"/60ml images/spicy mango 60ml.jpg",
        bg:"/background-images/spicy mango big  1.jpg",

      },
      {
        name: "Witcher Blood",
        description:
          "A dark, complex strike of blood orange and tart pomegranate, finished with sharp lemon and a lingering ginger beer heat.",
        accent: "#7a0f1c",
        image: "/NEW BARCRAFT IMAGES/witcher-blood.jpg",
                image60: "/60ml images/WITCHER BLOOD small.jpg",


      },
      {
        name: "Devil’s Lemonade",
        description:
          "A heavy, tart pour of classic lemonade and rich pomegranate, structurally built to carry dark, heavy spirits like bourbon.",
        accent: "#d4202c",
        image: "/NEW BARCRAFT IMAGES/DEVILS LEMONADE  1.jpg",
                image60: "/60ml images/DEVILS LEMONADE SMALL.jpg",

      },
      {
        name: "Watermelon Mint",
        description:
          "Cold-pressed summer watermelon spiked heavily with sharp lime and fresh mint.",
        accent: "#f25c6e",
        image: "/NEW BARCRAFT IMAGES/WATER MELON MINT 1.jpg",
                image60: "/60ml images/WATERMELON MINT SMALL.jpg",

      },
      {
        name: "Sex on the Beach",
        description:
          "Ripe peach and sweet orange, immediately cut by a tart cranberry and cherry finish.",
        accent: "#f7934c",
        image: "/NEW BARCRAFT IMAGES/SEX ON THE BEACH600ml.jpeg",
        image60: "/60ml images/SEX ON THE BEACH SMALL.jpg",
        bg:"/background-images/sex on the beach big  1.jpg"


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
