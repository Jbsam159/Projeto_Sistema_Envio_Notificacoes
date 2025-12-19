import amqp from "amqplib";

let connection: any;
let channel: any;

const RABBITMQ_URL = "amqp://rabbitmq:5672";
const MAX_RETRIES = 10;
const RETRY_DELAY = 3000;

export async function getRabbitMQChannel() {
  if (channel) return channel;

  let attempt = 0;

  while (attempt < MAX_RETRIES) {
    try {
      attempt++;
      console.log(`🔌 Worker conectando ao RabbitMQ (tentativa ${attempt})...`);

      connection = await amqp.connect(RABBITMQ_URL);
      channel = await connection.createChannel();

      console.log("✅ Worker conectado ao RabbitMQ");
      console.log("📡 Channel criado no Worker");

      return channel;
    } catch (error) {

      const err = error instanceof Error ? error.message : String(error);
      console.error("❌ Erro ao conectar no RabbitMQ:", err);
      await new Promise((res) => setTimeout(res, RETRY_DELAY));
    }
  }

  throw new Error("❌ Worker não conseguiu conectar ao RabbitMQ");
}
