import Navbar from "../../components/Navbar";
import FlavorArchive from "../../components/mixers/FlavorArchive";
import Footer from "../../components/home/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "The Flavor Archive: All Cocktail Mixers",
  description:
    "Explore every BarCraft cocktail mixer: the Craft Botanical Collection, the High-Fidelity Classics and the Signature Syndicate.",
  path: "/mixers",
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
