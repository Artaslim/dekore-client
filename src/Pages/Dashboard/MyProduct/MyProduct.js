import React, { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";

import toast from "react-hot-toast";
import DeleteProduct from "../../Shared/DeleteProduct/DeleteProduct";

const MyProduct = () => {
  const { user } = useContext(AuthContext);
  const [deleteProduct, setDeleteProduct] = useState(null);
  const closeModal = () => {
    setDeleteProduct(null);
  };
  const url = `https://b612-used-products-resale-server-side-artaslim.vercel.app/products?email=${user.email}`;

  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products", user?.email],
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
  const handleDeleteProduct = (product) => {
    fetch(
      `https://b612-used-products-resale-server-side-artaslim.vercel.app/products/${product._id}`,
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
          toast.success(`User ${product.name} deleted successfully`);
        }
      });
  };
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h3 className="text-3xl mb-4">My Appointment</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Location</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products?.map((product, i) => (
                <tr key={product._id}>
                  <th>{i + 1}</th>
                  <td>{product.name}</td>
                  <td>${product.resell}</td>
                  <td>{product.location}</td>

                  <td>
                    <label
                      onClick={() => setDeleteProduct(product)}
                      htmlFor="confirm-modal"
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
      {deleteProduct && (
        <DeleteProduct
          title={`Are you sure want to delete?`}
          message={`if you delete ${deleteProduct.name}. it cannot be see here`}
          closeModal={closeModal}
          successAction={handleDeleteProduct}
          successButtonName="Delete"
          modalData={deleteProduct}
        ></DeleteProduct>
      )}
    </div>
  );
};

export default MyProduct;
