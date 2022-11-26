import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  return (
    <div className="h-[800px] flex justify-center items-center ">
      <div className="w-96 p-7 shadow-lg border-2">
        <h2 className="text-xl text-center">Login</h2>
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email")}
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password")}
              type="password"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {/* <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            /> */}

          {/* <select {...register("category", { required: true })}>
            <option value="">Select...</option>
            <option value="A">Option A</option>
            <option value="B">Option B</option>
          </select> */}

          <p>{data}</p>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
