import { TQueryParams } from './../../shared/types/TQueryParams';
import { IBook } from './../../database/repositories/books/IBook';
import bookRepository from '../../database/repositories/books/books.repositpory';
import { AppError } from '../../shared/handleError';

export default {
  async create(book: Omit<IBook, 'id'>): Promise<IBook> {
    return bookRepository.create(book);
  },

  async readOne(id: string): Promise<IBook> {
    const findBook = await bookRepository.readOne(id);
    if (findBook) return findBook;
    throw new AppError('Book not found', 404);
  },

  async readAll({ title, categoryId, author }: TQueryParams) {
    return bookRepository.readAll({
      AND: [
        { title: { contains: title } },
        { categoryId: { contains: categoryId } },
        { author: { contains: author } },
      ],
    });
  },

  async update(book: IBook) {
    await this.readOne(book.id);
    return bookRepository.update(book);
  },

  async destroy(id: string) {
    await this.readOne(id);
    await bookRepository.destroy(id);
  },
};
