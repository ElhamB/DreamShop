import React from 'react'
import { Link } from "react-router-dom";
import './Slideshow.css';
const Slideshow = () => {
  return (
    <div id="carouselExampleControls" className="slideshow carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
      <div className='container'>
        <div className='row'>
          <div className='col-md-6' >
            <div className="content">
              <h3>A variety of minimalist furniture</h3>
              <p>
                choose from the largest furniture sales site of the highest
                quality
              </p>
              <Link className="btn btn-default" to="/products">
                Shop now
              </Link>
            </div>
          </div>
          <div className='col-md-6'>
            <div className="img-con justify-content-center">
            <img src="/images/p6.png" className="slide-image" alt="..."/>
            </div>
          </div>
  
        </div>
      </div>
      </div>
      <div className="carousel-item">
      <div className='container'>
        <div className='row'>
          <div className='col-md-6' >
            <div className="content">
              <h3>A variety of minimalist furniture2</h3>
              <p>
                choose from the largest furniture sales site of the highest
                quality
              </p>
              <Link className="btn btn-default" to="/products">
                Shop now
              </Link>
            </div>
          </div>
          <div className='col-md-6'>
            <div className="img-con justify-content-center">
            <img src="/images/p6.png" className="slide-image" alt="..."/>
            </div>
          </div>
  
        </div>
      </div>
      </div>
     
    </div>
    <button className="carousel-control-prev" type="button"  data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button"  data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Slideshow
