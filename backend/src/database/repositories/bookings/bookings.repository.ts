import { Booking, Prisma } from '@prisma/client';
import { IBooking } from './IBooking';
import { prisma } from '../../client';

const SELECT_QUERY = {
  id: true,
  user: true,
  book: true,
  createdAt: true,
  returnDate: true,
  status: true,
};

export default {
  async readAll(where: Prisma.BookingWhereInput): Promise<IBooking[]> {
    return prisma.booking.findMany({ where: { ...where }, select: { ...SELECT_QUERY } });
  },

  async create(booking: Omit<Booking, 'id' | 'status'>): Promise<IBooking> {
    return prisma.booking.create({
      data: { ...booking },
      select: { ...SELECT_QUERY },
    });
  },

  async readOne(id: string): Promise<IBooking | null> {
    return prisma.booking.findUnique({
      where: {
        id,
      },
      select: { ...SELECT_QUERY },
    });
  },

  async update(id: string): Promise<IBooking> {
    return prisma.booking.update({
      where: {
        id,
      },
      data: { status: 'Fechada', returnDate: new Date() },
      select: { ...SELECT_QUERY },
    });
  },
};
