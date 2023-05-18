import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const [err, setErr] = useState("");
  const { signIn, signInGoogle } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();

    //    sign in  email pass
    signIn(email, password)
      .then((res) => {
        const logedUser = res?.user;
        console.log(logedUser);
      })
      .catch((error) => setErr(error.message));
  };

  const handlegoogleSignIn = () => {
    signInGoogle()
      .then((res) => {
        const logedUser = res?.user;
      })
      .catch((error) => {
        setErr(error.message);
      });
  };

  return (
    <div className="md:w-6/12  mx-auto bg-slate-200 rounded-md">
      <h3 className="text-center text-3xl font-bold pt-5 pb-4  ">
        Please login
      </h3>
      <form onSubmit={handleSubmit} className="mx-auto  px-5 md:px-10 ">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="johndoe@example.com"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="********"
          />
        </div>
        <p className="pb-5">
          Don't Have an Account?{" "}
          <Link className="link text-indigo-500" to="/registration">
            {" "}
            Register{" "}
          </Link>{" "}
        </p>
        <p className="text-red-500 ">{err}</p>
        <div className="flex items-center justify-between">
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </div>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider">OR</div>
          <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
            <div className="flex justify-center space-x-4 -5">
              <button
                onClick={handlegoogleSignIn}
                className="py-2 px-4 border border-gray-400 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 flex items-center gap-2"
              >
                <FaGoogle></FaGoogle>Sign in with Google
              </button>
            </div>{" "}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
