import React, { ReactElement } from 'react'
import { Navigate, Outlet } from 'react-router-dom';

interface Props{
    isAuthenticated : boolean;
    children?:ReactElement;
    adminOnly?:boolean;
    admin?:boolean;
    redirect?:string;
}
const ProtectedRoute = ({admin,isAuthenticated,adminOnly,redirect,children}: Props) => {
    if(!isAuthenticated) return <Navigate to={redirect} />
  return children ? children : <Outlet />
}

export default ProtectedRoute
