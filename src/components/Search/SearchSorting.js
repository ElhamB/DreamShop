import React from "react";

const SearchSorting = () => {
  return (
    <div className="row mb-3">
      <label className="col-sm-3 col-lg-5 col-form-label text-end">sort by</label>
      <div className="col-sm-9 col-lg-7">
        <select className="form-select">
          <option value="1">customer rating</option>
          <option value="2">Price per item: Low-High</option>
          <option value="3">Price per item: High-Low</option>
        </select>
      </div>
    </div>
  );
};

export default SearchSorting;
