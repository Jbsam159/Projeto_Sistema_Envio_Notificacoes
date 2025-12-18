import { startNotificationConsumer } from "./consumers/NotificationConsumer";

async function startWorker() {
  await startNotificationConsumer();
}

startWorker();
