import pool from "../../config/db.js";
import { generateOtp } from "../../utils/generateOtp.js";
import { hashValue } from "../../utils/hash.js";

export const createOtp = async (email) => {
  const otp = generateOtp();
  const otpHash = await hashValue(otp);
  const expires = new Date(Date.now() + 5 * 60000);

  await pool.query(
    "INSERT INTO otps(email, otp_hash, expires_at) VALUES($1,$2,$3)",
    [email, otpHash, expires],
  );

  return otp;
};
