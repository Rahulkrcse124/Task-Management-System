import express from "express";
import { requestOtp, verifyOtp } from "./auth.controller.js";
import { validate } from "../../middlewares/validation.middleware.js";
import { emailSchema, otpSchema } from "./auth.validation.js";
import { authLimiter } from "../../middlewares/rateLimiter.middleware.js";

const router = express.Router();

router.post("/request-otp", authLimiter, validate(emailSchema), requestOtp);
router.post("/verify-otp", authLimiter, validate(otpSchema), verifyOtp);

export default router;
