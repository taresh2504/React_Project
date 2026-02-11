// code 2 :- AI for icons 
import React, { useState } from 'react'
import ElectricBorder from '../Component/ElectricBorder'
import '../Tailwind.css'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Signup = () => {

  let navigate = useNavigate()

  // 👁️ password toggle states
  const [showPassword, setShowPassword] = useState(false)
  const [showCPassword, setShowCPassword] = useState(false)

  let login = () => {
    navigate('/login')
  }

  let handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  let [form, setform] = useState({
    myname: '',
    mynumber: '',
    myemail: '',
    mypassword: '',
    mycpassword: ''
  })

  let handlesubmit = (e) => {
    e.preventDefault()
    let valid = true

    if (form.myname.trim() === '') {
      alert('please enter your name')
      valid = false
    }
    else if (form.mynumber.trim() === '') {
      alert('please enter your contact number')
      valid = false
    }
    else if (isNaN(form.mynumber)) {
      alert('please enter your number in digits')
      valid = false
    }
    else if (form.myemail.trim() === '') {
      alert('please enter your email')
      valid = false
    }
    else if (
      !(form.myemail.includes('@gmail.com') ||
        form.myemail.includes('@yahoo.com') ||
        form.myemail.includes('@outlook.com'))
    ) {
      alert('please enter a valid email')
      valid = false
    }
    else if (form.mypassword.trim() === '') {
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
    else if (form.mycpassword.trim() === '') {
      alert('please enter your confirm password')
      valid = false
    }
    else if (form.mypassword !== form.mycpassword) {
      alert('password and confirm password are not same')
      valid = false
    }

    if (valid) {
      let users = JSON.parse(localStorage.getItem('users')) || []
      let alreadyuser = users.find((e) => e.myemail === form.myemail)

      if (alreadyuser) {
        alert('Already a user')
        navigate('/Login')
        return
      } else {
        users.push(form)
        localStorage.setItem('users', JSON.stringify(users))
        alert('signup success ✅')
        navigate('/Login')
      }
    }
  }

  return (
    <>
      <div className="w-full max-w-md mx-auto flex justify-center align-middle mt-20 max-[479px]:mt-10 max-[479px]:px-3">

        <ElectricBorder
          color="#7df9ff"
          speed={1}
          chaos={0.12}
          thickness={2}
          style={{ borderRadius: 16 }}
          className="w-full h-130 max-[479px]:h-auto"
        >

          <form
            className="ml-8 font-serif max-[479px]:ml-0"
            onSubmit={handlesubmit}
          >

            <h1 className="ml-38 text-3xl font-serif max-[479px]:ml-0 max-[479px]:text-center">
              Sign up
            </h1>

            <br />

            <p className="name-head">Enter Name</p>
            <input
              type="text"
              className="name-box max-[479px]:w-full"
              name="myname"
              value={form.myname}
              onChange={handlechange}
              placeholder="Enter your name"
            />

            <br /><br />

            <p className="name-head">Enter Number</p>
            <input
              type="text"
              className="name-box max-[479px]:w-full"
              name="mynumber"
              value={form.mynumber}
              onChange={handlechange}
              placeholder="Enter your Number"
            />

            <br /><br />

            <p className="name-head">Enter Email</p>
            <input
              type="email"
              className="name-box max-[479px]:w-full"
              name="myemail"
              value={form.myemail}
              onChange={handlechange}
              placeholder="Enter your Email"
            />

            <br /><br />

            <p className="name-head">Enter Password</p>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="name-box pr-10 max-[479px]:w-full"
                name="mypassword"
                value={form.mypassword}
                onChange={handlechange}
                placeholder="Enter your Password"
              />
              <span
                className="absolute right-25 max-[479px]:right-3 text-black top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
              </span>
            </div>

            <br />

            <p className="name-head">Enter Confirm password</p>
            <div className="relative">
              <input
                type={showCPassword ? "text" : "password"}
                className="name-box pr-10 max-[479px]:w-full"
                name="mycpassword"
                value={form.mycpassword}
                onChange={handlechange}
                placeholder="Enter your Confirm Password"
              />
              <span
                className="absolute right-25 max-[479px]:right-3 text-black top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => setShowCPassword(!showCPassword)}
              >
                {showCPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
              </span>
            </div>

            <br /><br />

            <button
              type="submit"
              className="signup-button max-[479px]:w-full"
            >
              Sign up
            </button>

            <p className="signup-login max-[479px]:text-center">
              Already a user ?{' '}
              <span onClick={login} className="login">
                Log-in
              </span>
            </p>

          </form>
        </ElectricBorder>
      </div>
    </>
  )
}

export default Signup


