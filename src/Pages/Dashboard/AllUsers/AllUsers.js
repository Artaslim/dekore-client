import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import DeleteModal from "../../Shared/DeleteModal/DeleteModal";
import Loading from "../../Shared/Loading/Loading";

const AllUsers = () => {
  const [deleteUser, setDeleteUser] = useState(null);
  const closeModal = () => {
    setDeleteUser(null);
  };
  const {
    data: users = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://b612-used-products-resale-server-side-artaslim.vercel.app/users"
      );
      const data = await res.json();
      return data;
    },
  });
  const handleMakeAdmin = (id) => {
    fetch(
      `https://b612-used-products-resale-server-side-artaslim.vercel.app/users/admin/${id}`,
      {
        method: "PUT",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make admin successful");
          refetch();
        }
      });
  };

  const handleDeleteUser = (user) => {
    fetch(
      `https://b612-used-products-resale-server-side-artaslim.vercel.app/users/${user._id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`User ${user.name} deleted successfully`);
        }
      });
  };
  if (isLoading) {
    return <Loading></Loading>;
  }

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
              <th>Admin</th>

              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.category}</td>
                <td>
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-xs btn-primary"
                    >
                      Make Admin
                    </button>
                  )}
                </td>

                <td>
                  <label
                    onClick={() => setDeleteUser(user)}
                    htmlFor="confirmed-modal"
                    className="btn btn-xs btn-primary"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteUser && (
        <DeleteModal
          title={`Are you sure want to delete?`}
          message={`if you delete ${deleteUser.name}. it cannot be see here`}
          closeModal={closeModal}
          successAction={handleDeleteUser}
          successButtonName="Delete"
          modalData={deleteUser}
        ></DeleteModal>
      )}
    </div>
  );
};

export default AllUsers;
