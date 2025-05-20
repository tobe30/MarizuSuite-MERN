import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Rooms from '../components/room/Rooms'
import Other from '../components/index/Other'
import Footer from '../components/index/Footer'
import AvailableRooms from '../components/room/AvailableRooms'

const AvailableRoom = () => {
  return (
     <>
     <Navbar/>
     <Rooms/>
    <AvailableRooms/>
     <Other/>
     <Footer/>
    </>
  )
}

export default AvailableRoom