import { useNavigate } from "react-router"

export function Login() {
    let { login } = useAuth()

    let navigate = useNavigate();


    //ham hook
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    const onSubmit = async () => {
        var urlencoded = new URLSearchParams();
        urlencoded.append("username", username);
        urlencoded.append("password", password);

        const { code, result } = await loginAPI(urlencoded)

        if (code === 200) {
            console.log(result)

            login(result)
            navigate("/dashboard", { replace: true });
        } else {
            toast(`Error: ${code}`, { position: toast.POSITION.TOP_CENTER, type: 'error', theme: 'colored' })
        }
    }

    return (
        <div className="container">
            <div className="drop">
                <div className="content">
                    <h2 className='animate__heartBeat' style="left: 20px;">Đăng Nhập</h2>
                    <form action="">
                        <div className="input-box">
                            <input type="text" name="username" placeholder="Username" />
                        </div>
                        <div class="input-box">
                            <input type="password" name="password" placeholder="Password" />
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

