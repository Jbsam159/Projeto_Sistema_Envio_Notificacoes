import app from "./app";
import { startNotificationConsumer } from "./modules/notifications/consumers/NotificationConsumer";
const PORT = process.env.PORT || 3000;
import { CreateNotificationService } from "./modules/notifications/services/CreateNotificationService";

startNotificationConsumer()

const createNotificationService = new CreateNotificationService();

setTimeout(async () => {
  const notification = await createNotificationService.execute({
    type: "EMAIL",
    recipient: "user@test.com",
    message: "Teste de mensageria Fase 6.5",
  });

  console.log("📝 Notificação criada:", notification.id);
}, 5000);



app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
