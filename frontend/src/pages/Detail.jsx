import React from 'react'
import RoomDetail from '../components/detail/roomdetail'
import Details from '../components/detail/Details'
import Other from '../components/index/Other'
import Footer from '../components/index/Footer'
import Navbar from '../components/navbar/Navbar'

const Detail = () => {
  return (
    <>
    <Navbar/>
    <Details />
    <RoomDetail />
    <Other/>
    <Footer/>
    </>
  )
}

export default Detail