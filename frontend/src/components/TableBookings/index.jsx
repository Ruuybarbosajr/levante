import React, { useContext } from 'react';
import UserContext from '../../contexts/User/UserContext';
import { RowBookings } from '../RowBooking';

export function TableBookings({ bookings }) {
  const { user } = useContext(UserContext);

  return (
    <table role="grid">
      <thead>
        <tr>
          { user.permission && <th  scope="col">User</th>}
          <th scope="col">Title</th>
          <th scope="col">Booking Date</th>
          <th scope="col">Return Date</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        { bookings.map((booking) => (<RowBookings propBooking={booking} key={booking.id}/> )) }
      </tbody>
    </table>
  );
}