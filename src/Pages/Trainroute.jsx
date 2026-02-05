import React from "react" 
import { useNavigate } from "react-router-dom" 
import { RiArrowLeftRightFill } from "react-icons/ri";
  
  const Trainroute = ({ image, name, source, destination, price }) => {
  const navigate = useNavigate()

  const bf = () => {
    navigate('/BookingForm', {
      state: {
        trainname: name,
        fromstation: source,
        tostation: destination,
        price: price   // ✅ number
      }
    })
  }

  return (
    <div className="
    h-105 w-96 ml-5
    bg-[#111827]
    border border-[#c9a227]
    rounded-xl
    shadow-lg
    p-5
    text-gray-200

    transition-all duration-300 ease-in-out
    transform
    hover:bg-[#1f2933]
    hover:shadow-[0_0_25px_rgba(201,162,39,0.4)]
    hover:-translate-y-2
  ">
      <img src={image} className='h-52 w-96 rounded-t-2xl' />

      <h1 className='text-center text-[#c9a227] text-2xl'>{name}</h1>

      <p className='trr'>
        {source} <RiArrowLeftRightFill /> {destination}
      </p>

      <p className="text-lg font-semibold text-center text-yellow-400">
        ₹{price} per person
      </p>

      <button className='bookbutton' onClick={bf}>
        Book Now
      </button>
    </div>
  )
}

export default Trainroute
