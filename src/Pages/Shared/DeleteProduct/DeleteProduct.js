import React from "react";

const DeleteProduct = ({
  title,
  message,
  closeModal,
  successAction,
  successButtonName,
  modalData,
}) => {
  return (
    <div>
      <input type="checkbox" id="confirm-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <label
              onClick={() => successAction(modalData)}
              htmlFor="confirm-modal"
              className="btn"
            >
              {successButtonName}
            </label>
            <button onClick={closeModal} className="btn btn-outline">
              cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteProduct;
