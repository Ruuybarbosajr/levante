import React, { useContext, useState } from 'react';
import UserContext from '../../contexts/User/UserContext';
import { updatedBooking } from '../../services/booking.service';

export function RowBookings({ propBooking }) {
  const { user } = useContext(UserContext);
  const [booking, setBooking] = useState(propBooking);

  async function handleEditBooking(id) {
    const response = await updatedBooking(id);
    setBooking(response);
  }

  return (
    <>
      <tr>
        {user.permission && <td>{booking?.user.name}</td>}
        <td>{booking?.book.title}</td>
        <td>{booking?.createdAt.split('T')[0]}</td>
        <td>{booking?.returnDate.split('T')[0]}</td>
        <td>{booking?.status}</td>
        {user.permission && (
          <td>
            <a
              disabled={ booking?.status === 'Fechada'}
              onClick={ () => handleEditBooking(booking?.id) }
              href="#"
              role="button"
            >
              { booking?.status === 'Fechada' ? 'Closed' : 'Close'}
            </a>
          </td>
        )}
      </tr>
    </>
  );
}