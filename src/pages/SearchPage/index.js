import React, { Fragment } from "react";
import SearchFilter from "../../components/Search/SearchFilter";
import SearchResult from "../../components/Search/SearchResult";
import SearchSorting from "../../components/Search/SearchSorting";
import Title from "../../components/Title/Title";
export const SearchPage = () => {
  const title = "Products";

  return (
    <Fragment>
      <Title title={title} />

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <SearchFilter />
          </div>
          <div className="col-lg-9 col-md-8">
            <div className="row">
              <div className="col">
                <h1>Bed</h1>
                <span>
                  Found <strong>10</strong> items on search
                </span>
              </div>
              <div className="col">
                <SearchSorting />
              </div>
            </div>
            <SearchResult />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
