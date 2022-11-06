import { TLogin } from '../shared/types/TLogin';
import { NextFunction, Request, Response } from 'express';
import schemas from '../shared/schemas';
import { AppError } from '../shared/handleError';
import { bodyAuthentication } from '../shared/bodyAuthentication';

export default (req: Request, _res: Response, next: NextFunction) => {
  const { email, password } = req.body as TLogin;

  const isInvalidBody = bodyAuthentication<TLogin>(schemas.login, { email, password });
  if (isInvalidBody) return next(new AppError('Invalid fields'));

  next();
};
