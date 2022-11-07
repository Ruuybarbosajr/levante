import React from 'react';

export function FilterBookings({ output }) {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <hgroup>
        <h1>Bookings</h1>
        <h2>Find your bookings</h2>
      </hgroup>
      <label htmlFor="title">
         Title
        <input
          onChange={ ({ target }) => output((prev) => ({ ...prev, title: target.value }))}
          type="text"
          id="title" 
          name="title" 
          placeholder="Enter book title" />
      </label>
      <div className="grid">
        <label htmlFor="status">
            Status
          <select
            id="status"
            onChange={ ({ target }) => output((prev) => ({ ...prev, status: target.value }))}
          >
            <option value="" selected>Select a status…</option>
            <option value="Aberta">Open</option>
            <option value="Fechada">Close</option>
          </select>
        </label>
        <label htmlFor="booking-date">
          Booking date
          <input id="booking-date" type="date" onChange={ ({ target }) => output((prev) => ({ ...prev, createdAt: target.value }))}/>
        </label>
        <label htmlFor="return-date">
          Return date
          <input id="return-date" type="date" onChange={ ({ target }) => output((prev) => ({ ...prev, returnDate: target.value }))}/>
        </label>
      </div>
    </form>
  );
}