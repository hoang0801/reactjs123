import {useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { LoginAPI } from "../../service/Login.service";
import { axiosQuiz } from "../../utils/Axios";
import { AuthenContext } from "../../context/AuthenContext";
import { Await, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useAuth } from "../../hook/useAuth";
import { Box, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

export default function Login(){

    let{login}= useAuth()
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    // doc doi tuong context, destruction, doi ten ham
    // let {login:loginCtx} = useContext(AuthenContext)
    let navigate = useNavigate()

    const onSubmit = async()=>{
      var urlencoded = new URLSearchParams();
      urlencoded.append("username", username);
      urlencoded.append("password", password);
  
      const {code, result} = await LoginAPI(urlencoded)
      if(code === "200"){
        console.log(result)
        console.long( "dang nhap thanh cong")

        login(result)
        navigate ("/dashboard/users",{replace:true})
      }else{
        toast(`Error:${code}`, {position:toast.POSITION.TOP_CENTER, type:'error', them:'colored'})
      }
    }

        // return (

        //     <div >
        //       <form>
        //         <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', flexDirection: 'column', margin: 'auto', marginTop: 5, padding: 3, borderRadius: 5, boxShadow: '5px 5px 10px #ccc', ":hover": { boxShadow: '10px 10px 20px #ccc' } }} maxWidth={400}>
        //           <Typography variant="h2" padding={3} textAlign="center">Login</Typography>
        //           <TextField margin="normal" type={'email'} variant="outlined" placeholder="Username" onChange={(e) => setUsername(e.target.value)}></TextField>
        //           <TextField margin="normal" type={'password'} variant="outlined" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></TextField>
        //           <Link to="/dashboard/category/search" style={{ textDecoration: 'none' }}>
        //             <Button variant="contained" color="warning" sx={{ marginTop: 3, borderRadius: 3 }} 
        //             type="button" onClick={() => onSubmit()}>Login</Button></Link>
        //           <Link to="/signup" style={{ textDecoration: 'none' }}>
        //             <Button sx={{ marginTop: 3, borderRadius: 3 }}>Change to SignUp</Button>
        //           </Link>
        //         </Box>
        //       </form>
        //     </div>
        //   );
}