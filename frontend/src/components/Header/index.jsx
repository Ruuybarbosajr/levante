import React from 'react';


export function Header() {
  return (
    <section className='container'>
      <nav>
        <ul>
          <li><strong>Library</strong></li>
        </ul>
        <ul>
          <li><a href="/livros">Livros</a></li>
          <li><a href="/reservas">Reservas</a></li>
          <li><a href="/" role="button">Sair</a></li>
        </ul>
      </nav>
    </section>
  );
}