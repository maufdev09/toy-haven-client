import React from "react";
import { useLoaderData } from "react-router-dom";

const DetailsToy = () => {
  const car = useLoaderData();
  console.log(car);

  // Extract the toy details from the `car` object
  const {
    PictureURL,
    Name,
    sellerName,
    sellerEmail,
    price,
    rating,
    quantity,
    description,
  } = car;

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl bg-white rounded-lg shadow-lg my-5">
        <div
          className=" bg-cover bg-center rounded-t-lg w-3/4 mx-auto "
          // style={{ backgroundImage: `url(${PictureURL})` }}
        >
          <img src={PictureURL} className="w-full rounded-lg" alt="" />
        </div>
        <div className="px-6 py-4">
          {/* Toy Name */}
          <div className="font-bold text-3xl mb-2">{Name}</div>

          {/* Seller Information */}
          <div className="mb-2">
            <span className="font-bold">Seller:</span> {sellerName}
          </div>
          <div className="mb-2">
            <span className="font-bold">Email:</span> {sellerEmail}
          </div>

          {/* Price and Rating */}
          <div className="mb-2">
            <span className="font-bold">Price:</span> ${price}
          </div>
          <div className="mb-2">
            <span className="font-bold">Rating:</span> {rating} / 5
          </div>

          {/* Available Quantity */}
          <div className="mb-2">
            <span className="font-bold">Available Quantity:</span> {quantity}
          </div>

          {/* Detail Description */}
          <div className="mb-2">
            <span className="font-bold">Description:</span> {description}
          </div>

          {/* Button */}
          <div className="mb-2 text-center px-6">
            <button className="btn btn-primary"> Buy This Car</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsToy;
