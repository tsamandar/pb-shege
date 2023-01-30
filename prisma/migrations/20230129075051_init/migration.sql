-- CreateTable
CREATE TABLE `Podcast` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `info` VARCHAR(255) NOT NULL,
    `poster` VARCHAR(255) NOT NULL,
    `video` VARCHAR(255) NOT NULL,
    `parts` MEDIUMTEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
