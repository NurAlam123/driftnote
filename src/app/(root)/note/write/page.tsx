"use client";
import { createPost } from "@/actions/create";
import { checkAndGetTitle, getContent } from "@/lib/utils";
import dynamic from "next/dynamic";
import { useState } from "react";

const TextEditor = dynamic(() => import("@/components/TextEditor"), {
  ssr: false,
});

export default function PostCreatePage() {
  const [markdown, setMarkdown] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(true);

  const submitHandler = async () => {
    const title = checkAndGetTitle(markdown);
    const { content } = getContent(markdown);

    if (!title) return;

    await createPost(title, content.join("\n"));
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex justify-end my-2">
        <button
          className="bg-blue-500 text-white font-semibold px-4 py-1 rounded-full disabled:bg-zinc-100 disabled:text-zinc-400 transition-colors duration-100 disabled:cursor-not-allowed shadow-md mx-2"
          onClick={submitHandler}
          disabled={disabled}
        >
          Submit
        </button>
      </div>
      <div className="rounded-md flex-1 mb-4 h-full overflow-auto shadow-sm">
        <TextEditor setMarkdown={setMarkdown} setDisabled={setDisabled} />
      </div>
    </div>
  );
}
