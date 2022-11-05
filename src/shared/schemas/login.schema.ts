import joi from 'joi';

const schema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required().min(6),
});

export default schema;
