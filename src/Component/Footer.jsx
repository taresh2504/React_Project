import React from 'react'
import { GrInstagram } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";


const Footer = () => {
  return (
    <>
      <div className='h-78 w-full border-2 border-black mt-3'>
        <div className='font-serif font-semibold mt-10'>
          <p>© 2026 Bharat Railways</p>
          <br />
          <p>Govt. of India Undertaking</p>
        </div>
        <div className='flex flex-col justify-center align-middle font-serif font-semibold ml-100 -mt-16'>
          <p>Customer Care: 139</p>
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
          <p><GrInstagram  className='h-8 w-10'/><div className='ml-10 -mt-7'>FastTrack_Railways</div></p>
          <br />
          <p><FaXTwitter  className='h-8 w-10'/><div className='ml-10 -mt-7'>FastTrack_Rail</div></p>
          <br />
          <p><FaFacebookSquare className='h-8 w-10' /><div className='ml-10 -mt-7'>FastTrack_RailN/W</div></p>
        </div>
        <div className='flex justify-center align-middle gap-5 font-serif font-semibold mt-14'>
            <p>© 2026 FastTrack Railways | Helpline: 007 | All Rights Reserved</p>
        </div>
      </div>
    </>
  )
}

export default Footer
