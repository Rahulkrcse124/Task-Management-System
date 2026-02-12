import db from "../../config/db.js";

/**
 * Logs activity into activity_logs table
 * @param {Object} options
 * @param {string|null} options.userId
 * @param {string} options.action
 * @param {string|null} options.ipAddress
 * @param {string|null} options.userAgent
 */
export const logActivity = async ({
  userId = null,
  action,
  ipAddress = null,
  userAgent = null,
}) => {
  try {
    await db.query(
      `
      INSERT INTO activity_logs (user_id, action, ip_address, user_agent)
      VALUES ($1, $2, $3, $4)
      `,
      [userId, action, ipAddress, userAgent],
    );
  } catch (error) {
    console.error("Activity log error:", error.message);
  }
};
