import prisma from "@/lib/db";
import { NotebookText } from "lucide-react";
import Link from "next/link";
import moment from "moment";

const Blogs = async () => {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <section>
      <div>
        <h2 className="font-bold text-3xl">
          All Blogs <span className="text-gray-400">[ {posts.length} ]</span>
        </h2>
      </div>
      <div className="mt-6 ms-4">
        <ul className="list-none space-y-4 [text-decoration-style:dotted] md:text-xl">
          {posts.map((post) => (
            <li key={post.slug} className="list-item w-fit">
              <div className="flex gap-2 items-center">
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex text-foreground items-center gap-2 *:underline *:underline-offset-4 *:[text-decoration-style:dashed]"
                >
                  <NotebookText />
                  <span className="leading-tight">{post.title}</span>
                </Link>
                <span className="text-neutral-500 text-sm">—</span>
                <span className="text-neutral-500 text-sm">
                  {moment(post.createdAt).fromNow()}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Blogs;
