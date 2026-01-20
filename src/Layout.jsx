import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <li><Link to='/Home'>Home</Link></li>
      <li><Link to='/Trains'>Trains</Link></li>
      <li><Link to='/My_bookings'>My Bookings</Link></li>
      <li><Link to='/Contact'>Contact</Link></li>
    </>
  )
}

export default Layout
