import React, { Fragment } from "react";
import Title from "../../components/Title/Title";

export const NotFoundPage = () => {
  const title = "NotFound";

  return (
    <Fragment>
      <Title title={title} />
      <div>Not Found</div>
    </Fragment>
  );
};
