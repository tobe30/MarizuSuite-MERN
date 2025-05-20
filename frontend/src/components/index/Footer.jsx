import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="row w-100 px-2">
        <div className="col-md-3 w-80">
          <h5>CONTACT</h5>
          <p>
            Address: 3018 Justice James Ogebe St, Asokoro 900103, Abuja, Federal Capital
            Territory, Nigeria
          </p>
          <p>Phone: +234 813 688 8875</p>
          <p>Phone: +234 901 582 2228</p>
          <p>Email: info@Marizusuites.com</p>
        </div>
        <div className="col-md-3">
          <h5>MAIN MENU</h5>
          <a href="/home">
            <p>Home</p>
          </a>
          <a href="/about">
            <p>About</p>
          </a>
          <a href="/contact">
            <p>Contact Us</p>
          </a>
        </div>
        <div className="col-md-3">
          <h5>OUR FACILITIES</h5>
          <p>
            <a href="/facilities?facility=azure-spa">Azure Spa</a>
          </p>
          <p>
            <a href="/facilities?facility=gauze-and-gourmet">Gauze & Gourmet</a>
          </p>
          <p>
            <a href="/facilities?facility=95-slide-lounge-and-bar">95 Slide Lounge</a>
          </p>
          <p>
            <a href="/facilities?facility=gym">Gym</a>
          </p>
          <p>
            <a href="/facilities?facility=lisas-theatre">Lisa's theatre</a>
          </p>
          <p>
            <a href="/facilities?facility=shear-elegance">Shear Elegance</a>
          </p>
        </div>
        <div className="col-md-3">
          <h5>ROOMS & SUITES</h5>
          <p>
            <a href="/rooms?room=studio-imperial">Studio (Imperial)</a>
          </p>
          <p>
            <a href="/rooms?room=studio-grand">Studio (Grand)</a>
          </p>
          <p>
            <a href="/rooms?room=one-bedroom">One Bedroom</a>
          </p>
          <p>
            <a href="/rooms?room=two-bedrooms">Two Bedrooms</a>
          </p>
          <p>
            <a href="/rooms?room=three-bedrooms">Three Bedrooms</a>
          </p>
        </div>
      </div>

      <hr style={{ color: 'grey', background: 'grey' }} />

      <div className="text-center">
        <p className="mx-auto copyright">
          Copyrights ©2025 Marizu Suites. Designed by Mshel Integrated Systems.
        </p>
      </div>
    </div>
  )
}

export default Footer
