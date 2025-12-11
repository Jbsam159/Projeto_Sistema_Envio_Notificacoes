import prisma from "../src/database/prisma";

async function test() {
  const result = await prisma.notification.findMany();
  console.log(result);
}

test();
