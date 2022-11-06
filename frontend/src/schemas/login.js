import * as yup from 'yup';

const schemaEmail = yup.string().email().required();
const schemaPassword = yup.string().min(6).required();

export async function schemaLogin(objVerify) {
  return {
    email: await schemaEmail.isValid(objVerify.email),
    password: await schemaPassword.isValid(objVerify.password),
  };
}
