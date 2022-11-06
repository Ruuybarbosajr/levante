import { Request, Response } from 'express';
import services from '../services';

export default {
  async readAll(_req: Request, res: Response) {
    const categories = await services.categories.readAll();
    return res.status(200).json(categories);
  },
};
