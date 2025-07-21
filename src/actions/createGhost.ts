"use server";

import prisma from "@/lib/db";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { revalidatePath } from "next/cache";

export const createGhost = async ({
  email,
  username,
}: {
  email: string;
  username: string;
}) => {
  try {
    const existing = await prisma.ghost.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    });

    if (existing) {
      return {
        success: false,
        error:
          existing.username === username
            ? "Username already exists"
            : "Email already exists",
      };
    }

    const ghost = await prisma.ghost.create({
      data: {
        email,
        username,
      },
    });

    revalidatePath(`/`);
    return {
      success: true,
      data: ghost,
    };
  } catch (error) {
    let errorMessage = "Something went wrong.";

    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        const fields = error.meta?.target as string[] | undefined;

        if (fields?.includes("username")) {
          errorMessage = "Username already exists";
        } else if (fields?.includes("email")) {
          errorMessage = "Email already exists";
        } else {
          errorMessage = "Unique constraint failed on unknown field";
        }
      }
    }

    return {
      success: false,
      error: errorMessage,
    };
  }
};
