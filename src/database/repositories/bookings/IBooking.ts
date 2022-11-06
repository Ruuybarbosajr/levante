import { IBook } from './../books/IBook';
import { IUser } from '../users/IUser';

export interface IBooking {
  id: string;
  user: Omit<IUser, 'password'>;
  book: IBook;
  createdAt: Date;
  returnDate: Date;
  status: string;
}
