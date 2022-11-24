import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "../Product/Product";
import { ProductListAction } from "../../redux/actions/ProductAction";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./TopDeal.css";

const TopDeal = () => {
  const productList = useSelector((state) => state.productList);
  const { products } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProductListAction());
  }, [dispatch]);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="container">
 <div className="row">
        <div className="col-sm-12">
          <div className="text-center pt-4">
            <h2 className="title-sec">Browse Top Deal</h2>
          </div>
          <Carousel responsive={responsive} keyBoardControl={true}>
            {products.map((item) => {
              return (
                <div key={item.id}>
                  <Product product={item} />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
     
  );
};

export default TopDeal;
