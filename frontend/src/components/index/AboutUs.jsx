import React from 'react';

const AboutUs = () => {
  return (
    <>
      {/* About Marizu Suites */}
      <section className="about-section">
        <div className="container-fluid">
          <div className="px-4 w-100 py-5">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-7 mb-4 mt-5">
                <div data-swiper-parallax="-200">
                  <p className="subtitle txt-sm ms-2">WELCOME TO Marizu SUITES</p>
                </div>
                <div className="title serif txt-large mb-4 py-2" data-swiper-parallax="-300">
                  A New Vision Of <br /> Luxury
                </div>
                <div className="text" style={{ width: '90%' }}>
                  <b>Welcome to Marizu Suites, an Oasis of Comfort, Love, and Warmth.</b>
                  <br /><br />
                  The Marizu Suites is a premier serviced apartment company in the hospitality industry offering
                  luxurious and comfortable accommodations for our guests. We provide our guests with all the
                  comforts of home, the added convenience of having a concierge and associates that are all
                  dedicated to making your stay as comfortable and enjoyable as possible.
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-5 mb-5 imgcontain">
                <img src="assets/images/IMG_0480.webp" className="img-fluid" alt="About Marizu Suites" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
