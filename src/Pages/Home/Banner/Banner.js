import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="  bg-dekor bg-cover bg-no-repeat py-20  md:py-36 bg-center ">
      <div className="container text-start px-24 md:px-36">
        <h1 className="text-lg md:text-4xl  mb-4 font-medium text-gray-800 capitalize">
          Best collection for
          <br />
          home decoration
        </h1>
        <p className="text-xs md:text-lg font-medium">
          Our Experience Ensures That Your Projects Will Be Done
          <br />
          Right And With The Upmost Professionalism!
        </p>
        <div className=" mt-10 md:mt-12 ">
          <Link
            to="/"
            className="bg-primary border text-sm border-primary text-white  px-8 py-3 rounded-md hover:bg-transparent hover:text-primary font-medium transition"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
