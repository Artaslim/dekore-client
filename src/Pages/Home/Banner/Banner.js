import React from "react";

const Banner = () => {
  return (
    <div className="  bg-dekor bg-cover bg-no-repeat py-36 bg-center ">
      <div className="container text-start px-36">
        <h1 className=" text-4xl md:text-6xl mb-4 font-medium text-gray-800 capitalize">
          Best collection for
          <br />
          home decoration
        </h1>
        <p className="text-lg font-medium">
          Our Experience Ensures That Your Projects Will Be Done
          <br />
          Right And With The Upmost Professionalism!
        </p>
        <div className="mt-12">
          <a
            href="#"
            className="bg-primary border border-primary text-white px-8 py-3 rounded-md hover:bg-transparent hover:text-primary font-medium transition"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
