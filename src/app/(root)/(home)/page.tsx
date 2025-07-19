import Notes from "./_components/notes";

export const metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <section className="mx-2 md:mx-4 mt-4">
      <Notes />
    </section>
  );
}
