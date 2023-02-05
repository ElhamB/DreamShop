import React from 'react';
import { Link } from "react-router-dom";
import classes from "./Category.module.css";

const CatgoryItem = ({category}) => {
  return (
    <div  className="col-md-3 col-sm-6 col-12">
    <figure className={classes.category}>
      <Link to={`/search/${category.id}`}>
        <img src={category.image} alt={category.title} />
      </Link>
      <figcaption>
        <h3>
          <Link to={`/search/${category.id}`}>{category.title}</Link>
        </h3>
      </figcaption>
    </figure>
  </div>
  )
}

export default CatgoryItem
