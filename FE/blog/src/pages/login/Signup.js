import { useEffect, useState } from "react";
import { addUserAPI } from "../../service/User.service";
import { Avatar, Button, Checkbox, FormControl, FormControlLabel, FormLabel, Grid, Paper, RadioGroup, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Signup = () => {
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    let [userArray, setUserArray] = useState([]);
  let [user, setUser] = useState({
    id: "",
    username: "hoang123",
    password: "123",
    enabled: true,

  });

  useEffect(() => {}, [user]);

  let handleChangeUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  let createUser = async () => {
    try {
      console.log(user);
      let resp = await addUserAPI(user); //await dùng trong hàm async
      console.log("Tạo user thành công");
    } catch (err) {
      console.log(err);
    }
  };
    return (
        <Grid>
            <Paper elevation={20} style={{ padding: '30px 20px', width: 300, margin: "20px auto"}}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                    </Avatar>
                    <h2 >Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField name="username"
          onChange={handleChangeUser} margin="normal" fullWidth placeholder="Enter your username" />
                    <TextField name="email"
          onChange={handleChangeUser} margin="normal" fullWidth  placeholder="Enter your email" />
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <TextField margin="normal"fullWidth  placeholder="Enter your phone number" />
                    <TextField name="password"
          onChange={handleChangeUser} margin="normal" fullWidth  placeholder="Enter your password"/>
                    <TextField name="password"
          onChange={handleChangeUser} margin="normal" fullWidth  placeholder="Confirm your password"/>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Link to="/login" style={{textDecoration:'none'}}>
                    <Button type="submit" variant="contained" color="warning" sx={{marginTop:3,borderRadius:3}} onClick={createUser} >SignUp</Button>
                    </Link>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;
