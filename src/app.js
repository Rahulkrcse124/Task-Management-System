import express from "express";
import helmet from "helmet";
import authRoutes from "./modules/auth/auth.routes.js";
import taskRoutes from "./modules/tasks/task.routes.js";
import swaggerSetup from "./docs/swagger.js";
import { requestLogger } from "./middlewares/requestLogger.middleware.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

app.use(helmet());
app.use(express.json());
app.use(requestLogger);

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

swaggerSetup(app);
app.use(errorHandler);

export default app;
