import React from 'react'
import LightRays from '../Component/LightRays'
import '../App.css'
import '../Tailwind.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  let navigate = useNavigate()

  // let signup = ()=>{
  //   navigate('/signup')
  // }

  return (
    <>
    <div className='login-wrapper'>
      <LightRays/>
    
      
        <div className='login-box'>
          <h1 className='text-center text-4xl font-serif'>Login</h1>
          <form action="" className=' ml-8 font-serif'>
            <br />
            <p className='name-head'>Enter Email</p>
            <input type="email" name="" className='name-box2' placeholder='Enter your email' id="" />
            <p></p>
            <br />
            <br />
            <p className='name-head'>Enter Password</p>
            <input type="password" className='name-box2' name="" placeholder='Enter your Password' id="" />
            <p></p>
            <br />
            <br />
            <button type="submit" className='login-button'>Log in</button>
            <br />
            <p className='login-signup'>Don't have Account ? <span onClick={() => navigate('/signup')} className='login-signup-link'>Sign-up</span> </p>
          </form>
        </div>
    </div>
    </>
  )
}

export default Login
