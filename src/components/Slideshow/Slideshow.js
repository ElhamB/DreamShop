import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { slideshowListAction } from "../../store/SlideShow";
import SlideShowItem from "./SlideShowItem";
import "./Slideshow.css";

const Slideshow = () => {
  const slideList = useSelector((state) => state.slideList);
  const { slides } = slideList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(slideshowListAction());
  }, [dispatch]);
  return (
    <div
      id="carouselExampleControls"
      className="slideshow carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {slides.map((slide,index) => (
          <SlideShowItem slideItem={slide} index={index} key={slide.id} />
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slideshow;
