"use client";

import { handleForm } from "@/actions/create";
import { useState } from "react";

export default function PostCreatePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <form action={handleForm} className="relative h-svh bg-black text-white">
      <button
        type="submit"
        className="bg-blue-500 absolute top-0 right-0 px-6 py-2 m-4 rounded-full font-bold"
      >
        Submit
      </button>
      <div>
        <textarea
          name="title"
          value={title}
          onChange={(el) => setTitle(el.currentTarget.value)}
          className="resize-none text-wrap w-full h-full bg-inherit text-inherit outline-none text-4xl ps-12 pt-12"
          placeholder="Title here..."
        />
        <textarea
          name="content"
          value={content}
          onChange={(el) => setContent(el.currentTarget.value)}
          className="w-full h-[calc(100vh-160px)] resize-none text-inherit outline-none bg-inherit text-lg ps-12"
          placeholder="Write your blog here..."
        />
      </div>
    </form>
  );
}
