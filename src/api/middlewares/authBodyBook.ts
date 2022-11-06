import { IBook } from './../../database/repositories/books/IBook';
import { NextFunction, Request, Response } from 'express';
import { AppError } from '../../shared/handleError';
import { bodyAuthentication } from '../../shared/bodyAuthentication';
import schemas from '../../shared/schemas';

export default (req: Request, _res: Response, next: NextFunction) => {
  const { author, categoryId, title } = req.body as Omit<IBook, 'id'>;
  const isInvalidBody = bodyAuthentication<Omit<IBook, 'id'>>(schemas.newBook, {
    author,
    categoryId,
    title,
  });

  if (isInvalidBody) return next(new AppError('Invalid fields'));
  next();
};
