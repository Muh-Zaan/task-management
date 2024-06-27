/*
  Warnings:

  - Added the required column `created_by` to the `project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `project` ADD COLUMN `created_by` VARCHAR(191) NOT NULL;
