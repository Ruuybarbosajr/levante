import { SnackbarProvider, useSnackbar } from 'notistack';
import React, { useContext, useState } from 'react';
import { FormsBook } from '../../components/FormsBook';
import { Header } from '../../components/Header';
import SharedContext from '../../contexts/SharedContext/SharedContext';
import { deleteBook, getAllBooks, updateBook } from '../../services/books.service';

function HandleBook() {
  const { enqueueSnackbar } = useSnackbar();
  const { books, setBooks } = useContext(SharedContext);
  const [loading, setLoading] = useState(false);
  const [editBook, setEditBook] = useState({
    id: '',
    title: '',
    author: '',
    categoryId: '',
  });
  
  async function handleSubmit() {
    setLoading(true);
    const updatedBook = await updateBook(editBook);
    if (updatedBook?.id) {
      setEditBook({
        id: '',
        title: '',
        author: '',
        categoryId: '',
      });
      enqueueSnackbar(`Book "${updatedBook.title}" updated`);
    } else {
      enqueueSnackbar(updatedBook.message);
    }
    setBooks((await getAllBooks('')));
    setLoading(false);
  }

  function choiceBook(idBook) {
    const { id, title, author, category } = books.find((book) => idBook === book.id);
    setEditBook({
      id,
      title,
      author,
      categoryId: category.id
    });
  }
  async function destroyBook() {
    setLoading(true);
    const deletedBook = await deleteBook(editBook.id);
    if (deletedBook) {
      enqueueSnackbar(deletedBook.message);
    } else {
      enqueueSnackbar(`Book "${editBook.title}" deleted`);
      setEditBook({
        title: '',
        author: '',
        categoryId: '',
      });
    }
    setBooks((await getAllBooks('')));
    setLoading(false);
  }

  return (
    <>
      <Header />
      <article>
        <fieldset className='container'>
          <form onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
          }}>
            <hgroup>
              <h1>Edit a book</h1>
              <h2>Books are permanently deleted</h2>
            </hgroup>
            <label htmlFor='books'>
              <select 
                name="books"
                id="books"
                onChange={({ target }) => choiceBook(target.value)}
              >
                { books.sort((a, b) => 
                  a.title.localeCompare(b.title)).map((book) => (
                  <option value={book.id} key={book.id}> {book.title} </option>
                ))}
              </select>

            </label>
            <FormsBook output={setEditBook} book={editBook} disabled={!editBook.title}/>
            <section className='container grid' style={{'marginTop': '20px'}}>
              <button aria-busy={loading} onClick={() => destroyBook()} type="button">Delete</button>
              <button aria-busy={loading} type="submit">Edit</button>
            </section>
          </form>
        </fieldset>
      </article>
    </>);
}

export default function IntergrationNotistack() {
  return (
    <SnackbarProvider maxSnack={ 3 }>
      <HandleBook />
    </SnackbarProvider>
  );
}