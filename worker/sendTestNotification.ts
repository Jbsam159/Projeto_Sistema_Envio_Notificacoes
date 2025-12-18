import { getRabbitMQChannel } from "./src/rabbitmq/connection";
import { QUEUES } from "./src/rabbitmq/queues";

async function sendTestNotification(notificationId: number) {
  try {
    const channel = await getRabbitMQChannel();

    await channel.assertQueue(QUEUES.NOTIFICATIONS, { durable: true });

    channel.sendToQueue(
      QUEUES.NOTIFICATIONS,
      Buffer.from(JSON.stringify({ notificationId }))
    );

    console.log("✅ Mensagem enviada para a fila:", notificationId);

    // Fecha a conexão depois de 500ms para garantir envio
    setTimeout(() => {
      channel.close();
      process.exit(0);
    }, 500);
  } catch (error) {
    console.error("❌ Erro ao enviar mensagem:", error);
    process.exit(1);
  }
}

// Exemplo de envio
sendTestNotification(1);
