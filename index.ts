import { PrismaClient } from "@prisma/client";
import { oneHundredRows } from "./mockedData";

const prisma = new PrismaClient({
  // log: ["query"],
});

async function main() {
  console.info("Inserting mocked data...");
  console.time(`inserted mocked data`);

  await prisma.$transaction(
    async (tx) => {
      await tx.transactionDemo.createMany({
        data: oneHundredRows,
        skipDuplicates: true,
      });
    },
    {
      // FIXME: pending Prisma's help to debug why it's taking so long.
      timeout: 1000 * 60 * 10, // 10 minutes
    }
  );
  console.timeEnd(`inserted mocked data`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
    process.exit(0);
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
