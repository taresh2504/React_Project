import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar'
import Slider from '../Component/Slider'
import '../Tailwind.css'
import Trainroute from './Trainroute'
import Specialtrain from './Specialtrain'
import axios from 'axios'

// static images
import mhe from '../assets/Maharaja_Express.jpg'
import pow from '../assets/palace-on-wheels.jpg'
import tdo from '../assets/train-deccan-odyssey18.jpg'

const Home = () => {

  const [trainRoutes, setTrainRoutes] = useState([])

  // 🔥 IMAGE MAPPING (STATIC)
  const trainImages = {
    "Maharaja's Express": mhe,
    "Palace on Wheels": pow,
    "The Deccan Odyssey": tdo
  }

  useEffect(() => {
    axios.get("http://localhost:3000/train-route")
      .then((res) => {
        setTrainRoutes(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <Slider />

      {/* Heading */}
      <h1 className='text-center mt-4 text-2xl sm:text-3xl md:text-4xl text-[#c9a227]'>
        Explore premium
      </h1>

      {/* 🔁 DYNAMIC TRAIN CARDS */}
      <div className='px-4 mt-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center'>
          {trainRoutes.map((train) => (
            <Trainroute
              key={train.id}
              image={trainImages[train.name]}
              name={train.name}
              source={train.source}
              destination={train.destination}
              price={train.price}
            />
          ))}
        </div>
      </div>

      {/* Winter Special */}
      <h1 className='text-center mt-10 text-2xl sm:text-3xl md:text-4xl text-[#e5e7eb]'>
        Winter Special
      </h1>

      <div className='flex justify-center items-center px-4 mt-6'>
        <Specialtrain />
      </div>
    </>
  )
}

export default Home
