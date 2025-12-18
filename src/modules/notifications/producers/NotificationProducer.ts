import { getRabbitMQChannel } from "../../../shared/infra/rabbitmq/connection";
import { NOTIFICATION_QUEUE } from "../queue";

interface NotificationMessage {
  userId: string;
  type: "EMAIL" | "SMS" | "PUSH";
  content: string;
}

export class NotificationProducer {
  static async send(message: NotificationMessage) {
    const channel = await getRabbitMQChannel();

    await channel.assertQueue(NOTIFICATION_QUEUE, {
      durable: true,
    });

    channel.sendToQueue(
      NOTIFICATION_QUEUE,
      Buffer.from(JSON.stringify(message)),
      { persistent: true }
    );
  }
}
