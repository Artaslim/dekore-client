import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../contexts/AuthProvider";

const AllSellers = () => {
  const { user } = useContext(AuthContext);

  const { data: seller = [], refetch } = useQuery({
    queryKey: ["seller"],
    queryFn: async () => {
      const res = await fetch(
        "https://b612-used-products-resale-server-side-artaslim.vercel.app/users/seller"
      );
      const data = await res.json();
      return data;
    },
  });
  const handleMakeSeller = (email) => {
    fetch(
      `https://b612-used-products-resale-server-side-artaslim.vercel.app/users/seller/${email}`,
      {
        method: "PUT",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <h2 className="text-3xl mb-6">All Users</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Category</th>

              <th>Seller</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {seller?.map((sell, i) => (
              <tr key={sell._id}>
                <th>{i + 1}</th>
                <td>{sell.name}</td>
                <td>{sell.email}</td>
                <td>{sell.category}</td>

                <td>
                  {/* {user?.role === "admin" && user?.status !== "true" && (
                    <button
                      onClick={() => handleMakeSeller(sell._email)}
                      className="btn btn-xs btn-secondary"
                    >
                      verifySeller
                    </button>
                  )} */}
                  {user.$unset !== "false" && (
                    <button
                      onClick={() => handleMakeSeller(sell.email)}
                      className="btn btn-xs btn-primary  text-white"
                    >
                      unverified
                    </button>
                  )}
                  {user.$unset === "false" && (
                    <span className="text-secondary">verified</span>
                  )}
                </td>
                <td>
                  <button className="btn btn-xs btn-secondary">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;
