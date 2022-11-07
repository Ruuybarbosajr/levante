import React from 'react';
import { OpenModal } from '../OpenModal';

export function Row({ book }) {
  return (
    <>
      <tr>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.category.type}</td>
        <td>{
          <OpenModal title="Create booking" >
            <input type="text" />
          </OpenModal>}
        </td>
      </tr>
    </>
  );
}