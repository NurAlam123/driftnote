"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export const createGhost = async ({
  email,
  username,
}: {
  email: string;
  username: string;
}) => {
  // Add to database
  const ghost = await prisma.ghost.create({
    data: {
      username,
      email,
    },
  });

  revalidatePath(`/`);
  return {
    success: true,
    data: ghost,
  };
};
