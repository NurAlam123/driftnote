"use client";
import Markdown from "react-markdown";
import TimeFormat from "./TimeFormat";

type NotePostType = {
  title: string;
  content: string;
  createdAt: Date;
};

const Note = ({ title, content, createdAt }: NotePostType) => {
  return (
    <section className="font-pt-serif py-6 px-4 md:py-12 md:px-6 mb-12">
      <div>
        <div>
          <h1 className="text-4xl md:text-5xl font-bold capitalize">{title}</h1>
          <p className="mt-2 ml-2 mb-4 text-sm text-gray-500">
            — <TimeFormat time={createdAt} format="ddd, MMM DD YYYY • HH:mm" />
          </p>
        </div>
        <article className="prose">
          <Markdown>{content}</Markdown>
        </article>
      </div>
      <div className="relative mt-12 md:mt-24">
        <div className="absolute inset-0 border-t-4 [border-style:dotted]" />
        <span className="absolute fotn-bold text-xl -top-1/2 -translate-y-1/2 px-2 bg-background text-neutral-300 block left-1/2 -translate-x-1/2">
          End
        </span>
      </div>
    </section>
  );
};

export default Note;
