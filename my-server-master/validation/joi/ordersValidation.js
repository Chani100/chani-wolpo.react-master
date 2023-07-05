const Joi = require("joi");

const ordersSchema = Joi.object({
  name: Joi.string().min(2).max(256).required(),

  phone: Joi.string()
    .regex(new RegExp(/0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/))
    .required(),
  email: Joi.string()
    .min(6)
    .max(256)
    .required()
    .email({ tlds: { allow: false } }),
  city: Joi.string().min(2).max(256).required(),
  street: Joi.string().min(2).max(256).required(),
  houseNumber: Joi.number().min(1).required(),

  takeAway: Joi.boolean().required(),
  /* isBusiness: Joi.boolean().required(), */
  bizNumber: Joi.number().min(1000000).max(9999999).allow(""),
  /*  orderStatus: Joi.boolean() */
  user_id: Joi.string().hex().length(24),
});

const validateOrdersSchema = (userInput) =>
  ordersSchema.validateAsync(userInput);

module.exports = {
  validateOrdersSchema,
};
