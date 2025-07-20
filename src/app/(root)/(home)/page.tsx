import Traces from "./_components/traces";

export const metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <section className="mx-2 md:mx-4 pb-2">
      <Traces />
    </section>
  );
}
