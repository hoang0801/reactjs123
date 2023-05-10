import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { loginAPI } from "../service/login.service";
import { Navigate } from "react-router";
import Stack, { Container } from "@mui/system";
import { AuthenContext } from "../context/AuthenContext";

export default function Login() {
    let navigate = useNavigate();
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    let { login: loginContext, loading, user} = useContext(AuthenContext)

    // Đọc đối tượng context, destruction, đổi tên hàm
    let login = async() => {
        await loginContext(username, password);
        navigate("/dashboard");
        // try {
        //     let data = await loginAPI(username,password);
        //     console.log(data);
        //     // sử dụng lưu lại token
        //     localStorage.setItem("token", data.accessToken);
        // } catch(err) {
        //     console.log(err);
        // }
    };

    if(loading) 
    return (
        <div>Loading.....................</div>
    );

    if (user) 
    return (<Navigate to="/dashboard" />);

    return (
        <Container maxWidth="sm">
        <div>
            <h1>Login Form</h1>
            <div>
                <labebl>Username: </labebl>
                <input name="username" onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div>
                <labebl>Password: </labebl>
                <input name="password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <button type="submit" onClick={login}>Login</button>
            </div>
        </div>
        </Container>
    )
}