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
    price: 0,           // ✅ ADD
    totalPrice: 0,
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
  const { name, value } = e.target

  if (name === "numberofpassanger") {
    const total = Number(value) * Number(formData.price)

    setFormData({
      ...formData,
      numberofpassanger: value,
      totalPrice: total
    })
  } else {
    setFormData({
      ...formData,
      [name]: value
    })
  }
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
    <>
    <div className="mt-6 flex justify-center align-middle">
      <table className="w-fit border border-gray-400 border-collapse">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="border border-gray-400 px-3 py-2 text-[#c9a227]">Train Name</th>
            <th className="border border-gray-400 px-3 py-2 text-[#c9a227]">Passenger Name</th>
            <th className="border border-gray-400 px-3 py-2 text-[#c9a227]">Age</th>
            <th className="border border-gray-400 px-3 py-2 text-[#c9a227]">Coach</th>
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
              <td className="border border-gray-400 px-3 py-2 text-center">{item.coach}</td>
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
      </div>

    <div>
      {open && (
        <div className='ml-115 mt-5'>
        <div className='flex justify-center align-middle text-center border-2 border-white w-100 h-140 rounded-2xl'>
          <form onSubmit={handlesubmit}>

          <h1 className='mt-4 font-serif text-2xl font-bold'>Update Form</h1>

          <div className='mt-3'>
            <input type="text" name="trainname" value={formData.trainname} className='formbox' onChange={handlechange}/> <br />
          </div>

          <div className='mt-3'>       
            <input type="text" name="passangername" className='formbox' value={formData.passangername} onChange={handlechange}/>
          </div> 

        <div className='mt-3'>
            <input type="text" name="age" className='formbox' value={formData.age} onChange={handlechange}/>
        </div>

        <div className='mt-3'>
            <input type="text" name="numberofpassanger" className='formbox' value={formData.numberofpassanger} onChange={handlechange}/>
        </div>

        <div className='mt-3'>
          <input type="text" className="formbox" placeholder="Total Price" value={`${formData.totalPrice}`} readOnly/> <br />
        </div>

        <div className='mt-3'>
            <input type="text" name="fromstation" className='formbox' value={formData.fromstation} onChange={handlechange}/>
        </div>

        <div className='mt-3'>
            <input type="text" name="tostation" className='formbox' value={formData.tostation} onChange={handlechange}/>
        </div>

        <div className='mt-3'>
            <input type="date" name="date" className='formbox' value={formData.date} onChange={handlechange}/>
        </div>

        <div className='mt-3'>
        <select name="coach" value={formData.coach} placeholder='Select Coach' className='formbox' onChange={handlechange} id="">
          <option value="" disabled>Select Coach</option>
          <option value="Sleeper">Sleeper</option>
          <option value="General">General</option>
          <option value="ACteir1">ACtier1</option>
          <option value="ACteir2">ACtier2</option>
          <option value="ACteir3">ACtier3</option>
        </select> <br />
        </div>

        <div className='mt-3'>
        <div className='formbox3'>
        <div className='flex justify-center align-middle gap-4'> 
        <span className='male'>Male<input type="radio" className='ml-0.5' name="gender" value="Male" onChange={handlechange} id="" /></span>
        <span className='female'>Female<input type="radio" className='ml-0.5' name="gender" value="Female" onChange={handlechange} id="" /> </span>
        <span className='other'>Other<input type="radio" className='ml-0.5' name="gender" value="Other" onChange={handlechange} id="" /></span>
        </div>
        </div> 
        </div>

          <button type="submit" className='confirmbooking'>Update Booking</button>
          </form>
        </div> 
      </div>             
      )}
    </div>
    
    </>
  )
}

export default My_bookings
