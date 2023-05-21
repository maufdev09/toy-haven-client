import { data } from "autoprefixer";
import React, { useContext, useState } from "react";

const UpdateModal = ({ toy, handleToyUpdate }) => {
  // console.log(toy);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const _id = form._id.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const data = {
      price,
      quantity,
      description,
      _id,
    };
    handleToyUpdate(data);
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box  w-11/12 max-w-5xl">
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn btn-circle btn-outline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </label>
          </div>
          <div className="w-11/12 container mx-auto py-4 rounded-2xl  ">
            <h3 className="text-center text-2xl font-bold">Update the Toy</h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-4 hidden">
                <label
                  htmlFor="_id"
                  className="block text-sm font-medium  text-gray-700"
                >
                  _id
                </label>
                <input
                  required
                  type="text"
                  name="_id"
                  defaultValue={toy?._id}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Price
                </label>
                <input
                  name="price"
                  required
                  defaultValue={toy?.price || ""}
                  type="number"
                  className="shadow appearance-none border rounded w-full py-2 "
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-gray-700"
                >
                  Available Quantity
                </label>
                <input
                  name="quantity"
                  required
                  defaultValue={toy?.quantity || ""}
                  type="number"
                  className="shadow appearance-none border rounded w-full py-2 "
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Detail Description
                </label>
                <textarea
                  name="description"
                  defaultValue={toy?.description || ""}
                  rows="5"
                  className="shadow appearance-none border rounded w-full py-2 "
                ></textarea>
              </div>

              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  md:w-full rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
