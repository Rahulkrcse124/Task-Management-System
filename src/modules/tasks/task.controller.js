import {
  createTaskDB,
  getTasksDB,
  updateTaskDB,
  deleteTaskDB,
} from "./task.service.js";
import { logActivity } from "../activity/activity.service.js";

export const createTask = async (req, res) => {
  const { title, description, status } = req.body;
  const { rows } = await createTaskDB(
    req.user.id,
    title,
    description,
    status || "pending",
  );
  await logActivity(req.user.id, "TASK_CREATED", req);
  res.status(201).json(rows[0]);
};

export const getTasks = async (req, res) => {
  const { rows } = await getTasksDB(req.user.id);
  res.json(rows);
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  const { rowCount } = await updateTaskDB(
    id,
    req.user.id,
    title,
    description,
    status,
  );
  if (!rowCount) return res.status(404).json({ message: "Task not found" });

  await logActivity(req.user.id, "TASK_UPDATED", req);
  res.json({ message: "Updated successfully" });
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  await deleteTaskDB(id, req.user.id);
  await logActivity(req.user.id, "TASK_DELETED", req);
  res.json({ message: "Deleted successfully" });
};
