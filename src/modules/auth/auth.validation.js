import Joi from "joi";

export const emailSchema = Joi.object({
  email: Joi.string().email().required(),
});

export const otpSchema = Joi.object({
  email: Joi.string().email().required(),
  otp: Joi.string().length(6).required(),
});
