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
    <Slider/>
    
      <h1 className='text-center mt-4 text-4xl text-[#c9a227]'>Explore premium</h1>
      <br />
      <br />

      <div className='flex justify-center align-middle gap-2'>
      <Trainroute image = {mhe} name = "Maharaja's Express" source='Delhi' destination='Delhi' price='₹6–7 lakh per person'/>
      
      <Trainroute image={pow} name="Palace on Wheels" source='New Delhi' destination='Agra' price='₹2–3 lakh per person'/>

      <Trainroute image={tdo} name="The Deccan Odyssey" source='Mumbai' destination='Mumbai' price='₹5–8 lakh per person'/>
      </div>
      <br />

      <h1 className='text-center mt-4 text-4xl text-[#e5e7eb]'>Winter Special</h1>
      <br />
      <div className='flex justify-center align-middle gap-10'>
      <Specialtrain image={kts}  name="Kalka Shimla Toy Train" source='Kalka (KLK)' destination='Shimla (SML)' price='₹1000 per person'/>

      <Specialtrain image={bj} name="Banihal - Baramula DEMU" source='Banihal (BAHL)' destination='Baramulla (BRML)' price='₹500 per person'/>
      </div>
      <br />
      <br />
      <div><h1 className='text-center mt-4 text-4xl text-sky-300'>Monsoon Magic</h1></div>
      <br />
      <br />
      <div className='flex justify-center align-middle gap-10'>
      <Specialtrain image={mg}  name="Mandovi Express" source='Mumbai CSMT' destination='Madgaon' price='₹1500 per person'/>

      <Specialtrain image={jd} name="New Jalpaiguri to Darjeling Toy Train" source='New Jalpaiguri' destination='Darjeeling' price='₹1300 per person' />
      </div>
      <br />
      <br />
      <div><h1 className='text-center mt-4 text-4xl text-black'>Desert Dreams</h1></div>
      <br />
      <br />
      <div className='flex justify-center align-middle'>
        <Specialtrain image={jj} name="Jaisalmer Jodhpur Express" source='Jaisalmer' destination='Jodhpur Junction' price='₹1200 per person'/>
      </div>
    </>
  )
}

export default Home
