import prisma from "./database/prisma";

async function main() {
  const notifications = await prisma.notification.findMany();
  console.log(notifications);
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
