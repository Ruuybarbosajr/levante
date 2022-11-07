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
    const { data } = error.response;
    return data;
  }
}
