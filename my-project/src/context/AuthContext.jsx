import { createContext } from "react";
import AuthService from "../services/AuthServise";
import React, { useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  //mock login func (programda calısacak olan)
  const login = async (username, password) => {
    try {
      const response = await AuthService.login(username, password);
      console.log(response);
      if (response.access_token) {
        setIsAuthenticated(JSON.parse(localStorage, getItem("user")));
        return true;
      }
      // await AuthService.login(username, password);
      // setIsAuthenticated(true);
      // return true;
    } catch (error) {
      setIsAuthenticated(false);
      return false;
    }
  };

  const logout = () => {
    AuthService.logout();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
