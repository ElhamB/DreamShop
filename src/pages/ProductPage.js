import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import { productDetailAction } from "../redux/actions/ProductAction";
import Loading from "../components/UI/Loading";
import CommentList from "../components/Comment/CommentList";
import "./ProductPage.css";
export const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetails);
  const { loading, product } = productDetail;
  useEffect(() => {
    dispatch(productDetailAction(id));
  }, [dispatch, id]);
  const addToCartHandler = () => {
    navigate(`/cart/${id}`);
  };
  return (
    <Fragment>
    {loading &&  <Loading/>}
    {
      !loading && (
      <div className="container py-5">
      <div className="row">
        <div className="col-md-8">
          <div className="text-center">
          <img alt="" src={product.image1} className="mb-3" />
          </div>
          <ul className="nav nav-tabs">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                data-bs-toggle="tab"
                data-bs-target="#description-tab-pane"
                type="button"
              >
                Product Details
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#measurements-tab-pane"
                type="button"
              >
                Measurements
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#review-tab-pane"
                type="button"
              >
                Reviews
              </button>
            </li>
          </ul>
          <div className="tab-content">
            <div
              className="py-3 tab-pane fade show active"
              id="description-tab-pane"
            >
              {product.description}
            </div>
            <div className="py-3 tab-pane fade" id="measurements-tab-pane">
              {product.measurement}
            </div>
            <div className="tab-pane fade" id="review-tab-pane">
              <div className="total-comment row my-3">
                <div className="col-sm-7 ">
                  <strong className="d-block">4.4</strong>
                  <span className="stars">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </span>
                  <div className="mt-2">123 reviews</div>
                </div>
                <div className="col-sm-5">
                <div className="per-rating">
                    <span className="me-2 label-rating">Quality</span>
                    <span className="stars">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                    </span>
                  </div>
                  <div className="per-rating">
                    <span className="me-2 label-rating">Design</span>
                    <span className="stars">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star"></span>
                    </span>
                  </div>
                  <div className="per-rating">
                    <span className="me-2 label-rating">
                      Satisfaction with price
                    </span>
                    <span className="stars">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                    </span>
                  </div>
                </div>
              </div>
              <CommentList comments={product.comments}/>
            </div>
          </div>
        </div>
        <div className="col-md-4 product-details product-page">
          <h1>{product.title}</h1>
          <Link className="category" to="/category">
            {product.category}
          </Link>
          <div className="rateSec mb-2">
            <span className="stars">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </span>
            <strong className="ms-2">3.3</strong> | <small>123 reviews</small>
          </div>
          <div className="price-sec mt-3">
            <span className="old-price">${product.price}</span>
            <span className="new-price">$220.00</span>
          </div>
          <div className="btn-quantity">
            <button className="btn-add">+</button>
            <input type="number" min="1" max="12"/>
            <button className="btn-decrease">-</button>
          </div>
          <button className="btn btn-default" onClick={addToCartHandler}>
            <i className="fa fa-shopping-cart"></i> Add to cart
          </button>
        </div>
      </div>
    </div>
   ) }
   </Fragment>

  );
};
