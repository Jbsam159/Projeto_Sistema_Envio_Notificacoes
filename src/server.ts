import app from "./app";
import { startNotificationConsumer } from "./modules/notifications/consumers/NotificationConsumer";
import { NotificationProducer } from "./modules/notifications/producers/NotificationProducer";
const PORT = process.env.PORT || 3000;

startNotificationConsumer()

setTimeout(async () => {

  console.log("✉️ Enviando mensagem de teste...");

  await NotificationProducer.send({
    userId: "123",
    type: "EMAIL",
    content: "Teste de mensageria",
  });

  console.log("✅ Mensagem enviada");

}, 5000);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
