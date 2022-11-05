import { IBook } from './../../database/repositories/books/IBook';
import bookRepository from '../../database/repositories/books/books.repositpory';
import { AppError } from '../../shared/handleError';

export default {
  async create(book: Omit<IBook, 'id'>): Promise<void> {
    await bookRepository.create(book);
  },

  async readOne(id: string): Promise<IBook | null> {
    const findBook = await bookRepository.readOne(id);
    if (findBook) return findBook;
    throw new AppError('Book not found', 404);
  },

  async readAll() {
    return bookRepository.readAll();
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
