import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Services from './Components/Services'
import Recommend from './Components/Recommend'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'
import SrollToTop from './Components/SrollToTop'


export default function App() {
  return (
    <>
    <SrollToTop/>
    <Navbar/>
    <Hero/>
    <Services/>
    <Recommend/>
    <Testimonials/>
    <Footer/>
    
      
    </>
  )
}
