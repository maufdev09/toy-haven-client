import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";

const UpdateModal = ({ toy, handleToyUpdate }) => {
  const { user } = useContext(AuthContext);
  //   console.log(toy);
  // console.log(toy);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box  w-11/12 max-w-5xl">
          {/* FORM */}
          <div className="w-11/12 container mx-auto py-4 rounded-2xl  ">
            <form onSubmit={handleSubmit(handleToyUpdate)}>
              <div className="mb-4">
                <label
                  htmlFor="pictureUrl"
                  className="block text-sm font-medium text-gray-700"
                >
                  Picture URL
                </label>
                <input
                  defaultValue={toy?.PictureURL || ""}
                  type="text"
                  id="pictureUrl"
                  {...register("pictureUrl", { required: true })}
                  className="shadow appearance-none border rounded w-full py-2 "
                />
                {errors.pictureUrl && (
                  <span className="text-red-500 text-xs italic">
                    This field is required
                  </span>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  defaultValue={toy?.Name || ""}
                  type="text"
                  id="name"
                  {...register("name", { required: true })}
                  className="shadow appearance-none border rounded w-full py-2 "
                />
                {errors.name && (
                  <span className="text-red-500 text-xs italic">
                    This field is required
                  </span>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="sellerName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Seller Name
                </label>
                <input
                  type="text"
                  id="sellerName"
                  defaultValue={user?.displayName || ""}
                  {...register("sellerName")}
                  className="shadow appearance-none border rounded w-full py-2 "
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="_id"
                  className="block text-sm font-medium text-gray-700"
                >
                  _id
                </label>
                <input
                  type="text"
                  id="_id"
                  value={toy?._id}
                  {...register("_id")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="sellerEmail"
                  className="block text-sm font-medium text-gray-700"
                >
                  Seller Email
                </label>
                <input
                  type="email"
                  id="sellerEmail"
                  defaultValue={user?.email || ""}
                  {...register("sellerEmail")}
                  className="shadow appearance-none border rounded w-full py-2 "
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="subCategory"
                  className="block text-sm font-medium text-gray-700"
                >
                  Sub-category
                </label>
                <select
                  value={toy?.category || ""}
                  id="subCategory"
                  {...register("subCategory")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Price
                </label>
                <input
                  defaultValue={toy?.price || ""}
                  type="number"
                  id="price"
                  {...register("price", { required: true })}
                  className="shadow appearance-none border rounded w-full py-2 "
                />
                {errors.price && (
                  <span className="text-red-500 text-xs italic">
                    This field is required
                  </span>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="rating"
                  className="block text-sm font-medium text-gray-700"
                >
                  Rating
                </label>
                <input
                  defaultValue={toy?.rating || ""}
                  type="number"
                  id="rating"
                  {...register("rating")}
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
                  defaultValue={toy?.quantity || ""}
                  type="number"
                  id="quantity"
                  {...register("quantity")}
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
                  defaultValue={toy?.description || ""}
                  id="description"
                  rows="5"
                  {...register("description", { required: true })}
                  className="shadow appearance-none border rounded w-full py-2 "
                ></textarea>
                {errors.description && (
                  <span className="text-red-500 text-xs italic">
                    This field is required
                  </span>
                )}
              </div>

              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  md:w-full rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;

// <form
//               onSubmit={handleSubmit(handleToyUpdate)}
//               className="  grid grid-cols-1 md:grid-cols-2 gap-3 bg-slate-300 p-8 rounded-xl"
//             >
//               <h3
//                 className=" text-3xl font-semibold
//        text-center mb-4 md:col-span-2 "
//               >
//                 Add A Toy
//               </h3>
//               <div className="mb-4">
//                 <label
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                   htmlFor="name"
//                 >
//                   Toy Name
//                 </label>
//                 <input
//                   defaultValue={toy?.Name}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   type="text"
//                   id="name"
//                   {...register("Name", { defaultValue: toy?.Name })}
//                 />

//                 {errors.Name && (
//                   <span className="text-red-500 text-xs italic">
//                     This field is required
//                   </span>
//                 )}
//               </div>

//               <div className="mb-4">
//                 <label
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                   htmlFor="pictureUrl"
//                 >
//                   Toy Picture URL
//                 </label>
//                 <input
//                   defaultValue={toy?.PictureURL}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   type="text"
//                   id="pictureUrl"
//                   {...register("PictureURL")}
//                 />
//                 {errors.PictureURL && (
//                   <span className="text-red-500 text-xs italic">
//                     This field is required
//                   </span>
//                 )}
//               </div>

//               <div className="mb-4">
//                 <label
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                   htmlFor="sellerName"
//                 >
//                   Seller Name
//                 </label>
//                 <input
//                   defaultValue={user?.displayName || ""}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   type="text"
//                   id="sellerName"
//                   {...register("sellerName")}
//                 />
//                 {errors.sellerName && (
//                   <span className="text-red-500 text-xs italic">
//                     This field is required
//                   </span>
//                 )}
//               </div>

//               <div className="mb-4">
//                 <label
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                   htmlFor="sellerEmail"
//                 >
//                   Seller Email
//                 </label>
//                 <input
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   type="email"
//                   id="sellerEmail"
//                   defaultValue={user?.email || ""}
//                   {...register("sellerEmail")}
//                 />
//                 {errors.sellerEmail && (
//                   <span className="text-red-500 text-xs italic">
//                     This field is required
//                   </span>
//                 )}
//               </div>

//               <div className="mb-4">
//                 <label
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                   htmlFor="category"
//                 >
//                   Category
//                 </label>
//                 <select
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   id="category"
//                   {...register("category")}
//                   value={toy?.category}
//                 >
//                   <option value="sportsCar">Sports Car</option>
//                   <option value="truck">Truck</option>
//                   <option value="regularCar">Regular Car</option>
//                   <option value="miniFireTruck">Mini Fire Truck</option>
//                   <option value="miniPoliceCar">Mini Police Car</option>
//                 </select>
//               </div>

//               <div className="mb-4">
//                 <label
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                   htmlFor="price"
//                 >
//                   Price
//                 </label>
//                 <input
//                   defaultValue={toy?.price}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   type="number"
//                   id="price"
//                   {...register("price")}
//                 />
//                 {errors.price && (
//                   <span className="text-red-500 text-xs italic">
//                     This field is required
//                   </span>
//                 )}
//               </div>

//               <div className="mb-4">
//                 <label
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                   htmlFor="rating"
//                 >
//                   Rating
//                 </label>
//                 <input
//                   defaultValue={toy?.rating}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   type="number"
//                   id="rating"
//                   {...register("rating")}
//                 />
//               </div>

//               <div className="mb-4">
//                 <label
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                   htmlFor="quantity"
//                 >
//                   Available Quantity
//                 </label>
//                 <input
//                   defaultValue={toy?.quantity}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   type="number"
//                   id="quantity"
//                   {...register("quantity")}
//                 />
//               </div>

//               <div className="mb-4 md:col-span-2">
//                 <label
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                   htmlFor="description"
//                 >
//                   Detail Description
//                 </label>
//                 <textarea
//                   defaultValue={toy?.description}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   id="description"
//                   rows="5"
//                   {...register("description")}
//                 ></textarea>
//                 {errors.description && (
//                   <span className="text-red-500 text-xs italic">
//                     This field is required
//                   </span>
//                 )}
//               </div>

//               <div className="flex items-center justify-center md:col-span-2">
//                 <button
//                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  md:w-full rounded focus:outline-none focus:shadow-outline"
//                   type="submit"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
