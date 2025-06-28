import Note from "@/components/Note";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";

type ParamsType = Promise<{
  slug: string;
}>;

interface Props {
  params: ParamsType;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const post = await prisma.post.findUnique({
    where: {
      slug,
    },
  });

  if (!post) return {};

  return {
    title: post.title,
  };
}

export default async function NotePage({ params }: Props) {
  const { slug } = await params;

  const post = await prisma.post.findUnique({
    where: {
      slug,
    },
  });

  if (!post) notFound();

  const { createdAt, title, content } = post;

  return (
    <>
      <Note createdAt={createdAt} title={title} content={content} />
    </>
  );
}
