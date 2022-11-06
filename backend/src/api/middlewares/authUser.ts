import { IUser } from '../../database/repositories/users/IUser';
import { IRequestWithUser } from '../shared/types/IResponseWithUser';
import { NextFunction, Response } from 'express';
import { AppError } from '../shared/handleError';

export default (req: IRequestWithUser, _res: Response, next: NextFunction) => {
  const { permission } = req.user as Omit<IUser, 'password'>;
  if (permission) return next();
  next(new AppError('You do not have authorization', 401));
};
