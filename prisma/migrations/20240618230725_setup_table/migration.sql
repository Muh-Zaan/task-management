-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `user_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
