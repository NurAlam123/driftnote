/*
  Warnings:

  - Added the required column `username` to the `post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "post" ADD COLUMN     "username" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "ghost" (
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ghost_email_key" ON "ghost"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ghost_username_key" ON "ghost"("username");

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_username_fkey" FOREIGN KEY ("username") REFERENCES "ghost"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
