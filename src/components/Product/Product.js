import React from "react";
import { Link } from "react-router-dom";
import './Product.css'
const Product = ({product}) => {
  return (
    <figure className="product-items">
    <div className="product-block">
      <div className="image">
        <Link to={`/product/${product.id}`} className="img-container">
          <img
            src={product.image1}
            alt=""
            className="img-responsive reg-image"
          />
          <img
            className="img-responsive hover-image"
            src={product.image2}
            alt={product.title}
          />
        </Link>
        <div className="product-action">
          <ul className="list-unstyled">
            <li>
              <Link
                to="#"
                className="tooltipBtn heart"
                title="Add to wishlist"
              >
                <i className="fa fa-heart-o"></i>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="tooltipBtn "
                title="Quick view"
              >
                <i className="fa fa-search-plus"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <figcaption className="product-details">
        <Link className="category-name" to="/category">
          Furniture
        </Link>
        <h3>
          <Link to={`/product/${product.id}`}>{product.title}</Link>
        </h3>
        <div className="price-sec">
          <span className="new-price">$220.00</span>{" "}
          <span className="old-price">${product.price}</span>
        </div>
        <Link className="btn btn-default" to="/cart">
          <i className="fa fa-shopping-cart"></i> Add to cart
        </Link>
      </figcaption>
    </div>
  </figure>
  )
}

export default Product
