import { Schema } from 'joi';

export function bodyAuthentication<T>(schema: Schema, body: T) {
  return schema.validate(body).error;
}
