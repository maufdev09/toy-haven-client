import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div className=" navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="alltoys">All Toys</Link>
            </li>
            <li>
              <Link to="mytoys">My Toys</Link>
            </li>
            <li>
              <Link to="addatoy">Add A Toys</Link>
            </li>
            <li>
              <Link to="blogs">Blogs</Link>
            </li>
          </ul>
        </div>
        <a href="/" className=" flex  items-center  normal-case   ">
          {" "}
          <img
            className="md:w-10 max-sm:w-7"
            src="Toy haven-logos_black.png"
            alt=""
          />{" "}
          <p className=" max-sm:hidden text-2xl font-bold    ">ToyHaven</p>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="alltoys">All Toys</Link>
          </li>
          <li>
            <Link to="mytoys">My Toys</Link>
          </li>
          <li>
            <Link to="addatoy">Add A Toys</Link>
          </li>
          <li>
            <Link to="blogs">Blogs</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        {user && (
          <div
            className="w-8 mx-5 tooltip tooltip-left"
            data-tip={user.displayName}
          >
            {user.photoURL ? (
              <img src={user.photoURL} className="rounded-full" />
            ) : (
              <FaUserCircle className="text-4xl max-sm:text-2xl mx-3" />
            )}
          </div>
        )}

        {user ? (
          <button className="btn max-sm:btn-sm" onClick={handleLogOut}>
            Logout
          </button>
        ) : (
          <Link className="btn max-sm:btn-sm " to="/login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
