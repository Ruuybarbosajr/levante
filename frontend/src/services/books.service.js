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

export async function createBook(data) {
  try {
    const response = await fetch.post('/books/create', data, {
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

export async function updateBook(data) {
  try {
    const response = await fetch.put('/books/update', data, {
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

export async function deleteBook(id) {
  try {
    const response = await fetch.delete(`/books/delete/${id}`, {
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
