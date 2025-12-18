import { getRabbitMQChannel } from "../../../shared/infra/rabbitmq/connection";
import { NOTIFICATION_QUEUE } from "../queue";
import { ConsumeMessage } from "amqplib";

export async function startNotificationConsumer() {
  const channel = await getRabbitMQChannel();

  await channel.assertQueue(NOTIFICATION_QUEUE, {
    durable: true,
  });

  channel.consume(NOTIFICATION_QUEUE, (message: ConsumeMessage | null) => {
    if (!message) return;

    const content = JSON.parse(message.content.toString());

    console.log("📩 Mensagem recebida:", content);

    channel.ack(message);
  });
}
