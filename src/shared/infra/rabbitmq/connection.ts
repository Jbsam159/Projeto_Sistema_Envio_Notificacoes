import amqp from "amqplib";

let connection: any;
let channel: any;

const RABBITMQ_URL = "amqp://rabbitmq:5672";

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function getRabbitMQChannel(
  retries = 10,
  delay = 3000
) {
  if (channel) return channel;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`🔌 Tentando conectar ao RabbitMQ (tentativa ${attempt})...`);

      connection = await amqp.connect(RABBITMQ_URL);

      console.log("✅ Conectado ao RabbitMQ");

      channel = await connection.createChannel();

      console.log("📡 Channel criado");

      return channel;
    } catch (error) {
      console.error("❌ Falha ao conectar no RabbitMQ");

      if (attempt === retries) {
        throw error;
      }

      await sleep(delay);
    }
  }
}
