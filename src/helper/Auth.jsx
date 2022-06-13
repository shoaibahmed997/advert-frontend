import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import useLogin from '../Hooks/useLogin'

const Auth = () => {
  const loggedIn = useLogin()
  const location = useLocation()
  return (

  loggedIn ?
  <Outlet></Outlet> :
  <Navigate to={'/login'} state={{from:location}} />


  )
}

export default Auth