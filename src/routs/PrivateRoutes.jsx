import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div className="border-t-4 border-b-4 border-gray-400 rounded-full w-12 h-12 animate-spin"></div>
      </div>
    );
  }

  if (user) {
    return children;
  } else {
    if (confirm("You have to log in first to view details") === true) {
      return (
        <Navigate state={{ from: location }} to="/login" replace></Navigate>
      );
    }
    return;
  }
};

export default PrivateRoutes;
