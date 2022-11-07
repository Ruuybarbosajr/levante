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

export async function getAllBookings(filter) {
  const baseUrl = filter ? '/bookings/all?' : '/bookings/all';
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

export async function updatedBooking(id) {
  try {
    const response = await fetch.patch(
      `bookings/update/${id}`,
      {},
      {
        headers: {
          authorization: localStorage.getItem('token'),
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      const { data } = error.response;
      return data;
    }
    return error;
  }
}
