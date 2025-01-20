import Header from "../components/Header.jsx";
import BlogCard from "../components/BlogCard.jsx";

export default function Home() {
  return (
    <section className="md:h-screen container  ">
      <Header />
      <div className="grid md md:grid-cols-3 gap-2 pb-10 grid-cols-1">
        <BlogCard />
      </div>
    </section>
  );
}
