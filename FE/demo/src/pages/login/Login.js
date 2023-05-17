import {useContext, useState } from "react"
// import { useNavigate } from "react-router-dom";
import { LoginAPI } from "../../service/Login.service";
import { axiosQuiz } from "../../utils/Axios";
import { AuthenContext } from "../../context/AuthenContext";
import { Await, useNavigate } from "react-router";
import { toast } from "react-toastify";

export default function Login(){

    let{login}= useAuth()
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    // doc doi tuong context, destruction, doi ten ham
    let {login:loginCtx} = useContext(AuthenContext)
    let navigate = useNavigate()

    const onSubmit = async()=>{
      var urlencoded = new URLSearchParams();
      urlencoded.append("username", username);
      urlencoded.append("password", password);
  
      const {code, result} = await LoginAPI(urlencoded)
      
      if(code === "200"){
        console.log(result)

        login(result)
        navigate ("/dashboard/users",{replace:true})
      }else{
        toast(`Error:${code}`, {position:toast.POSITION.TOP_CENTER, type:'error', them:'colored'})
      }
    }

        // try {
        //     let data = await loginAPI(username,password);
        //     console.log(data);
        //     // sử dụng lưu lại token
        //     localStorage.setIt em("token", data.accessToken);
        // } catch(err) {
        //     console.log(err);
        // }
    return (
        <div className="container">
            <div className="drop">
                <div className="content">
                    <h2 className='animate__heartBeat' style="left: 20px;">Đăng Nhập</h2>
                    <form action="">
                        <div className="input-box">
                            <input type="text" name="username" placeholder="Username"onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div class="input-box">
                            <input type="password" name="password" placeholder="Password"onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div class="input-box">
                            <input type="button" onClick={onSubmit} value="Login" href='#' />
                        </div>
                    </form>
                </div>
            </div>
            <a href="#" className='btn'>Quên Mật Khẩu</a>
            <a href="#" className='btn signup'>Đăng Kí</a>
        </div>
    )
    
   
}