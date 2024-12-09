"use client";

import { useState } from "react";

export default function Page() {
  const [content, setContent] = useState("");

  return (
    <section className="relative">
      <button className="bg-blue-500 absolute top-0 right-0 px-6 py-2 m-4 rounded-full font-bold">
        Submit
      </button>
      <textarea
        content={content}
        onChange={(el) => setContent(el.currentTarget.value)}
        className="w-full h-svh p-16 text-white bg-black text-lg"
        placeholder="Write your blog here..."
      ></textarea>
    </section>
  );
}
