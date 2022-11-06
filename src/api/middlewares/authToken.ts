import { NextFunction, Request, Response } from 'express';
import { AppError } from '../../shared/handleError';
import decodeToken from '../../shared/jwt/decodeToken';

export default (req: Request, _res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) return next(new AppError('You do not have authorization', 401));

  const decoded = decodeToken(authorization);

  if (decoded.error) return next(new AppError('You do not have authorization', 401));
  next();
};
