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
    coach: "",
    gender: "",
    numberofpassanger: "",
    price: 0,
    totalPrice: 0,
    fromstation: "",
    tostation: "",
    date: ""
  })

  let currentEmail = localStorage.getItem("useremail")

  const loadData = async () => {
    const api = "http://localhost:3000/booking-data"
    const response = await axios.get(api)
    const filterData = response.data.filter(
      (item) => item.loggedUser === currentEmail
    )
    setMyData(filterData)
  }

  const myCancel = async (id) => {
    await axios.delete(`http://localhost:3000/booking-data/${id}`)
    alert("Booking deleted")
    loadData()
  }

  const myEdit = (item) => {
    setMyId(item.id)
    setFormData(item)
    setOpen(true)
  }

  const handlechange = (e) => {
    const { name, value } = e.target

    if (name === "numberofpassanger") {
      const total = Number(value) * Number(formData.price)
      setFormData({ ...formData, numberofpassanger: value, totalPrice: total })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

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
    <>
      {/* ✅ TABLE WRAPPER (desktop untouched, mobile scroll) */}
      <div className="mt-6 px-2 flex justify-center">
        <div className="w-full max-w-[1200px] overflow-x-auto">
          <table className="min-w-[900px] border border-gray-400 border-collapse">
            <thead className="bg-gray-800 text-white">
              <tr>
                {[
                  "Train",
                  "Passenger",
                  "Age",
                  "Coach",
                  "Gender",
                  "Passengers",
                  "Total",
                  "From",
                  "To",
                  "Date",
                  "Edit",
                  "Cancel"
                ].map((h) => (
                  <th
                    key={h}
                    className="border border-gray-400 px-3 py-2 text-[#c9a227] text-sm"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {mydata.map((item) => (
                <tr key={item.id}>
                  <td className="border px-2 py-1 text-center">{item.trainname}</td>
                  <td className="border px-2 py-1 text-center">{item.passangername}</td>
                  <td className="border px-2 py-1 text-center">{item.age}</td>
                  <td className="border px-2 py-1 text-center">{item.coach}</td>
                  <td className="border px-2 py-1 text-center">{item.gender}</td>
                  <td className="border px-2 py-1 text-center">{item.numberofpassanger}</td>
                  <td className="border px-2 py-1 text-center">₹{item.totalPrice}</td>
                  <td className="border px-2 py-1 text-center">{item.fromstation}</td>
                  <td className="border px-2 py-1 text-center">{item.tostation}</td>
                  <td className="border px-2 py-1 text-center">{item.date}</td>

                  <td className="border px-2 py-1 text-center">
                    <button
                      className="bg-green-600 text-white px-3 py-1 rounded"
                      onClick={() => myEdit(item)}
                    >
                      Edit
                    </button>
                  </td>

                  <td className="border px-2 py-1 text-center">
                    <button
                      className="bg-red-600 text-white px-3 py-1 rounded"
                      onClick={() => myCancel(item.id)}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ✅ UPDATE FORM – MOBILE MAX 479px */}
      {open && (
        <div className="mt-8 flex justify-center px-2">
          <div className="w-full max-w-[479px] border-2 border-white rounded-2xl p-4">
            <form onSubmit={handlesubmit}>
              <h1 className="text-center text-2xl font-bold mb-4">Update Booking</h1>

              {[
                ["trainname", "Train Name"],
                ["passangername", "Passenger Name"],
                ["age", "Age"],
                ["numberofpassanger", "No. of Passenger"],
                ["fromstation", "From"],
                ["tostation", "To"]
              ].map(([name, label]) => (
                <input
                  key={name}
                  type="text"
                  name={name}
                  value={formData[name]}
                  onChange={handlechange}
                  placeholder={label}
                  className="formbox mt-3 w-full"
                />
              ))}

              <input
                type="text"
                value={`₹ ${formData.totalPrice}`}
                readOnly
                className="formbox mt-3 w-full"
              />

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handlechange}
                className="formbox mt-3 w-full"
              />

              <select
                name="coach"
                value={formData.coach}
                onChange={handlechange}
                className="formbox mt-3 w-full"
              >
                <option value="" disabled>Select Coach</option>
                <option>Sleeper</option>
                <option>General</option>
                <option>ACtier1</option>
                <option>ACtier2</option>
                <option>ACtier3</option>
              </select>

              <button type="submit" className="confirmbooking mt-4 w-full">
                Update Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default My_bookings
