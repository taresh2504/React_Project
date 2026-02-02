import React, { useState } from 'react'
import '../Tailwind.css'
import logo from '../assets/train-logo1.jpg'
import { Link, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  let navigate = useNavigate('')

  const isLoggedin = localStorage.getItem("isLoggedin") === "true"
  const user = JSON.parse(localStorage.getItem("currentuser"))

  const handleLogout = ()=>{
    localStorage.removeItem("isLoggedin")
    localStorage.removeItem("currentser")
    navigate('/Home')
    
  }
  return (
    <>
      <div className='border-2 border-s border-black h-20 bg-zinc-700'>
        <img src={logo} height="155px"  width="70px" className='rounded-4xl ml-3 mt-3' alt="" />
        <div><p style={{display:'flex', justifyContent:'center', alignItems:'center', marginLeft:'-1100px', marginTop:'-45px', color:'white', fontFamily:'serif',fontWeight:'bold', fontSize:'25px'}}>FastTrack</p></div>
        <div>
        <header>
          <nav>
            <ul style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'50px', marginTop:'-30px', color:'white', fontFamily:'serif',fontWeight:'bold',}}>
              <li><Link to='/home'  className="hover:text-sky-300 transition duration-200">Home</Link></li>
              <li><Link to='/trains'  className="hover:text-sky-300 transition duration-200">Trains</Link></li>
              <li><Link to='/my_bookings'  className="hover:text-sky-300 transition duration-200">My Bookings</Link></li>
              <li><Link to='/contact' className="hover:text-sky-300 transition duration-200">Contact</Link></li>
            </ul>
          </nav>
        </header>
        </div>
        <div>
          <header>
            <nav>
              <ul style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'50px', marginTop:'-27px', marginLeft:'1000px', color:'white', fontFamily:'serif', fontWeight:'bold'}}>
                {!isLoggedin && (
                  <div> 
                    <button><Link to='/signup'  className='rounded-4xl border-2 caret-amber-50 pl-2 pr-2 pt-0.5 pb-0.5 bg-blue-600 mr-5'>Sign-Up</Link></button>
                <button><Link to='/login'><button className='rounded-4xl border-2 caret-amber-50 pl-3 pr-3 bg-blue-600'>Log-in</button></Link></button>
                  </div>
                )}
                {isLoggedin && (
                  <div>
                   
                <li><Link to='/Home'><button className='rounded-4xl border-2 caret-amber-50 pl-3 pr-3 bg-blue-600' onClick={handleLogout}>Log-out</button></Link></li>
                  </div>
                )}
              </ul>
            </nav>
          </header>
        </div>
      </div>

    </>
  )
}

export default Navbar

{/* <li><Link to='/signup'  className="hover:text-amber-300 transition duration-200">Sign-Up</Link></li>
                <li><Link to='/login'><button className='rounded-4xl border-2 caret-amber-50 pl-3 pr-3 bg-blue-600'>Log-in</button></Link></li> */}

