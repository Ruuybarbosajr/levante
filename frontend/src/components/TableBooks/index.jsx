import React from 'react';
import { RowBook } from '../RowBook';

export function TableBooks({ books }) {

  return (
    <table role="grid">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Category</th>
        </tr>
      </thead>
      <tbody>
        { books.map((book) => <RowBook key={book.id} book={book} />) }
      </tbody>
    </table>
  );
}