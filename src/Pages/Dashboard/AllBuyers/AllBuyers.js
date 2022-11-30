import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../contexts/AuthProvider";

const AllBuyers = () => {
  const { user } = useContext(AuthContext);
  const { data: seller = [], refetch } = useQuery({
    queryKey: ["seller"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users/buyer");
      const data = await res.json();
      return data;
    },
  });
  // const handleMakeAdmin = (id) => {
  //   fetch(`http://localhost:5000/users/seller?${seller.email}`, {
  //     method: "PUT",
  //     headers: {
  //       authorization: `bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // };

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

export default AllBuyers;
