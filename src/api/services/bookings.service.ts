import { AppError } from './../../shared/handleError/index';
import { IBook } from './../../database/repositories/books/IBook';
import { IUser } from './../../database/repositories/users/IUser';
import { IBooking } from './../../database/repositories/bookings/IBooking';

import usersService from './users.service';
import bookingsRepository from '@src/database/repositories/bookings/bookings.repository';
import booksService from './books.service';

async function verifyUserAndBook(
  booking: Omit<IBooking, 'id'>
): Promise<[Promise<IUser>, Promise<IBook>]> {
  return [usersService.readOne(booking.user.id), booksService.readOne(booking.book.id)];
}

export default {
  async create(booking: IBooking) {
    await Promise.all(await verifyUserAndBook(booking));
    return bookingsRepository.create(booking);
  },

  async readOne(id: string) {
    const findServiceProvided = await bookingsRepository.readOne(id);
    if (!findServiceProvided) throw new AppError('Booking not found', 404);
    return findServiceProvided;
  },

  async readAll(user: Omit<IUser, 'password'>) {
    if (user.permission) return bookingsRepository.readAll({});
    return bookingsRepository.readAll({ id: user.id });
  },

  async update(id: string) {
    await this.readOne(id);
    return bookingsRepository.update(id);
  },
};
