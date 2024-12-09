import prisma from "@/lib/db";

type ParamsType = {
  slug: string;
};

export default async function Page({ params }: { params: ParamsType }) {
  const { slug } = await params;

  const post = await prisma.post.findUnique({
    where: {
      slug,
    },
  });

  return (
    <section className="p-12 space-y-6">
      <h1 className="text-4xl font-bold">{post?.title}</h1>
      <article>{post?.content}</article>
    </section>
  );
}
