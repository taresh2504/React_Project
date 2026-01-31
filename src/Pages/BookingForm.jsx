import React from 'react'

const BookingForm = () => {
  return (
    <>
    <div className='ml-115 mt-5'>
      <div className='text-center border-2 border-white w-120 h-120 rounded-2xl'>
      <form action="">
        <h1 className='mt-4 font-serif text-2xl font-bold'>Booking Form</h1>
        <div className='mt-3'>
        <input type="text" className='formbox' placeholder='Enter name' name="" id="" /> <br />
        </div>
        <div className='mt-3'>
          <input type="number" className='formbox'  placeholder='Select no. of passanger' name="" id="" /> <br />
        </div>
        <div className='mt-3'>
          <input type="text" className='formbox' placeholder='From Station' name="" id="" /> <br />
        </div>
        <div className='mt-3'>
          <input type="text" className='formbox' placeholder='To Station' name="" id="" /> <br />
        </div>
        <div className='mt-3'>
          <input type="number" className='formbox' placeholder='Enter age' name="" id="" /> <br />
        </div>
        <div className='mt-3'>
           <input type="datetime-local" className='formbox' name="" id="" /> <br />
        </div>
        <div className='mt-3'>
        <select name="Coaches" placeholder='Select Coach' className='formbox' id="">
          <option value="Sleeper">Sleeper</option>
          <option value="General">General</option>
          <option value="ACteir1">ACtier1</option>
          <option value="ACteir2">ACtier2</option>
          <option value="ACteir3">ACtier3</option>
        </select> <br />
        </div>
        <div className='mt-3'>
        <div className='formbox2'>
        <div className='flex justify-center align-middle gap-4'> 
        <span className='male'>Male<input type="radio" className='ml-0.5' name="" value="Male" id="" /></span>
        <span className='female'>Female<input type="radio" className='ml-0.5' name="" value="Female" id="" /> </span>
        <span className='other'>Other<input type="radio" className='ml-0.5' name="" value="Other" id="" /></span>
        </div>
        </div> 
        </div>
        <button type="submit" className='confirmbooking'>Confirm Booking</button><br />
      </form>
    </div>
    </div>
    </>
  )
}

export default BookingForm
