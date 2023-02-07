import React, { Fragment } from "react";
import Profile from "../../components/Profile/Profile";
import Title from "../../components/Title/Title";

export const ProfilePage = () => {
    const title = "Profile";
    return (
      <Fragment>
        <Title title={title} />
        <div className="container">
          <div className="row d-flex justify-content-center ">
            <div className="col-sm-12 col-md-8 my-5">
              <h1 className="fs-3 text-center mb-5">Profile</h1>
              <Profile/>
            </div>
          </div>
        </div>
      </Fragment>
    );
}

