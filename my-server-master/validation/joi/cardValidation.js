/* const Joi = require("joi");

const createCardSchema = Joi.object({
  title: Joi.string().min(2).max(256).required(),

  description: Joi.string().min(2).max(1024).required(),

  image: Joi.object().keys({
    url: Joi.string()
      .regex(
        new RegExp(
          /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
        )
      )
      .required(),
    alt: Joi.string().min(2).max(256).required(),
  }),
  price: Joi.number().min(1).required(),
  bizNumber: Joi.number().min(1000000).max(9999999).allow(""),

  user_id: Joi.string().hex().length(24),
});

const validateCardSchema = (userInput) => {
  return createCardSchema.validateAsync(userInput);
};
module.exports = { validateCardSchema }; */
const Joi = require("joi");

const createCardSchema = Joi.object({
  title: Joi.string().min(2).max(256),
  description: Joi.string().min(2).max(1024),
  // image: Joi.object().keys({
  //   url: Joi.string()
  //     .regex(
  //       new RegExp(
  //         /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
  //       )
  //     )
  //     .required(),
  //   alt: Joi.string().min(2).max(256).required(),
  // }),
  imageUrl: Joi.string().min(6).max(1024).allow(""),
  imageAlt: Joi.string().min(6).max(256).allow(""),
  price: Joi.number().min(1),
  bizNumber: Joi.number().min(1000000).max(9999999).allow(""),
  user_id: Joi.string().hex().length(24),
});

const validateCardSchema = (userInput) => {
  return createCardSchema.validateAsync(userInput);
};

module.exports = {
  validateCardSchema,
};