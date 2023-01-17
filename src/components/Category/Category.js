import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CategoryListAction } from "../../store/Category";

const Category = () => {
  const dispatch = useDispatch();
  const categoriesList = useSelector((state) => state.categoryList);
  const { categories } = categoriesList;
  useEffect(() => {
    dispatch(CategoryListAction());
  }, [dispatch]);
  return (
    <Fragment>
      {categories.map((category) => {
        return (
          <div className="form-check" key={category.id}>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="Bed-check"
            />
            <label className="form-check-label" htmlFor="Bed-check">
              {category.title}
            </label>
          </div>
        );
      })}
    </Fragment>
  );
};

export default Category;
