import Navbar from "../../components/Navbar";
import FlavorArchive from "../../components/mixers/FlavorArchive";
import Footer from "../../components/home/Footer";
import { buildMetadata, LOGO_IMAGE } from "@/lib/seo";

export const metadata = buildMetadata({
  title: { absolute: "Cocktail & Mocktail Mixers in India | BarCraft" },
  description:
    "Explore all BarCraft cocktail and mocktail mixers in refreshing flavours. Make your favourite drinks at home for parties, celebrations and relaxed evenings.",
  socialTitle: "Cocktail & Mocktail Mixers India: All Flavours | BarCraft",
  socialDescription:
    "Explore all BarCraft cocktail and mocktail mixers in India: Mojito, Piña Colada, Moscow Mule, Cosmopolitan and more. 550ml and 50ml bottles.",
  path: "/mixers",
  image: LOGO_IMAGE,
});




export default function MixersPage() {
  return (
    <main className="bg-black">
      <Navbar />
      <FlavorArchive />
      <Footer />
    </main>
  );
}
