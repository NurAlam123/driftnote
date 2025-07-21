"use server";

import prisma from "@/lib/db";
import { checkAndGetTitle } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import slugify from "react-slugify";

export const createTrace = async ({
  title,
  content,
  tldr,
  username,
}: {
  title: string;
  tldr: string;
  content: string;
  username: string;
}) => {
  if (!checkAndGetTitle(title) && content.trim() === "") return;

  const slug = await generateUniqueSlug(title);

  // Add to database
  await prisma.trace.create({
    data: {
      title,
      content,
      slug,
      tldr,
      username,
    },
  });

  revalidatePath(`/trace/${slug}`);
  redirect(`/trace/${slug}`);
};

export const generateUniqueSlug = async (title: string): Promise<string> => {
  const slug = slugify(title);

  const exist = await prisma.trace.findMany({
    where: {
      slug,
    },
  });

  const count = exist.length;
  if (count <= 0) return slug;

  return `${slug}-${count}`;
};
