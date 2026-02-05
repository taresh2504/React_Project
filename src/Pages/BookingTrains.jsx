import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FcCalendar } from "react-icons/fc";
import { RiArrowLeftRightFill } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FcAlarmClock } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { Link } from 'react-router-dom';

const BookingTrains = ({name,source,destination,price}) => {

  let navigate = useNavigate('')
  
    let bf = ()=>{
      navigate('/BookingForm', {
      state: {
        trainname: name,
        fromstation: source,
        tostation: destination,
        price: price
        // date: new Date().toISOString().slice(0,16) // optional
      }
    })
    }

  // let Bf = navigate('/BookingForm') className='mt-1.5 text-2xl'icon className='mt-1.5 text-2xl' price = className='mt-1.5 -ml-3'
  return (
    <>
      <div className='h-30 w-180 border-2 border-b-white rounded-2xl font-serif'>
        <p className='font-bold text-2xl ml-5 mt-4'>{name}</p>
        <div><p className='flex justify-items-center align-middle gap-4 ml-5' >{source} <RiArrowLeftRightFill className='mt-1' /> {destination} </p></div>
        <div><p className='ml-4'><MdOutlineCurrencyRupee className='mt-1.5 text-2xl' /><p className='ml-7 -mt-7 text-[20px] font-serif'>{price}</p></p></div>
        <div className='flex justify-center align-middle ml-130 -mt-15 '><button className='rounded-2xl pt-1 pl-1 pb-1 pr-1 bg-white text-black h-9 w-20 font-bold' onClick={bf}>Book Now</button></div>
      </div>
    </>
  )
}

export default BookingTrains

