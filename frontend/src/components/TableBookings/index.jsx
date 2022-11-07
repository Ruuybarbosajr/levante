import React from 'react';
import { RowBookings } from '../RowBooking';

export function TableBookings({ bookings }) {

  return (
    <table role="grid">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Booking Date</th>
          <th scope="col">Return Date</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        { bookings.map((booking) => (<RowBookings booking={booking} key={booking.id}/> )) }
      </tbody>
    </table>
  );
}