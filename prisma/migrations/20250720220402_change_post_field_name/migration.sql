/*
  Warnings:

  - You are about to drop the `post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "post" DROP CONSTRAINT "post_username_fkey";

-- DropTable
DROP TABLE "post";

-- CreateTable
CREATE TABLE "trace" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "username" TEXT NOT NULL DEFAULT 'ghost',

    CONSTRAINT "trace_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "trace_slug_key" ON "trace"("slug");

-- AddForeignKey
ALTER TABLE "trace" ADD CONSTRAINT "trace_username_fkey" FOREIGN KEY ("username") REFERENCES "ghost"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
