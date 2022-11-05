import { TLogin } from './../../shared/types/TLogin';
import { Request, Response } from 'express';
import service from '../services';

export default {
  async execute(req: Request, res: Response) {
    const { email, password } = req.body as TLogin;
    const token = await service.login.execute({ email, password });
    return res.status(200).json({ token });
  },
};
