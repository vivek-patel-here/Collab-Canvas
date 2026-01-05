/*
  Warnings:

  - You are about to drop the column `meetingId` on the `CanvasSnapshot` table. All the data in the column will be lost.
  - Added the required column `ownerId` to the `CanvasSnapshot` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `CanvasSnapshot` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "CanvasSnapshot_meetingId_key";

-- AlterTable
ALTER TABLE "CanvasSnapshot" DROP COLUMN "meetingId",
ADD COLUMN     "ownerId" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
