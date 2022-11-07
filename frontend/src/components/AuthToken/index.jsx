import React from 'react';
import { decodeToken } from 'react-jwt';
import { Navigate } from 'react-router-dom';

export default function AuthToken({ children }) {
  const redirect = decodeToken(localStorage.getItem('token'))?.id;
  return (
    !redirect ? <Navigate replace to="/" /> : children
  );
}