import { Stars } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    title: "A tile",
    id: 1,
    author: "",
  },
  {
    title: "A tile",
    id: 2,
    author: "",
  },
  {
    title: "A tile",
    id: 3,
    author: "",
  },
  {
    title: "A tile",
    id: 4,
    author: "",
  },
  {
    title: "A tile",
    id: 5,
    author: "",
  },
  {
    title: "A tile",
    id: 6,
    author: "",
  },
];

const Blogs = () => {
  return (
    <section>
      <div>
        <h1 className="font-bold text-2xl">All Blogs</h1>
      </div>
      <div className="mt-6 ms-6">
        <ul className="list-none space-y-4 [text-decoration-style:dotted]">
          {posts.map((post, index) => (
            <li key={index} className="list-item w-fit">
              <Link
                href={`/blog/${post.id}`}
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
