import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth';
import { loginAPI } from '../../service/auth.service';
import { toast } from 'react-toastify';

function Login() {
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

      if (code === "200") {
          console.log(result)

          login(result)
          navigate("/dashboard/users", { replace: true });
      } else {
          toast(`Error: ${code}`, { position: toast.POSITION.TOP_CENTER, type: 'error', theme: 'colored' })
      }
  };
  return (

    <div >
      <form>
        <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', flexDirection: 'column', margin: 'auto', marginTop: 5, padding: 3, borderRadius: 5, boxShadow: '5px 5px 10px #ccc', ":hover": { boxShadow: '10px 10px 20px #ccc' } }} maxWidth={400}>
          <Typography variant="h2" padding={3} textAlign="center">Login</Typography>
          <TextField margin="normal" type={'email'} variant="outlined" placeholder="Username" onChange={(e) => setUsername(e.target.value)}></TextField>
          <TextField margin="normal" type={'password'} variant="outlined" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></TextField>
          <Link to="/dashboard/category/search" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="warning" sx={{ marginTop: 3, borderRadius: 3 }} 
            type="button" onClick={() => onSubmit()}>Login</Button></Link>
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <Button sx={{ marginTop: 3, borderRadius: 3 }}>Change to SignUp</Button>
          </Link>
        </Box>
      </form>
    </div>
  );
}

export default Login;