import React from 'react';
import Image1 from '../assets/Banner1.webp';
import Image2 from '../assets/digital-report-car-banner-1.jpg';

const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators d-none">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
        <img src={Image1} className="d-block w-100" alt="First Slide" />
          <div className="carousel-caption d-none d-md-block data-lead-services">
            <h1>Data-Led SEO Services</h1>
            <p>In 2023-2024, we delivered an average growth of <span>191.79%</span> in traffic and <span>134.88%</span> in leads for all our clients through data-driven SEO services. Partner with the leading SEO company in India for a fully managed SEO plan that ensures sustainable organic growth. Speak to an SEO expert today.</p>
            <a href="#frm">Book Your Consultation</a>
          </div>
        </div>
        <div className="carousel-item">
        <img src={Image2} className="d-block w-100" alt="First Slide" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
