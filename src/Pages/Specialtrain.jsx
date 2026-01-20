import React from 'react'

const Specialtrain = ({image,name,desc}) => {
  return (
    <>
    <br />
    <br />
      <div className='border-2 border-black h-120 w-120 ml-4 rounded-2xl'>
        <div><img src={image}  className='h-60 w-120 rounded-t-2xl'  alt="" /></div>
        <div><hr className='text-black'/></div>
        <div><h1 className='text-black font-bold text-2xl mt-2'>{name}</h1></div>
        <div><h2 className='text-black mt-2'>{desc}</h2></div>
      </div>
    <br />
    <br />  
    </>
  )
}

export default Specialtrain
