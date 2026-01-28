import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import train1 from '../assets/train1.jpg'
import train2 from '../assets/train2.jpg'
import train3 from '../assets/jalpaiguri_darjeling.jpg'
import train4 from '../assets/munbai_goa.jpg'
import train5 from '../assets/baramula-jammu.jpg'

import { FcSearch } from "react-icons/fc";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../App.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
    <div className='slider-container'>
        <div className='searchbox'>
          <nav>
            <ul style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap:'8px'}}>
              <li><FcSearch className='searchglass' /></li>
              <li><h2 className='srchheading'>Book Ticket</h2></li>
            </ul>
          </nav>
            <br />
            <div>
                <input type="search" placeholder='From station' className='fs' name="" id="" />
                {/* <select name="Delhi" id="">Delhi</select>
                <select name="Mumbai" id="">Mumbai</select>
                <select name="Kolkata" id="">kolkata</select>
                <select name="Chennai" id="">Chennai</select>
                <select name="Bhopal" id="">Bhopal</select>
                <select name="Hyderabad" id="">Hyderabad</select>
                <select name="Bengaluru" id="">Bengaluru</select>
                <select name="Ahemdabad" id="">Ahemdabad</select> */}
            </div>
            <br />
            <div>
                <input type="search" placeholder='To station' className='ts' name="" id="" />
                {/* <select name="Delhi" id="">Delhi</select>
                <select name="Mumbai" id="">Mumbai</select>
                <select name="Kolkata" id="">kolkata</select>
                <select name="Chennai" id="">Chennai</select>
                <select name="Bhopal" id="">Bhopal</select>
                <select name="Hyderabad" id="">Hyderabad</select>
                <select name="Bengaluru" id="">Bengaluru</select>
                <select name="Ahemdabad" id="">Ahemdabad</select> */}
            </div>
            <br />
            <input type="datetime-local" name="" placeholder='DD-MM-YYYY' className='time' id="" />
            <br />
            <br />
            <button type='submit' className='btn'>Search Trains</button>
        </div>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={train2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={train1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={train3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={train4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={train5} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
