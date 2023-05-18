import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const RegisterForm = () => {
  const { createUser, signInGoogle } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setphotoURL] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission

    if (!email || !password) {
      setErr("Please enter email and password");
      return;
    }

    if (password.length < 6) {
      setErr("Password must be at least 6 characters long");
      return;
    }
    setErr("");

    createUser(email, password, name, photoURL)
      .then((result) => {
        const newUser = result?.user;
        console.log(` new user${newUser}`);
        console.log(result);
      })
      .catch((error) => {
        setErr(error.message);
        console.error(error.message);
      });
  };

  return (
    <div className="md:w-8/12  mx-auto bg-slate-200 rounded-md">
      <h3 className="text-center text-2xl font-bold pt-4  ">Please Register</h3>
      <form onSubmit={handleSubmit} className="space-y-4 px-5  md:px-12">
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
            value={photoURL}
            onChange={(event) => setphotoURL(event.target.value)}
            placeholder="https://example.com/photo.jpg"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <p className=" text-center">
          Already Have an Account?{" "}
          <a href="/login" className="text-indigo-500 underline">
            Login
          </a>
        </p>
        <p className="text-red-500 text-center">{err}</p>
        <div className="flex items-center justify-center pb-5">
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold p-2 px-2 rounded"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
