import React, { useEffect, useState } from 'react';
import { getAllBooks } from '../../services/books.service';
import { getAllCategories } from '../../services/categories.service';
import SharedContext from './SharedContext';

export function SharedProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    effectAllCategories();
    effectAllBooks();
  }, []);

  async function effectAllCategories() {
    const response = await getAllCategories();
    setCategories(response);
  }

  async function effectAllBooks() {
    const response = await getAllBooks('');
    setBooks(response);
  }

  return (
    <SharedContext.Provider
      value={{ users, setUsers, categories, setCategories, books, setBooks }}
    >
      {children}
    </SharedContext.Provider>
  );
}
