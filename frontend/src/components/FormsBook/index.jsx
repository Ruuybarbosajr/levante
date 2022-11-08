import React, { useContext } from 'react';
import SharedContext from '../../contexts/SharedContext/SharedContext';

export function FormsBook({ output, book, disabled }) {

  const {categories}= useContext(SharedContext);

  return (
    <>
      <label htmlFor="title">
      Title
        <input
          disabled={disabled}
          onChange={({ target }) => output((prev) => ({
            ...prev,
            title: target.value
          }))}
          type="text"
          value={book.title}
          id="title" 
          name="title" 
          placeholder="Title" 
          required />
      </label>
      <label htmlFor="author">
        Author
        <input
          disabled={disabled}
          onChange={({ target }) => output((prev) => ({
            ...prev,
            author: target.value
          }))}
          value={book.author}
          type="author" 
          id="author" 
          name="author" 
          placeholder="Author"
          required />
      </label>
      <label htmlFor="category">
        Category
        <select
          disabled={disabled}
          id="category"
          value={book.categoryId}
          onChange={ ({ target }) => output((prev) => ({ ...prev, categoryId: target.value }))}
        >
          <option value="" selected>Select a category…</option>
          {categories.sort((a, b) => a.type.localeCompare(b.type)).map((category) =>(
            <option value={category.id} key={category.id}>{category.type}</option>
          ))}
        </select>
      </label>
    </>
  );
}