import React, { useState } from 'react';
import { getAllBookings } from '../../services/booking.service';
import BookingsContext from './BookingsContext';

export function BookingsProvider({ children }) {
  const [bookings, setBookings] = useState([]);

  async function updateList(url) {
    const updateList = await getAllBookings(url);
    setBookings(updateList);
  }

  return (
    <BookingsContext.Provider value={{ bookings, setBookings, updateList }}>
      {children}
    </BookingsContext.Provider>
  );
}
