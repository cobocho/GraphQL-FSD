/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Director" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Film" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "subtitle" TEXT,
    "genre" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "runningTime" INTEGER NOT NULL,
    "director_id" INTEGER NOT NULL,
    "posterImg" TEXT NOT NULL,
    "release" TEXT NOT NULL,
    CONSTRAINT "Film_director_id_fkey" FOREIGN KEY ("director_id") REFERENCES "Director" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Cut" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "src" TEXT NOT NULL,
    "filmId" INTEGER NOT NULL,
    CONSTRAINT "Cut_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Film" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
