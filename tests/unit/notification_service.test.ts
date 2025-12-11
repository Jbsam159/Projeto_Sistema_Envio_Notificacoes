import service from "../../src/modules/notifications/notification_service"
import repository from "../../src/modules/notifications/notification_repository"

describe("Notification Service", () => {

  it("Deve Criar uma Notificação", async () =>{

    const data = {
      email: "teste@gmail.com",
      message: "Olá!"
    };

    const result = await service.create(data);

    expect(result).toHaveProperty("id");
    expect(result.email).toBe("teste@gmail.com");

  })

})