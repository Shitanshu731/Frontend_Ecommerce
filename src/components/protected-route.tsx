import React, { ReactElement } from 'react'
import { Navigate, Outlet } from 'react-router-dom';

interface Props{
    isAuthenticated : boolean;
    children?:ReactElement;
    adminRoute?:boolean;
    isAdmin?:boolean;
    redirect?:string;
}
const ProtectedRoute = ({isAdmin,isAuthenticated,adminRoute,redirect,children}: Props) => {
    if(!isAuthenticated) return <Navigate to={redirect} />
  return children ? children : <Outlet />
}

export default ProtectedRoute
