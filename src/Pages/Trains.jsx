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
    "source": "Bhopal",
    "destination": "Raipur",
    "train_name": "Rajdhani Express",
    "departure_time": "03:00 PM",
    "date": "29 Jan 2026"
  },
  {
    "source": "Kochi",
    "destination": "Pune",
    "train_name": "Deccan Queen",
    "departure_time": "07:00 AM",
    "date": "01 Feb 2026"
  },
  {
    "source": "Bangalore",
    "destination": "Chennai",
    "train_name": "Shatabdi Express",
    "departure_time": "06:00 AM",
    "date": "04 Feb 2026"
  },
  {
    "source": "Surat",
    "destination": "Hyderabad",
    "train_name": "Vande Bharat Express",
    "departure_time": "05:30 AM",
    "date": "10 Feb 2026"
  },
  {
    "source": "Jaipur",
    "destination": "Kolkata",
    "train_name": "Poorva Express",
    "departure_time": "05:45 PM",
    "date": "15 Feb 2026"
  },
  {
    "source": "Vadodra",
    "destination": "Indore",
    "train_name": "Shatabdi Express",
    "departure_time": "12:00 PM",
    "date": "20 Feb 2026"
  },
  {
    "source": "Delhi",
    "destination": "Lucknow",
    "train_name": "Maharaja Express",
    "departure_time": "09:00 PM",
    "date": "25 Feb 2026"
  },
  {
    "source": "Kanpur",
    "destination": "Agra",
    "train_name": "Palace on Wheels",
    "departure_time": "10:00 PM",
    "date": "22 Feb 2026"
  },
  {
    "source": "Mumbai",
    "destination": "Nashik",
    "train_name": "Deccan Odyssey",
    "departure_time": "12:00 PM",
    "date": "20 Feb 2026"
  },
  {
    "source": "Kalka",
    "destination": "Shimla",
    "train_name": "Kalka Shimla Toy Train",
    "departure_time": "01:00 PM",
    "date": "28 Feb 2026"
  },
  {
    "source": "Banihal",
    "destination": "Baramulla",
    "train_name": "Banihal Baramulla Demu",
    "departure_time": "04:00 PM",
    "date": "15 Feb 2026"
  },
  {
    "source": "nagpur",
    "destination": "Madgaon",
    "train_name": "Shatabdi Express",
    "departure_time": "07:00 AM",
    "date": "01 Apr 2026"
  },
  {
    "source": "New Jalpaiguri",
    "destination": "Darjelling",
    "train_name": "New Jalpaiguri to Darjeling Toy Train",
    "departure_time": "08:00 AM",
    "date": "25 Apr 2026"
  },
  {
    "source": "Jaisalmer",
    "destination": "Jodhpur",
    "train_name": "Jaisalmer Jodhpur Express",
    "departure_time": "05:00 AM",
    "date": "30 Apr 2026"
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
           <BookingTrains name={e.train_name} source={e.source} destination={e.destination} departure_time={e.departure_time} date={e.date} />
          </div> 
        )
      })}

    </>
  )
}

export default Trains
