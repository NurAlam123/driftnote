import prisma from "@/lib/db";

export async function GET() {
  const notes = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 10,
  });
  const count = await prisma.post.count();

  const data = JSON.stringify({
    count,
    notes,
  });

  return new Response(data);
}
