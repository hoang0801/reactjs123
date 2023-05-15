import { useState } from "react"
// import { useNavigate } from "react-router-dom";
import { LoginAPI } from "../service/Login.service";

export default function Login(){

    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    
    
    // doc doi tuong context, destruction, doi ten ham
    let {login:logiCtx} = useContext(AuthenContext)
    let Navigate = useNavigate()

    let login = async () =>{
        await logiCtx(username, password)

        }

        // try {
        //     let data = await loginAPI(username,password);
        //     console.log(data);
        //     // sử dụng lưu lại token
        //     localStorage.setIt em("token", data.accessToken);
        // } catch(err) {
        //     console.log(err);
        // }
    // let handLeChangLogin = (e) =>{
    //     setUsername({...username, [e.target.name]:e.target.value})
    //     setPassword({...password, [e.target.name]:e.target.value})
    // }
    return (
        <div className="container">
            <div className="drop">
                <div className="content">
                    <h2 className='animate__heartBeat' style="left: 20px;">Đăng Nhập</h2>
                    <form action="">
                        <div className="input-box">
                            <input type="text" onChange={(e) = setUsername(e.target.value)} name="username" placeholder="Username" />
                        </div>
                        <div class="input-box">
                            <input type="password"onChange={(e) = setPassword(e.target.value)} name="password" placeholder="Password" />
                        </div>
                        <div class="input-box">
                            <input type="submit" value="Login" href='#' />
                        </div>
                    </form>
                </div>
            </div>
            <a href="#" className='btn'>Quên Mật Khẩu</a>
            <a href="#" className='btn signup'>Đăng Kí</a>
        </div>
    )
    
   
}