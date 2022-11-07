import { IBook } from './IBook';

import { prisma } from '../../client';
import { Book, Prisma } from '@prisma/client';

const SELECT_QUERY = {
  id: true,
  author: true,
  title: true,
  category: true,
  createdAt: true,
  updatedAt: true,
};

export default {
  async readOne(id: string): Promise<Omit<IBook, 'categoryId'> | null> {
    return prisma.book.findUnique({
      where: { id },
      select: { ...SELECT_QUERY },
    });
  },

  async create(book: Omit<IBook, 'category' | 'id'>): Promise<Omit<IBook, 'categoryId'>> {
    return prisma.book.create({
      data: { ...book },
      select: { ...SELECT_QUERY },
    });
  },

  async readAll(config: Prisma.BookWhereInput): Promise<Omit<IBook, 'categoryId'>[]> {
    return prisma.book.findMany({ where: { ...config }, select: { ...SELECT_QUERY } });
  },

  async update(book: Omit<IBook, 'category'>): Promise<Omit<IBook, 'categoryId'>> {
    return prisma.book.update({
      where: {
        id: book.id,
      },
      data: { ...book },
      select: { ...SELECT_QUERY },
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
