"use server";

import prisma from "@/lib/db";
import { Ghost } from "@prisma/client";

export async function getGhost({
  username,
  email,
}: {
  username?: string;
  email?: string;
}): Promise<{ success: boolean; data?: Ghost; error?: string }> {
  let ghost;

  if (email) {
    ghost = await prisma.ghost.findUnique({
      where: {
        email,
      },
    });
  }

  if (username) {
    ghost = await prisma.ghost.findUnique({
      where: {
        username,
      },
    });
  }

  if (!ghost) return { success: false, error: "Invalid username/password" };

  return {
    success: true,
    data: ghost,
  };
}
