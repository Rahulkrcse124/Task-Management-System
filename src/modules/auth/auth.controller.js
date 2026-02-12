import { pool } from "../../config/db.js";
import { createOtp } from "./auth.service.js";
import { compareHash } from "../../utils/hash.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../../utils/token.js";
import { sendEmail } from "../../utils/sendEmail.js";
import { logActivity } from "../activity/activity.service.js";

export const requestOtp = async (req, res) => {
  const { email } = req.body;
  const otp = await createOtp(email);
  await sendEmail(email, otp);
  await logActivity(null, "OTP_REQUEST", req);
  res.json({ message: "OTP sent successfully" });
};

export const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  const { rows } = await pool.query(
    "SELECT * FROM otps WHERE email=$1 ORDER BY created_at DESC LIMIT 1",
    [email],
  );

  if (!rows.length) return res.status(400).json({ message: "Invalid OTP" });

  const valid = await compareHash(otp, rows[0].otp_hash);
  if (!valid || new Date(rows[0].expires_at) < new Date())
    return res.status(400).json({ message: "Invalid or expired OTP" });

  let user = await pool.query("SELECT * FROM users WHERE email=$1", [email]);

  if (!user.rows.length) {
    user = await pool.query("INSERT INTO users(email) VALUES($1) RETURNING *", [
      email,
    ]);
  }

  const accessToken = generateAccessToken(user.rows[0].id);
  const refreshToken = generateRefreshToken(user.rows[0].id);

  await pool.query("UPDATE users SET refresh_token=$1 WHERE id=$2", [
    refreshToken,
    user.rows[0].id,
  ]);

  await logActivity(user.rows[0].id, "LOGIN_SUCCESS", req);

  res.json({ accessToken, refreshToken });
};
