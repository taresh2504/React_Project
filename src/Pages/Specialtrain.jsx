import React from 'react'

const Specialtrain = ({ image, name, desc }) => {
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
    hover:-translate-y-1'>
        <div><img src={image} className='h-64 w-full object-cover' alt="" /></div>
        <div><hr className='text-black' /></div>
        <div className='p-4 bg-gradient-to-b from-[#0f172a]/90 to-[#020617]'><h1 className='p-4 bg-gradient-to-b from-[#0f172a]/90 to-[#020617] text-center text-2xl'>{name}</h1></div>
        <div><h2 className='text-gray-300 text-sm mt-2 text-center leading-relaxed'>{desc}</h2></div>
      </div>
      {/* <div className='border-2 border-black h-120 w-120 ml-4 rounded-2xl'>
        <div><img src={image}  className='h-60 w-120 rounded-t-2xl'  alt="" /></div>
        <div><hr className='text-black'/></div>
        <div><h1 className='text-black font-bold text-2xl mt-2 text-center'>{name}</h1></div>
        <div><h2 className='text-black mt-2 text-center'>{desc}</h2></div>
      </div> */}
      {/* <div className='border-2 border-black h-120 w-120 ml-4 rounded-2xl'>
        <div><img src={image}  className='h-60 w-120 rounded-t-2xl'  alt="" /></div>
        <div><hr className='text-black'/></div>
        <div><h1 className='text-black font-bold text-2xl mt-2 text-center'>{name}</h1></div>
        <div><h2 className='text-black mt-2 text-center'>{desc}</h2></div>
      </div> */}
      <br />
      <br />
    </>
  )
}

export default Specialtrain
