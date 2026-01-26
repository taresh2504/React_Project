import React from 'react'
import ElectricBorder from '../Component/ElectricBorder'
import '../Tailwind.css'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Signup = () => {

  let navigate = useNavigate() 

  let login =()=>{
    navigate('/login')
  }

  let handlechange = (e)=>{
    setform({...form,[e.target.name]:e.target.value})
  }

  let [form,setform] = useState({
    myname:'',
    mynumber:'',
    myemail:'',
    mypassword:'',
    mycpassword:''
  })

  let valid = true 

  let handlesubmit = (e)=>{
    e.preventDefault()

    if(form.myname.trim=''){
      alert('please enter your name')
      valid = false
    }

    else if(form.mynumber.trim=''){
      alert('please enter your contact number')
      valid = false
    }

    else if(isNaN(form.mynumber)){
      alert('please enter your number in digits')
      valid = false
    }

    else if(form.myemail.trim=''){
      alert('please enter your email')
      valid = false
    }

    else if(!(form.myemail.includes('@gmail.com')||form.myemail.includes('@yahoo.com')||form.myemail.includes('@outlook.com'))){
      alert('please enter a valid email')
      valid = false
    }

    else if(form.mypassword.trim=''){
      alert('please enter your password')
      valid = false
    }

    else if(!(form.mypassword.match(/[A-Z]/))){
      alert('password must contain one Capital Letter')
      valid = false
    }

    else if(!(form.mypassword.match(/[a-z]/))){
      alert('password must contain one small letter')
      valid = false
    }

    else if(!(form.mypassword.match(/[0-9]/))){
      alert('password must contain one number')
    }

    else if(!(form.mypassword.match(/[!@#$%&*-_.`~^/?]/))){
      alert('password must contain one special character')
      valid = false
    }

    else if(!(form.mypassword.length<7 && form.mypassword.length>16)){
      alert('password is greater than 7 and less than 16 digits')
      valid = false
    }

    else if(form.mycpassword.trim=''){
      alert('please enter your confirm password')
      valid = false
    }

    else if(form.mypassword != form.mycpassword){
      alert('password and confirm password are not same')
      valid = false
    }

    if (valid)
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
      <form className=' ml-8 font-serif' onSubmit={handlesubmit}>
      <h1 className='ml-38 text-3xl font-serif'>Sign up</h1>
      {/* <br /> */}
      <br />
      <p className='name-head'>Enter Name</p>
      <input type="text" className='name-box' placeholder='Enter your name' name="myname" value={form.myname} id="" onChange={handlechange} />
      <p></p>
      <br />
      <p className='name-head'>Enter Number</p>
      <input type="text" className='name-box' placeholder='Enter your number' name="mynumber" value={form.mynumber} id="" onChange={handlechange} />
      <p></p>
      <br />
      <p className='name-head'>Enter Email</p>
      <input type="email" className='name-box' placeholder='Enter your email' name="myemail" value={form.myemail} id="" onChange={handlechange} />
      <p></p>
      <br />
      <p className='name-head'>Enter Password</p>
      <input type="Password" className='name-box' placeholder='Enter your Password' name="mypassword" value={form.mypassword} id="" onChange={handlechange} />
      <p></p>
      <br />
      <p className='name-head'>Enter Confirm password</p>
      <input type="password" className='name-box' placeholder='Enter your Confirm password' name="mycpassword" value={form.mycpassword} id="" onChange={handlechange} />
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
