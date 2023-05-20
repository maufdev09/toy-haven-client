import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
// import { data } from "autoprefixer";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  //   const [limit, setLimit] = useState(20);

  useEffect(() => {
    fetch("http://localhost:5000/allcars?limit=20")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const handleSearch = () => {
    console.log(searchTerm);

    fetch(`http://localhost:5000/allcars/${searchTerm}?limit=20`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-7 text-center">All Toys</h1>

      <div className="mb-4 btn-group">
        <input
          type="text"
          placeholder="Search by Toy Name"
          className=" px-4 py-2 border border-indigo-600 rounded-s-md focus:outline-none focus:ring-2 focus:ring-blue-200"
          value={searchTerm}
          onChange={() => {
            setSearchTerm(event.target.value);
          }}
        />
        <button onClick={handleSearch} className=" btn  btn-primary ">
          {" "}
          Search
        </button>
      </div>

      <table className="w-full border border-gray-300 mb-5">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">Seller</th>
            <th className="py-2 px-4 border-b">Toy Name</th>
            <th className="py-2 px-4 border-b">Sub-category</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Available Quantity</th>
            <th className="py-2 px-4 border-b">View Details</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => (
            <tr key={toy._id} className="hover:bg-gray-50 text-center">
              <td className="py-2 px-4 border-b">{toy.sellerName}</td>
              <td className="py-2 px-4 border-b">{toy.Name}</td>
              <td className="py-2 px-4 border-b">{toy.category}</td>
              <td className="py-2 px-4 border-b">{toy.price}</td>
              <td className="py-2 px-4 border-b">{toy.quantity}</td>
              <td className="py-2 px-4 border-b">
                <Link to={`/toy/${toy._id}`} className=" btn btn-primary">
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
