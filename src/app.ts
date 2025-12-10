// Importando bibliotecas Importantes
import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import healthRoutes from "./routes/health_routes"

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// rota placeholder
app.use("/health", healthRoutes)

export default app;