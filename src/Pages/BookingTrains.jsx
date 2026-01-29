import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FcCalendar } from "react-icons/fc";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FcAlarmClock } from "react-icons/fc";

const BookingTrains = () => {
  return (
    <>
      <div className='h-30 w-180 border-2 border-b-white rounded-2xl font-serif'>
        <p className='font-bold text-2xl ml-5 mt-4'>Rajdhani Express</p>
        <div><p className='flex justify-items-center align-middle gap-4 ml-5' >Delhi <FaArrowRightLong className='mt-1' /> Mumbai </p></div>
        <div><p className='flex justify-items-center align-middle gap-4 ml-5'><FcCalendar className='mt-1.5 text-2xl' /><div className='mt-1.5 -ml-3'>29 Jan 2026</div> <div className='text-2xl -ml-3'>|</div> <FcAlarmClock className='mt-1.5 text-2xl -ml-3' /><div className='mt-1.5 -ml-3'>05:00 P.M</div></p></div>
        <div className='flex justify-center align-middle ml-130 -mt-15 '><button className='rounded-2xl pt-1 pl-1 pb-1 pr-1 bg-white text-black h-9 w-20 font-bold ' >Book Now</button></div>
      </div>
    </>
  )
}

export default BookingTrains
