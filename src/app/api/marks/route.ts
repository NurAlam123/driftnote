import prisma from "@/lib/db";

export async function GET(req: Request) {
  const url = new URL(req.url);

  const query = url.searchParams;
  const traceID = query.get("traceID");

  if (!traceID) return new Response(JSON.stringify({ count: "00" }));

  const count = await prisma.mark.count({ where: { traceID } });
  const pad = String(count).padStart(2, "0");

  const data = JSON.stringify({
    count: pad,
  });

  return new Response(data);
}
