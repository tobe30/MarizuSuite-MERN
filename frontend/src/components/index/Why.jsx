import React from 'react'

const Why = () => {
  return (
    <section className="why-style">
      <div className="container">
        <div data-swiper-parallax="-200">
          <p className="text-center mb-4 p-tag">WHY CHOOSE LISA SUITES</p>
        </div>
        <h3 className="text-center h-tag serif">The Advantages</h3>
        <div className="choose-style">
          {/* First row */}
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4 mb-4">
              <div className="card bg-transparent">
                <div className="card-body">
                  <div data-swiper-parallax="-300">
                    <h3 className="card-title title sub serif txt-large title-style">Fine Dining Experience</h3>
                  </div>
                  <p className="card-text t-style">
                    Indulge in a culinary journey of exquisite flavors prepared with the finest ingredients and served with meticulous attention to detail.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4 mb-4">
              <div className="card bg-transparent">
                <div className="card-body">
                  <div data-swiper-parallax="-300">
                    <h3 className="card-title title sub serif txt-large title-style">Exceptional Customer Service</h3>
                  </div>
                  <p className="card-text t-style">
                    Experience unparalleled customer service with our dedicated staff who are committed to providing prompt and efficient assistance.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4 mb-4">
              <div className="card bg-transparent">
                <div className="card-body">
                  <div data-swiper-parallax="-300">
                    <h3 className="card-title title sub serif txt-large title-style">High Security</h3>
                  </div>
                  <p className="card-text t-style">
                    Your safety and peace of mind are our top priorities. We have implemented robust security measures to create a safe and secure environment for our esteemed guests.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Second row */}
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4 mb-4">
              <div className="card bg-transparent">
                <div className="card-body">
                  <div data-swiper-parallax="-300">
                    <h3 className="card-title title sub serif txt-large title-style">Free Wi-Fi Available</h3>
                  </div>
                  <p className="card-text t-style">
                    Stay connected with complimentary high-speed Wi-Fi access throughout our premises.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4 mb-4">
              <div className="card bg-transparent">
                <div className="card-body">
                  <div data-swiper-parallax="-300">
                    <h3 className="card-title title sub serif txt-large title-style">Online Reservation</h3>
                  </div>
                  <p className="card-text t-style">
                    Secure your stay by making a reservation in advance. Our exquisite accommodations and exceptional services are in high demand.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4 mb-4">
              <div className="card bg-transparent">
                <div className="card-body">
                  <div data-swiper-parallax="-300">
                    <h3 className="card-title title sub serif txt-large title-style">Meetings & Special Events</h3>
                  </div>
                  <p className="card-text t-style">
                    Host successful meetings and unforgettable special events in our versatile and well-equipped venues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Why
