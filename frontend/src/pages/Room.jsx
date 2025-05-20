import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Display from '../components/room/Display'
import Rooms from '../components/room/Rooms'
import Other from '../components/index/Other'
import Footer from '../components/index/Footer'

const Room = () => {
  return (
     <>
     <Navbar/>
     <Rooms/>
     <Display/>
     <Other/>
     <Footer/>


    </>
  )
}

export default Room