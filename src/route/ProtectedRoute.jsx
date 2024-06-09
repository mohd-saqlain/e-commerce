import React from 'react'
import { Route,Navigate,Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const authToken = sessionStorage.getItem("@authToken");
  return authToken ?  <Outlet /> : <Navigate to="/admin"/>;
}

export default ProtectedRoute
