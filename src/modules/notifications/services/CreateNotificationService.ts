import prisma  from "../../../database/prisma";
import { NotificationProducer } from "../producers/NotificationProducer";

interface CreateNotificationDTO {
  type: "EMAIL" | "SMS" | "PUSH";
  recipient: string;
  message: string;
}

export class CreateNotificationService {
  async execute(data: CreateNotificationDTO) {
    const notification = await prisma.notification.create({
      data: {
        type: data.type,
        recipient: data.recipient,
        message: data.message,
        status: "PENDING",
      },
    });

    await NotificationProducer.send({
      notificationId: notification.id,
    });

    return notification;
  }
}
