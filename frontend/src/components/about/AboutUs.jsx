import React from 'react'
import './about.css' // Ensure this file exists and is properly scoped

const AboutUs = () => {
  return (
    <div className="hero-section text-center py-5">
      <p className="title">About Us</p>
      <p className="snippet">
        <a
          href="/"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          HOME
        </a>{' '}
        / <span>ABOUT US</span>
      </p>
    </div>
  )
}

export default AboutUs
