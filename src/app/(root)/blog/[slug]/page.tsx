import prisma from "@/lib/db";
import moment from "moment-timezone";
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

  const { createdAt, title, content } = post;

  const timeZone = moment.tz.guess();
  const postedAt = moment.tz(createdAt, timeZone);

  return (
    <section className="font-pt-serif py-6 px-4 md:py-12 md:px-6 mb-12">
      <div>
        <div>
          <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
          <p className="mt-2 ml-2 mb-4 text-sm text-gray-500">
            — {postedAt.format("ddd, MMM DD YYYY • HH:mm")}
          </p>
        </div>
        <article className="text-lg whitespace-pre-line">{content}</article>
      </div>
      <div className="relative mt-12 md:mt-24">
        <div className="absolute inset-0 border-t-4 [border-style:dotted]" />
        <span className="absolute fotn-bold text-xl -top-1/2 -translate-y-1/2 px-2 bg-background text-neutral-300 block left-1/2 -translate-x-1/2">
          End
        </span>
      </div>
    </section>
  );
}
