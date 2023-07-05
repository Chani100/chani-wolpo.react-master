const Joi = require("joi");

const idValidat = Joi.string()
  .length(24)
  .hex()
  .required()
  .messages({ "string.length": "The id must be 24 characters long" });

 
/* messages({
      "string.empty": "the password should not be empty",
      "string.pattern.base":
        "the password should be supper protected, this mean that its should contain only upper and lower case latter's",
    }) */
const validateIdSchema = (userInput) => {
  return idValidat.validateAsync(userInput);
};

module.exports = { validateIdSchema };
