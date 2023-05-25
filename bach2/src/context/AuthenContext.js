import jwtDecode from "jwt-decode";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthenContext = createContext({
  isAuthenticated: false,
  isLoading: true,
  logout: () => {},
  login: () => {},
});

export const getSession = () => {
  console.log("get accessToken");
  console.log(localStorage.getItem('accessToken'));
  let x = localStorage.getItem("accessToken")
  if (x) return x;
  else return null;
};

export const setSessionInLocalStorage = (token) => {
  //console.log("set session");
  localStorage.setItem("accessToken", JSON.stringify(token));
  // doan nay set cái sesssion nay lam j day, tuong token la set cai accessToken r
  return true;
};

const CheckToken = (token) => {
  let decodeken = jwtDecode(token);
  //console.log("Decoded Token", decodeken);
  let currentDate = new Date();

  // JWT exp is in seconds
  if (decodeken.exp * 1000 < currentDate.getTime()) {
    console.log("Token expired.");
    return true;
  }
};

export function AuthenProvider({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      const token = getSession();
      if (CheckToken(token)) {
        console.log(token);
        console.log(token.token)
        setAuthenticated(false);
        setLoading(false);
        localStorage.removeItem("accessToken");
      }
      setAuthenticated(true);
      setLoading(false);
    } else {
      setAuthenticated(false);
      setLoading(false);
    }
  }, []);

  const login = (token) => {
    console.log(token);
    console.log("login:" + JSON.stringify(token));
    setAuthenticated(true);
    setLoading(false);
    // doan nay truyen vao token bi undefined r
    localStorage.setItem("accessToken", token);
  };

  const logout = () => {
    setAuthenticated(false);
    setLoading(false);
    localStorage.removeItem("accessToken");
  };

  return (
    <AuthenContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthenContext.Provider>
  );
}

