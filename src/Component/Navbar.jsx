import React, { useState } from 'react'
import '../Tailwind.css'
import logo from '../assets/train-logo1.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  let navigate = useNavigate()

  const isLoggedin = localStorage.getItem("isLoggedin") === "true"
  const user = JSON.parse(localStorage.getItem("currentuser"))

  const handleLogout = () => {
    localStorage.removeItem("isLoggedin")
    localStorage.removeItem("currentser")
    navigate('/Home')
  }

  return (
    <>
      {/* MAIN NAVBAR (DESKTOP SAME) */}
      <div className='border-2 border-black h-20 bg-[#0f172a] relative'>

        {/* LOGO */}
        <img
          src={logo}
          height="155px"
          width="70px"
          className='rounded-4xl ml-3 mt-3'
          alt=""
        />

        {/* TITLE (DESKTOP SAME) */}
        <p
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '-1100px',
            marginTop: '-45px',
            color: 'white',
            fontFamily: 'serif',
            fontWeight: 'bold',
            fontSize: '25px'
          }}
          className="hidden sm:flex"
        >
          FastTrack
        </p>

        {/* DESKTOP NAV LINKS (UNCHANGED) */}
        <ul
          style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '50px',
    marginTop: '-30px',
    color: 'white',
    fontFamily: 'serif',
    fontWeight: 'bold'
          }}
          className="hidden max-[479px]:hidden min-[480px]:flex"
        >
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/trains'>Trains</Link></li>
          <li><Link to='/my_bookings'>My Bookings</Link></li>
          <li><Link to='/about'>About Us</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>

        {/* DESKTOP AUTH BUTTONS (UNCHANGED) */}
        <ul
          style={{
            display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '50px',
    marginTop: '-22px',
    marginLeft: '1000px',
    color: 'white',
    fontFamily: 'serif',
    fontWeight: 'bold'
          }}
          className="hidden max-[479px]:hidden min-[480px]:flex"
        >
          {!isLoggedin && (
            <>
              <Link to='/signup' className='bg-blue-600 px-3 py-1 rounded'>Sign-Up</Link>
              <Link to='/login' className='bg-blue-600 px-3 py-1 rounded'>Log-in</Link>
            </>
          )}
          {isLoggedin && (
            <button
              className='bg-blue-600 px-3 py-1 rounded'
              onClick={handleLogout}
            >
              Log-out
            </button>
          )}
        </ul>

        {/* 📱 MOBILE HAMBURGER */}
        <button
          className="absolute top-6 right-5 text-white min-[480px]:hidden"
  onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>

        {/* 📱 MOBILE MENU */}
        {menuOpen && (
          <div className="absolute top-20 left-0 w-full bg-[#0f172a] text-white z-50 min-[480px]:hidden">
    <ul className="flex flex-col items-center gap-5 py-6 font-serif">
      <Link to='/home' onClick={() => setMenuOpen(false)}>Home</Link>
      <Link to='/trains' onClick={() => setMenuOpen(false)}>Trains</Link>
      <Link to='/my_bookings' onClick={() => setMenuOpen(false)}>My Bookings</Link>
      <Link to='/about' onClick={() => setMenuOpen(false)}>About Us</Link>
      <Link to='/contact' onClick={() => setMenuOpen(false)}>Contact</Link>

      {!isLoggedin && (
        <>
          <div>
          <Link to='/signup'>Sign-Up</Link>
          <Link to='/login'>Log-in</Link>
          </div>
        </>
      )}
      {isLoggedin && (
        <button onClick={handleLogout}>Log-out</button>
      )}
    </ul>
  </div>
        )}

      </div>
    </>
  )
}

export default Navbar
