import { prisma } from './../../client';
import { ICategory } from './ICategory';

export default {
  async readAll(): Promise<ICategory[]> {
    return prisma.category.findMany();
  },
};
