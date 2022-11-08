import React from 'react';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import AuthToken from './components/AuthToken';
import { BookingsProvider } from './contexts/bookings/BookingsProvider';
import { UserProvider } from './contexts/User/UserProvider';
import { Bookings } from './pages/Bookings';
import CreateUser from './pages/CreateUser';
import AuthAdmin from './components/AuthAdmin';
import { SharedProvider } from './contexts/SharedContext/SharedProvided';
import CreateBook from './pages/CreateBook';
import HandleBook from './pages/HandleBook';

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
                    <SharedProvider>
                      <Home />
                    </SharedProvider>
                  </BookingsProvider>
                </UserProvider>
              </AuthToken>
            }
          />
          <Route
            path='/bookings'
            element={
              <BookingsProvider>
                <UserProvider>
                  <SharedProvider>
                    <Bookings />
                  </SharedProvider>
                </UserProvider>
              </BookingsProvider>
            }
          />
          <Route
            path='/create/user'
            element={
              <AuthAdmin>
                <AuthToken>
                  <UserProvider>
                    <CreateUser />
                  </UserProvider>
                </AuthToken>
              </AuthAdmin>
            }
          />
          <Route
            path='/create/book'
            element={
              <AuthAdmin>
                <AuthToken>
                  <UserProvider>
                    <SharedProvider>
                      <CreateBook />
                    </SharedProvider>
                  </UserProvider>
                </AuthToken>
              </AuthAdmin>
            }
          />
          <Route
            path='/edit/book'
            element={
              <AuthAdmin>
                <AuthToken>
                  <UserProvider>
                    <SharedProvider>
                      <HandleBook />
                    </SharedProvider>
                  </UserProvider>
                </AuthToken>
              </AuthAdmin>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
