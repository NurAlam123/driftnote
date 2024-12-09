"use server";

import prisma from "@/lib/db";
import { redirect } from "next/navigation";
import slugify from "react-slugify";

export const handleForm = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const slug = slugify(title);

  await prisma.post.create({
    data: {
      title,
      content,
      slug,
    },
  });

  redirect(`/blog/${slug}`);
};
