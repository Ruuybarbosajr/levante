import React from 'react';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import AuthToken from './components/AuthToken';
import { BookingsProvider } from './contexts/bookings/BookingsProvider';
import { UserProvider } from './contexts/User/UserProvider';
import { Bookings } from './pages/Bookings';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <UserProvider>
                <Login />
              </UserProvider>
            }
          />
          <Route
            path='/home'
            element={
              <AuthToken>
                <UserProvider>
                  <BookingsProvider>
                    <Home />
                  </BookingsProvider>
                </UserProvider>
              </AuthToken>
            }
          />
          <Route
            path='/bookings'
            element={
              <BookingsProvider>
                <Bookings />
              </BookingsProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
