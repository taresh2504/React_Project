import React from 'react'
import Navbar from '../Component/Navbar'
import logo from '../assets/train-logo1.jpg'
import { FaTrainSubway } from "react-icons/fa6";
import '../App.css'

const Trains = () => {
  return (
    <div>
      <Navbar/>
      <div className='bg-zinc-700 h-screen'>
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
    </div>
  )
}

export default Trains
