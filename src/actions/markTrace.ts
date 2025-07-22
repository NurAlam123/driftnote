"use server";

import prisma from "@/lib/db";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export const markTrace = async ({
  ghostID,
  traceID,
  marked,
}: {
  marked: boolean;
  ghostID: string;
  traceID: string;
}) => {
  try {
    let traceMarked;
    if (marked) {
      traceMarked = await prisma.mark.create({
        data: {
          ghostID,
          traceID,
        },
      });
    } else {
      const markedId = await prisma.mark.findFirst({
        where: { ghostID, traceID },
      });

      if (!markedId) return;

      traceMarked = await prisma.mark.delete({
        where: {
          id: markedId?.id,
        },
      });
    }

    return {
      success: true,
      data: traceMarked,
    };
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError)
      return {
        success: false,
        error: err.message,
      };

    return { success: false };
  }
};

export const traceMarkedByGhost = async ({
  traceID,
  ghostID,
}: {
  traceID: string;
  ghostID: string;
}) => {
  const result = await prisma.mark.findFirst({ where: { traceID, ghostID } });
  if (result) return true;
  return false;
};

export const totalTraceMark = async ({ traceID }: { traceID: string }) => {
  const count = await prisma.mark.count({ where: { traceID } });

  const pad = String(count).padStart(2, "0");
  return pad;
};
