import React from 'react'
import { Route,Navigate,Outlet } from 'react-router-dom'

const AuthRoute = () => {
  const authToken = sessionStorage.getItem("@authToken");
  return authToken ? <Navigate to="/admin/orders"/> : <Outlet />;
}

export default AuthRoute
