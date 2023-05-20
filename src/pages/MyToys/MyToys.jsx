import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import UpdateModal from "./UpdateModal";

const MyToys = () => {
  const [selectedToy, setSelectedToy] = useState(null);

  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  //   const [limit, setLimit] = useState(20);

  useEffect(() => {
    fetch(`http://localhost:5000/mycars/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [user]);

  const handleSearch = () => {
    console.log(searchTerm);

    fetch(`http://localhost:5000/allcars/${searchTerm}?limit=20`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  };

  const handleToyUpdate = (data) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-7 text-center">My Toys</h1>
      <UpdateModal
        toy={selectedToy}
        handleToyUpdate={handleToyUpdate}
      ></UpdateModal>
      <div className=" flex justify-between items-center">
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

        <h3 className="text-2xl font-bold">Email: {user?.email}</h3>
      </div>
      <table className="w-full border border-gray-300 mb-5">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">Seller</th>
            <th className="py-2 px-4 border-b">Toy Name</th>
            <th className="py-2 px-4 border-b">Sub-category</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Available Quantity</th>
            <th className="py-2 px-4 border-b">Update</th>
            <th className="py-2 px-4 border-b">Delete</th>
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
                <label
                  htmlFor="my-modal-5"
                  className="btn"
                  onClick={() => setSelectedToy(toy)}
                >
                  Update
                </label>

                {/* <button className="btn btn-outline btn-primary"></button> */}
              </td>
              <td className="py-2 px-4 border-b">
                <button className="btn btn-outline btn-error">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
