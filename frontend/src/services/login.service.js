import fetch from './fetch';

export async function signIn(data) {
  try {
    const response = await fetch.post('/login', data);
    return response.data;
  } catch (error) {
    const { data } = error.response;
    return data;
  }
}
