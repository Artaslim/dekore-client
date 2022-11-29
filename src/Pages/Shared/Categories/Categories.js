import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import BookingModal from "../../Products/BookingModal/BookingModal";
import Items from "../Items/Items";

import Loading from "../Loading/Loading";

const Categories = () => {
  const products = useLoaderData(Date());

  const [categories, setCategories] = useState([]);
  const [item, setItem] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  if (loading) {
    <Loading></Loading>;
  }
  //

  return (
    <div>
      <div className="flex  flex-col md:flex-row  gap-6 justify-center items-center my-16">
        {categories.map((category) => (
          <div className="mb-4">
            <Link
              to={`/categories/${category.name}`}
              key={category._id}
              className="bg-primary    border border-primary text-white px-8 py-3 rounded-md hover:bg-transparent hover:text-primary font-medium transition"
            >
              {category.name}
            </Link>
          </div>
        ))}
      </div>
      <div className="grid p-12 gap-8 grid-cols-1 md:grid-cols-3">
        {products.map((product) => (
          <Items
            date={Date()}
            key={product._id}
            product={product}
            setItem={setItem}
          ></Items>
        ))}
      </div>
      {item && <BookingModal item={item} setItem={setItem}></BookingModal>}
    </div>
  );
};

export default Categories;
