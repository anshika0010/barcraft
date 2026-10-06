import Navbar from "../../components/Navbar";
import FlavorArchive from "../../components/mixers/FlavorArchive";
import Footer from "../../components/home/Footer";



export default function MixersPage() {
  return (
    <main className="bg-black">
      <Navbar />
      <FlavorArchive />
      <Footer />
    </main>
  );
}
