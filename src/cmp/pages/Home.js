import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import Cards from '../Cards'
import Footer from '../Footer'
import Hero from '../Hero'
import {SliderData} from '../../data/SliderData'


function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Hero slides={SliderData}/>
      <Footer />
    </>
  )
}
export default Home
