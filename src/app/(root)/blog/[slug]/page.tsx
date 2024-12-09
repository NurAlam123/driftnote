import prisma from "@/lib/db";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type ParamsType = Promise<{
  slug: string;
}>;

export default async function Page({ params }: { params: ParamsType }) {
  const { slug } = await params;

  const post = await prisma.post.findUnique({
    where: {
      slug,
    },
  });

  return (
    <section className="p-12 space-y-6">
      <Link
        className="text-blue-400 flex items-center gap-1 font-semibold hover:text-blue-500 w-fit underline underline-offset-2"
        href="/"
      >
        <ArrowLeft />
        Home
      </Link>
      <h1 className="text-4xl font-bold">{post?.title}</h1>
      <article>{post?.content}</article>
    </section>
  );
}
