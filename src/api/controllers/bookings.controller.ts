import { TQueryParamsBooking } from './../../shared/types/TQueryParamsBooking';
import { IUser } from './../../database/repositories/users/IUser';
import { IRequestWithUser } from './../../shared/types/IResponseWithUser';
import { IBooking } from './../../database/repositories/bookings/IBooking';
import { Request, Response } from 'express';

import services from '../services';

export default {
  async create(req: Request, res: Response) {
    const { book, createdAt, returnDate, status, user } = req.body as IBooking;

    const booking = await services.bookings.create({
      book,
      createdAt,
      returnDate,
      status,
      user,
    });

    return res.status(201).json(booking);
  },

  async readOne(req: Request, res: Response) {
    const { id } = req.params;
    const booking = await services.bookings.readOne(id);
    return res.status(200).json(booking);
  },

  async readAll(req: IRequestWithUser, res: Response) {
    const { createdAt, returnDate, status, bookId } = req.query as TQueryParamsBooking;
    const bookings = await services.bookings.readAll(
      req.user as Omit<IUser, 'password'>,
      { createdAt, returnDate, status, bookId }
    );
    return res.status(200).json(bookings);
  },

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const updatedBooking = await services.bookings.update(id);
    return res.status(200).json(updatedBooking);
  },
};
