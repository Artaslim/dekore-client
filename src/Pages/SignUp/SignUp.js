import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSignUp = (data) => {
    console.log(data);
  };
  return (
    <div className="h-[800px] flex justify-center items-center ">
      <div className="w-96 p-7 shadow-lg border-2">
        <h2 className="text-xl text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "name is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: "Email Address is required" })}
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password Address is required",
                minLength: {
                  value: 6,
                  message: "password must be 6 character or longer",
                },
              })}
              type="password"
              className="input input-bordered  w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Pick One</span>
            </label>
            <select
              className="input input-bordered w-full mb-8 max-w-xs"
              {...register("category", { required: true })}
            >
              <option value="">Select...</option>
              <option value="Seller">Seller</option>
              <option value="Buyer">Buyer</option>
            </select>
          </div>
          {/* <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        /> */}

          {/* <label className="label">
            <span className="label-text">Password</span>
          </label>
          <select
            className="input input-bordered w-full mb-4 max-w-xs"
            {...register("category", { required: true })}
          >
            <option value="">Select...</option>
            <option value="A">Seller</option>
            <option value="B">Buyer</option>
          </select> */}

          {/* <p>{data}</p> */}
          <input
            className="btn btn-accent w-full"
            value="Login"
            type="submit"
          />
        </form>
        <p className="mt-2">
          Already have an account??
          <Link to="/login" className="text-secondary  font-semibold">
            Please Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default SignUp;
