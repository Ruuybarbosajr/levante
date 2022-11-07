import React, { useCallback, useContext, useMemo } from 'react';
import BookingsContext from '../../contexts/bookings/BookingsContext';
import UserContext from '../../contexts/User/UserContext';
import { createBooking } from '../../services/booking.service';
import { OpenModal } from '../OpenModal';

export function RowBook({ book }) {
  const { user } = useContext(UserContext);
  const { bookings, updateList } = useContext(BookingsContext);

  const isBooking = useMemo(() => {
    return bookings.some((booking) => book.id === booking.book.id);
  }, [bookings]);

  const  makeDate = useCallback(() => {
    const now = new Date();
    return {
      bookingDate: new Date(now.getFullYear(), now.getMonth(), now.getDate()),
      returnDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 30)
    };
  }, []);

  async function confirmBooking() {
    const data = {
      user,
      book,
      createdAt: makeDate().bookingDate,
      returnDate: makeDate().returnDate
    };
    const response = await createBooking(data);
    if (response?.id) {
      await updateList('');
      return response;
    }
    return response;
  }

  return (
    <>
      <tr>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.category.type}</td>
        { !isBooking && <td> 
          <OpenModal title="Create booking" functionAction={confirmBooking}>
            <section className='container'>
              <header>
                <h1 className='title'>Confirm your booking details</h1>
              </header>
              <hr></hr> 
              <fieldset disabled>
                <hgroup>
                  <h3>User information</h3>
                </hgroup>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" value={ user.name } />
                <label htmlFor="email">Email</label>
                <input type="text" id="email" value={ user.email } />
              </fieldset>
              <hr></hr>
              <fieldset disabled>
                <hgroup>
                  <h3>Book information</h3>
                </hgroup>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" value={ book.title } />
                <label htmlFor="author">Author</label>
                <input type="text" id="author" value={ book.author } />
                <label htmlFor="category">Category</label>
                <input type="text" id="category" value={ book.category.type } />
              </fieldset>
              <hr></hr>
              <fieldset disabled>
                <hgroup>
                  <h3>Booking information</h3>
                </hgroup>
                <label htmlFor="booking-date">Booking date</label>
                <input type="text" id="booking-date" value={ makeDate().bookingDate.toDateString() } />
                <label htmlFor="return-date">Return date</label>
                <input type="text" id="return-date" value={ makeDate().returnDate.toDateString() } />
                <small>You have 30 days to return this book</small>
              </fieldset>
            </section>
          </OpenModal>
        </td>
        }
        {
          isBooking && <td><a href="#" role="button" className='outline contrast' disabled>Reserved</a></td>
        }
      </tr>
    </>
  );
}