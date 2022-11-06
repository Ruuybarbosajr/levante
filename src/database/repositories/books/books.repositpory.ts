import { IBook } from './IBook';

import { prisma } from '../../client';

export default {
  async readOne(id: string): Promise<IBook | null> {
    return prisma.book.findUnique({ where: { id } });
  },

  async create(book: Omit<IBook, 'id'>): Promise<IBook> {
    return prisma.book.create({
      data: { ...book },
    });
  },

  async readAll(): Promise<IBook[]> {
    return prisma.book.findMany();
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
