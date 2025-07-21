/*
  Warnings:

  - Added the required column `tldr` to the `trace` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "trace" ADD COLUMN     "tldr" TEXT NOT NULL;
