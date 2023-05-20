import React from "react";
import { Link } from "react-router-dom";

const CarsCart = ({ car }) => {
  console.log(car);
  return (
    <div className="card w-full -200  shadow-2xl">
      <figure className="w-full ">
        <img
          className="w-full   h-60 rounded-xl "
          src={car?.PictureURL}
          alt="Toy"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{car.Name}</h2>
        <p>Price: ${car.price}</p>
        <div className="flex items-center mb-2">
          <svg
            className="w-4 h-4 text-yellow-500 fill-current"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M12 2.69l2.976 6.978h7.605l-5.894 4.717L17.341 21 12 17.408 6.659 21l1.654-6.615L1 9.667h7.605L12 2.69zm0-2.69l3.548 8.343h8.952L15.29 15.439l2.264 8.611-7.454-5.999L5.836 24l2.264-8.611L0 10.034h8.952L12 0z"
            />
          </svg>
          <span className="text-yellow-500">{car.rating}.00</span>
        </div>
        <div className="card-actions ">
          <Link to={`/toy/${car._id}`} className=" btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarsCart;
