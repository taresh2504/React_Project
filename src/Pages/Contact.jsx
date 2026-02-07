import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-200 p-10">

      {/* ===== LAPTOP / DESKTOP (ORIGINAL – UNTOUCHED) ===== */}
      <div className="hidden sm:block">

        <h1 className="text-4xl text-[#c9a227] text-center mb-8">
          Contact Us
        </h1>

        <p className="text-center max-w-2xl font-serif mx-auto mb-12 text-lg">
          Have questions or need help with bookings?  
          Feel free to reach out to us — we’re here to help you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-[#c9a227]" />
              <p>+91 9340058640</p>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#c9a227]" />
              <p>support@fasttrack.com</p>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-[#c9a227]" />
              <p>New Delhi, India</p>
            </div>

            <p className="text-sm text-gray-400 mt-6">
              Support Timings: <br />
              Monday – Saturday <br />
              10:00 AM – 6:00 PM
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-xl shadow-lg">
            <form className="space-y-4">
              <input className="w-full p-3 rounded-2xl bg-[#020617] border border-gray-600" placeholder="Your Name" />
              <input className="w-full p-3 rounded-2xl bg-[#020617] border border-gray-600" placeholder="Your Email" />
              <input className="w-full p-3 rounded-2xl bg-[#020617] border border-gray-600" placeholder="Subject" />
              <textarea rows="4" className="w-full p-3 rounded-2xl bg-[#020617] border border-gray-600" placeholder="Your Message"></textarea>
              <button className="w-full bg-[#c9a227] text-black py-3 rounded-2xl font-semibold">
                Send Message
              </button>
            </form>
          </div>

        </div>

      </div>

      {/* ===== 📱 MOBILE ONLY (≤479px) ===== */}
      <div className="sm:hidden max-w-[479px] mx-auto px-4">

        <h1 className="text-2xl text-[#c9a227] text-center mb-6">
          Contact Us
        </h1>

        <p className="text-center font-serif mb-8 text-base">
          Have questions or need help with bookings?  
          Feel free to reach out to us.
        </p>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-[#c9a227]" />
            <p>+91 9340058640</p>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-[#c9a227]" />
            <p>support@fasttrack.com</p>
          </div>

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-[#c9a227]" />
            <p>New Delhi, India</p>
          </div>
        </div>

        <div className="bg-[#111827] p-4 rounded-xl shadow-lg mt-8">
          <form className="space-y-4">
            <input className="w-full p-3 rounded-xl bg-[#020617] border border-gray-600" placeholder="Your Name" />
            <input className="w-full p-3 rounded-xl bg-[#020617] border border-gray-600" placeholder="Your Email" />
            <textarea rows="4" className="w-full p-3 rounded-xl bg-[#020617] border border-gray-600" placeholder="Message"></textarea>
            <button className="w-full bg-[#c9a227] text-black py-3 rounded-xl font-semibold">
              Send
            </button>
          </form>
        </div>

      </div>

    </div>
  )
}

export default Contact
