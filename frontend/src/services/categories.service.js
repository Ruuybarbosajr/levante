import fetch from './fetch';

export async function getAllCategories() {
  try {
    const response = await fetch.get('/categories/all', {
      headers: {
        authorization: localStorage.getItem('token'),
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      const { data } = error.response;
      return data;
    }
    return error;
  }
}
