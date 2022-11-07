import React from 'react';

export function Header() {
  function logout() {
    localStorage.removeItem('token');
  }

  return (
    <section className='container'>
      <nav>
        <ul>
          <li><strong>Library</strong></li>
        </ul>
        <ul>
          <li><a href="/home">Books</a></li>
          <li><a href="/bookings">Bookings</a></li>
          <li><a href="/" role="button" onClick={() => logout() }>Logout</a></li>
        </ul>
      </nav>
    </section>
  );
}