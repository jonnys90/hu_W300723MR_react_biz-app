import Joi from "joi";

import { validateEmailLogin, validatePasswordLogin } from "./loginValidation";

const firstSchema = Joi.object({
  first: Joi.string().min(2).max(256).required(),
});

const validateFirstSchema = (first) => firstSchema.validate(first);

const validateSchema = {
  first: validateFirstSchema,
  email: validateEmailLogin,
  password: validatePasswordLogin,
};

export {
  validateEmailLogin,
  validatePasswordLogin,
  validateFirstSchema,
  validateSchema,
};
