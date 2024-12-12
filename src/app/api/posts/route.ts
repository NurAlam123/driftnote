import prisma from "@/lib/db";

export async function GET() {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 10,
  });
  const numberOfPosts = await prisma.post.count();

  const data = JSON.stringify({
    numberOfPosts,
    posts,
  });

  return new Response(data);
}
