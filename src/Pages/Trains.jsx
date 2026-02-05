import React, { useEffect, useState } from 'react';
import Navbar from '../Component/Navbar';
import { FaTrainSubway } from "react-icons/fa6";
import '../App.css';
import BookingTrains from './BookingTrains';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Trains = () => {

  // const [fromSearch, setFromSearch] = useState('');
  // const [toSearch, setToSearch] = useState('');
  // const [trainSearch, setTrainSearch] = useState('');


  const [bookingtrains, setbookingtrains] = useState([]);
  const location = useLocation();

  const searchedFrom = location.state?.from;
  const searchedTo = location.state?.to;


  useEffect(() => {
    axios.get("http://localhost:3000/smallroutes")
      .then((res) => {
        setbookingtrains(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 🔥 FILTER LOGIC
  const filteredTrains = searchedFrom && searchedTo
    ? bookingtrains.filter(
        (t) =>
          t.source === searchedFrom &&
          t.destination === searchedTo
      )
    : bookingtrains;

    // SEARCH box  FILTER LOGIC 
//     const filteringTrains = bookingtrains.filter((t) => {
//   return (
//     t.source.toLowerCase().includes(fromSearch.toLowerCase()) &&
//     t.destination.toLowerCase().includes(toSearch.toLowerCase()) &&
//     t.name.toLowerCase().includes(trainSearch.toLowerCase())
//   );
// });


  return (
    <>
      <div>
        <div className='flex justify-center align-middle gap-3'>
          <FaTrainSubway className='h-20 w-7' />
          <p className='font-bold text-4xl mt-5'>Search & Book Trains</p>
        </div>

        <div className='train-searchbox'>
          <div className='box-holder'>
            <input type="search" className='from-station' placeholder='From Station' value={fromSearch}
      onChange={(e) => setFromSearch(e.target.value)} />
            <input type="search" className='from-station' placeholder='To Station' value={toSearch}
      onChange={(e) => setToSearch(e.target.value)} />
            <input type="search" className='from-station' placeholder='Train Name' value={trainSearch}
      onChange={(e) => setTrainSearch(e.target.value)} />
          </div>
        </div>
      </div>

      {/* 🚆 TRAIN CARDS */}
      {filteredTrains.length === 0 ? (
        <p className="text-center mt-10 text-xl font-semibold">
          No trains found 🚫
        </p>
      ) : (
        filteredTrains.map((e) => (
          <div key={e.id} className='flex justify-center mt-5 -ml-9'>
            <BookingTrains
              name={e.name}
              source={e.source}
              destination={e.destination}
              price={e.price}
            />
          </div>
        ))
      )}
    </>
  );
};

export default Trains;
