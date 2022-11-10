import React, { createContext, useState, useEffect } from "react";
import UserAPI from "../Utils/UserAPI";

export const AuthContext = createContext();

export default ({ children }) => {
    const [user, setUser] = useState();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        UserAPI.isAuthenticated().then(res => {
            setUser(res.user);
            setIsAuthenticated(res.isAuthenticated);
        });
    }, []);

    return (
        <div>
            <AuthContext.Provider value={{user, setUser, isAuthenticated, setIsAuthenticated }}>
                { children }
            </AuthContext.Provider>
        </div>
    )
}