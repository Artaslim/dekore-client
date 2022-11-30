import React from "react";
import Categories from "../../Shared/Categories/Categories";
import Items from "../../Shared/Items/Items";
import Banner from "../Banner/Banner";

import Features from "../Feature/Features";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Features></Features>
      <Categories></Categories>
      <Items></Items>
      {/* <Categories></Categories>
      <Items></Items> */}
    </div>
  );
};

export default Home;
