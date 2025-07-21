import { badTitles } from "./constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

export const checkAndGetTitle = (markdown: string) => {
  const lines = markdown.split("\n").map((line) => line.trim());
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

export const checkAndGetTldr = (markdown: string, full: boolean = false) => {
  const lines = markdown.split("\n").map((line) => line.trim());
  let firstLine;
  if (!full) firstLine = lines[0];
  else firstLine = lines[2];
  const modFirstLine = firstLine.toLowerCase().trim();
  if (
    !modFirstLine.startsWith(">") ||
    modFirstLine.replace(">", "").trim() === "" ||
    modFirstLine.replace(/tl;dr:/i, "").trim() === ""
  ) {
    return;
  }

  return firstLine.replace(">", "").trim();
};

export const getContent = (markdown: string) => {
  const lines = markdown.split("\n");
  const content = lines.slice(1);
  return { lines, content };
};

export const range = ({ from = 0, to }: { from?: number; to: number }) => {
  const rangeArr = [];
  for (let i = from; i < to; i++) {
    rangeArr.push(i);
  }

  return rangeArr;
};
