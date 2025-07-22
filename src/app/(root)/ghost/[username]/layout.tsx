import Navbar from "@/components/navbar";

export default function GhostLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen">
      <div className="fixed w-full top-0 max-w-3xl mx-auto">
        <Navbar />
      </div>
      <div className="mt-[80px] px-2 py-4 md:py-6">{children}</div>
    </div>
  );
}
