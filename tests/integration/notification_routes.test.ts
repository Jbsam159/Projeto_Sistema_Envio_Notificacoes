import request from "supertest"
import app from "../../src/app"
import { response } from "express"

describe("Notifications API", () =>{

  it("Deve Criar uma Notificação Via Post /notifications", async() =>{

    const response = await request(app)
      .post("/notifications")
      .send({
        email: "api@gmail.com",
        message: "Teste API"
      })

      expect(response.status).toBe(201)
      expect(response.body).toHaveProperty("id")

  })

  it("deve listar notificações via GET /notifications", async () => {
    const response = await request(app).get("/notifications");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

})