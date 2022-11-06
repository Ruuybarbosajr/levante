import { AppError } from './../../shared/handleError/index';
import { IBook } from './../../database/repositories/books/IBook';
import { IUser } from './../../database/repositories/users/IUser';
import { IBooking } from './../../database/repositories/bookings/IBooking';

import usersService from './users.service';
import bookingsRepository from '../../database/repositories/bookings/bookings.repository';
import booksService from './books.service';

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

  async readAll(user: Omit<IUser, 'password'>) {
    if (user.permission) return bookingsRepository.readAll({});
    return bookingsRepository.readAll({ userId: user.id });
  },

  async update(id: string) {
    await this.readOne(id);
    return bookingsRepository.update(id);
  },
};
