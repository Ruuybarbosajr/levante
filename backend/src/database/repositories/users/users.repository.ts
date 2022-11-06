import { IUser } from './IUser';
import { prisma } from '../../client';
import { Prisma } from '@prisma/client';

export default {
  async readOne(selector: Prisma.UserWhereInput): Promise<IUser | null> {
    return prisma.user.findFirst({ where: { ...selector } });
  },

  async create(user: Omit<IUser, 'id'>): Promise<IUser> {
    return prisma.user.create({
      data: { ...user },
    });
  },

  async readAll(): Promise<IUser[]> {
    return prisma.user.findMany({ where: { permission: false } });
  },
};
