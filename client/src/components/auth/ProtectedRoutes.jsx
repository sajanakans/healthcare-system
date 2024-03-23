import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoutes() {
  const token = localStorage.getItem('jwtToken');
  // check if a JWT token is stored in localStorage

  if (!token) return <Navigate to="/login" />;
  // Navigate to login if no token is found
  
  return <Outlet />; 
  // Render children if a token is found
}
