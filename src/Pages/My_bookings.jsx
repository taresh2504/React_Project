import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../Tailwind.css'

const My_bookings = () => {
  const [mydata, setMyData] = useState([])
  const [myId, setMyId] = useState(null)
  const [open, setOpen] = useState(false)

  const [formData, setFormData] = useState({
    trainame: "",
    passangername: "",
    age: "",
    gender: "",
    numberofpassanger: "",
    fromstation: "",
    tostation: "",
    date: ""
  })

  const loadData = async () => {
    const api = "http://localhost:3000/booking-data"
    const response = await axios.get(api)
    setMyData(response.data)
  }

  const myCancel = async (id) => {
    await axios.delete(`http://localhost:3000/booking-data/${id}`)
    alert("Booking deleted")
    loadData()
  }

  // 👉 EDIT CLICK
  const myEdit = (item) => {
    setMyId(item.id)
    setFormData(item)
    setOpen(true)
  }

  // 👉 INPUT CHANGE
  const handlechange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // 👉 UPDATE SUBMIT
  const handlesubmit = async (e) => {
    e.preventDefault()
    await axios.put(
      `http://localhost:3000/booking-data/${myId}`,
      formData
    )
    alert("Booking Updated")
    setOpen(false)
    loadData()
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div>
      <table>
        <thead>
          <tr className='flex justify-center align-middle gap-3 border-2 ml-80 border-white mt-5'>
            <th>Train Name</th>
            <th>Passenger Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>No. of Passenger</th>
            <th>From</th>
            <th>To</th>
            <th>Date</th>
            <th>Edit</th>
            <th>Cancel</th>
          </tr>
        </thead>

        <tbody className='flex flex-col justify-center align-middle gap-3 border-2 ml-80 border-white'>
          {mydata.map((item) => (
            <tr key={item.id}>
              <td>{item.trainname}</td>
              <td>{item.passangername}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
              <td>{item.numberofpassanger}</td>
              <td>{item.fromstation}</td>
              <td>{item.tostation}</td>
              <td>{item.date}</td>
              <td>
                <button
                  className='px-3 py-2 bg-green-500'
                  onClick={() => myEdit(item)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className='px-3 py-2 bg-red-500'
                  onClick={() => myCancel(item.id)}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {open && (
        <div className='mt-5'>
          <form onSubmit={handlesubmit}>
<input
  type="text"
  name="trainame"
  value={formData.trainame}
  onChange={handlechange}
/>

<input
  type="text"
  name="passangername"
  value={formData.passangername}
  onChange={handlechange}
/>

<input
  type="text"
  name="age"
  value={formData.age}
  onChange={handlechange}
/>

<input
  type="text"
  name="numberofpassanger"
  value={formData.numberofpassanger}
  onChange={handlechange}
/>

<input
  type="text"
  name="fromstation"
  value={formData.fromstation}
  onChange={handlechange}
/>

<input
  type="text"
  name="tostation"
  value={formData.tostation}
  onChange={handlechange}
/>

<input
  type="date"
  name="date"
  value={formData.date}
  onChange={handlechange}
/>


            <button type="submit">Update Booking</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default My_bookings
