"use server";

import prisma from "@/lib/db";
import { Trace } from "@prisma/client";

type Params = {
  username: string;
  mark?: boolean;
};

export const getTracesByUsername = async ({ username, mark }: Params) => {
  try {
    let traces: Trace[] = [];

    if (mark) {
      traces = await prisma.trace.findMany({
        where: {
          Mark: {
            some: {
              ghost: {
                username,
              },
            },
          },
        },
        include: {
          Mark: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    } else if (!mark) {
      traces = await prisma.trace.findMany({
        where: {
          ghost: {
            username,
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    }

    return { data: traces };
  } catch (error) {
    if (error instanceof Error) return { error: error.message };
  }
};

export const getTracesCountByUsername = async ({
  username,
}: {
  username: string;
}) => {
  const count = await prisma.$transaction([
    prisma.trace.count({ where: { username } }),
  ]);

  return count;
};
