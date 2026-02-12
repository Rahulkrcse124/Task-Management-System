import { pool } from "../config/db.js";

export const requestLogger = async (req, res, next) => {
  await pool.query(
    "INSERT INTO activity_logs(action, ip_address, user_agent) VALUES($1,$2,$3)",
    ["API_ACCESS", req.ip, req.headers["user-agent"]],
  );
  next();
};
