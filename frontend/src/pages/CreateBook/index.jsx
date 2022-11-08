import { SnackbarProvider, useSnackbar } from 'notistack';
import React ,{useState } from 'react';
import { FormsBook } from '../../components/FormsBook';
import { Header } from '../../components/Header';
import { createBook } from '../../services/books.service';

function CreateBook() {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    categoryId: false,
  });

  async function handleSubmit() {
    setLoading(true);
    const createdBook = await createBook(newBook);
    if (createdBook?.id) {
      setNewBook({
        title: '',
        author: '',
        categoryId: false,
      });
      enqueueSnackbar(`Book "${createdBook.title}" created`);
    } else {
      enqueueSnackbar(createdBook.message);
    }
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
            <h1>Create a new book</h1>
            <FormsBook output={setNewBook} book={newBook}/>
            <section className='container' style={{'margin-top': '20px'}}>
              <button aria-busy={loading} type="submit">Submit</button>
            </section>
          </form>
        </fieldset>
      </article>
    </>);
}

export default function IntergrationNotistack() {
  return (
    <SnackbarProvider maxSnack={ 3 }>
      <CreateBook />
    </SnackbarProvider>
  );
}