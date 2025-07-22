/*
  Warnings:

  - The required column `id` was added to the `ghost` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "trace" DROP CONSTRAINT "trace_username_fkey";

-- AlterTable
ALTER TABLE "ghost" ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "ghost_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "mark" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ghostID" TEXT NOT NULL,
    "traceID" TEXT NOT NULL,

    CONSTRAINT "mark_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "mark_ghostID_traceID_key" ON "mark"("ghostID", "traceID");

-- AddForeignKey
ALTER TABLE "trace" ADD CONSTRAINT "trace_username_fkey" FOREIGN KEY ("username") REFERENCES "ghost"("username") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mark" ADD CONSTRAINT "mark_ghostID_fkey" FOREIGN KEY ("ghostID") REFERENCES "ghost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mark" ADD CONSTRAINT "mark_traceID_fkey" FOREIGN KEY ("traceID") REFERENCES "trace"("id") ON DELETE CASCADE ON UPDATE CASCADE;
