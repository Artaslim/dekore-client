import React from "react";
import img1 from "../../../assets/icons/i-5.svg";
import img2 from "../../../assets/icons/i-6.svg";
import img3 from "../../../assets/icons/i-7.svg";
import Feature from "./Feature";

const Features = () => {
  const cardData = [
    {
      id: 1,
      name: "Interior for Home",
      description: "Open 9 pm to 5pm everyday",
      icon: img1,
      bgClass: "bg-amber-400",
    },
    {
      id: 2,
      name: "Trusted by thousands",
      description: "Brooklyn, NY 10036, United States",
      icon: img2,
      bgClass: "bg-amber-400",
    },
    {
      id: 3,
      name: "Financing made easy",
      description: "+000 123 456789",
      icon: img3,
      bgClass: "bg-amber-400",
    },
  ];
  return (
    <div className="grid mt-8 text-white gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-16">
      {cardData.map((card) => (
        <Feature key={card.id} card={card}></Feature>
      ))}
    </div>
  );
};

export default Features;
