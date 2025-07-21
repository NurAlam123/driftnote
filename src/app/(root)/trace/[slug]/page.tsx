// import Note from "@/components/Note";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import Trace from "./_components/trace";
import Navbar from "@/components/Navbar";

type ParamsType = Promise<{
  slug: string;
}>;

interface Props {
  params: ParamsType;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const post = await prisma.trace.findUnique({
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

  const trace = await prisma.trace.findUnique({
    where: {
      slug,
    },
  });

  if (!trace) notFound();

  return (
    <>
      <Navbar />
      <Trace trace={trace} />
    </>
  );
}
