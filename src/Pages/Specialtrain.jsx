import React, { useState } from 'react'
import '../App.css'
import { FaArrowRightLong } from "react-icons/fa6";
import { RiArrowLeftRightFill } from "react-icons/ri";
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Specialtrain = ({ image,name,source,destination,price }) => {

  let [mydata, setMyData] = useState({
    
  })

  // let handleSubmit = () => {
  //   axios.post("http://localhost:3000/special-train", mydata).then(()=>(
  //     alert("Booking confirm")
  //   ))
  // }

  let navigate = useNavigate('')

  let bf = ()=>{
    navigate('/BookingForm', {
    state: {
      trainname: name,
      fromstation: source,
      tostation: destination,
      // date: new Date().toISOString().slice(0,16) // optional
    }
  })
  }

  // flex justify-items-center align-middle gap-4 ml-14 font-serif text-2xl 
  return (
    <>
      <br />
      <br />
      <div className='bg-[#0f172a]
    border border-[#1e293b]
    rounded-2xl
    overflow-hidden
    shadow-lg
    transition
    duration-300
    hover:shadow-2xl
    hover:-translate-y-1
    h-130
    w-130'>
        <div><img src={image} className='h-64 w-full object-cover' alt="" /></div>
        <div><hr className='text-black' /></div>
        <div className='p-4 bg-gradient-to-b from-[#0f172a]/90 to-[#020617]'><h1 className='p-4 bg-gradient-to-b from-[#0f172a]/90 to-[#020617] text-center text-2xl'>{name}</h1></div>
        <div className='st'>{source} <RiArrowLeftRightFill  className='mt-1'/> {destination}</div>
        <div><p className='text-center mt-3 font-serif text-2xl' >{price} </p></div>
        <div className='flex justify-center align-middle'><button className='bookbutton2' onClick={bf}>Book Now</button></div>
        {/* <div><h2 className='text-gray-300 text-sm mt-2 text-center leading-relaxed'>{desc}</h2></div> */}
      </div>
      {/* <div className='border-2 border-black h-120 w-120 ml-4 rounded-2xl'>
        <div><img src={image}  className='h-60 w-120 rounded-t-2xl'  alt="" /></div>
        <div><hr className='text-black'/></div>
        <div><h1 className='text-black font-bold text-2xl mt-2 text-center'>{name}</h1></div>
        <div><h2 className='text-black mt-2 text-center'>{desc}</h2></div>
      </div> */}
      {/* <div className='border-2 border-black h-120 w-120 ml-4 rounded-2xl'>
        <div><img src={image}  className='h-60 w-120 rounded-t-2xl'  alt="" /></div>
        <div><hr className='text-black'/></div>
        <div><h1 className='text-black font-bold text-2xl mt-2 text-center'>{name}</h1></div>
        <div><h2 className='text-black mt-2 text-center'>{desc}</h2></div>
      </div> */}
      <br />
      <br />
    </>
  )
}

export default Specialtrain
