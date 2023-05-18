import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const RegisterForm = () => {
  const { user } = useContext(AuthContext);

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [photoUrl, setPhotoUrl] = React.useState("");
  const [err, setErr] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <div className="md:w-6/12  mx-auto bg-slate-200 rounded-md">
      <h3 className="text-center text-4xl font-bold pt-4  ">{user}</h3>
      <h3 className="text-center text-4xl font-bold pt-4  ">Please Register</h3>
      <form onSubmit={handleSubmit} className="space-y-4 card-body">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="John Doe"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="johndoe@example.com"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="********"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label
            htmlFor="photoUrl"
            className="block text-gray-700 font-bold mb-2"
          >
            Photo URL
          </label>
          <input
            id="photoUrl"
            type="url"
            value={photoUrl}
            onChange={(event) => setPhotoUrl(event.target.value)}
            placeholder="https://example.com/photo.jpg"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <p className="pb-5 text-center">
          Already Have an Account?{" "}
          <a href="/login" className="text-indigo-500 underline">
            Login
          </a>
        </p>
        <p className="text-red-500 text-center">{err}</p>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;

//  <form onSubmit={handleSubmit} className="space-y-4">
// <div>
//   <label
//     htmlFor="name"
//     className="block text-gray-700 font-bold mb-2"
//   >
//     Name
//   </label>
//   <input
//     id="name"
//     type="text"
//     value={name}
//     onChange={(event) => setName(event.target.value)}
//     placeholder="John Doe"
//     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//   />
// </div>
// <div>
//   <label
//     htmlFor="email"
//     className="block text-gray-700 font-bold mb-2"
//   >
//     Email
//   </label>
//   <input
//     id="email"
//     type="email"
//     value={email}
//     onChange={(event) => setEmail(event.target.value)}
//     placeholder="johndoe@example.com"
//     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//   />
// </div>
// <div>
//   <label
//     htmlFor="password"
//     className="block text-gray-700 font-bold mb-2"
//   >
//     Password
//   </label>
//   <input
//     id="password"
//     type="password"
//     value={password}
//     onChange={(event) => setPassword(event.target.value)}
//     placeholder="********"
//     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//   />
// </div>
// <div>
//   <label
//     htmlFor="photoUrl"
//     className="block text-gray-700 font-bold mb-2"
//   >
//     Photo URL
//   </label>
//   <input
//     id="photoUrl"
//     type="url"
//     value={photoUrl}
//     onChange={(event) => setPhotoUrl(event.target.value)}
//     placeholder="https://example.com/photo.jpg"
//     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//   />
// </div>
// <p className="pb-5 text-center">
//   Already Have an Account?{" "}
//   <a href="/login" className="text-indigo-500 underline">
//     Login
//   </a>
// </p>
// <p className="text-red-500 text-center">{err}</p>
// <div className="flex items-center justify-center">
//   <button
//     type="submit"
//     className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
//   >
//     Register
//   </button>
// </div>
// </form>
