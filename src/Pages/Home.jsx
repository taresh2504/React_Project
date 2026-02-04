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

  // image mapping (KEY PART 🔥)
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

      <h1 className='text-center mt-4 text-4xl text-[#c9a227]'>
        Explore premium
      </h1>

      <br /><br />

      {/* 🔁 DYNAMIC RENDER */}
      <div className='flex justify-center align-middle gap-2'>
        {trainRoutes.map((train) => (
          <Trainroute
            key={train.id}
            image={trainImages[train.name]}
            name={train.name}
            source={train.source}
            destination={train.destination}
            date={train.date}
            price={`₹${train.price} per person`}
          />
        ))}
      </div>

      <br />

      <h1 className='text-center mt-4 text-4xl text-[#e5e7eb]'>
        Winter Special
      </h1>

      <br />

      <div className='flex justify-center items-center'>
        <Specialtrain />
      </div>
    </>
  )
}

export default Home
