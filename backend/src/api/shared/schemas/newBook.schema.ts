import joi from 'joi';

const schema = joi.object({
  title: joi.string().required(),
  author: joi.string().required(),
  categoryId: joi.string().required(),
});

export default schema;
