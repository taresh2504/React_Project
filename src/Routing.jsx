import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Trains from './Pages/Trains'
import My_bookings from './Pages/My_bookings'
import Contact from './Pages/Contact'
import Navbar from './Component/Navbar'
import Slider from './Component/Slider'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Layout from './Layout'
import Authlayout from './Authlayout'
import BookingForm from './Pages/BookingForm'
import About from './Pages/About'


const Routing = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='Home' element={<Home/>}/>
        <Route path='Trains' element={<Trains/>}/>
        <Route path='My_bookings' element={<My_bookings/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='BookingForm' element={<BookingForm/>}/>
        </Route>

        {/* Authorisation layout :- login,signup */}
        <Route path='/' element={<Authlayout/>}>
        <Route path='Signup' element={<Signup/>}/>
        <Route path='Login' element={<Login/>}/>
        </Route>
      </Routes>
      {/* <Slider/> */}
      {/* <Outlet/> */}
    </>
  )
}

export default Routing
