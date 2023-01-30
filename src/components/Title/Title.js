import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
const Title = ({ title }) => {

  const [titlePage, setTitlePage] = useState(title);
  // const [content, setContent] = useState("Loading...");
  useEffect(() => {
    // const fetchData = async () => {
    //   // When the data "fetching" process is complete, we will set the title and content
    //   setTitlePage(titlePage);
    //   // setContent("Everything is done");
    // };

    // fetchData();
    setTitlePage(title);
  }, [title]);
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title ? title : "Dream shop"}</title>
        <meta property="og:title" content={titlePage} />
        {/* <meta property="og:image" content={ogImage} />
        <meta property="description" content={ogDescription} /> */}
      </Helmet>
    </HelmetProvider>
  );
};

export default Title;
