import React, { useContext, useEffect, useState } from 'react';
import { FilterBook } from '../../components/FilterBooks';
import { Header } from '../../components/Header';
import { TableBooks } from '../../components/TableBooks';
import BookingsContext from '../../contexts/bookings/BookingsContext';
import { getAllBookings } from '../../services/booking.service';
import { getAllBooks } from '../../services/books.service';
import { getAllCategories } from '../../services/categories.service';


export function Home() {
  const { setBookings } = useContext(BookingsContext);
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState({
    title: '',
    categoryId: '',
    author: ''
  });
  
  useEffect(() => {
    effectAllCategories();
    effectAllBooks(filter);
    effectAllBooking();
  }, []);

  async function effectAllBooking() {
    const response = await getAllBookings();
    setBookings(response);
  }

  async function effectAllBooks(filter) {
    let baseUrl = '';

    Object.entries(filter).forEach((entries) => {
      const [key, value] = entries;
      if (value) baseUrl += `${key}=${value}&`;

    });
    const response = await getAllBooks(baseUrl);
    setBooks(response);
  }

  async function effectAllCategories() {
    const response = await getAllCategories();
    setCategories(response);
  }

  async function handleFilter(type = 'all') {
    if (type === 'all') {
      await effectAllBooks({
        title: '',
        categoryId: '',
        author: ''
      });
    } else await effectAllBooks(filter);
  }

  return (
    <>
      <Header />
      <section className='container'>
        <FilterBook books={books} categories={categories} output={setFilter}/>
        <div className="grid">
          <button type="button" onClick={ () => handleFilter() } className='outline'>All</button>
          <button type="button" onClick={ () => handleFilter('filter') } className='outline'>Filter</button>
        </div>
      </section>
      <section className='container'>
        <TableBooks books={books} />
      </section>
    </>
  );
}