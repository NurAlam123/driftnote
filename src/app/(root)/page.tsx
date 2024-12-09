import Blogs from "@/components/Home/Blogs";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto">
      <Navbar />
      <section className="mx-6 mt-12">
        <Blogs />
      </section>
    </main>
  );
}
