import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import App from '../src/Pages/Login'
// import App from '../src/Component/LightRays'
import { BrowserRouter } from 'react-router-dom'
import Usercontext from './Pages/Context.jsx'

let mydata = {
  name:'Taresh Tandy',
  age:20,
  city:'Bhopal'
}

createRoot(document.getElementById('root')).render(
  <Usercontext.Provider value={mydata}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Usercontext.Provider>
  ,
)
