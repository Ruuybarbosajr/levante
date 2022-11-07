import React from 'react';


export function RowBookings({ booking }) {
  return (
    <>
      <tr>
        <td>{booking.book.title}</td>
        <td>{booking.createdAt.split('T')[0]}</td>
        <td>{booking.returnDate.split('T')[0]}</td>
        <td>{booking.status}</td>
      </tr>
    </>
  );
}