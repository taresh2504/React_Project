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
        price: price
      }
    })
  }

  return (
    <div className="
      bg-[#111827]
      border border-[#c9a227]
      rounded-xl
      shadow-lg
      text-gray-200
      transition-all duration-300 ease-in-out
      transform
      hover:bg-[#1f2933]
      hover:shadow-[0_0_25px_rgba(201,162,39,0.4)]
      hover:-translate-y-2

      /* 🔽 Responsive */
      w-[70%] mx-auto           /* mobile */
      sm:w-[75%]                /* tablet */
      md:w-96 md:ml-5           /* laptop (same as before) */

      p-4 sm:p-5
    ">

      <img
        src={image}
        className="
          w-full
          h-44 sm:h-48 md:h-52   /* image responsive */
          rounded-t-2xl
          object-cover
        "
        alt={name}
      />

      <h1 className="
        text-center
        text-[#c9a227]
        text-xl sm:text-2xl      /* text responsive */
        mt-2
      ">
        {name}
      </h1>

      <p className="trr text-center flex items-center justify-center gap-2 mt-2">
        {source} <RiArrowLeftRightFill /> {destination}
      </p>

      <p className="text-base sm:text-lg font-semibold text-center text-yellow-400 mt-2">
        ₹{price} per person
      </p>

      <button
        className="bookbutton w-full sm:w-50% -ml-5  mt-3"
        onClick={bf}
      >
        Book Now
      </button>
    </div>
  )
}

export default Trainroute
