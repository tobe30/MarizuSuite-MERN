import React from 'react'
import './about.css' // Ensure this file exists and is properly scoped

export const Vision = () => {
  return (
    <div className="our-vision row w-100 py-4 ps-4">
      <div className="col-md-6">
        <img
          style={{ width: '100%' }}
          src="assets/images/IMG_0754_2.webp"
          alt="Our Vision"
        />
      </div>
      <div className="col-md-6 p-5 text-center mx-auto mt-5">
        <p className="title">Our Vision</p>
        <p className="snippet px-3">
          The Marizu Suites strives to be at the forefront of innovation in the
          hospitality industry as a premier provider of quality serviced
          apartments that offer comfort, convenience, and value to our guests.
        </p>
        <button className="button button-primary py-2 px-4 mt-4">EXPLORE MORE</button>
      </div>
    </div>
  )
}
