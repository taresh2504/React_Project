import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FcCalendar } from "react-icons/fc";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FcAlarmClock } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BookingTrains = ({name,source,destination,departure_time,date}) => {

  // let Bf = navigate('/BookingForm')
  return (
    <>
      <div className='h-30 w-180 border-2 border-b-white rounded-2xl font-serif'>
        <p className='font-bold text-2xl ml-5 mt-4'>{name}</p>
        <div><p className='flex justify-items-center align-middle gap-4 ml-5' >{source} <FaArrowRightLong className='mt-1' /> {destination} </p></div>
        <div><p className='flex justify-items-center align-middle gap-4 ml-5'><FcCalendar className='mt-1.5 text-2xl' /><div className='mt-1.5 -ml-3'>{date}</div> <div className='text-2xl -ml-3'>|</div> <FcAlarmClock className='mt-1.5 text-2xl -ml-3' /><div className='mt-1.5 -ml-3'>{departure_time}</div></p></div>
        <div className='flex justify-center align-middle ml-130 -mt-15 '><button className='rounded-2xl pt-1 pl-1 pb-1 pr-1 bg-white text-black h-9 w-20 font-bold'><Link to={'/BookingForm'}>Book Now</Link></button></div>
      </div>
    </>
  )
}

export default BookingTrains

