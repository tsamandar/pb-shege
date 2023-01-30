/*
  Warnings:

  - Added the required column `color` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gallery` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `products` ADD COLUMN `color` VARCHAR(255) NOT NULL,
    ADD COLUMN `gallery` MEDIUMTEXT NOT NULL,
    ADD COLUMN `size` VARCHAR(255) NOT NULL,
    MODIFY `info` MEDIUMTEXT NOT NULL;
