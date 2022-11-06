import joi from 'joi';

const schema = joi.object({
  name: joi.string().required(),
  email: joi.string().required().email(),
  password: joi.string().required(),
  permission: joi.boolean().required(),
});

export default schema;
