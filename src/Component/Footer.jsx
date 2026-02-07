import React from 'react'
import { GrInstagram } from "react-icons/gr"
import { FaXTwitter } from "react-icons/fa6"
import { FaFacebookSquare } from "react-icons/fa"

const Footer = () => {
  return (
    <>
      {/* ================= DESKTOP / LAPTOP (ORIGINAL – UNTOUCHED) ================= */}
      <div className="hidden sm:block">
        <div className='h-78 w-full border-2 border-black mt-3'>
          <div className='font-serif font-semibold mt-10 ml-4'>
            <p>© 2026 FastTrack Railways</p>
            <br />
            <p>Govt. of India Undertaking</p>
          </div>

          <div className='flex flex-col justify-center align-middle font-serif font-semibold ml-100 -mt-16'>
            <p>Customer Care: 007</p>
            <br />
            <p>Email:taresh25202@gmail.com</p>
            <br />
            <p>24×7 Helpline</p>
          </div>

          <div className='flex flex-col justify-center align-middle font-serif font-semibold ml-200 -mt-26'>
            <p>Privacy Policy</p>
            <br />
            <p>Refund Rules</p>
            <br />
            <p>Cancellation Policy</p>
          </div>

          <div className='flex flex-col justify-center align-middle font-serif font-semibold ml-280 -mt-26'>
            <p>Follow Us:</p>
            <br />
            <p>
              <GrInstagram className='h-8 w-10'/>
              <div className='ml-10 -mt-7'>FastTrack_Railways</div>
            </p>
            <br />
            <p>
              <FaXTwitter className='h-8 w-10'/>
              <div className='ml-10 -mt-7'>FastTrack_Rail</div>
            </p>
            <br />
            <p>
              <FaFacebookSquare className='h-8 w-10'/>
              <div className='ml-10 -mt-7'>FastTrack_RailN/W</div>
            </p>
          </div>

          <div className='flex justify-center align-middle gap-5 font-serif font-semibold mt-14'>
            <p>© 2026 FastTrack Railways | Helpline: 007 | All Rights Reserved</p>
          </div>
        </div>
      </div>

      {/* ================= 📱 MOBILE ONLY FOOTER ================= */}
      {/* ================= 📱 MOBILE ONLY FOOTER ================= */}
<div className="sm:hidden border-t border-black mt-6 bg-[#0f172a] text-gray-200">
  <div className="max-w-[479px] mx-auto px-4 py-6 font-serif text-sm space-y-5">

    <div className="text-center font-semibold">
      <p>© 2026 FastTrack Railways</p>
      <p>Govt. of India Undertaking</p>
    </div>

    <div className="text-center space-y-1">
      <p>Customer Care: 007</p>
      <p>Email: taresh25202@gmail.com</p>
      <p>24×7 Helpline</p>
    </div>

    <div className="text-center space-y-1">
      <p>Privacy Policy</p>
      <p>Refund Rules</p>
      <p>Cancellation Policy</p>
    </div>

    <div className="text-center space-y-3">
      <p className="font-semibold">Follow Us</p>

      <div className="flex justify-center items-center gap-2">
        <GrInstagram />
        <span>FastTrack_Railways</span>
      </div>

      <div className="flex justify-center items-center gap-2">
        <FaXTwitter />
        <span>FastTrack_Rail</span>
      </div>

      <div className="flex justify-center items-center gap-2">
        <FaFacebookSquare />
        <span>FastTrack_RailN/W</span>
      </div>
    </div>

    <div className="text-center text-xs font-semibold pt-4 border-t border-gray-600">
      © 2026 FastTrack Railways | Helpline: 007
    </div>

  </div>
</div>

    </>
  )
}

export default Footer
