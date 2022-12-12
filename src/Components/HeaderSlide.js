import React from 'react'
import pic1 from './techify.jpg';
import salaries from './salaries.jpg';
import learn from './learn.jpg';
import react from './react.jpeg';
import naresh1 from './naresh1.jpg';
import manoj from './manoj.jpeg';

export default function headerslide() {
  return (
    <div className='container'>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={pic1} height={500} width={1024} className="d-block" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={salaries} height={500} width={1024} className="d-block" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={learn} height={500} width={1024} className="d-block" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={react} height={500} width={1024} className="d-block" alt="..." />
          </div>

          <div className="carousel-item">
            <img src={naresh1} height={500} width={1024} className="d-block" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={manoj} height={500} width={1024} className="d-block" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  )
}
