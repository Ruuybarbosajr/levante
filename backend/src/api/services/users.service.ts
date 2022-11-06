import { IUser } from '../../database/repositories/users/IUser';
import userRepository from '../../database/repositories/users/users.repository';
import { AppError } from '../../shared/handleError';

export default {
  async create(user: Omit<IUser, 'id'>) {
    const findUser = await userRepository.readOne({ email: user.email });
    if (findUser) throw new AppError('User already exists', 409);
    return userRepository.create(user);
  },

  async readOne(id: string) {
    const findUser = await userRepository.readOne({ id });
    if (!findUser) throw new AppError('User not found', 404);
    return findUser;
  },

  async readAll() {
    return userRepository.readAll();
  },
};
