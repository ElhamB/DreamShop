import React from "react";
import { useDispatch } from "react-redux";
import { sortByPrice } from "../../store/Filter";

const SearchSorting = () => {
  const dispatch = useDispatch();
  const sortBySelectHandler = (e) => {
    let value = e.target.value;
    let direction = value.endsWith("asc") ? "asc" : "desc";

    if (value.startsWith("price")) {
      dispatch(sortByPrice({ direction }));
    } else {
      //dispatch(sortByRating(rating))
    }
  };
  return (
    <div className="row mb-3">
      <label className="col-sm-3 col-lg-5 col-form-label text-end">
        sort by
      </label>
      <div className="col-sm-9 col-lg-7">
        <select className="form-select" onChange={(e) => sortBySelectHandler(e)}>
          <option value="rating">customer rating</option>
          <option value="price_asc">Price - Lowest to Highest</option>
          <option value="price_desc">Price - Highest to Lowest</option>
        </select>
      </div>
    </div>
  );
};

export default SearchSorting;
