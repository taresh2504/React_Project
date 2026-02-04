import React from 'react'
import Navbar from '../Component/Navbar'
import logo from '../assets/train-logo1.jpg'
import { FaTrainSubway } from "react-icons/fa6";
import { RiArrowLeftRightFill } from "react-icons/ri";
import '../App.css'
import BookingTrains from './BookingTrains';

const Trains = () => {
  let trainroutes = [
  {
    source: "Bhopal",
    destination: "Raipur",
    train_name: "Rajdhani Express",
    price: 2200
  },
  {
    source: "Kochi",
    destination: "Pune",
    train_name: "Deccan Queen",
    price: 1800
  },
  {
    source: "Bangalore",
    destination: "Chennai",
    train_name: "Shatabdi Express",
    price: 1500
  },
  {
    source: "Surat",
    destination: "Hyderabad",
    train_name: "Vande Bharat Express",
    price: 2500
  },
  {
    source: "Jaipur",
    destination: "Kolkata",
    train_name: "Poorva Express",
    price: 2000
  },
  {
    source: "Vadodra",
    destination: "Indore",
    train_name: "Shatabdi Express",
    price: 1600
  }
]


  // h-screen
  // bg-zinc-700
  return (
    <>
      <div className=' '>
        <div className='flex justify-center align-middle gap-3'>
          <FaTrainSubway className='h-20 w-7' /> <p className='font-bold text-4xl mt-5'>Search & Book Trains</p></div>
        <div className='train-searchbox'>
          <div className='box-holder'>
            <input type="search" name="" className='from-station' placeholder='From Station' id="" />
            <input type="search" name="" className='from-station' placeholder='To Station' id="" />
            <input type="search" name="" className='from-station' placeholder='Train Name' id="" />
          </div>
        </div>  
        
      </div>
     
      {/* <BookingTrains name={''} /> */}
      {trainroutes.map((e)=>{
        return(
          <div className='flex justify-center mt-5 -ml-9 '>
           <BookingTrains name={e.train_name} source={e.source} destination={e.destination} price={e.price} />
          </div> 
        )
      })}

    </>
  )
}

export default Trains
