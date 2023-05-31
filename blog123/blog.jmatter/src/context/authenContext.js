import { createContext, useEffect, useState } from "react";

export const AuthenContext = createContext({
  isAuthenticated: false,
  isLoading: true,
  accessToken: "",
  setToken: () => {},
  logout: () => {},
  login: () => {}
});
// const CheckToken = (token) => {
//   let decodeken = jwtDecode(token);
//   //console.log("Decoded Token", decodeken);
//   let currentDate = new Date();

//   // JWT exp is in seconds
//   if (decodeken.exp * 1000 < currentDate.getTime()) {
//     console.log("Token expired.");
//     return true;
//   }
// };

export function AuthenProvider({ children }) {
  let [accessToken, setToken] = useState("");
  let [isAuthenticated, setAuthenticated] = useState(false);
  let [isLoading, setLoading] = useState(true);


  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setAuthenticated(true);
      setLoading(false);
      setToken(localStorage.getItem("accessToken"));
    } else {
      setAuthenticated(false);
      setLoading(false);
    }

  }, []);

  const login = async (token) => {
    console.log(token);
    setAuthenticated(true);
    setLoading(false);

    setToken(token.accessToken);
    //luu token them vao localstorage
    console.log(accessToken);
    localStorage.setItem("accessToken", token.accessToken);
  };

  const logout = () => {
    setAuthenticated(false);
    setLoading(false);
    setToken("");

  };


  return <AuthenContext.Provider value={
    {
      isAuthenticated,
      isLoading,
      accessToken,
      login,
      logout
    }
  }>
    {children}
  </AuthenContext.Provider>;

}