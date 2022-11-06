import { IBook } from './IBook';

import { prisma } from '../../client';
import { Prisma } from '@prisma/client';

export default {
  async readOne(id: string): Promise<IBook | null> {
    return prisma.book.findUnique({ where: { id } });
  },

  async create(book: Omit<IBook, 'id'>): Promise<IBook> {
    return prisma.book.create({
      data: { ...book },
    });
  },

  async readAll(config: Prisma.BookWhereInput): Promise<IBook[]> {
    return prisma.book.findMany({ where: { ...config } });
  },

  async update(book: IBook): Promise<IBook> {
    return prisma.book.update({
      data: { ...book },
      where: { id: book.id },
    });
  },

  async destroy(id: string): Promise<void> {
    await prisma.book.delete({
      where: {
        id,
      },
    });
  },
};
