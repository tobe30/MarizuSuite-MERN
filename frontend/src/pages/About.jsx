import React from 'react'
import AboutUs from '../components/about/AboutUs'
import Navbar from '../components/navbar/Navbar'
import { Vision } from '../components/about/Vision'
import Section from '../components/about/Section'
import Mission from '../components/about/Mission'
import Other from '../components/index/Other'
import Footer from '../components/index/Footer'

const About = () => {
  return (
     <>
  <Navbar />     
  <AboutUs />
  <Section/>
  <Vision/>
  <Mission/>
  <Other/>
  <Footer/>


    </>
  )
}

export default About