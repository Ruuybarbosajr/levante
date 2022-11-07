import fetch from './fetch';

export async function getAllBooks(filter) {
  const baseUrl = filter ? '/books/all?' : '/books/all';
  try {
    const response = await fetch.get(`${baseUrl}${filter}`, {
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
