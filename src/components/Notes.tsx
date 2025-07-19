"use client";
import { NotebookText } from "lucide-react";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { Post } from "@prisma/client";
import { Badge } from "./ui/badge";

const Notes = () => {
  dayjs.extend(relativeTime);

  const url = "/api/posts";

  const { data, error, isLoading } = useSWR(url, fetcher, {
    refreshInterval: 120 * 1000,
  });

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <section>
      <div>
        <h4 className="font-medium text-xl flex items-center gap-2">
          <span className="block">All Notes</span>{" "}
          <Badge>{data.numberOfPosts}</Badge>
        </h4>
      </div>
      <div className="mt-6 ms-4">
        <ul className="list-none space-y-4 decoration-dotted">
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
