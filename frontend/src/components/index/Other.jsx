import React from 'react'

const Other = () => {
  return (
    <div className="others-and-contact">
      <div className="row justify-content-center w-100">
        <div className="col-md-4 border-right text-center py-5">
          <p className="title">Current Location</p>
          <p className="sub-title px-5">
            3018 Justice James Ogebe St, Asokoro 900103, Abuja, Federal Capital Territory,
            Nigeria
          </p>
        </div>
        <div className="col-md-4 border-right text-center py-5">
          <p className="title">Stay Connected</p>
          <p className="sub-title">Follow us on social media channels</p>
          <div className="d-flex socials justify-content-center text-center mx-auto">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/profile.php?id=100091933938699&mibextid=ZbWKw"
            >
              <i className="fa-brands mx-3 fa-facebook-f"></i>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/lisasuites/"
            >
              <i className="fa-brands mx-3 fa-instagram"></i>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/+2348136888875?text=Hello, My Name is ___, I would like to know more about your rooms"
            >
              <i className="fa-brands mx-3 fa-whatsapp"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="#">
              <i className="fa-brands mx-3 fa-twitter"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="#">
              <i className="fa-brands mx-3 fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="col-md-4 text-center py-5">
          <p className="title">Newsletter Sign Up</p>
          <p className="sub-title">Sign up for news and special offers</p>
          <form className="px-3">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="ENTER YOUR EMAIL ADDRESS"
              />
              <div className="input-group-btn">
                <button className="button button-default py-3 px-3" type="submit">
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Other
