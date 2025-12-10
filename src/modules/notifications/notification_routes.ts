import { Router } from "express";
import controller from "./notification_controller"

const router = Router()

router.post("/", controller.create)
router.get("/", controller.findAll)

export default router