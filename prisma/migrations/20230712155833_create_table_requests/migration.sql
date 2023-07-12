-- CreateEnum
CREATE TYPE "RequestStatus" AS ENUM ('awaiting', 'production', 'delivery', 'completed');

-- CreateTable
CREATE TABLE "requests" (
    "id" SERIAL NOT NULL,
    "client_name" TEXT NOT NULL,
    "status" "RequestStatus" NOT NULL DEFAULT 'awaiting',

    CONSTRAINT "requests_pkey" PRIMARY KEY ("id")
);
