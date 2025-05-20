import React from 'react'

const Section = () => {
  return (
    <div className="px-4 about-section w-100 py-5">
      <div className="row">
        <div className="col-md-6">
          <div className="title serif txt-large mb-2 py-2" data-swiper-parallax="-300">
            Redefining the art of luxury living
          </div>
          <div className="text" style={{ width: '90%' }}>
            <b>Welcome to Marizu Suites, an Oasis of Comfort, Love, and Warmth.</b>
            <br />
            <br />
            <p>
              The Marizu Suites is a premier serviced apartment company in the hospitality industry offering luxurious
              and comfortable accommodations for our guests. We provide our guests with all the comforts of home, plus
              the added convenience of having a concierge and associates that are all dedicated to making your stay as
              comfortable and enjoyable as possible.
            </p>
            <p>
              We believe that where you stay should be an extension of your personality, which is why we offer such a
              wide range of apartments to choose from, all of which are equipped with the latest amenities and
              facilities you need to feel at home.
            </p>
            <p>
              We take pride in providing our guests with the highest level of customer service, our enthusiastic team
              strives to make you feel like the most important person in the world, wherever you go, with a
              distinctively personal touch, and we go above and beyond to make sure that every one of our guests is
              satisfied.
            </p>
            <p>Welcome to Marizu Suites, an Oasis of Comfort, Love, and Warmth.</p>
          </div>
        </div>
        <div className="col-md-6">
          <img src="assets/images/IMG_2236.JPG" className="w-100" alt="About Marizu Suites" />
        </div>
      </div>
    </div>
  )
}

export default Section
