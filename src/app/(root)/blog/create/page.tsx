"use client";

import { handleForm } from "@/actions/create";
import { useEffect, useState } from "react";

export default function PostCreatePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [submit, setSubmit] = useState(true);

  const titleMinLimit = 5;
  const contentMinLimit = 50;

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

  const titleHandler = (el: React.FormEvent<HTMLTextAreaElement>) => {
    const value = el.currentTarget.value;
    setTitle(value);

    if (
      content.trim().length <= titleMinLimit ||
      value.trim().length <= contentMinLimit
    )
      setSubmit(true);
    else setSubmit(false);
  };
  const contentHandler = (el: React.FormEvent<HTMLTextAreaElement>) => {
    const value = el.currentTarget.value;
    setContent(value);

    if (
      title.trim().length <= titleMinLimit ||
      value.trim().length <= contentMinLimit
    )
      setSubmit(true);
    else setSubmit(false);
  };

  return (
    <form
      action={handleForm}
      className="relative bg-background text-foreground"
    >
      <button
        type="submit"
        className="bg-blue-500 text-white absolute top-0 right-0 px-6 py-2 m-4 rounded-full font-bold disabled:bg-gray-400 disabled:cursor-not-allowed"
        disabled={submit}
      >
        Submit
      </button>
      <div>
        <textarea
          name="title"
          value={title}
          onChange={titleHandler}
          className="resize-none text-wrap w-full h-full bg-inherit text-inherit outline-none text-4xl ps-12 mt-20"
          placeholder="Title here..."
        />
        <textarea
          name="content"
          value={content}
          onChange={contentHandler}
          className="w-full h-96 resize-none text-inherit outline-none bg-inherit text-lg ps-12"
          placeholder="Write your blog here..."
        />
      </div>
    </form>
  );
}
