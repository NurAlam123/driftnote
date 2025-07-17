import Notes from "@/components/Notes";

export const metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <section className="mx-4 md:mx-6 mt-6">
      <Notes />
    </section>
  );
}
