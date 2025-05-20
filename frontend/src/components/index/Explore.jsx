import React from 'react';

const Explore = () => {
  return (
    <div className="px-4 explore-section w-100 pt-5 mt-5" id="explore-section">
      <div className="subtitle txt-md text-center mx-auto mt-5" data-swiper-parallax="-200">EXPLORE</div>
      <div className="title serif txt-large mb-4 py-2 text-center mx-auto" data-swiper-parallax="-300">LISA SUITES</div>
      <div className="text text-center mx-auto mar-p" style={{ width: '60%' }}>
        Create timeless memories through the lens of luxury and comfort. With a soothing ambiance, our signature luxury
        hospitality, room service, and facilities advance your living experience.
      </div>

      <div className="container">
        {/* First Row */}
        <div className="row">
          {/* Azure Spa */}
          <div className="col-12 col-sm-6 col-md-4 mb-5">
            <div className="card fixed-height-card">
              <div id="carouselSpa" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item me active">
                    <img src="assets/images/MSH03653.webp" className="card-img-top" alt="Slide 1" />
                  </div>
                  <div className="carousel-item me">
                    <img src="assets/images/MSH03732.webp" className="card-img-top" alt="Slide 2" />
                  </div>
                  <div className="carousel-item me">
                    <img src="assets/images/MSH03768.webp" className="card-img-top" alt="Slide 3" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselSpa" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselSpa" data-bs-slide="next">
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>

              <div className="card-body">
                <div className="title px-2 card-title serif txt-md mb-2 py-2">
                  <a href="/facilities?facility=azure-spa" style={{ textDecoration: 'none', color: 'inherit' }}>Azure Spa</a>
                </div>
                <p className="card-text p-2">
                  The exclusive ambiance of our spa reflects calmness and serenity. It's an oasis of peace and tranquility in the heart of a bustling city.
                </p>
                <div>
                  <a href="/facilities?facility=azure-spa" className="nav-link">
                    <span className="ex-more">EXPLORE MORE</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Repeat this same pattern for the rest of your cards like 'Gauze & Gourmet', 'Gym', 'Comfort is luxury', etc. Just update IDs, image paths, and card details accordingly. */}

          {/* Example: Cinema */}
          <div className="col-12 col-sm-6 col-md-4 mb-5">
            <div className="card fixed-height-card">
              <div id="cinema" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
                <div className="carousel-inner">
                  <div className="carousel-item me active">
                    <img src="assets/images/conferences-thumb.jpg" className="card-img-top w-100" alt="Cinema 1" />
                  </div>
                  <div className="carousel-item me">
                    <img src="assets/images/sugar-52-retaurant-1.jpg" className="card-img-top w-100" alt="Cinema 2" />
                  </div>
                  <div className="carousel-item me">
                    <img src="assets/images/unnamed (1).jpg" className="card-img-top w-100" alt="Cinema 3" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#cinema" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#cinema" data-bs-slide="next">
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
              <div className="card-body">
                <div className="title px-2 card-title serif txt-md mb-2 py-2">
                  <a href="/facilities?facility=azure-spa" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Cinema
                  </a>
                </div>
                <p className="card-text p-2">The Cinema Experience is super good and displayed in 4k...</p>
                <div>
                  <a href="/facilities?facility=azure-spa" className="nav-link">
                    <span className="ex-more">EXPLORE MORE</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

           {/* Example: gaze */}
          <div className="col-12 col-sm-6 col-md-4 mb-5">
            <div className="card fixed-height-card">
              <div id="nono" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
                <div className="carousel-inner">
                  <div className="carousel-item me active">
                    <img src="assets/images/MSH03803.webp" className="card-img-top w-100" alt="nono 1" />
                  </div>
                  <div className="carousel-item me">
                    <img src="assets/images/R8A0257-1-2048x1365.jpg" className="card-img-top w-100" alt="nono 2" />
                  </div>
                  <div className="carousel-item me">
                    <img src="assets/images/R8A0504-2048x1365.jpg" className="card-img-top w-100" alt="nono 3" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#nono" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#nono" data-bs-slide="next">
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
              <div className="card-body">
                <div className="title px-2 card-title serif txt-md mb-2 py-2">
                  <a href="/facilities?facility=azure-spa" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Good Bedrooms
                  </a>
                </div>
                <p className="card-text p-2"> The exclusive ambiance of our spa reflects calmness and serenity. It's an oasis of peace and tranquility in the heart of a bustling city. Our Spa offers unique spaces...</p>
                <div>
                  <a href="/facilities?facility=azure-spa" className="nav-link">
                    <span className="ex-more">EXPLORE MORE</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* second Row */}
    <div className="row">
   <div className="col-12 col-sm-6 col-md-4 mb-5">
            <div className="card fixed-height-card">
              <div id="carouselSpa" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item me active">
                    <img src="assets/images/join-member-club.jpg" className="card-img-top" alt="Slide 1" />
                  </div>
                  <div className="carousel-item me">
                    <img src="assets/images/fitness-thumb-2.jpg" className="card-img-top" alt="Slide 2" />
                  </div>
                  <div className="carousel-item me">
                    <img src="assets/images/lobby-cafe-thumb-1.jpg" className="card-img-top" alt="Slide 3" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselSpa" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselSpa" data-bs-slide="next">
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>

              <div className="card-body">
                <div className="title px-2 card-title serif txt-md mb-2 py-2">
                  <a href="/facilities?facility=azure-spa" style={{ textDecoration: 'none', color: 'inherit' }}>Gym</a>
                </div>
                <p className="card-text p-2">
                  The exclusive ambiance of our spa reflects calmness and serenity. It's an oasis of peace and tranquility in the heart of a bustling city.
                </p>
                <div>
                  <a href="/facilities?facility=azure-spa" className="nav-link">
                    <span className="ex-more">EXPLORE MORE</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
           <div className="col-12 col-sm-6 col-md-4 mb-5">
            <div className="card fixed-height-card">
              <div id="carouselSpa" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item me active">
                    <img src="assets/images/Studio-Apartment-Imperial-5-768x660.webp" className="card-img-top" alt="Slide 1" />
                  </div>
                  <div className="carousel-item me">
                    <img src="assets/images/Studio-Grand-768x660.webp" className="card-img-top" alt="Slide 2" />
                  </div>
                  <div className="carousel-item me">
                    <img src="assets/images/lobby-cafe-thumb-3.jpg" className="card-img-top" alt="Slide 3" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselSpa" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselSpa" data-bs-slide="next">
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>

              <div className="card-body">
                <div className="title px-2 card-title serif txt-md mb-2 py-2">
                  <a href="/facilities?facility=azure-spa" style={{ textDecoration: 'none', color: 'inherit' }}>Comfort is luxury</a>
                </div>
                <p className="card-text p-2">
                  The exclusive ambiance of our spa reflects calmness and serenity. It's an oasis of peace and tranquility in the heart of a bustling city.
                </p>
                <div>
                  <a href="/facilities?facility=azure-spa" className="nav-link">
                    <span className="ex-more">EXPLORE MORE</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
           <div className="col-12 col-sm-6 col-md-4 mb-5">
            <div className="card fixed-height-card">
              <div id="carouselSpa" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item me active">
                    <img src="assets/images/IMG_1118-1.webp" className="card-img-top" alt="Slide 1" />
                  </div>
                  <div className="carousel-item me">
                    <img src="assets/images/fitness-thumb-2.jpg" className="card-img-top" alt="Slide 2" />
                  </div>
                  <div className="carousel-item me">
                    <img src="assets/images/IMG_0754_2.webp" className="card-img-top" alt="Slide 3" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselSpa" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselSpa" data-bs-slide="next">
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>

              <div className="card-body">
                <div className="title px-2 card-title serif txt-md mb-2 py-2">
                  <a href="/facilities?facility=azure-spa" style={{ textDecoration: 'none', color: 'inherit' }}>Female saloon</a>
                </div>
                <p className="card-text p-2">
                   The exclusive ambiance of our spa reflects calmness and serenity. It's an oasis of peace and tranquility in the heart of a bustling city. Our Spa offers unique spaces...
                </p>
                <div>
                  <a href="/facilities?facility=azure-spa" className="nav-link">
                    <span className="ex-more">EXPLORE MORE</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Add Second Row Here following the same pattern */}

      </div>
    </div>
  );
};

export default Explore;
