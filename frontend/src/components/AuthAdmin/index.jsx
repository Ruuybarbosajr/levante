import React from 'react';
import { decodeToken } from 'react-jwt';
import { Navigate } from 'react-router-dom';

export default function AuthAdmin({ children }) {
  const redirect = decodeToken(localStorage.getItem('token'))?.permission;
  
  return (
    !redirect ? <Navigate replace to="/" /> : children
  );
}