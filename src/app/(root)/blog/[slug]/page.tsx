import prisma from "@/lib/db";
import moment from "moment";
import { notFound } from "next/navigation";

type ParamsType = Promise<{
  slug: string;
}>;

export default async function BlogPage({ params }: { params: ParamsType }) {
  const { slug } = await params;

  const post = await prisma.post.findUnique({
    where: {
      slug,
    },
  });

  if (!post) notFound();

  return (
    <section className="font-pt-serif py-6 px-4 md:py-12 md:px-6 space-y-4 md:space-y-6">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold">{post?.title}</h1>
        <p className="mt-4 ml-2 text-sm text-gray-500">
          — {moment(post?.createdAt).toString()}
        </p>
      </div>
      <article className="text-lg">{post?.content}</article>
    </section>
  );
}
