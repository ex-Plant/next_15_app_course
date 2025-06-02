import { PrismaClient, Prisma } from "../src/generated/prisma";

const prisma = new PrismaClient();

const users: Prisma.UsersCreateInput[] = [
  { name: "Konrad", nickname: "Człowiek Bakłażan" },
  { name: "James", nickname: "James" },
  { name: "John", nickname: "John" },
  { name: "Marla", nickname: "Marla" },
  { name: "Marcin", nickname: "Teski" },
  { name: "Szymon", nickname: "Szymon" },
  { name: "Vlad", nickname: "Vlad" },
];

async function main() {
  console.log("start seeding");
  const res = await prisma.users.createMany({
    data: users,
    skipDuplicates: true, // in case you run seed multiple times
  });
  console.log(res, `seeding finished 😎`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
