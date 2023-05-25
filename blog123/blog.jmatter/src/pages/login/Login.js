import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginAPI } from "../../service/loginService";

export default function Login() {
  let navigate = useNavigate();
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  const onSubmit = async () => {
    var urlencoded = new URLSearchParams();
    urlencoded.append("username", username);
    urlencoded.append("password", password);

    const { code, result } = await LoginAPI(urlencoded);
    console.log(1);
    console.log(code);

    if (code === "200") {
      console.log(result);
      navigate("/user");
    } else {
      toast(`Error: ${code}`, { position: toast.POSITION.TOP_CENTER, type: 'error', theme: 'colored' });
    }
  };
  return (
    <div>
      <h2>Login Form</h2>
      <div>
        <label>Username</label>
        <input onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password</label>
        <input onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <button type='button' onClick={onSubmit}>Login</button>
      </div>
    </div>
  );
}