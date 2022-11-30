import React from "react";

const Items = ({ products, date, setItem }) => {
  return (
    <div className="grid p-12 gap-8 grid-cols-1 md:grid-cols-3">
      {products?.map((product) => (
        <div className="card  bg-base-100 shadow-xl">
          <div className="text-xl mb-2">Seller:{product.seller}</div>
          <figure>
            <img src={product.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="grid grid-cols-3">
              <h2 className="card-title ">{product.name}</h2>

              <div className="text-xl">location:{product.location}</div>
            </div>
            <p></p>
            <div className="card-actions fles flex-row justify-between">
              <div className="text-xl font-semibold text-primary">
                Re-Sale:${product.resell}
              </div>
              <div className="text-xl font-semibold text-primary">
                orginal:${product.orginal}
              </div>
              <div className="text-xl">{date.substring(0, 15)}</div>
              <label
                onClick={() => setItem(product)}
                htmlFor="booking-modal"
                className="btn btn-sm"
              >
                Book Now
              </label>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
