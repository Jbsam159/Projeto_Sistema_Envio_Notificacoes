import amqp from "amqplib";

let connection: any;
let channel: any;

export async function getRabbitMQChannel() {
  if (channel) return channel;

  console.log("🔌 Worker conectando ao RabbitMQ...");

  connection = await amqp.connect("amqp://rabbitmq:5672");

  console.log("✅ Worker conectado ao RabbitMQ");

  channel = await connection.createChannel();

  console.log("📡 Channel criado no Worker");

  return channel;
}
