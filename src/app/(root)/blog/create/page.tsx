"use client";

import { handleForm } from "@/actions/create";
import { useEffect, useState } from "react";

export default function PostCreatePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // for auto resizeable textarea
  useEffect(() => {
    document.querySelectorAll("textarea").forEach((textarea) => {
      textarea.style.height = textarea.scrollHeight + "px";
      textarea.style.overflowY = "hidden";

      textarea.addEventListener("input", function () {
        this.style.height = this.scrollHeight + "px";
      });
    });
  });

  return (
    <form action={handleForm} className="relative bg-background text-white">
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
          className="resize-none text-wrap w-full h-full bg-inherit text-inherit outline-none text-4xl ps-12 mt-20"
          placeholder="Title here..."
        />
        <textarea
          name="content"
          value={content}
          onChange={(el) => setContent(el.currentTarget.value)}
          className="w-full h-96 resize-none text-inherit outline-none bg-inherit text-lg ps-12"
          placeholder="Write your blog here..."
        />
      </div>
    </form>
  );
}
