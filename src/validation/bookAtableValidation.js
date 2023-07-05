import Joi from "joi";

import validation from "./validation";

const bookAtableValidation = Joi.object({
  name: Joi.string().min(2).max(256).required(),
  email: Joi.string()
    .min(6)
    .max(256)
    .required()
    .email({ tlds: { allow: false } }),
  phone: Joi.string()
    .regex(new RegExp(/0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/))
    .required(),

  isBusiness: Joi.boolean().required(),
  bizNumber: Joi.number().min(1000000).max(9999999).allow(""),

 /*  orderStatus: Joi.boolean().required(), */
});

const validatebookAtable = (userInput) => validation(bookAtableValidation, userInput);

export default validatebookAtable;
