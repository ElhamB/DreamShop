import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "../Product/Product";
import { ProductListAction } from "../../store/Product";
const SearchResult = () => {
  const productList = useSelector((state) => state.productList);
  const { products } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProductListAction());
  }, [dispatch]);
  return (
    <div className="row">
      {products.map((item) => {
        return (
          <div className="col-sm-4" key={item.id}>
            <Product product={item} />
          </div>
        );
      })}
    </div>
  );
};

export default SearchResult;
