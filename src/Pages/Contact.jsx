import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-200 p-10">
      
      <h1 className="text-4xl text-[#c9a227] text-center mb-8">
        Contact Us
      </h1>

      <p className="text-center max-w-2xl font-serif mx-auto mb-12 text-lg">
        Have questions or need help with bookings?  
        Feel free to reach out to us — we’re here to help you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">

        {/* LEFT SIDE – CONTACT INFO */}
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

        {/* RIGHT SIDE – CONTACT FORM */}
        <div className="bg-[#111827] p-6 rounded-xl shadow-lg">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-2xl bg-[#020617] border border-gray-600 focus:outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-2xl bg-[#020617] border border-gray-600 focus:outline-none"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 rounded-2xl bg-[#020617] border border-gray-600 focus:outline-none"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded-2xl bg-[#020617] border border-gray-600 focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#c9a227] text-black py-3 rounded-2xl font-semibold hover:bg-yellow-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>

      <p className="text-center text-sm text-gray-400 mt-12">
        This website is a demo project and not an official Indian Railways service.
      </p>

    </div>
  )
}

export default Contact
