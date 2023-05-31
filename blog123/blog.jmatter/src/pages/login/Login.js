import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../hooks/useAuth";
import { LoginAPI } from "../../service/loginService";

export default function Login() {
  let navigate = useNavigate();
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  let { login } = useAuth();

  const onSubmit = async () => {
    var urlencoded = new URLSearchParams();
    urlencoded.append("username", username);
    urlencoded.append("password", password);

    const { code, result } = await LoginAPI(urlencoded);
    console.log(1);
    console.log(code);

    if (code === "200") {
      console.log(result);
      login(result);
      navigate("/LoginTemplate", { replace: true });
    } else {
      toast(`Error: ${code}`, { position: toast.POSITION.TOP_CENTER, type: 'error', theme: 'colored' });
    }
  };
  return (
    <div>
      <from>
        <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', flexDirection: 'column', margin: 'auto', marginTop: 5, padding: 3, borderRadius: 5, boxShadow: '5px 5px 10px #ccc', ":hover": { boxShadow: '10px 10px 20px #ccc' } }} maxWidth={400}>
          <Typography variant="h2" padding={3} textAlign="center">Login</Typography>
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
        </Box>
      </from>
    </div>
  );
}