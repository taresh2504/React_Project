import React from 'react'
import '../Tailwind.css'
import '../App.css'
import { FaArrowRightLong } from "react-icons/fa6";
import { RiArrowLeftRightFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const Trainroute = ({image, name,source,destination,price }) => {

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
  // let Train = {
  //     mhx : {mhe}
  // }
  // flex justify-items-center align-middle gap-4 ml-20.5 text-center font-serif text-2xl
  return (
    <>
      <br />
      <br />
      <div className="h-105 w-96 ml-5 bg-[#111827] border border-[#c9a227] rounded-xl shadow-lg p-5 text-gray-200 transition duration-300 hover:bg-[#1f2933] hover:shadow-[0_0_25px_rgba(201,162,39,0.4)] hover:-translate-y-2">
        <div><img src={image} className='h-52 w-96 rounded-t-2xl' alt="" /></div>
        <div><hr className='text-black ' /></div>
        <div><h1 className='text-center text-[#c9a227] text-xl font-semibold mb-2'>{name}</h1></div>
        <div><p className='trr'>{source} <RiArrowLeftRightFill  className='mt-1'/> {destination} </p></div>
        <div><p className='flex justify-items-center align-middle gap-4 ml-14 mt-3 font-serif text-2xl' >{price} </p></div>
        <div><button className='bookbutton' onClick={bf}>Book Now</button></div>
        {/* <div><h2 className='text-center text-gray-300 text-sm'>{desc}</h2></div> */}
      </div>
      {/* <div className='border-2 border-black h-96 w-96 ml-5 rounded-2xl '>
        <div><img src={image}  className='h-52 w-96 rounded-t-2xl'  alt="" /></div>
        <div><hr className='text-black '/></div>
        <div><h1 className='text-black font-bold text-2xl text-center'>{name}</h1></div>
        <div><h2 className='text-black text-center'>{desc}</h2></div>
      </div> */}
    </>
  )
}

export default Trainroute
