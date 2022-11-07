import React, { useEffect, useState } from 'react';
import { FilterBook } from '../../components/FilterBooks';
import { Header } from '../../components/Header';
import { Table } from '../../components/Table';
import { getAllBooks } from '../../services/books.service';
import { getAllCategories } from '../../services/categories.service';


export function Home() {
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
  }, []);

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
        <Table books={books} />
      </section>
    </>
  );
}