import { IUser } from './../../database/repositories/users/IUser';
import { Request } from 'express';

export interface IRequestWithUser extends Request {
  user?: Omit<IUser, 'id'>;
}
