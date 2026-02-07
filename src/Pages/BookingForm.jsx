import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const BookingForm = () => {
  let navigate = useNavigate()
  const location = useLocation()
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
    price: trainData.price || 0,   // per person
    totalPrice: 0,
    userEmail: localStorage.getItem("useremail")
  })

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

  const handlesubmit = (e) => {
    e.preventDefault()
    let valid = true

    if (form.passangername.trim() === '') {
      alert('Passanger name cannot be empty')
      valid = false
    }
    else if (form.numberofpassanger.trim() === '' || isNaN(form.numberofpassanger) || form.numberofpassanger <= 0) {
      alert('Please enter valid number of passengers')
      valid = false
    }
    else if (form.age.trim() === '' || isNaN(form.age) || form.age <= 0) {
      alert('Please enter valid age')
      valid = false
    }
    else if (form.date.trim() === '') {
      alert('Please select journey date')
      valid = false
    }
    else if (form.coach.trim() === '') {
      alert('Please select coach')
      valid = false
    }
    else if (form.gender === '') {
      alert('Please select gender')
      valid = false
    }

    if (valid) {
      let loggedEmail = localStorage.getItem("useremail")

      axios.post("http://localhost:3000/booking-data", {
        ...form,
        loggedUser: loggedEmail
      })
        .then(() => {
          alert("Booking successful ✅")
          navigate("/my_bookings")
        })
        .catch(() => {
          alert("Error in booking")
        })
    }
  }

  return (
    <>
      {/* DESKTOP SAME, MOBILE FIX */}
      <div className="ml-115 mt-5 max-[479px]:ml-0 max-[479px]:px-3">

        <div className="text-center border-2 border-white w-100 h-140 rounded-2xl
                        max-[479px]:w-full max-[479px]:h-auto">

          <form onSubmit={handlesubmit}>

            <h1 className="mt-4 font-serif text-2xl font-bold">
              Booking Form
            </h1>

            <div className="mt-3">
              <input
                type="text"
                className="formbox max-[479px]:w-full"
                placeholder="Enter Train name"
                name="trainname"
                readOnly
                value={form.trainname}
              />
            </div>

            <div className="mt-3">
              <input
                type="text"
                className="formbox max-[479px]:w-full"
                placeholder="Enter name"
                name="passangername"
                onChange={handlechange}
                value={form.passangername}
              />
            </div>

            <div className="mt-3">
              <input
                type="text"
                className="formbox max-[479px]:w-full"
                placeholder="No. of Passenger"
                name="numberofpassanger"
                value={form.numberofpassanger}
                onChange={handlechange}
              />
            </div>

            <div className="mt-3">
              <input
                type="text"
                className="formbox max-[479px]:w-full"
                placeholder="Total Price"
                value={form.totalPrice}
                readOnly
              />
            </div>

            <div className="mt-3">
              <input
                type="text"
                className="formbox max-[479px]:w-full"
                placeholder="From Station"
                name="fromstation"
                readOnly
                value={form.fromstation}
              />
            </div>

            <div className="mt-3">
              <input
                type="text"
                className="formbox max-[479px]:w-full"
                placeholder="To Station"
                name="tostation"
                readOnly
                value={form.tostation}
              />
            </div>

            <div className="mt-3">
              <input
                type="text"
                className="formbox max-[479px]:w-full"
                placeholder="Enter age"
                name="age"
                onChange={handlechange}
                value={form.age}
              />
            </div>

            <div className="mt-3">
              <input
                type="date"
                className="formbox max-[479px]:w-full"
                name="date"
                onChange={handlechange}
                value={form.date}
              />
            </div>

            <div className="mt-3">
              <select
                name="coach"
                value={form.coach}
                className="formbox max-[479px]:w-full"
                onChange={handlechange}
              >
                <option value="" disabled>Select Coach</option>
                <option value="Sleeper">Sleeper</option>
                <option value="General">General</option>
                <option value="ACtier1">AC Tier 1</option>
                <option value="ACtier2">AC Tier 2</option>
                <option value="ACtier3">AC Tier 3</option>
              </select>
            </div>

            <div className="mt-3">
              <div className="formbox2 max-[479px]:w-full">
                <div className="flex justify-center gap-4 max-[479px]:flex-col max-[479px]:items-start max-[479px]:pl-4">
                  <label className="male">
                    Male
                    <input type="radio" name="gender" value="Male" onChange={handlechange} className="ml-1" />
                  </label>

                  <label className="female">
                    Female
                    <input type="radio" name="gender" value="Female" onChange={handlechange} className="ml-1" />
                  </label>

                  <label className="other">
                    Other
                    <input type="radio" name="gender" value="Other" onChange={handlechange} className="ml-1" />
                  </label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="confirmbooking max-[479px]:w-full max-[479px]:mt-4"
            >
              Confirm Booking
            </button>

          </form>
        </div>
      </div>
    </>
  )
}

export default BookingForm
