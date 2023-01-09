import React from "react";
import {PriceSlider} from "../PriceSlider/PriceSlider";
const SearchFilter = () => {
  return (
    <div className="accordion" id="accordionFilter">
      <div className="accordion-item">
        <h2 className="accordion-header" id="CategotyFilter">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Category
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="CategotyFilter"
          data-bs-parent="#accordionFilter"
        >
          <div className="accordion-body">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="Bed-check"
              />
              <label className="form-check-label" htmlFor="Bed-check">
                Bed
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="Dining-check"
              />
              <label className="form-check-label" htmlFor="Dining-check">
                Dining
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="Seats-check"
              />
              <label className="form-check-label" htmlFor="Seats-check">
                Seats
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="priceFilter">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Price
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="priceFilter"
          data-bs-parent="#accordionFilter"
        >
          <div className="accordion-body">
           <PriceSlider/>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="availabilityFilter">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Availability
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="availabilityFilter"
          data-bs-parent="#accordionFilter"
        >
          <div className="accordion-body">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="stockCheckbox"
              />
              <label className="form-check-label" htmlFor="stockCheckbox">
                In stock only
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
