import React, { useState } from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import train1 from '../assets/train1.jpg';
import train2 from '../assets/train2.jpg';
import train3 from '../assets/jalpaiguri_darjeling.jpg';
import train4 from '../assets/munbai_goa.jpg';
import train5 from '../assets/baramula-jammu.jpg';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../App.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {

  const navigate = useNavigate();

  const [fromselected, setfromselected] = useState('');
  const [toselected, settoselected] = useState('');
  const [date, setDate] = useState('');

  // ✅ SMALL ROUTES (sirf source & destination use ho raha hai)
  const smallroutes = [
    { source: "Bhopal", destination: "Raipur" },
    { source: "Kochi", destination: "Pune" },
    { source: "Bangalore", destination: "Chennai" },
    { source: "Surat", destination: "Hyderabad" },
    { source: "Jaipur", destination: "Kolkata" },
    { source: "Vadodra", destination: "Indore" }
  ];

  // ✅ STATIONS auto-generate from smallroutes
  const stations = [
    ...new Set(
      smallroutes.flatMap(r => [r.source, r.destination])
    )
  ];

  const handleSearch = async (e) => {
    e.preventDefault();

    // 🔐 LOGIN CHECK
    const isLoggedIn = localStorage.getItem("isLoggedin") === "true";
    if (!isLoggedIn) {
      alert("Please login first! 🔐");
      navigate("/login");
      return;
    }

    // 🧪 VALIDATION
    if (!fromselected || !toselected || !date) {
      alert("Please fill all fields");
      return;
    }

    if (fromselected === toselected) {
      alert("From and To stations cannot be same");
      return;
    }

    // 🚫 DIRECT ROUTE CHECK (IMPORTANT)
    const routeExists = smallroutes.some(
      (route) =>
        route.source === fromselected &&
        route.destination === toselected
    );

    if (!routeExists) {
      alert("No direct routes available 🚫");
      return;
    }

    // 🟢 SAVE SEARCH HISTORY + NAVIGATE
    try {
      await axios.post("http://localhost:3000/search-history", {
        from: fromselected,
        to: toselected,
        date,
        loggedUser: localStorage.getItem("useremail")
      });

      navigate("/trains", {
      state: {
        from: fromselected,
        to: toselected,
        date
  }
});


    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <>
      <div className='slider-container'>
        <div className='searchbox'>
          <form onSubmit={handleSearch}>

            {/* FROM */}
            <select
              className='border-2 border-black h-9 w-89 rounded-2xl font-serif font-semibold'
              value={fromselected}
              onChange={(e) => setfromselected(e.target.value)}
            >
              <option value="">From Station</option>
              {stations.map((s, i) => (
                <option key={i} value={s} disabled={s === toselected}>
                  {s}
                </option>
              ))}
            </select>

            <br /><br />

            {/* TO */}
            <select
              className='border-2 border-black h-9 w-89 rounded-2xl font-serif font-semibold'
              value={toselected}
              onChange={(e) => settoselected(e.target.value)}
            >
              <option value="">To Station</option>
              {stations.map((s, i) => (
                <option key={i} value={s} disabled={s === fromselected}>
                  {s}
                </option>
              ))}
            </select>

            <br /><br />

            {/* DATE */}
            <input
              type="date"
              value={date}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setDate(e.target.value)}
              className='border-2 border-black h-9 w-89 rounded-2xl font-serif font-semibold'
            />

            <br /><br />

            <button type='submit' className='btn'>
              Search Trains
            </button>

          </form>
        </div>
      </div>

      {/* 🚆 SWIPER — NO CHANGES */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
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
