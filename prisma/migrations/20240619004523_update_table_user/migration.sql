/*
  Warnings:

  - You are about to drop the column `updated_datetiem` on the `user` table. All the data in the column will be lost.
  - Added the required column `updated_datetime` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `updated_datetiem`,
    ADD COLUMN `updated_datetime` DATETIME(3) NOT NULL;
