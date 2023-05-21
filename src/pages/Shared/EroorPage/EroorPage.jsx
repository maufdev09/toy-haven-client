import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[url('https://images.unsplash.com/photo-1555861496-0666c8981751?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover">
      <h1 className="text-6xl font-bold text-white mb-4 ">
        Oops! Something went wrong.
      </h1>
      <p className="text-3xl text-white font-bold mb-4">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-3xl text-white mb-4">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/" className="btn  btn-primary">
        Go to homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
