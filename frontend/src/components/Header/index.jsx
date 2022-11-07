import React, { useContext } from 'react';
import UserContext from '../../contexts/User/UserContext';

export function Header() {
  const { user } = useContext(UserContext);
  function logout() {
    localStorage.removeItem('token');
  }

  return (
    <header className='container'>
      <nav>
        <ul>
          <li><strong>Library</strong></li>
        </ul>
        <ul>
          <li><a href="/home">Books</a></li>
          <li><a href="/bookings">Bookings</a></li>
          { user.permission && <li><a href="/create/user">Create user</a></li> }
          <li><a href="/" role="button" onClick={() => logout() }>Logout</a></li>
        </ul>
      </nav>
    </header>
  );
}