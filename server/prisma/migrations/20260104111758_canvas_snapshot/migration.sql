-- CreateTable
CREATE TABLE "CanvasSnapshot" (
    "id" TEXT NOT NULL,
    "meetingId" TEXT NOT NULL,
    "elements" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CanvasSnapshot_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CanvasSnapshot_meetingId_key" ON "CanvasSnapshot"("meetingId");
