import React from 'react'
import '../Tailwind.css'

const About = () => {
  return (
    <>
    <div><h1 className='text-center font-bold text-4xl font-serif mt-5'>About Us</h1></div>
     <p className="mt-10 flex flex-col justify-center align-middle text-3xl text-center font-serif">
        <p>Welcome to FastTrack Railways.</p>  
        <p>We make train search and ticket booking simple, fast and reliable.</p>
        <p>Our goal is to provide accurate train information and a smooth booking experience.</p>
      </p>
      <div className="flex flex-col justify-center align-middle text-2xl text-center mt-8 font-serif">
        <p>🚆 Easy train search & route details</p>
        <p>🎟️ Simple and fast booking process</p>
        <p>📋 Manage your bookings easily</p>
        <p>🔒 Secure and user-friendly platform</p>
      </div>
      <div className="flex flex-col justify-center align-middle text-2xl text-center mt-8 font-serif">
        <p>Our mission is to make railway travel hassle-free for everyone.
</p>
      </div>
    </>
  )
}

export default About
