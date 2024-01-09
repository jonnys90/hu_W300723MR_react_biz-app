import Joi from "joi";

const titleSchema = Joi.object({
  title: Joi.string().min(2).max(256).required(),
});
const subTitleSchema = Joi.object({
  subTitle: Joi.string().min(2).max(256).required(),
});

const validateTitleSchema = (title) => titleSchema.validate(title);
const validateSubTitleSchema = (subTitle) => subTitleSchema.validate(subTitle);

const validateSchema = {
  title: validateTitleSchema,
  subTitle: validateSubTitleSchema,
};

export default validateSchema;
