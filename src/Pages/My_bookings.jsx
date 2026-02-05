import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../Tailwind.css'

const My_bookings = () => {
  const [mydata, setMyData] = useState([])
  const [myId, setMyId] = useState(null)
  const [open, setOpen] = useState(false)

  const [formData, setFormData] = useState({
    trainname: "",
    passangername: "",
    age: "",
    gender: "",
    numberofpassanger: "",
    fromstation: "",
    tostation: "",
    date: ""
  })

  let currentEmail = localStorage.getItem("useremail")


  const loadData = async () => {
    const api = "http://localhost:3000/booking-data"
    const response = await axios.get(api)

    let filterData = response.data.filter(
      (item) => item.loggedUser == currentEmail
    )
    setMyData(filterData)
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
    <div className="mt-6 flex justify-center align-middle">
      <table className="w-fit border border-gray-400 border-collapse">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="border border-gray-400 px-3 py-2 text-[#c9a227]">Train Name</th>
            <th className="border border-gray-400 px-3 py-2 text-[#c9a227]">Passenger Name</th>
            <th className="border border-gray-400 px-3 py-2 text-[#c9a227]">Age</th>
            <th className="border border-gray-400 px-3 py-2 text-[#c9a227]">Gender</th>
            <th className="border border-gray-400 px-3 py-2 text-[#c9a227]">No. of Passenger</th>
            <th className="border border-gray-400 px-3 py-2 text-[#c9a227]">Total Price</th>
            <th className="border border-gray-400 px-3 py-2 text-[#c9a227]">From</th>
            <th className="border border-gray-400 px-3 py-2 text-[#c9a227]">To</th>
            <th className="border border-gray-400 px-3 py-2 text-[#c9a227]">Date</th>
            <th className="border border-gray-400 px-3 py-2 text-[#c9a227]">Edit</th>
            <th className="border border-gray-400 px-3 py-2 text-[#c9a227]">Cancel</th>
          </tr>
        </thead>

        <tbody className='gap-3 border-2 ml-80 border-white'>
          {mydata.map((item) => (
            <tr key={item.id}>
              <td className="border border-gray-400 px-3 py-2 text-center">{item.trainname}</td>
              <td className="border border-gray-400 px-3 py-2 text-center">{item.passangername}</td>
              <td className="border border-gray-400 px-3 py-2 text-center">{item.age}</td>
              <td className="border border-gray-400 px-3 py-2 text-center">{item.gender}</td>
              <td className="border border-gray-400 px-3 py-2 text-center">{item.numberofpassanger}</td>
              <td className="border border-gray-400 px-3 py-2 text-center">₹{item.totalPrice}</td>
              <td className="border border-gray-400 px-3 py-2 text-center">{item.fromstation}</td>
              <td className="border border-gray-400 px-3 py-2 text-center">{item.tostation}</td>
              <td className="border border-gray-400 px-3 py-2 text-center">{item.date}</td>
              <td className="border border-gray-400 px-3 py-2 text-center">
                <button
                  className="bg-green-600 text-white px-3 py-1 rounded text-center"
                  onClick={() => myEdit(item)}
                >
                  Edit
                </button>
              </td>
              <td className="border border-gray-400 px-3 py-2 text-center">
                <button
                  className="bg-red-600 text-white px-3 py-1 rounded text-center"
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
  value={formData.trainname}
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
