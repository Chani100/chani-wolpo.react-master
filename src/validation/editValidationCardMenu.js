import Joi from "joi";

import validation from "./validation";

const editCardSchema = Joi.object({
  title: Joi.string().min(2).max(256).required(),
  description: Joi.string().min(2).max(1024).required(),
  imageUrl: Joi.string().min(6).max(1024).required(),

  imageAlt: Joi.string().min(2).max(256).required(),
  price: Joi.number().min(1).required(),
  category: Joi.string().min(2).max(256).required(),
  bizNumber: Joi.number().min(1000000).max(9999999).allow(""),
  user_id: Joi.string().hex().length(24),
});
const editCardParamsSchema = Joi.object({
  id: Joi.string().min(1).required(),
});

const validateEditSchema = (userInput) => validation(editCardSchema, userInput);

const validateEditCardParamsSchema = (userInput) =>
  validation(editCardParamsSchema, userInput);

export { validateEditCardParamsSchema };

export default validateEditSchema;
