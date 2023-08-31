import Joi from "joi";

const recommendationschema = Joi.object({
  recommendations: Joi.string().max(1024).allow(""),
});
const validaterecommendationschema = (userInput) => {
  return recommendationschema.validateAsync(userInput);
};

export default validaterecommendationschema;
