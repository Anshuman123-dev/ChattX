import React from "react";
import { Helmet } from "react-helmet-async";
import favicon from "../../assets/favicon.ico"; // Update path according to your assets folder structure

const Title = ({
  title = "ChattX",
  description = "this is the Chat App called Chattu",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" type="image/x-icon" href={favicon} />
      
    </Helmet>
  );
};

export default Title;
