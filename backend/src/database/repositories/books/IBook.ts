import { ICategory } from './../categories/ICategory';

export interface IBook {
  id: string;
  title: string;
  author: string;
  category: ICategory;
  categoryId: string;
}
