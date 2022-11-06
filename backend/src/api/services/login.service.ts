import { TLogin } from '../shared/types/TLogin';
import userRepository from '../../database/repositories/users/users.repository';

import { AppError } from '../shared/handleError';
import { generateToken } from '../shared/jwt/generateToken';

export default {
  async execute(data: TLogin) {
    const findUser = await userRepository.readOne({ email: data.email });

    if (!findUser) throw new AppError('User not found', 404);

    const { password, name, id, email, permission } = findUser;
    if (password !== data.password) throw new AppError('Invalid fields', 400);

    return generateToken({ name, id, email, permission });
  },
};
