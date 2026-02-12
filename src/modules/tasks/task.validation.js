import Joi from "joi";

export const taskSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().allow(""),
  status: Joi.string().valid("pending", "completed"),
});
