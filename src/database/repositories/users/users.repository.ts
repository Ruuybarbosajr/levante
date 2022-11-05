import { IUser } from './IUser';
import { prisma } from '../../client';

export default {
  async readOne(email: string): Promise<IUser | null> {
    return prisma.user.findFirst({ where: { email } });
  },

  async create(user: Omit<IUser, 'Id'>): Promise<IUser> {
    return prisma.user.create({
      data: { ...user },
    });
  },

  async readAll(): Promise<IUser[]> {
    return prisma.user.findMany();
  },
};
