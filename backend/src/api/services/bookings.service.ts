import { TQueryParamsBooking } from '../shared/types/TQueryParamsBooking';
import { AppError } from '../shared/handleError/index';
import { IBook } from './../../database/repositories/books/IBook';
import { IUser } from './../../database/repositories/users/IUser';
import { IBooking } from './../../database/repositories/bookings/IBooking';

import usersService from './users.service';
import bookingsRepository from '../../database/repositories/bookings/bookings.repository';
import booksService from './books.service';
import { handlePeriod } from '../shared/handlePeriod';

async function verifyUserAndBook(
  booking: Omit<IBooking, 'id'>
): Promise<[Promise<IUser>, Promise<IBook>]> {
  console.log(booking);
  return [usersService.readOne(booking.user.id), booksService.readOne(booking.book.id)];
}

export default {
  async create(newBooking: Omit<IBooking, 'id'>) {
    await Promise.all(await verifyUserAndBook(newBooking));
    const booking = {
      userId: newBooking.user.id,
      bookId: newBooking.book.id,
      createdAt: newBooking.createdAt,
      returnDate: newBooking.returnDate,
    };
    return bookingsRepository.create(booking);
  },

  async readOne(id: string) {
    const findServiceProvided = await bookingsRepository.readOne(id);
    if (!findServiceProvided) throw new AppError('Booking not found', 404);
    return findServiceProvided;
  },

  async readAll(
    user: Omit<IUser, 'password'>,
    { createdAt, returnDate, status, bookId }: TQueryParamsBooking
  ) {
    const periodCreatedAt = handlePeriod(createdAt);
    const periodReturnDate = handlePeriod(returnDate);

    const AND = [
      {
        createdAt: {
          lt: periodCreatedAt.lt,
          gt: periodCreatedAt.gt,
        },
      },
      {
        returnDate: {
          lt: periodReturnDate.lt,
          gt: periodReturnDate.gt,
        },
      },
      { status: { equals: status } },
      { bookId: { equals: bookId } },
    ];

    if (user.permission)
      return bookingsRepository.readAll({
        AND,
      });
    return bookingsRepository.readAll({
      AND: [...AND, { userId: user.id }],
    });
  },

  async update(id: string) {
    await this.readOne(id);
    return bookingsRepository.update(id);
  },
};
