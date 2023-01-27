import React ,{useState,useEffect}from "react";
import { Link } from "react-router-dom";

const SlideShowItem = ({ slideItem,index }) => {
    const [isActive,setIsActive]=useState(0);
    useEffect(() => {
        setIsActive(0);
      }, [slideItem]);
  return (
    <div className={"carousel-item " + (index === isActive ? "active":'' )}>
      <div className="row">
        <div className="col-md-6">
          <div className="content">
            <h3>{slideItem.title}</h3>
            <p>{slideItem.description}</p>
            <Link className="btn btn-default" to={slideItem.url}>
              Shop now
            </Link>
          </div>
        </div>
        <div className="col-md-6">
          <div className="img-con justify-content-center">
            <img
              src={slideItem.image}
              className="slide-image"
              alt={slideItem.title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideShowItem;
