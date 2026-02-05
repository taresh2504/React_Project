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

  let [form,setform] = useState({
    myemail : "",
    mypassword : ""
  })

  let handlechange = (e)=>{
    setform({...form,[e.target.name]:e.target.value})
  }

  let handlesubmit = (e)=>{
    e.preventDefault()
    let valid = true

    if (form.myemail.trim()==''){
      alert('please enter your email')
      valid = false
    }

    else if (!(form.myemail.includes('@gmail.com') || form.myemail.includes('@yahoo.com') || form.myemail.includes('@outlook.com'))) {
      alert('please enter a valid email')
      valid = false
    }

    else if (form.mypassword.trim() == '') {
      alert('please enter your password')
      valid = false
    }
    else if (!(form.mypassword.match(/[A-Z]/))) {
      alert('password must contain one Capital Letter')
      valid = false
    }
    else if (!(form.mypassword.match(/[a-z]/))) {
      alert('password must contain one small letter')
      valid = false
    }
    else if (!(form.mypassword.match(/[0-9]/))) {
      alert('password must contain one number')
      valid = false
    }
    else if (!(form.mypassword.match(/[!@#$%&*-_.`~^/?]/))) {
      alert('password must contain one special character')
      valid = false
    }
    else if (!(form.mypassword.length >= 7 && form.mypassword.length <= 16)) {
      alert('password is greater than 7 and less than 16 digits')
      valid = false
    }

    if (valid) {
      let users = JSON.parse(localStorage.getItem('users')) || []
      let authuser = users.find((e) => e.myemail === form.myemail && e.mypassword === form.mypassword)

      if (authuser) {
        localStorage.setItem("isLoggedin","true");
        localStorage.setItem("currentUser",JSON.stringify(authuser));
        localStorage.setItem("useremail", authuser.myemail)
        alert('login succes ✅')
        navigate('/home')
        return
      }
      else{
        alert('email and password did not matched')
      }
    }


    }
  

    return (
    <>
      <div className='login-wrapper'>
        <LightRays />

        <div className='login-box'>
          <h1 className='text-center text-4xl font-serif'>Login</h1>

          <form className='ml-8 font-serif' onSubmit={handlesubmit}>
            <br />

            <p className='name-head'>Enter Email</p>
            <input
              type="email"
              className='name-box2'
              placeholder='Enter your email'
              name='myemail'
              onChange={handlechange}
              value={form.myemail}
            />

            <br /><br />

            <p className='name-head'>Enter Password</p>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className='name-box2 pr-10'
                placeholder='Enter your Password'
                name='mypassword'
                onChange={handlechange}
                value={form.mypassword}
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

