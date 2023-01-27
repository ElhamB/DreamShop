import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CategoryListAction } from "../../store/Category";
import { filterByCategory } from "../../store/Filter";
const Category = () => {
  const dispatch = useDispatch();
  const categoriesList = useSelector((state) => state.categoryList);
  const { categories } = categoriesList;
  useEffect(() => {
    dispatch(CategoryListAction());
  }, [dispatch]);

  const categoryFilterhandler = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      dispatch(filterByCategory({value}));
    }
  };
  return (
    <Fragment>
      {categories.map((category) => {
        return (
          <div className="form-check" key={category.id}>
            <input
              className="form-check-input"
              type="checkbox"
              value={category.id}
              id={`cat-${category.id}`}
              onChange={(e) => categoryFilterhandler(e)}
            />
            <label className="form-check-label" htmlFor={`cat-${category.id}`}>
              {category.title}
            </label>
          </div>
        );
      })}
    </Fragment>
  );
};

export default Category;
