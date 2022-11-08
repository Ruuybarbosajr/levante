import React, { useCallback, useContext, useMemo, useState } from 'react';
import BookingsContext from '../../contexts/bookings/BookingsContext';
import SharedContext from '../../contexts/SharedContext/SharedContext';
import UserContext from '../../contexts/User/UserContext';
import { createBooking } from '../../services/booking.service';
import { OpenModal } from '../OpenModal';

export function RowBook({ book }) {
  const { user } = useContext(UserContext);
  const { users } = useContext(SharedContext);
  const { bookings, updateList } = useContext(BookingsContext);
  const [bookingUser, setBookingUser] = useState({
    name: '',
    email: ''
  });
  
  const isBooking = useMemo(() => {
    if (user.permission) return;
    return bookings.some((booking) => {
      const findAnyBooking = book.id === booking.book.id;
      const statusClosed = booking.status === 'Aberta';
      return findAnyBooking && statusClosed;
    });
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
      user: user.permission ? {
        id: bookingUser.id,
        name: bookingUser.name,
        email: bookingUser.email
      } : user,
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

  function handleUser(id) {
    const findUser = users.find((user) => user.id === id); 
    setBookingUser(findUser);
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
              <hgroup>
                <h3>User information</h3>
              </hgroup>
              { user.permission && (
                <label htmlFor="user">
                    User
                  <select
                    onChange={({ target }) => handleUser(target.value)}
                    id="user"
                  >
                    <option value="" selected>Select a user…</option>
                    { users.map((user) => (<option value={user.id} key={user.id}>{user.name}</option>)) }
                  </select>
                </label>
              )}
              <fieldset disabled>
                <label htmlFor="name">Name</label>
                { user.permission && <input id="name" type="text" value={ bookingUser.name } />}
                { !user.permission && <input id="name" type="text" value={ user.name } /> }
                <label htmlFor="email">Email</label>
                { user.permission && <input id="name" type="text" value={ bookingUser.email } /> }
                { !user.permission && <input type="text" id="email" value={ user.email } />}
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