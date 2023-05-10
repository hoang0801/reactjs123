import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

// redux-contexxt
// 1 goi api - co du lieu - show giao dien
// 2 goi api - luu context - doc context show UI

export const AuthenContext = createContext({  // Đây là Interface
  // token: "",
  user: null,
  loading: true,
  login: () => {},
  logout: () => {}
});

export function AuthenProvider({ children }) {
    // let [token, setToken] = useState(""); // token jwt
    let [user, setUser] = useState(null)
    let [loading, setLoading] = useState(true);

    useEffect(() => {
      let u = JSON.parse(localStorage.getItem("user"));
      console.log(u);
      setUser(u);
      setLoading(false);
    }, []);

    let login = async (username, password) => {
        // gọi API - await
        let token = "123456" // ví dụ token trả về sau khi gọi API
        // gọi API - user/me
        let user = {
            id: 1, name: "Admin", token
        };
        // setToken(token);
        setUser(user);
        // Lưu thêm vào localStorage
        // localStorage.setItem("token", token); thừa
        localStorage.setItem("user", JSON.stringify(user))
    };

    let logout = () => {
        // setToken("");
        setUser(null);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    };

    // chilren sẽ đọc được Authen context
   return (
    <AuthenContext.Provider value={
        {
            loading, user, login, logout
        }
    }>
      {children} 
    </AuthenContext.Provider>
  );
}
