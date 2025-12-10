import { Request, Response } from "express";
import service from "./notification_service"

export default {
  async create(req: Request, res: Response){

    const result = await service.create(req.body)
    return res.status(201).json(result)

  },

  async findAll(req: Request, res: Response){

    const result = await service.findAll()
    return res.status(200).json(result)

  }

}