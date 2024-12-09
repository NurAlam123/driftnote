import Blogs from "@/components/Home/Blogs";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="mx-6 mt-12">
        <Blogs />
      </section>
    </>
  );
}
