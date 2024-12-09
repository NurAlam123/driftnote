import prisma from "@/lib/db";
import { Stars } from "lucide-react";
import Link from "next/link";

const Blogs = async () => {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <section>
      <div>
        <h1 className="font-bold text-2xl">All Blogs [{posts.length}]</h1>
      </div>
      <div className="mt-6 ms-6">
        <ul className="list-none space-y-4 [text-decoration-style:dotted]">
          {posts.map((post) => (
            <li key={post.title} className="list-item w-fit">
              <Link
                href={`/blog/${post.slug}`}
                className="flex text-gray-400 items-center gap-2 *:underline *:underline-offset-4 *:[text-decoration-style:dotted]"
              >
                <Stars />
                <span>{post.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Blogs;
