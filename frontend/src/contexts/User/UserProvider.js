import React, { useEffect, useState } from 'react';
import UserContext from './UserContext';
import { decodeToken } from 'react-jwt';

export function UserProvider({ children }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = decodeToken(localStorage.getItem('token'));
    if (token?.id) {
      console.log(token);
      setUser(token);
    }
  }, []);

  function saveDataUser(token) {
    const dataUser = decodeToken(token);
    setUser(dataUser);
  }

  return (
    <UserContext.Provider value={{ user, saveDataUser }}>{children}</UserContext.Provider>
  );
}
