import { AppError } from './../../shared/handleError/index';
import { IBooking } from './../../database/repositories/bookings/IBooking';
import { NextFunction, Request, Response } from 'express';
import schemas from '../../shared/schemas';
import { bodyAuthentication } from '../../shared/bodyAuthentication';

export default (req: Request, _res: Response, next: NextFunction) => {
  const { book, createdAt, returnDate, user } = req.body as IBooking;

  const isInvalidBody = bodyAuthentication<Omit<IBooking, 'id' | 'status'>>(
    schemas.newBooking,
    {
      book,
      createdAt,
      returnDate,
      user,
    }
  );

  if (isInvalidBody) return next(new AppError('Invalid fields'));
  next();
};
