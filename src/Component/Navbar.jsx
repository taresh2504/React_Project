import React from 'react'
import '../Tailwind.css'
import logo from '../assets/train-logo1.jpg'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='border-2 border-s border-black h-20 bg-zinc-700'>
        <img src={logo} height="155px"  width="70px" className='rounded-4xl ml-3 mt-3' alt="" />
        <div><p style={{display:'flex', justifyContent:'center', alignItems:'center', marginLeft:'-1100px', marginTop:'-45px', color:'white', fontFamily:'serif',fontWeight:'bold', fontSize:'25px'}}>FastTrack</p></div>
        <div>
        <header>
          <nav>
            <ul style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'50px', marginTop:'-30px', color:'white', fontFamily:'serif',fontWeight:'bold'}}>
              <li><Link to='/home'>Home</Link></li>
              <li><Link to='/trains'>Trains</Link></li>
              <li><Link to='/my_bookings'>My Bookings</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
          </nav>
        </header>
        </div>
        <div>
          <header>
            <nav>
              <ul style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'50px', marginTop:'-27px', marginLeft:'1000px', color:'white', fontFamily:'serif', fontWeight:'bold'}}>
                <li><Link to='/signup'>Sign-Up</Link></li>
                <li><Link to='/login'><button className='rounded-4xl border-2 caret-amber-50 pl-3 pr-3 bg-blue-600'>Log-in</button></Link></li>
              </ul>
            </nav>
          </header>
        </div>
      </div>

    </>
  )
}

export default Navbar
