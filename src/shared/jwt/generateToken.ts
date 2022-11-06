import { IUser } from './../../database/repositories/users/IUser';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
config();

export function generateToken(payload: Omit<IUser, 'password'>) {
  const jwtKey = process.env.JWT_SECRET as jwt.Secret;

  const token = jwt.sign(payload, jwtKey);
  return token;
}
