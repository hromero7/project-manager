import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const PrivateRoute = (props) => {
  const { isAuthenticated } = useContext(AuthContext);
  const location = useLocation();

  if (!isAuthenticated)
    return <Navigate to="/" replace state={{ from: location }} />;
  else return <Outlet {...props} />;
};

export default PrivateRoute;
