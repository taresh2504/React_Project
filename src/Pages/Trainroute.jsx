import React from 'react'
import '../Tailwind.css'

const Trainroute = ({desc,image,name}) => {
    // let Train = {
    //     mhx : {mhe}
    // }

  return (
    <>
    <br />
    <br />
      <div className='border-2 border-black h-96 w-96 ml-5 rounded-2xl'>
        <div><img src={image}  className='h-52 w-96 rounded-t-2xl'  alt="" /></div>
        <div><hr className='text-black '/></div>
        <div><h1 className='text-black font-bold text-2xl'>{name}</h1></div>
        <div><h2 className='text-black'>{desc}</h2></div>
      </div>
    </>
  )
}

export default Trainroute
