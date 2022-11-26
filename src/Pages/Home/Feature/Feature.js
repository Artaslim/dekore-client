import React from "react";

const Feature = ({ card }) => {
  const { name, icon, description, bgClass } = card;
  return (
    <div className={`card md:card-side p-6  shadow-xl ${bgClass}`}>
      <figure>
        <img src={icon} alt="Movie" className="w-16" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Feature;
