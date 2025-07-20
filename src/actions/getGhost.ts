"use server";

import prisma from "@/lib/db";
import { Ghost } from "@prisma/client";

export async function getGhost({
  username,
  email,
}: {
  username?: string;
  email?: string;
}): Promise<{ success: boolean; data: Ghost | null }> {
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

  if (!ghost) return { success: false, data: null };

  return {
    success: true,
    data: ghost,
  };
}
