import express from "express";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { apiLimiter } from "../../middlewares/rateLimiter.middleware.js";
import { validate } from "../../middlewares/validation.middleware.js";
import { taskSchema } from "./task.validation.js";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} from "./task.controller.js";

const router = express.Router();

router.use(authenticate);
router.use(apiLimiter);

router.post("/", validate(taskSchema), createTask);
router.get("/", getTasks);
router.put("/:id", validate(taskSchema), updateTask);
router.delete("/:id", deleteTask);

export default router;
