import { getRabbitMQChannel } from "./rabbitmq/connection";

async function startWorker() {
  await getRabbitMQChannel();
}

startWorker();
