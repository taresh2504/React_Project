import React from 'react'
import Navbar from '../Component/Navbar'
import Slider from '../Component/Slider'
import '../Tailwind.css'
import Trainroute from './Trainroute'
import mhe from '../assets/Maharaja_Express.jpg'
import pow from '../assets/palace-on-wheels.jpg'
import tdo from '../assets/train-deccan-odyssey18.jpg'
import Specialtrain from './Specialtrain'
import kts from '../assets/Kalka-Shimla.jpg'
import bj from '../assets/baramula-jammu.jpg'
import mg from '../assets/munbai_goa.jpg'
import jd from '../assets/jalpaiguri_darjeling.jpg'
import jj from '../assets/Jaisalmer-to-Jodhpur.jpg'


// Kalka to shimla - toy train through hills 
// Mumbai to goa - coastal magic
// Jaisalmer to jodhpur - desert dreams 
// New jalpaiguri to darjeeling - tea garden views
// jammu to baramulla - kashmir on rails 

// 3 luxury 
// 3. the deccan odyssey
// 2. palace on wheels
// 1. Maharaja express

const Home = () => {
  return (
    <>
    <Navbar/>
    <Slider/>
    
      <h1 className='text-center mt-4 text-4xl text-[#c9a227]'>Explore premium</h1>
      <br />
      <br />

      <div className='flex justify-center align-middle gap-2'>
      <Trainroute image = {mhe} name = "Maharaja's Express" desc = "The Maharaja Express is a luxury tourist train of India, known as one of the most luxurious trains in the world. It offers royal-style travel with elegant cabins, fine dining, and premium hospitality. The train covers famous destinations like Delhi, Agra, Jaipur, Udaipur, and Varanasi, showcasing India' s rich heritage, culture, and historical monuments."/>
      
      <Trainroute image={pow} name="Palace on Wheels" desc = "Palace on Wheels is a luxury tourist train of India that reflects royal heritage and grandeur. Inspired by the princely states of Rajasthan, it offers elegant cabins, fine dining, and personalized service. The train covers iconic destinations like Jaipur, Udaipur, Jaisalmer, and Agra, providing travelers a regal journey through history, culture, and architecture." />

      <Trainroute image={tdo} name="The Deccan Odyssey" desc = "Deccan Odyssey is a luxury tourist train in India that offers a royal travel experience through western and southern regions. It features spacious cabins, gourmet dining, and world-class hospitality. The train covers destinations like Mumbai, Goa, Ajanta–Ellora Caves, Hampi, and Udaipur, showcasing India’s rich heritage, history, and diverse cultural landscapes."/>
      </div>
      <br />

      <h1 className='text-center mt-4 text-4xl text-[#e5e7eb]'>Winter Special</h1>
      <br />
      <div className='flex justify-center align-middle gap-10'>
      <Specialtrain image={kts}  name="Kalka Shimla Toy Train" desc = "The Kalka–Shimla Toy Train is a famous narrow-gauge heritage railway in India, connecting Kalka in Haryana to Shimla in Himachal Pradesh. Recognized as a UNESCO World Heritage Site, the train journey passes through 102 tunnels, numerous bridges, and scenic hill landscapes. It offers breathtaking views of mountains, forests, and valleys, especially during winter and monsoon seasons. The toy train runs throughout the year and is popular among tourists for its slow, nostalgic ride and colonial-era charm, making it one of the most memorable rail journeys in India."/>

      <Specialtrain image={bj} name="Banihal - Baramula DEMU" desc = "The Banihal–Baramulla DEMU is a vital passenger train service operating within the Kashmir Valley, connecting Banihal in the south to Baramulla in the north. It runs on the Jammu–Baramulla railway line and serves as an important mode of daily transport for locals. The journey passes through stunning landscapes, including mountains, rivers, tunnels, and valleys. Known for its reliability and affordability, the DEMU plays a key role in regional connectivity, supporting tourism, trade, and everyday commuting, especially during harsh winter months when road travel becomes difficult." />
      </div>
      <br />
      <br />
      <div><h1 className='text-center mt-4 text-4xl text-black'>Monsoon Magic</h1></div>
      <br />
      <br />
      <div className='flex justify-center align-middle gap-10'>
      <Specialtrain image={mg}  name="Mandovi Express" desc = "Mandovi Express is a popular intercity train running between Mumbai CSMT and Madgaon (Goa) via the scenic Konkan Railway route. It is known for its comfortable journey and beautiful coastal views, including rivers, hills, and tunnels. Often called the “Food Queen of Konkan Railway,” the train is famous for its quality onboard catering. Mandovi Express is a preferred choice for daily commuters and tourists traveling between Maharashtra and Goa due to its reliable timing and pleasant travel experience."/>

      <Specialtrain image={jd} name="New Jalpaiguri to Darjeling Toy Train" desc = "The New Jalpaiguri to Darjeeling Toy Train is the iconic Darjeeling Himalayan Railway (DHR) service, a narrow-gauge heritage railway between New Jalpaiguri (NJP) and Darjeeling in West Bengal. Built in 1881, the route climbs from the plains up into the Himalayas over about 84–88 km, using loops and zig-zags to gain altitude and offering stunning views of tea gardens, forests, and mountains. It’s part of the UNESCO-listed Mountain Railways of India and runs slowly (≈11 km/h) so passengers can soak in the scenic journey, including the famous Batasia Loop and Ghum station." />
      </div>
      <br />
      <br />
      <div><h1 className='text-center mt-4 text-4xl text-black'>Desert Dreams</h1></div>
      <br />
      <br />
      <div className='flex justify-center align-middle'>
        <Specialtrain image={jj} name="Desert Queen Express" desc = "Desert Queen Express is a popular train running between Jaisalmer and Jodhpur, offering a memorable journey through the heart of the Thar Desert in Rajasthan. The route showcases vast sand dunes, dry landscapes, and small desert towns, giving passengers a true feel of Rajasthan’s desert charm. This train is widely used by tourists as well as local travelers. With comfortable coaches and reliable timings, the Desert Queen Express is an ideal choice for experiencing the scenic and cultural beauty of western India by rail."/>
      </div>
    </>
  )
}

export default Home
