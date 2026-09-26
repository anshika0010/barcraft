import Navbar from "../../components/Navbar";
import BlogIndex from "../../components/blog/BlogIndex";
import Footer from "../../components/home/Footer";

export const metadata = {
  title: "Blogs & Articles | BarCraft",
  description:
    "Stories from behind the bar: cocktail recipes, techniques and the craft of the perfect pour.",
};

export default function BlogPage() {
  return (
    <main className="bg-black">
      <Navbar />
      <BlogIndex />
      <Footer />
    </main>
  );
}
