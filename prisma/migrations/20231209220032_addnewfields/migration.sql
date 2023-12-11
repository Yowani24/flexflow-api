-- AlterTable
ALTER TABLE "Activity" ADD COLUMN     "userEmail" TEXT;

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "userCreated" TEXT,
ADD COLUMN     "userCreatedEmail" TEXT;
