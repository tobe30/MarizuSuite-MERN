

const HeroSlider = () => {
  return (
  <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="4000">
      <div className="carousel-inner">

        {/* Slide 1 */}
        <div className="carousel-item active">
          <div className="hero-slide d-flex flex-column justify-content-center align-items-center text-white text-center">
            <div>
              <div className="subtitle txt-sm mb-2">WELCOME TO Marizu SUITES</div>
              <div className="title serif txt-large mb-4" style={{ lineHeight: '50px' }}>
                Redefining the art of luxury living.
              </div>
            </div>
            <a href="#explore-section" className="button button-primary mt-4">DISCOVER MORE</a>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <div className="hero-slide d-flex flex-column justify-content-center align-items-center text-white text-center">
            <div>
              <div className="subtitle txt-sm mb-2">WELCOME TO Marizu SUITES</div>
              <div className="title serif txt-large mb-4" style={{ lineHeight: '50px' }}>
                Timelessness, Elegance & Comfort
              </div>
            </div>
            <a href="#explore-section" className="button button-primary mt-4">DISCOVER MORE</a>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <div className="hero-slide d-flex flex-column justify-content-center align-items-center text-white text-center">
            <div>
              <div className="subtitle txt-sm mb-2">WELCOME TO Marizu SUITES</div>
              <div className="title serif txt-large mb-4" style={{ lineHeight: '50px' }}>
                Experience the true art of luxury living in the heart of Abuja
              </div>
            </div>
            <a href="#explore-section" className="button button-primary mt-4">DISCOVER MORE</a>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>

      {/* Indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true"></button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
      </div>
    </div>
  );
};

export default HeroSlider;
