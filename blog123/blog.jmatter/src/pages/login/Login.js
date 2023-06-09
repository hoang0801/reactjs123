import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
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
      navigate("/home");
      // navigate("/dashboard/users", { replace: true });
    } else {
      toast(`Error: ${code}`, { position: toast.POSITION.TOP_CENTER, type: 'error', theme: 'colored' });
    }
  };
  return (
    <div>
      <from>
        <Box sx={{ display: 'flex',
         justifyContent: "center",
          alignItems: 'center',
          flexDirection: 'column', 
          margin: 'auto', 
          marginTop: 10, 
          padding: 3, 
          borderRadius: 5,
          boxShadow: '6px 6px 10px #ccc', ":hover": {
          boxShadow: '10px 10px 20px #ccc' } }}
          maxWidth={400}>
            <div>
            <IconButton >
            <LockOpenIcon sx={{ fontSize: 30 }} />
            </IconButton>
            </div>
          <Typography variant="h4" padding={3} textAlign="center">Login</Typography>
          <Stack spacing={2}>
          <TextField  id="filled-password-input"
          label="UserName"
          type="username"
          autoComplete="current-password"
          variant="filled" 
          onChange={(e) => setUsername(e.target.value)}  />
          
      
          <TextField  id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled" 
          onChange={(e) => setPassword(e.target.value)} />
          </Stack>
          <div>
          <FormControlLabel value="female" marginleft ="1" control={<Checkbox />} label="Remember me" />
          </div>
          <div>
          <Button variant="contained" color="info"
           onClick={onSubmit}>Login</Button>
           
          </div>
        </Box>
      </from>
    </div>
  );
}