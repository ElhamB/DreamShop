import React, { Fragment } from "react";
import Title from "../../components/Title/Title";

export const FavoritePage = () => {
    const title = "Favorites";
    return (
      <Fragment>
        <Title title={title} />
        <div className="container">
          <div className="row">
            <div className="col-sm-12 my-5">
              <h1 className="fs-3 text-center mb-5">Favorites</h1>
            </div>
          </div>
        </div>
      </Fragment>
    );
}


