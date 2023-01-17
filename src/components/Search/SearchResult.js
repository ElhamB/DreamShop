import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "../Product/Product";
import { loadPrdoucts } from "../../store/Filter";
const SearchResult = () => {
  const productList = useSelector((state) => state.filter);
  console.log(productList);
  const { products } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPrdoucts());
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
