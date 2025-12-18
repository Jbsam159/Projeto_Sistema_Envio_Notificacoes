import amqp from "amqplib"

let connection: any;
let channel: any

export async function getRabbitMQChannel(){

  if(channel) return channel;

  console.log("🔌 Conectando ao RabbitMQ...");

  connection = await amqp.connect("amqp://rabbitmq:5672");

  console.log("✅ Conectado ao RabbitMQ");


  channel = await connection.createChannel()

  console.log("📡 Channel criado");

  return channel

}