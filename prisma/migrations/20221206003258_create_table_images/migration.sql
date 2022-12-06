-- CreateTable
CREATE TABLE "imagem" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "imagem_pkey" PRIMARY KEY ("id")
);
