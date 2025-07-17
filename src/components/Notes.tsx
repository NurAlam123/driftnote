"use client";
import { NotebookText } from "lucide-react";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { Post } from "@prisma/client";

const Notes = () => {
  dayjs.extend(relativeTime);

  const url = "/api/posts";

  const { data, error, isLoading } = useSWR(url, fetcher, {
    refreshInterval: 60 * 1000,
  });

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <section>
      <div>
        <h2 className="font-bold text-3xl">
          All Notes{" "}
          <span className="text-neutral-500">[ {data.numberOfPosts} ]</span>
        </h2>
      </div>
      <div className="mt-6 ms-4">
        <ul className="list-none space-y-4 decoration-dotted md:text-xl">
          {data.posts.map((post: Post) => (
            <li key={post.slug} className="list-item w-fit">
              <div className="flex gap-2 items-center">
                <Link
                  href={`/note/${post.slug}`}
                  className="flex text-foreground items-center gap-2 *:underline *:underline-offset-4 *:decoration-dashed"
                >
                  <NotebookText />
                  <span className="leading-tight">{post.title}</span>
                </Link>
                <span className="text-neutral-500 text-sm">—</span>
                <span className="text-neutral-500 text-sm">
                  {dayjs(post.createdAt).fromNow()}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Notes;
