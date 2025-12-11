import prisma from "../database/prisma"

export class NotificationService {

  async sendNotification(type: string, message: string, recipient: string){

    const saved = await prisma.notification.create({

      data: {
        type,
        message,
        recipient,
      },

    })

    return saved

  }

}