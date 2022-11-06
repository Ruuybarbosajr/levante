import joi from 'joi';

const schema = joi.object({
  user: joi
    .object({
      id: joi.string().required(),
      email: joi.string().email().required(),
      name: joi.string().required(),
    })
    .required(),
  book: joi
    .object({
      id: joi.string().required(),
      author: joi.string().required(),
      title: joi.string().required(),
    })
    .required(),
  createdAt: joi.date().required(),
  returnDate: joi.date().required(),
});

export default schema;
