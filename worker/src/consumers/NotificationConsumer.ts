import { getRabbitMQChannel } from "../rabbitmq/connection";
import { QUEUES } from "../rabbitmq/queues";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function startNotificationConsumer() {
  const channel = await getRabbitMQChannel();

  await channel.assertQueue(QUEUES.NOTIFICATIONS, {
    durable: true,
  });

  console.log("👂 Worker escutando fila:", QUEUES.NOTIFICATIONS);

  channel.consume(QUEUES.NOTIFICATIONS, async (msg: any) => {
    if (!msg) return;

    try {
      const data = JSON.parse(msg.content.toString());
      const { notificationId } = data;

      console.log("📥 Mensagem recebida:", data);

      const notification = await prisma.notification.findUnique({
        where: { id: notificationId },
      });

      if (!notification) {
        console.log("⚠️ Notificação não encontrada");
        channel.ack(msg);
        return;
      }

      // Simula envio (email, sms, push etc)
      console.log(
        `📨 Processando notificação ${notification.type} para ${notification.recipient}`
      );

      await new Promise((resolve) => setTimeout(resolve, 1000));

      await prisma.notification.update({
        where: { id: notification.id },
        data: { status: "SENT" },
      });

      console.log("✅ Notificação enviada com sucesso");

      channel.ack(msg);
    } catch (error) {
      console.error("❌ Erro ao processar notificação", error);
      channel.nack(msg, false, false); // sem retry ainda
    }
  });
}
