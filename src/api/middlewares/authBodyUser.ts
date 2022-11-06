import { IUser } from './../../database/repositories/users/IUser';
import { NextFunction, Request, Response } from 'express';
import { AppError } from '../../shared/handleError';
import { bodyAuthentication } from '../../shared/bodyAuthentication';
import schemas from '../../shared/schemas';

export default (req: Request, _res: Response, next: NextFunction) => {
  const { name, email, password, permission } = req.body as Omit<IUser, 'id'>;

  const isInvalidBody = bodyAuthentication<Omit<IUser, 'id'>>(schemas.newUser, {
    name,
    email,
    password,
    permission,
  });

  if (isInvalidBody) return next(new AppError('Invalid fields'));
  next();
};
