import Joi from "joi";

import validation from "./validation";

const paymentValidation = Joi.object({
  cardNumber: Joi.number().min(14).max(16).required(),
  expiry: Joi.number().min(4).max(4).required(),
  cvc: Joi.number().min(3).max(3).required(),
  name: Joi.string().min(2).max(16).required(),
});

const validationPayment = (userInput) =>
  validation(paymentValidation, userInput);

export default validationPayment;
