import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import train1 from '../assets/train1.jpg'
import train2 from '../assets/train2.jpg'
import train3 from '../assets/jalpaiguri_darjeling.jpg'
import train4 from '../assets/munbai_goa.jpg'
import train5 from '../assets/baramula-jammu.jpg'
import axios from 'axios';
import { FcSearch } from "react-icons/fc";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../App.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
const [fromselected, setfromselected] = useState('');
  const [toselected, settoselected] = useState('');
  const [date, setDate] = useState(''); // New state for date

  const fromStations = ["Bhopal", "Kochi", "Bangalore", "Surat", "Jaipur", "Vadodara"];
  const toStations = ["Raipur", "Pune", "Chennai", "Hyderabad", "Kolkata", "Indore"];

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic Validation
    if (!fromselected || !toselected || !date) {
      alert("Please fill all fields");
      return;
    }

    const bookingData = {
      from: fromselected,
      to: toselected,
      travelDate: date,
      bookingTime: new Date().toLocaleString()
    };

    try {
      // Replace with your actual json-server URL
      const response = await axios.post('http://localhost:3000/booking-data', bookingData);
      
      if (response.status === 201) {
        alert('Booking Saved Successfully!');
        // Reset form
        setfromselected('');
        settoselected('');
        setDate('');
      }
    } catch (error) {
      console.error("Error saving booking:", error);
      alert("Failed to save booking. Make sure json-server is running.");
    }
  };

  return (
    <>
      <div className='slider-container'>
        <div className='searchbox'>
          {/* ... nav section ... */}
          
          {/* Wrap inputs in a form to handle submission */}
          <form onSubmit={handleSubmit}>
            <div>
              <select 
                className='border-2 border-black h-9 w-89 rounded-2xl font-serif font-semibold' 
                value={fromselected} 
                onChange={(e) => setfromselected(e.target.value)}
              >
                <option value="" disabled>From Station</option>
                {fromStations.map((item, index) => (
                  <option key={index} className='bg-purple-400' value={item}>{item}</option>
                ))}
              </select>
            </div>
            <br />
            <div>
              <select 
                className='border-2 border-black h-9 w-89 rounded-2xl font-serif font-semibold' 
                value={toselected} 
                onChange={(e) => settoselected(e.target.value)}
              >
                <option value=""  disabled>To Station</option>
                {toStations.map((item, index) => (
                  <option key={index} className='bg-purple-400' value={item}>{item}</option>
                ))}
              </select>
            </div>
            <br />
            <input 
              type="datetime-local" 
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className='border-2 border-black h-9 w-89 rounded-2xl font-serif font-semibold' 
            />
            <br /><br />
            <button type='submit' className='btn'>Search & Book</button>
          </form>
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
