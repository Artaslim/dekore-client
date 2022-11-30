import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user.email}`;

  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h3 className="text-3xl mb-4">My Orders</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Location</th>
              <th>Paymemt</th>
            </tr>
          </thead>
          <tbody>
            {bookings &&
              bookings?.map((booking, i) => (
                <tr key={booking._id}>
                  <th>{i + 1}</th>
                  <td>{booking.buyer}</td>
                  <td>{booking.price}</td>
                  <td>{booking.location}</td>
                  <td>
                    {!booking.paid && (
                      <Link to={`/dashboard/payment/${booking._id}`}>
                        <button className="btn btn-primary p-4 text-white">
                          Pay
                        </button>
                      </Link>
                    )}
                    {booking.price && booking.paid && (
                      <span className="text-secondary">Paid</span>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
