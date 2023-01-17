import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";


const PublicRoute = (props) => {
    const { isAuthenticated } = useContext(AuthContext);
    if (isAuthenticated) return <Navigate to={{ pathname: "/dashboard", state: { from: props.location }}} />
    else return <Outlet {...props}/>

}

export default PublicRoute;