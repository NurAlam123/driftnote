-- AlterTable
ALTER TABLE "ghost" ADD COLUMN     "verified" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "post" ALTER COLUMN "username" SET DEFAULT 'ghost';
