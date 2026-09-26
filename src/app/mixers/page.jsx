import Navbar from "../../components/Navbar";
import FlavorArchive from "../../components/mixers/FlavorArchive";
import Footer from "../../components/home/Footer";

export const metadata = {
  title: "The Flavor Archive | BarCraft Mixers",
  description:
    "Explore every BarCraft cocktail mixer: the Craft Botanical Collection, the High-Fidelity Classics and the Signature Syndicate.",
};

export default function MixersPage() {
  return (
    <main className="bg-black">
      <Navbar />
      <FlavorArchive />
      <Footer />
    </main>
  );
}
