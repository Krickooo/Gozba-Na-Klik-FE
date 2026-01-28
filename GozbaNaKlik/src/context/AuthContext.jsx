import React, { createContext } from "react";
import Axios from "../api/authApi";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const registerUser = async (userData) => {
        const response = await Axios.post("/auth/register", userData);
        return response.data;
    };

    return (
        <AuthContext.Provider value={{ registerUser }}>
            {children}
        </AuthContext.Provider>
    );
};