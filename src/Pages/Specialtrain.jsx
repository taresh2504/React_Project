import React,{useEffect,useState} from 'react'
import '../App.css'
import { FaArrowRightLong } from "react-icons/fa6";
import { RiArrowLeftRightFill } from "react-icons/ri";
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import kalka from '../assets/Kalka-Shimla.jpg'
import baramula from '../assets/baramula-jammu.jpg'
import mumbaiGoa from '../assets/munbai_goa.jpg'
import darjeling from '../assets/jalpaiguri_darjeling.jpg'
import jaisalmer from '../assets/Jaisalmer-to-Jodhpur.jpg'


const Specialtrain = () => {

  let [specialdata,setspecialdata] = useState([])
  useEffect(()=>{
    let api = "http://localhost:3000/special-trains"
  axios.get(api).then((res)=>{
    console.log(res.data);
    setspecialdata(res.data)
    
  })
},[])

  // let handleSubmit = () => {
  //   axios.post("http://localhost:3000/special-train", mydata).then(()=>(
  //     alert("Booking confirm")
  //   ))
  // }

const imageMap = {
  "Kalka-Shimla.jpg": kalka,
  "baramula-jammu.jpg": baramula,
  "munbai_goa.jpg": mumbaiGoa,
  "jalpaiguri_darjeling.jpg": darjeling,
  "Jaisalmer-to-Jodhpur.jpg": jaisalmer
}


  let navigate = useNavigate('')

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

  // flex justify-items-center align-middle gap-4 ml-14 font-serif text-2xl 
  return (
    <>
      <br />
      <br />
      <div className='bg-[#0f172a]
    border border-[#1e293b]
    rounded-2xl
    overflow-hidden
    shadow-lg
    transition
    duration-300
    hover:shadow-2xl
    hover:-translate-y-1
    h-full
    w-full flex items-center justify-center flex-wrap '>
<div className="grid grid-cols-4 gap-6 p-6">
  {specialdata.map((item, index) => (
    <div
      key={index}
      className={`
        bg-[#0f172a]
        border border-[#1e293b]
        rounded-2xl
        overflow-hidden
        shadow-lg
        transition
        duration-300
        hover:shadow-2xl
        hover:-translate-y-1
        ${index === specialdata.length - 1 ? 'col-span-4 mx-auto max-w-md' : 'col-span-2'}
      `}
    >
      <img
        src={imageMap[item.image]}
        alt={item.name}
        className="h-64 w-full object-cover"
      />

      <hr />

      <h1 className="p-4 text-center text-2xl font-semibold">
        {item.name}
      </h1>

      <div className="flex justify-center items-center gap-2 font-serif text-2xl">
        {item.source}
        <RiArrowLeftRightFill />
        {item.destination}
      </div>

<div className='flex justify-center gap-6'>
        {/* <p className="text-center mt-3 font-serif text-lg font-bold">
        {item.date}
      </p> */}
            <p className="text-center mt-3 font-serif text-lg font-bold">
        ₹{item.price} per person
      </p>
</div>

      <div className="flex justify-center my-4">
        <button
          className="bookbutton2"
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
