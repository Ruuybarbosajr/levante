import { IUser } from '../../database/repositories/users/IUser';
import { Request, Response } from 'express';
import services from '../services';

export default {
  async create(req: Request, res: Response) {
    const { name, email, password, permission } = req.body as Omit<IUser, 'id'>;
    const user = await services.users.create({ name, email, password, permission });
    return res.status(201).json(user);
  },

  async readOne(req: Request, res: Response) {
    const { id } = req.params;
    const user = await services.users.readOne(id);
    return res.status(200).json(user);
  },

  async readAll(_req: Request, res: Response) {
    const users = await services.users.readAll();
    return res.status(200).json(users);
  },
};
