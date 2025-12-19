import { Channel, ConsumeMessage } from "amqplib";
import { QUEUES } from "../rabbitmq/queues";

const MAX_RETRIES = 3;

export function handleRetry(
  channel: Channel,
  msg: ConsumeMessage
) {
  const headers = msg.properties.headers || {};
  const retryCount = headers["x-retry-count"] || 0;

  if (retryCount >= MAX_RETRIES) {
    console.log("☠️ Enviando mensagem para DLQ");

    channel.sendToQueue(
      QUEUES.NOTIFICATIONS_DLQ,
      msg.content,
      {
        headers: { ...headers, "x-retry-count": retryCount },
      }
    );

    channel.ack(msg);
    return;
  }

  console.log(`🔁 Retry ${retryCount + 1}/${MAX_RETRIES}`);

  channel.sendToQueue(
    QUEUES.NOTIFICATIONS_RETRY,
    msg.content,
    {
      headers: {
        ...headers,
        "x-retry-count": retryCount + 1,
      },
    }
  );

  channel.ack(msg);
}
