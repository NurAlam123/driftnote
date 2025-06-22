"use client";
import { createPost } from "@/actions/create";
import dynamic from "next/dynamic";
import { useState } from "react";

const TextEditor = dynamic(() => import("@/components/TextEditor"), {
  ssr: false,
});

export default function PostCreatePage() {
  const [markdow, setMarkdown] = useState<string>("");

  const badTitles = [
    "",
    "title",
    "title here",
    "title here!",
    "insert title here",
    "heading",
    "heading 1",
    "untitled",
    "no title",
    "markdown",
    "document",
    "page 1",
    "page one",
    "chapter 1",
    "introduction",
    "welcome",
    "home",
    "about",
    "readme",
    "index",
    "start",
    "sample title",
    "test",
    "example",
    "demo",
    "lorem ipsum",
  ];

  const checkAndGetTitle = () => {
    const lines = markdow.split("\n").map((line) => line.trim());
    const firstLine = lines[0].toLowerCase().trim();
    if (
      !firstLine.startsWith("#") ||
      firstLine === "#" ||
      badTitles.includes(firstLine.replace("#", "").trim())
    ) {
      return;
    }

    return lines[0].replace("#", "").trim();
  };

  const submitHandler = async () => {
    const title = checkAndGetTitle();
    if (!title) return;

    await createPost(title, markdow);
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex justify-end my-2">
        <button
          className="bg-blue-500 text-white font-semibold px-4 py-1 rounded-full"
          onClick={submitHandler}
        >
          Submit
        </button>
      </div>
      <div className="border rounded-md flex-1 mb-4 h-full overflow-auto shadow-sm">
        <TextEditor setMarkdown={setMarkdown} />
      </div>
    </div>
  );
}
