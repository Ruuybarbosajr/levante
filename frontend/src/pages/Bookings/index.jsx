import React, { useContext, useEffect, useState } from 'react';
import { FilterBookings } from '../../components/FilterBookings';
import { Header } from '../../components/Header';
import { TableBookings } from '../../components/TableBookings';
import BookingsContext from '../../contexts/bookings/BookingsContext';

export function Bookings() {
  const { bookings, updateList } = useContext(BookingsContext);

  const [filter, setFilter] = useState({
    createdAt: '',
    returnDate: '',
    status: '',
    bookId: ''
  });

  useEffect(() => {
    effectAllBooking(filter);
  }, []);

  async function effectAllBooking(filter) {
    let baseUrl = '';

    Object.entries(filter).forEach((entries) => {
      let [key, value] = entries;
      const validReturnDate = key === 'returnDate' && value;
      const validcreatedAt = key === 'createdAt' && value;
      if (validReturnDate || validcreatedAt) {
        const newDate = value.split('-');
        value = new Date(newDate[0], newDate[1], newDate[2]).toISOString();
      }
      if (value) baseUrl += `${key}=${value}&`;

    });
    console.log(baseUrl);
    await updateList(baseUrl);
  }

  async function handleFilter(type = 'all') {
    if (type === 'all') {
      await effectAllBooking({
        createdAt: '',
        returnDate: '',
        status: '',
        bookId: ''
      });
    } else await effectAllBooking(filter);
  }

  return (
    <>
      <Header />
      <article>
        <section className='container'>
          <FilterBookings output={setFilter}/>
          <div className="grid">
            <button type="button" onClick={ () => handleFilter() } className='outline'>All</button>
            <button type="button" onClick={ () => handleFilter(filter) } className='outline'>Filter</button>
          </div>
        </section>
      </article>
      <article>
        <section className='container'>
          <TableBookings bookings={bookings}/>
        </section>
      </article>
    </>
  );
}