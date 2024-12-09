"use server";

import prisma from "@/lib/db";
import { redirect } from "next/navigation";
import slugify from "react-slugify";

export const handleForm = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  const titleMinLimit = 5;
  const contentMinLimit = 50;

  if (
    title.trim().length <= titleMinLimit ||
    content.trim().length <= contentMinLimit
  )
    return;

  const slug = slugify(title);
  // Add to database
  await prisma.post.create({
    data: {
      title,
      content,
      slug,
    },
  });

  redirect(`/blog/${slug}`);
};
