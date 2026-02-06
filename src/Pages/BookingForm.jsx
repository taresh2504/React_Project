import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const BookingForm = () => {
            let navigate = useNavigate()

  const location = useLocation()
  // const trainData = location.state || {}

  const handlechange = (e) => {
  const { name, value } = e.target

  if (name === "numberofpassanger") {
    const total = Number(value) * Number(form.price)
    setform({
      ...form,
      numberofpassanger: value,
      totalPrice: total
    })
  } else {
    setform({ ...form, [name]: value })
  }
}


  const trainData = location.state || {}

  const [form, setform] = useState({
  trainname: trainData.trainname || '',
  passangername: '',
  numberofpassanger: '',
  fromstation: trainData.fromstation || '',
  tostation: trainData.tostation || '',
  age: '',
  date: '',
  gender: '',
  coach: '',
  price: trainData.price || 0,      // ✅ per person
  totalPrice: 0  ,                   // ✅ calculated 
  userEmail: localStorage.getItem("useremail")
})


    let handlesubmit=(e)=>{
      e.preventDefault()
      let valid = true 

      if (form.passangername.trim()==''){
        alert('Passanger name cannot be empty')
        valid = false
      }

      else if (form.numberofpassanger.trim()==''){
        alert('Number of passanger Cannot be empty')
        valid = false
      }

      else if (isNaN(form.numberofpassanger)){
        alert('please write number passanger in digit')
        valid=false
      }

      else if(form.numberofpassanger.length <= 0){
        alert('please enter valid number of passanger')
        valid=false
      }

      else if(form.numberofpassanger <= 0){
        alert('please enter valid number of passanger')
        valid=false
      }

      else if(form.fromstation.trim()==''){
        alert('please enter source station name')
        valid=false
      }

      else if(form.tostation.trim()==''){
        alert('please enter destination station name')
        valid=false
      }

      else if(form.age.trim()==''){
        alert('please enter your age')
        valid = false
      }

      else if(isNaN(form.age)){
        alert('please enter your age in number')
        valid = false
      }

      else if (form.age<=0){
        alert('please enter a valid age')
        valid = false
      }

      else if(form.age.length <= 0 && form.age.length >999){
        alert('please enter age between 1 to 999')
        valid = false
      }

      else if(form.date.trim()==''){
        alert('please enter journey date')
        valid = false
      }

      else if(form.coach.trim()==''){
        alert('please select coach')
        valid = false
      }

      else if (form.gender === ''){
        alert('Please select gender')
        valid = false
      }

      if(valid){
        let loggedEmail = localStorage.getItem("useremail")
        axios.post("http://localhost:3000/booking-data", {...form,price: form.price, loggedUser:loggedEmail}).then(()=>{
          alert("Booking successful")
          navigate("/my_bookings")
        }).catch((err)=>{
          alert("Error in booking")
        })
      }

    }

  return (
    <>
    <div className='ml-115 mt-5'>
      <div className='text-center border-2 border-white w-100 h-140 rounded-2xl'>
      <form onSubmit={handlesubmit}>
        <h1 className='mt-4 font-serif text-2xl font-bold'>Booking Form</h1>
        <div className='mt-3'>
        <input type="text" className='formbox' placeholder='Enter Train name' name="trainname" onChange={handlechange} readOnly value={form.trainname} id="" /> <br />
        </div>
        <div className='mt-3'>
        <input type="text" className='formbox' placeholder='Enter name' name="passangername" onChange={handlechange} value={form.passangername} id="" /> <br />
        </div>
        <div className='mt-3'>
          <input type="text" className="formbox" placeholder="No. of Passenger" name="numberofpassanger" value={form.numberofpassanger} onChange={handlechange}/><br />
        </div>
        <div className='mt-3'>
          <input type="text" className="formbox" placeholder="Total Price" value={`${form.totalPrice}`} readOnly/> <br />
        </div>
        <div className='mt-3'>
          <input type="text" className='formbox' placeholder='From Station' name="fromstation" onChange={handlechange} readOnly value={form.fromstation} id="" /> <br />
        </div>
        <div className='mt-3'>
          <input type="text" className='formbox' placeholder='To Station' name="tostation" onChange={handlechange} readOnly value={form.tostation} id="" /> <br />
        </div>
        <div className='mt-3'>
          <input type="text" className='formbox' placeholder='Enter age' name="age" onChange={handlechange} value={form.age} id="" /> <br />
        </div>
        <div className='mt-3'>
           <input type="date" className='formbox' name="date" onChange={handlechange} value={form.date} id="" /> <br />
        </div>
        <div className='mt-3'>
        <select name="coach" placeholder='Select Coach' value={form.coach} className='formbox' onChange={handlechange} id="">
          <option value="" disabled>Select Coach</option>
          <option value="Sleeper">Sleeper</option>
          <option value="General">General</option>
          <option value="ACteir1">ACtier1</option>
          <option value="ACteir2">ACtier2</option>
          <option value="ACteir3">ACtier3</option>
        </select> <br />
        </div>
        <div className='mt-3'>
        <div className='formbox2'>
        <div className='flex justify-center align-middle gap-4'> 
        <span className='male'>Male<input type="radio" className='ml-0.5' name="gender" value="Male" onChange={handlechange} id="" /></span>
        <span className='female'>Female<input type="radio" className='ml-0.5' name="gender" value="Female" onChange={handlechange} id="" /> </span>
        <span className='other'>Other<input type="radio" className='ml-0.5' name="gender" value="Other" onChange={handlechange} id="" /></span>
        </div>
        </div> 
        </div>
        <button type="submit" className='confirmbooking'>Confirm Booking</button><br />
      </form>
    </div>
    </div>
    </>
  )
}

export default BookingForm
