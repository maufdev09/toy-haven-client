import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";

const AddAToy = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://b7a11-toy-marketplace-server-side-maufdev09-ojytxsx64-maufdev09.vercel.app/posttoys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Toy added successfully");
        }
      });
  };

  return (
    <div className="container mx-auto py-4 rounded-2xl  ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 bg-slate-300 p-8 rounded-xl"
      >
        <h3
          className=" text-3xl font-semibold
       text-center mb-4 md:col-span-2 "
        >
          Add A Toy
        </h3>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Toy Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="name"
            {...register("Name", { required: true })}
          />
          {errors.Name && (
            <span className="text-red-500 text-xs italic">
              This field is required
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="pictureUrl"
          >
            Toy Picture URL
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="pictureUrl"
            {...register("PictureURL", { required: true })}
          />
          {errors.PictureURL && (
            <span className="text-red-500 text-xs italic">
              This field is required
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="sellerName"
          >
            Seller Name
          </label>
          <input
            defaultValue={user?.displayName || ""}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="sellerName"
            {...register("sellerName", { required: true })}
          />
          {errors.sellerName && (
            <span className="text-red-500 text-xs italic">
              This field is required
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="sellerEmail"
          >
            Seller Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            id="sellerEmail"
            defaultValue={user?.email || ""}
            {...register("sellerEmail")}
          />
          {errors.sellerEmail && (
            <span className="text-red-500 text-xs italic">
              This field is required
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="category"
          >
            Category
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="category"
            {...register("category")}
          >
            <option value="sportsCar">Sports Car</option>
            <option value="truck">Truck</option>
            <option value="regularCar">Regular Car</option>
            <option value="miniFireTruck">Mini Fire Truck</option>
            <option value="miniPoliceCar">Mini Police Car</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            id="price"
            {...register("price", { required: true })}
          />
          {errors.price && (
            <span className="text-red-500 text-xs italic">
              This field is required
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="rating"
          >
            Rating
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            id="rating"
            {...register("rating", { required: true })}
          />
          {errors.rating && (
            <span className="text-red-500 text-xs italic">
              This field is required
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="quantity"
          >
            Available Quantity
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            id="quantity"
            {...register("quantity", { required: true })}
          />
          {errors.quantity && (
            <span className="text-red-500 text-xs italic">
              This field is required
            </span>
          )}
        </div>

        <div className="mb-4 md:col-span-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Detail Description
          </label>
          <textarea
            defaultValue="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus corporis illo saepe quibusdam aspernatur rem, libero error magni temporibus. Sint deleniti at necessitatibus earum! Doloremque eaque iure ad alias culpa."
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            rows="5"
            {...register("description", { required: true })}
          ></textarea>
          {errors.description && (
            <span className="text-red-500 text-xs italic">
              This field is required
            </span>
          )}
        </div>

        <div className="flex items-center justify-center md:col-span-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  md:w-full rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAToy;
