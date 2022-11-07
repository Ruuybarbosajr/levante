import React, { useState } from 'react';
import SharedContext from './SharedContext';

export function SharedProvider({ children }) {
  const [users, setUsers] = useState([]);

  return (
    <SharedContext.Provider value={{ users, setUsers }}>
      {children}
    </SharedContext.Provider>
  );
}
