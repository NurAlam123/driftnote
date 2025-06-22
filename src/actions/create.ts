"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import slugify from "react-slugify";

export const createPost = async (title: string, content: string) => {
  const slug = await generateUniqueSlug(title);

  // Add to database
  await prisma.post.create({
    data: {
      title,
      content,
      slug,
    },
  });

  revalidatePath(`/blog/${slug}`);
  redirect(`/blog/${slug}`);
};

export const generateUniqueSlug = async (title: string): Promise<string> => {
  const slug = slugify(title);

  const exist = await prisma.post.findMany({
    where: {
      slug,
    },
  });

  const count = exist.length;
  if (count <= 0) return slug;

  return `${slug}-${count}`;
};
