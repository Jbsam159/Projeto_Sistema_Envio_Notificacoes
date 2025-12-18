import { getRabbitMQChannel } from "../../../shared/infra/rabbitmq/connection";
import { NOTIFICATION_QUEUE } from "../queue";

interface NotificationEvent {
  notificationId: string;
}

export class NotificationProducer {
  static async send(event: NotificationEvent) {
    const channel = await getRabbitMQChannel();

    await channel.assertQueue(NOTIFICATION_QUEUE, { durable: true });

    channel.sendToQueue(
      NOTIFICATION_QUEUE,
      Buffer.from(JSON.stringify(event)),
      { persistent: true }
    );
  }
}

