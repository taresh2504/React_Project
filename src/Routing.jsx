import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Trains from './Pages/Trains'
import My_bookings from './Pages/My_bookings'
import Contact from './Pages/Contact'
import Navbar from './Component/Navbar'


const Routing = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path='Home' element={<Home/>}/>
        <Route path='Trains' element={<Trains/>}/>
        <Route path='My_bookings' element={<My_bookings/>}/>
        <Route path='Contact' element={<Contact/>}/>
        </Route>
      </Routes>
      <Outlet/>
    </>
  )
}

export default Routing
