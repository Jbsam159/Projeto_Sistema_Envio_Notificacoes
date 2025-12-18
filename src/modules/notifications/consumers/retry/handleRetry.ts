import prisma from "../../../../database/prisma"
import { ConsumeMessage } from "amqplib";

const MAX_RETRIES = 3;

export async function handleRetry(
  notificationId: string,
  channel: any,
  message: ConsumeMessage
) {
  const notification = await prisma.notification.findUnique({
    where: { id: notificationId },
  });

  if (!notification) {
    channel.ack(message);
    return;
  }

  if (notification.retries >= MAX_RETRIES) {
    await prisma.notification.update({
      where: { id: notificationId },
      data: { status: "FAILED" },
    });

    channel.ack(message);
    return;
  }

  await prisma.notification.update({
    where: { id: notificationId },
    data: {
      retries: { increment: 1 },
      status: "PENDING",
    },
  });

  channel.nack(message, false, true);
}
