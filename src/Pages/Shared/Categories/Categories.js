import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="flex flex-rows gap-6 justify-center items-center my-16">
      {categories.map((category) => (
        <div>
          <Link
            key={category._id}
            className="bg-primary  border border-primary text-white px-8 py-3 rounded-md hover:bg-transparent hover:text-primary font-medium transition"
          >
            {category.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;
