import React from 'react';

export function FilterBook({ books, categories, output }) {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <hgroup>
        <h1>Books</h1>
        <h2>Find a book</h2>
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
        <label htmlFor="author">
            Author
          <select
            id="author"
            onChange={ ({ target }) => output((prev) => ({ ...prev, author: target.value }))}
          >
            <option value="" selected>Select an author…</option>
            {
              books.sort((a, b) => a.author.localeCompare(b.author)).map(
                (book) => <option value={book.author} key={book.id}
                >
                  {
                    book.author
                  }
                </option>
              )
            }
          </select>
        </label>
        <label htmlFor="category">
            Category
          <select
            id="category"
            onChange={ ({ target }) => output((prev) => ({ ...prev, categoryId: target.value }))}
          >
            <option value="oi" selected>Select a category…</option>
            {categories.sort((a, b) => a.type.localeCompare(b.type)).map((category) =>(
              <option value={category.id} key={category.id}>{category.type}</option>
            ))}
          </select>
        </label>
      </div>
    </form>
  );
}