import categoriesRepository from '../../database/repositories/categories/categories.repository';

export default {
  async readAll() {
    return categoriesRepository.readAll();
  },
};
