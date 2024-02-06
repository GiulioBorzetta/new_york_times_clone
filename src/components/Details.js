import moment from "moment";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../images/logo.png";
import Footer from "./Footer";

const Details = () => {
  const location = useLocation();

  return (
    <>
      <div className="p-4 shadow-lg">
        <Link to="/">
          <img src={Logo} className="w-32 md:w-52" alt="New York Times Logo" />
        </Link>
      </div>
      <div className="p-4">
        <div className="text-center">
          <h1 className="font-semibold text-2xl md:text-4xl font-serif italic">
            {location?.state?.data?.title}
          </h1>
          <h1 className="font-serif text-xl md:text-2xl mt-3">
            {location?.state?.data?.headline?.main}
          </h1>
        </div>
        <img
          src={
            "https://www.nytimes.com/" +
            location?.state?.data?.multimedia[2]?.url
          }
          className="w-480 h-320 mt-6 md:w-8/12 md:mx-auto"
          alt="Article Multimedia"
        />
        <div className="flex items-center justify-center font-bold mt-4">
          <h1>
            {moment(location?.state?.data?.pub_date).format("DD-MM-YYYY")}
          </h1>
          <h1 className="ml-2">{location?.state?.data?.source}</h1>
        </div>
        <h1 className="font-serif text-lg md:text-xl mt-3 md:w-9/12 mx-auto">
          {location?.state?.data?.lead_paragraph}
        </h1>
      </div>
      <Footer />
    </>
  );
};

export default Details;
