// import React from 'react'
// import LightRays from '../Component/LightRays'
// import '../App.css'
// import '../Tailwind.css'
// import { useNavigate } from 'react-router-dom'

// const Login = () => {

//   let navigate = useNavigate()

//   return (
//     <>
//     <div className='login-wrapper'>
//       <LightRays/>
    
      
//         <div className='login-box'>
//           <h1 className='text-center text-4xl font-serif'>Login</h1>
//           <form action="" className=' ml-8 font-serif'>
//             <br />
//             <p className='name-head'>Enter Email</p>
//             <input type="email" name="" className='name-box2' placeholder='Enter your email' id="" />
//             <p></p>
//             <br />
//             <br />
//             <p className='name-head'>Enter Password</p>
//             <input type="password" className='name-box2' name="" placeholder='Enter your Password' id="" />
//             <p></p>
//             <br />
//             <br />
//             <button type="submit" className='login-button'>Log in</button>
//             <br />
//             <p className='login-signup'>Don't have Account ? <span onClick={() => navigate('/signup')} className='login-signup-link'>Sign-up</span> </p>
//           </form>
//         </div>
//     </div>
//     </>
//   )
// }

// export default Login

// code 2 for login 
import React, { useState } from 'react'
import LightRays from '../Component/LightRays'
import '../App.css'
import '../Tailwind.css'
import { useNavigate } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {

  let navigate = useNavigate()

  // 👁️ password toggle state
  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      <div className='login-wrapper'>
        <LightRays />

        <div className='login-box'>
          <h1 className='text-center text-4xl font-serif'>Login</h1>

          <form className='ml-8 font-serif'>
            <br />

            <p className='name-head'>Enter Email</p>
            <input
              type="email"
              className='name-box2'
              placeholder='Enter your email'
            />

            <br /><br />

            <p className='name-head'>Enter Password</p>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className='name-box2 pr-10'
                placeholder='Enter your Password'
              />

              <span
                className="absolute right-12 top-1/2 -translate-y-1/2 cursor-pointer text-black"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword
                  ? <AiOutlineEyeInvisible size={20} />
                  : <AiOutlineEye size={20} />
                }
              </span>
            </div>

            <br /><br />

            <button type="submit" className='login-button'>Log in</button>

            <br />
            <p className='login-signup'>
              Don't have Account ?
              <span
                onClick={() => navigate('/signup')}
                className='login-signup-link'
              >
                {' '}Sign-up
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login

