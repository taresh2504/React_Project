import React from 'react'
import '../Tailwind.css'

const About = () => {
  return (
    <>
      {/* Mobile-only wrapper */}
      <div className="max-w-[479px] mx-auto px-4">

        {/* Heading (desktop untouched) */}
        <h1 className="text-center font-bold text-4xl text-[#c9a227] font-serif mt-5">
          About Us
        </h1>

        {/* Text block */}
        <div className="mt-10 text-center font-serif text-lg space-y-2">
          <p>Welcome to FastTrack Railways.</p>
          <p>We make train search and ticket booking simple, fast and reliable.</p>
          <p>Our goal is to provide accurate train information and a smooth booking experience.</p>
        </div>

        {/* Features */}
        <div className="mt-8 text-center font-serif text-lg space-y-2">
          <p>🚆 Easy train search & route details</p>
          <p>🎟️ Simple and fast booking process</p>
          <p>📋 Manage your bookings easily</p>
          <p>🔒 Secure and user-friendly platform</p>
        </div>

        {/* Mission */}
        <div className="mt-8 text-center font-serif text-lg">
          <p>Our mission is to make railway travel hassle-free for everyone.</p>
        </div>

      </div>
    </>
  )
}

export default About
