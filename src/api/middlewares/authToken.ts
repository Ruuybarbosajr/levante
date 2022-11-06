import { IUser } from './../../database/repositories/users/IUser';
import { IRequestWithUser } from './../../shared/types/IResponseWithUser';
import { NextFunction, Response } from 'express';
import { AppError } from '../../shared/handleError';
import decodeToken from '../../shared/jwt/decodeToken';

export default (req: IRequestWithUser, _res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) return next(new AppError('You do not have authorization', 401));

  const decoded = decodeToken(authorization);

  if (decoded.error) next(new AppError('You do not have authorization', 401));

  req.user = decoded as Omit<IUser, 'id'>;

  next();
};
