import prisma from "@/lib/db";

export async function GET(req: Request) {
  const url = new URL(req.url);

  const query = url.searchParams;
  const limit = Number(query.get("limit")) || 0;

  const traces = await prisma.trace.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 10,
    skip: limit,
  });
  const count = await prisma.trace.count();

  const data = JSON.stringify({
    count,
    notes: traces,
  });

  return new Response(data);
}
