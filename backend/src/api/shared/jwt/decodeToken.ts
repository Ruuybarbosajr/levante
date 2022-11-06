import { IUser } from '../../../database/repositories/users/IUser';
import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { config } from 'dotenv';
config();

type TError = {
  error: boolean;
};

export default (token: string): JwtPayload | TError => {
  const secret = process.env.JWT_SECRET as Secret;
  try {
    const decoded = jwt.verify(token, secret);
    return decoded as Omit<IUser, 'id'>;
  } catch (err) {
    return {
      error: true,
    };
  }
};
