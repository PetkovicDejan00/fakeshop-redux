import React from 'react'
import Header from '../Header'
import Cart from '../Cart/Cart'
import { Outlet } from 'react-router-dom'

const Layout = ({token, setToken}) => {
  return (
    <>
        <Header token={token} setToken={setToken}/>
        <Cart />
        <Outlet />
    </>
  )
}

export default Layout