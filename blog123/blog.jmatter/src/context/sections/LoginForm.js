import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { LoadingButton } from '@mui/lab';
import { Checkbox, Link, Stack, TextField } from '@mui/material';
import { toast } from 'react-toastify';
import { useAuth } from '../../hooks/useAuth';
import { LoginAPI } from '../../service/loginService';
// components

// ----------------------------------------------------------------------

export default function LoginForm() {
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
      // navigate("/home");
      navigate("/dashboard/users", { replace: true });
    } else {
      toast(`Error: ${code}`, { position: toast.POSITION.TOP_CENTER, type: 'error', theme: 'colored' });
    }
  };
  return (
    <>
      <Stack spacing={3}>
        <TextField name="email" 
        label="Email address"
        onChange={(e) => setUsername(e.target.value)} />
        

        <TextField
          name="password"
          label="Password"
          onChange={(e) => setPassword(e.target.value)} />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Checkbox name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={onSubmit}>
        Login
      </LoadingButton>
    </>
  );
}