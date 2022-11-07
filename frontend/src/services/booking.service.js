import fetch from './fetch';

export async function createBooking(data) {
  try {
    const response = await fetch.post('/bookings/create', data, {
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
