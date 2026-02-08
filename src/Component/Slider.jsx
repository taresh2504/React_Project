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

  // top-6 left-1/2 -translate-x-1/2

          // bg-white/90 backdrop-blur-md
          // rounded-2xl shadow-lg

          // w-[90%] sm:w-[70%] md:w-[420px]
          // p-4

  return (
  <>
    {/* 🔍 SLIDER + SEARCH CONTAINER */}
    <div className="slider-container relative w-full">

      {/* 🔎 SEARCH BOX */}
      <div
        className="
          searchbox
          absolute z-90
          
        "
      >
        <form onSubmit={handleSearch} className="flex flex-col gap-4">

          {/* FROM */}
          <select
            className="border-2 border-black h-9 w-full rounded-2xl font-serif font-semibold px-3"
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

          {/* TO */}
          <select
            className="border-2 border-black h-9 w-full rounded-2xl font-serif font-semibold px-3"
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

          {/* DATE */}
          <input
            type="date"
            value={date}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setDate(e.target.value)}
            className="border-2 border-black h-9 w-full rounded-2xl font-serif font-semibold px-3"
          />

          <button type="submit" className="btn">
            Search Trains
          </button>

        </form>
      </div>

      {/* 🚆 SWIPER (AB SAME CONTAINER ME) */}
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
        <SwiperSlide>
          <img src={train2} className="w-full h-[240px] sm:h-[360px] md:h-[480px] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={train1} className="w-full h-[240px] sm:h-[360px] md:h-[480px] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={train3} className="w-full h-[240px] sm:h-[360px] md:h-[480px] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={train4} className="w-full h-[240px] sm:h-[360px] md:h-[480px] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={train5} className="w-full h-[240px] sm:h-[360px] md:h-[480px] object-cover" />
        </SwiperSlide>
      </Swiper>

    </div>
  </>
)
}
