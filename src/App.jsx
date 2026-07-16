import React from 'react'
import Navbar from './Comonents.jsx/Navbar'
import { Route, Routes } from 'react-router-dom'
import Hero from './Comonents.jsx/Hero'
import Card from './Comonents.jsx/Card'
import ServiceDetails from './Comonents.jsx/ServiceDetails'
import Footer from './Comonents.jsx/Footer'
import About from './Comonents.jsx/About'

function App() {
  return (
    <div>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<><Hero/> <Card/></>}/>
        <Route path='/Services' element={<Card/>}/>
        <Route path='/Services/:id' element={<ServiceDetails/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App