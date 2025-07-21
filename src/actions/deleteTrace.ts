"use server";

import prisma from "@/lib/db";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export const deleteTrace = async ({ id }: { id: string }) => {
  try {
    const deleted = await prisma.trace.delete({ where: { id } });
    if (!deleted)
      return {
        success: false,
        data: null,
        error: "Something went wrong",
      };

    return { success: true, data: deleted };
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError) {
      return { success: false, data: null, error: err.message };
    }
  }
};
