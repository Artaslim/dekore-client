import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
import { AuthContext } from "../../contexts/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const { createUser, updateUser } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const [token] = useToken(createdUserEmail);

  if (token) {
    navigate("/");
  }
  const handleSignUp = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        toast("user toaster successfully");
        const userInfo = {
          displayName: data.name.toLowerCase(),
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email, data.category);
          })

          .catch((err) => console.error(err));
      })
      .catch((err) => {
        console.error(err);
        setSignUpError(err);
      });
  };
  const saveUser = (name, email, category) => {
    const user = { name, email, category };
    fetch(
      "https://b612-used-products-resale-server-side-artaslim.vercel.app/users",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user).toLowerCase(),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      });
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
              {...register("name", {
                required: "name is required",
              })}
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
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message: "password must be strong",
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
              className="input input-bordered w-full mb-4 max-w-xs"
              type="category"
              {...register("category", {
                required: "category Address is required",
              })}
            >
              <option value="">select...</option>
              <option value="seller">seller</option>
              <option value="buyer">buyer</option>
            </select>
            {errors.category && (
              <p className="text-red-600">{errors.category?.message}</p>
            )}
          </div>

          <input
            className="btn btn-accent w-full"
            value="SignUp"
            type="submit"
          />
          {signUpError && <p className="text-red-600">{signUpError}</p>}
        </form>
        <p className="mt-2">
          Already have an account??
          <Link to="/login" className="text-secondary  font-semibold">
            Please Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
