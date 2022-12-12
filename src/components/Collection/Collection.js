import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CategoryListAction } from "../../store/Category";
import classes from "./Collection.module.css";
import CatgoryItem from "./CatgoryItem";
const Collection = () => {
  const dispatch = useDispatch();
  const categoriesList = useSelector((state) => state.categoryList);
  const { categories } = categoriesList;
  useEffect(() => {
    dispatch(CategoryListAction());
  }, [dispatch]);
  return (
    <div className={classes["collection-wrapper"]}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="text-center">
              <h2 className="title-sec">Shop Our Collection</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {categories.map((category) => (
            <CatgoryItem key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
