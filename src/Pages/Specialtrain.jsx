import React,{useEffect,useState} from 'react'
import '../App.css'
import { RiArrowLeftRightFill } from "react-icons/ri";
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import kalka from '../assets/Kalka-Shimla.jpg'
import baramula from '../assets/baramula-jammu.jpg'
import mumbaiGoa from '../assets/munbai_goa.jpg'
import darjeling from '../assets/jalpaiguri_darjeling.jpg'
import jaisalmer from '../assets/Jaisalmer-to-Jodhpur.jpg'

const Specialtrain = () => {

  let [specialdata, setspecialdata] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/special-trains")
      .then((res) => setspecialdata(res.data))
  }, [])

  const imageMap = {
    "Kalka-Shimla.jpg": kalka,
    "baramula-jammu.jpg": baramula,
    "munbai_goa.jpg": mumbaiGoa,
    "jalpaiguri_darjeling.jpg": darjeling,
    "Jaisalmer-to-Jodhpur.jpg": jaisalmer
  }

  let navigate = useNavigate()

  let bf = (item) => {
    navigate('/BookingForm', {
      state: {
        trainname: item.name,
        fromstation: item.source,
        tostation: item.destination,
        date: item.date,
        price: item.price
      }
    })
  }

  return (
    <>
      <br /><br />

      <div className="
        bg-[#0f172a]
        border border-[#1e293b]
        rounded-2xl
        shadow-lg
        w-full
        flex justify-center
      ">

        {/* 🔽 RESPONSIVE GRID */}
        <div className="
          grid
          grid-cols-1              /* mobile */
          sm:grid-cols-2           /* tablet */
          md:grid-cols-4           /* laptop – SAME */
          gap-6
          p-4 sm:p-6
          w-full
        ">
          {specialdata.map((item, index) => (
            <div
              key={index}
              className={`
                bg-[#0f172a]
                border border-[#1e293b]
                rounded-2xl
                overflow-hidden
                shadow-lg
                transition duration-300
                hover:shadow-2xl
                hover:-translate-y-1

                ${
                  index === specialdata.length - 1
                    ? 'md:col-span-4 md:mx-auto md:max-w-md'
                    : 'md:col-span-2'
                }
              `}
            >
              <img
                src={imageMap[item.image]}
                alt={item.name}
                className="
                  w-full
                  h-48 sm:h-56 md:h-64   /* image responsive */
                  object-cover
                "
              />

              <h1 className="p-3 sm:p-4 text-center text-xl sm:text-2xl font-semibold">
                {item.name}
              </h1>

              <div className="
                flex justify-center items-center gap-2
                font-serif
                text-lg sm:text-2xl
              ">
                {item.source}
                <RiArrowLeftRightFill />
                {item.destination}
              </div>

              <p className="text-center mt-3 font-serif text-base sm:text-lg font-bold">
                ₹{item.price} per person
              </p>

              <div className="flex justify-center my-4">
                <button
                  className="bookbutton2 w-[90%] sm:w-auto"
                  onClick={() => bf(item)}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  )
}

export default Specialtrain

