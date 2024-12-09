import prisma from "@/lib/db";
import { Stars } from "lucide-react";
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
        <h2 className="font-bold text-2xl">
          All Blogs <span className="text-gray-300">[ {posts.length} ]</span>
        </h2>
      </div>
      <div className="mt-6 ms-6">
        <ul className="list-none space-y-4 [text-decoration-style:dotted] text-lg">
          {posts.map((post) => (
            <li key={post.title} className="list-item w-fit">
              <div className="flex gap-2">
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex text-gray-200 items-center gap-2 *:underline *:underline-offset-4 *:[text-decoration-style:dotted]"
                >
                  <Stars />
                  <span>{post.title}</span>
                </Link>
                <span className="text-gray-400">—</span>
                <span className="text-gray-400">
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
