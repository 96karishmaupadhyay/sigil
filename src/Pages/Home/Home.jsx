import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import "./home.css"
import Service from '../services/Service'
import About from '../About/About'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>     
      <Hero/>
     <Service/>
     <About/>
     <Footer/>
    </div>
  )
}

export default Home
