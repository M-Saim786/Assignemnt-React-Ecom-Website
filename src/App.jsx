import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import {Routes , Route} from 'react-router-dom'
import ContactUs from './Components/ContactUs'
import Gallery from './Components/Gallery'
import Footer from './Components/Footer'
import './App.css'
export default function App() {
  return (
<>
<Navbar />
<Routes>
<Route path='/' element={<Home />} ></Route>
<Route path='/about' element={<About />} ></Route>
<Route path='/contactUs' element={<ContactUs />} ></Route>
<Route path='/gallery' element={<Gallery />} ></Route>
</Routes>
<Footer />
</>

    )
}
