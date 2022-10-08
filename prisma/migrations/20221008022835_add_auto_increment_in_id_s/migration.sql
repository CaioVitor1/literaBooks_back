-- AlterTable
CREATE SEQUENCE "favoritegenre_id_seq";
ALTER TABLE "favoriteGenre" ALTER COLUMN "id" SET DEFAULT nextval('favoritegenre_id_seq');
ALTER SEQUENCE "favoritegenre_id_seq" OWNED BY "favoriteGenre"."id";

-- AlterTable
CREATE SEQUENCE "genre_id_seq";
ALTER TABLE "genre" ALTER COLUMN "id" SET DEFAULT nextval('genre_id_seq');
ALTER SEQUENCE "genre_id_seq" OWNED BY "genre"."id";
