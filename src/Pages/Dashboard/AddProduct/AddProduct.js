import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const { data: categories, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categoryName");
      const data = await res.json();
      return data;
    },
  });

  const handleAddProduct = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const product = {
            name: data.name,
            price: data.value,
            review: data.review,
            phone: data.value,
            location: data.location,
            category: data.category,
            image: imgData.data.url,
          };
          fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
            });
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="w-96 p-7 shadow-lg border-2">
      <h2 className="text-3xl my-6">Add Product</h2>
      <form onSubmit={handleSubmit(handleAddProduct)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: "name is required" })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            {...register("value", { required: "value is required" })}
            type="value"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control  w-full max-w-xs">
          <label className="label">
            <span className="label-text"></span>
          </label>
          <select
            className="input input-bordered w-full mb-4 max-w-xs"
            type="dropdown"
            {...register("review", {
              required: "review  is required",
            })}
          >
            <option value="">Select...</option>
            <option value="excellent">excellent</option>
            <option value="good">good</option>
            <option value="fair">fair</option>
          </select>
          {errors.dropdown && (
            <p className="text-red-600">{errors.dropdown?.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input
            {...register("value", { required: "value is required" })}
            type="value"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control  w-full max-w-xs">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            {...register("location", { required: "name is required" })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.location && (
            <p className="text-red-500">{errors.location.message}</p>
          )}
        </div>

        <div className="form-control  w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Category</span>
          </label>
          <select
            {...register("category")}
            className="select input-bordered w-full max-w-xs"
          >
            {categories.map((category) => (
              <option key={category._id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        {/* file */}
        <div className="form-control mb-4 w-full max-w-xs">
          <label className="label">
            <span className="label-text text-center ">Photo</span>
          </label>
          <input
            type="file"
            {...register("image", {
              required: "Photo is Required",
            })}
            className="input input-bordered    w-full max-w-xs"
          />
          {errors.img && <p className="text-red-500">{errors.img.message}</p>}
        </div>
        <input
          className="btn btn-accent w-full"
          value="Add Product"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProduct;
