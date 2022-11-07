import React from 'react';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import UserProvider from './context/UserProvider';
import AuthToken from './components/AuthToken';

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
                  <Home />
                </UserProvider>
              </AuthToken>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
