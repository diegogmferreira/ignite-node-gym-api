/*
  Warnings:

  - You are about to drop the column `gym_id` on the `check_ins` table. All the data in the column will be lost.
  - Added the required column `gynm_id` to the `check_ins` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "check_ins" DROP COLUMN "gym_id",
ADD COLUMN     "gynm_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "check_ins" ADD CONSTRAINT "check_ins_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "check_ins" ADD CONSTRAINT "check_ins_gynm_id_fkey" FOREIGN KEY ("gynm_id") REFERENCES "gyms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
