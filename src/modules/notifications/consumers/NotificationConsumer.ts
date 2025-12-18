import { getRabbitMQChannel } from "../../../shared/infra/rabbitmq/connection";
import { NOTIFICATION_QUEUE } from "../queue";
import { ConsumeMessage } from "amqplib";
import prisma from "../../../database/prisma";
import { handleRetry} from "./retry/handleRetry"

export async function startNotificationConsumer() {
  const channel = await getRabbitMQChannel();

  await channel.assertQueue(NOTIFICATION_QUEUE, { durable: true });

  channel.consume(NOTIFICATION_QUEUE, async (message: ConsumeMessage | null) => {
    if (!message) return;

    const { notificationId } = JSON.parse(message.content.toString());

    try {
      await prisma.notification.update({
        where: { id: notificationId },
        data: { status: "PROCESSING" },
      });

      // 🔔 Simulação de envio
      console.log(`🔔 Enviando notificação ${notificationId}`);

      await prisma.notification.update({
        where: { id: notificationId },
        data: { status: "SENT" },
      });

      channel.ack(message);
    } catch (error) {
      await handleRetry(notificationId, channel, message);
    }
  });
}
