import React from 'react'
import ElectricBorder from '../Component/ElectricBorder'
import '../Tailwind.css'
import '../App.css'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

  let navigate = useNavigate() 

  let login =()=>{
    navigate('/login')
  }

  return (
    <>
      {/* // CREDIT
// Component inspired by @BalintFerenczy on X
// https://codepen.io/BalintFerenczy/pen/KwdoyEN */}
<div className="w-full max-w-md mx-auto flex justify-center align-middle mt-20">
<ElectricBorder
  color="#7df9ff"
  speed={1}
  chaos={0.12}
  thickness={2}
  style={{ borderRadius: 16 }}
  className="w-full h-130" 
>
  <div>
    <p style={{ margin: '6px 0 0', opacity: 0.8 }}>
      <form className=' ml-8 font-serif'>
      <h1 className='ml-38 text-3xl font-serif'>Sign up</h1>
      {/* <br /> */}
      <br />
      <p className='name-head'>Enter Name</p>
      <input type="text" className='name-box' placeholder='Enter your name' name="" id="" />
      <p></p>
      <br />
      <p className='name-head'>Enter Number</p>
      <input type="text" className='name-box' placeholder='Enter your number' name="" id="" />
      <p></p>
      <br />
      <p className='name-head'>Enter Email</p>
      <input type="email" className='name-box' placeholder='Enter your email' name="" id="" />
      <p></p>
      <br />
      <p className='name-head'>Enter Password</p>
      <input type="Password" className='name-box' placeholder='Enter your Password' name="" id="" />
      <p></p>
      <br />
      <p className='name-head'>Enter Confirm password</p>
      <input type="password" className='name-box' placeholder='Enter your Confirm password' name="" id="" />
      <p></p>
      <br />
      <button type="submit" className='signup-button' >Sign up</button>
      <br />
      <p className='signup-login'>Already a user ? <span onClick={login} className='login'>Log-in</span> </p>
      </form>
    </p>
  </div>
</ElectricBorder>
</div>
    </>
  )
}

export default Signup
