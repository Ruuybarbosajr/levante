import React from 'react';
import { Row } from '../Row';

export function Table({ books }) {
  return (
    <table role="grid">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Category</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        { books.map((book) => <Row key={book.id} book={book} />) }
      </tbody>
    </table>
  );
}