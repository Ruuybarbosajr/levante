import joi from 'joi';

const schema = joi.object({
  user: joi
    .object({
      id: joi.string().required(),
      email: joi.string().email().required(),
      name: joi.string().required(),
      permission: joi.boolean(),
      iat: joi.number(),
    })
    .required(),
  book: joi
    .object({
      id: joi.string().required(),
      author: joi.string().required(),
      title: joi.string().required(),
      category: joi
        .object({
          id: joi.string().required(),
          type: joi.string().required(),
        })
        .required(),
      createdAt: joi.date(),
      updatedAt: joi.date(),
    })
    .required(),
  createdAt: joi.date().required(),
  returnDate: joi.date().required(),
});

export default schema;
