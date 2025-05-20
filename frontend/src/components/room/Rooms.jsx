import React from 'react'
import './room.css' // Ensure this file exists and is properly scoped

const Rooms = () => {
  return (
    <div className="hero-section text-center py-5">
      <p className="title">Rooms & Suites</p>
      <p className="snippet">
        <a
          href="/"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          HOME
        </a>{' '}
        / <span>ROOMS & SUITES</span>
      </p>
    </div>
  )
}

export default Rooms
