import pool from "../../config/db.js";

export const createTaskDB = (userId, title, description, status) =>
  pool.query(
    "INSERT INTO tasks(user_id,title,description,status) VALUES($1,$2,$3,$4) RETURNING *",
    [userId, title, description, status],
  );

export const getTasksDB = (userId) =>
  pool.query("SELECT * FROM tasks WHERE user_id=$1", [userId]);

export const updateTaskDB = (id, userId, title, description, status) =>
  pool.query(
    "UPDATE tasks SET title=$1,description=$2,status=$3 WHERE id=$4 AND user_id=$5",
    [title, description, status, id, userId],
  );

export const deleteTaskDB = (id, userId) =>
  pool.query("DELETE FROM tasks WHERE id=$1 AND user_id=$2", [id, userId]);
