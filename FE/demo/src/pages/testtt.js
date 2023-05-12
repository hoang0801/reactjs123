import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthenContext } from "../context/AuthenContext";

export default function Login(){

    let Navigate = useNavigate()

    let [ username, setUserName] = useState("")
    let [ password, setPassword] = useState("")

    // doc doi tuong context, destruction, doi ten ham
    let {login:logiCtx} = useContext(AuthenContext)

    let login = async () =>{
        await logiCtx(username, password)
        Navigate("/dashboard")

        }

        // try {
        //     let data = await loginAPI(username,password);
        //     console.log(data);
        //     // sử dụng lưu lại token
        //     localStorage.setItem("token", data.accessToken);
        // } catch(err) {
        //     console.log(err);
        // }

    }
