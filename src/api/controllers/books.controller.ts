import { IBook } from './../../database/repositories/books/IBook';
import { Request, Response } from 'express';
import services from '../services';

export default {
  async create(req: Request, res: Response) {
    const { author, categoryId, title } = req.body as IBook;
    const book = await services.books.create({ author, categoryId, title });
    return res.status(201).json(book);
  },

  async readOne(req: Request, res: Response) {
    const { id } = req.params;
    const book = await services.books.readOne(id);
    return res.status(200).json(book);
  },

  async readAll(_req: Request, res: Response) {
    const books = await services.books.readAll();
    return res.status(200).json(books);
  },

  async update(req: Request, res: Response) {
    const { author, categoryId, id, title } = req.body as IBook;

    const updatedBook = await services.books.update({ author, categoryId, id, title });
    return res.status(200).json(updatedBook);
  },

  async destroy(req: Request, res: Response) {
    const { id } = req.params;
    await services.books.destroy(id);
    return res.status(204).end();
  },
};
