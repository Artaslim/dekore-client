import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const BookingModal = ({ item, setItem }) => {
  const { user } = useContext(AuthContext);
  const { name: itemName, resell } = item;
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const price = form.resell.value;
    const phone = form.phone.value;
    const location = form.location.value;

    const booking = {
      item: itemName,
      buyer: name.toLowerCase(),
      email,
      price,
      phone,
      location,
    };
    console.log(booking);
    fetch(
      "https://b612-used-products-resale-server-side-artaslim.vercel.app/bookings",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(booking),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setItem(null);
          toast.success("Booking confirmed");
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="n-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <form
            onSubmit={handleBooking}
            className="grid gap-4 grid-cols-1 my-6"
          >
            <h3 className="text-lg font-bold text-accent ">{itemName}</h3>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="Full Name"
              className="input w-full input-bordered "
              disabled
            />
            <input
              type="text"
              defaultValue={user?.email}
              name="email"
              placeholder="Your email"
              className="input w-full input-bordered "
              disabled
            />
            <input
              type="text"
              defaultValue={resell}
              name="resell"
              className="input w-full input-bordered "
              disabled
            />
            <input
              type="text"
              name="phone"
              placeholder="phone"
              className="input w-full input-bordered "
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="input w-full input-bordered "
            />

            <input
              className="btn btn-accent w-full input-bordered "
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
