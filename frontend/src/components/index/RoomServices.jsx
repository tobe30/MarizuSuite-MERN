import React from 'react'

const RoomServices = () => {
  // You can add toggleTab functionality here if needed

  return (
    <div className="rooms-and-suites py-5" id="room-section">
      <div
        className="subtitle txt-md text-center mx-auto"
        data-swiper-parallax="-200"
      >
        THE PLEASURE OF LUXURY
      </div>
      <div
        className="title serif txt-large mb-4 py-2 text-center mx-auto"
        data-swiper-parallax="-300"
      >
        Rooms & Suites
      </div>

      <div className="container">
        <div className="tabs-container d-flex align-items-center flex-column flex-md-row justify-content-center">
          <div className="d-flex flex-fill">
            <div
              className="tab px-2 active mx-auto"
              // onClick={() => toggleTab(1)} // Add your toggleTab logic here if needed
            >
              OUR ROOM TYPES
            </div>
          </div>
        </div>
      </div>

      {/* All room types */}
      <div className="container-fluid px-0 overflow-hidden">
        <div
          id="roomCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active" style={{ height: '500px' }}>
              <div className="row pb-3">
                <div className="col-lg-7">
                  <img
                    src="assets/images/3-Bedroom_7-768x660.webp"
                    className="d-block w-100"
                    style={{ height: '600px', objectFit: 'cover' }}
                    alt="Studio Room Imperial"
                  />
                </div>
                <div className="col-lg-5 p-5">
                  <p className="title">Studio Room (Imperial)</p>
                  <p className="snippet">
                    Price at <span className="price">&#8358;60,000.00</span>/
                    night
                  </p>
                  <p className="text">
                    With style and sophistication... offers the ultimate in urban
                    living.
                  </p>
                  <a
                    href="/rooms?room=studio-imperial"
                    className="button button-default px-3 py-2"
                  >
                    DETAILS
                  </a>
                  <a
                    href="/rooms?room=studio-imperial"
                    className="button button-primary px-3 py-2"
                  >
                    BOOK NOW
                  </a>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item" style={{ height: '500px' }}>
              <div className="row pb-3">
                <div className="col-lg-7">
                  <img
                    src="assets/images/Studio-Grand-768x660.webp"
                    className="d-block w-100"
                    style={{ height: '450px', objectFit: 'cover' }}
                    alt="Studio Room Grand"
                  />
                </div>
                <div className="col-lg-5 p-5">
                  <p className="title">Studio Room (Grand)</p>
                  <p className="snippet">
                    Price at <span className="price">&#8358;70,000.00</span>/
                    night
                  </p>
                  <p className="text">Indulge in the ultimate luxury living...</p>
                  <a
                    href="/rooms?room=studio-imperial"
                    className="button button-default px-3 py-2"
                  >
                    DETAILS
                  </a>
                  <a
                    href="/rooms?room=studio-imperial"
                    className="button button-primary px-3 py-2"
                  >
                    BOOK NOW
                  </a>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item" style={{ height: '500px' }}>
              <div className="row pb-3">
                <div className="col-lg-7">
                  <img
                    src="assets/images/R8A2166-1-2048x1365.jpg"
                    className="d-block w-100"
                    style={{ height: '450px', objectFit: 'cover' }}
                    alt="One Bedroom"
                  />
                </div>
                <div className="col-lg-5 p-5">
                  <p className="title">One Bedroom Apartments</p>
                  <p className="snippet">
                    Price at <span className="price">&#8358;105,000.00</span>/
                    night
                  </p>
                  <p className="text">Our charming one-bedroom apartment...</p>
                  <a
                    href="/room"
                    className="button button-default px-3 py-2"
                  >
                    DETAILS
                  </a>
                  <a
                    href="/room"
                    className="button button-primary px-3 py-2"
                  >
                    BOOK NOW
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Controls - Uncomment if you want to use them */}
          {/* 
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#roomCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#roomCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button> 
          */}

          {/* Indicators (optional thumbnails) */}
          <div className="d-flex justify-content-center gap-2 mt-3">
            <img
              src="assets/images/R8A0844-2048x1365.jpg"
              data-bs-target="#roomCarousel"
              data-bs-slide-to="0"
              className="img-thumbnail"
              style={{ height: '80px', width: 'auto', cursor: 'pointer' }}
              alt="Thumbnail 1"
            />
            <img
              src="assets/images/Studio-Grand-768x660.webp"
              data-bs-target="#roomCarousel"
              data-bs-slide-to="1"
              className="img-thumbnail"
              style={{ height: '80px', width: 'auto', cursor: 'pointer' }}
              alt="Thumbnail 2"
            />
            <img
              src="assets/images/R8A2166-1-2048x1365.jpg"
              data-bs-target="#roomCarousel"
              data-bs-slide-to="2"
              className="img-thumbnail"
              style={{ height: '80px', width: 'auto', cursor: 'pointer' }}
              alt="Thumbnail 3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomServices
