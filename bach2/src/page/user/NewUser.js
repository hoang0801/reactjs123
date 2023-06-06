import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { React, useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import * as Yup from "yup";
import { useError } from "../../hooks/useError";
import { createUserAPI } from '../../service/user.service';


export default function NewUser() {
  let navigate = useNavigate();
  const { showError } = useError();
  const [selectedFile, setSelectedFile] = useState();

  function handleChange(event) {
    //console.log("file up ",event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  }

  const NewItemSchema = Yup.object().shape({
    name: Yup.string().required("Required, please enter."),
  });

  //ham hook
  // let [category, setCategory] = useState({
  //     name: ""
  // });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(NewItemSchema)
  });

  const addNew = async (user) => {
    console.log("user add new; ", JSON.stringify(user.birthdate));
    let formData = new FormData();
    formData.append('username', `${user.username}`);
    formData.append('password', `${user.password}`);
    formData.append('email', `${user.email}`);
    formData.append('userRoles[0].role', `${user.role}`);
    let { code } = await createUserAPI(formData);

    if (code === 200) {
      toast("Thanh cong!!", { position: toast.POSITION.TOP_CENTER, type: 'success', theme: 'colored' });
      navigate("/dashboard/users");
    }
    else
      showError(code);
  };

  // const handleChangeName = (e) => setCategory({
  //     ...category,
  //     name: e.target.value
  // })

  return (
    <Grid container alignItems={"center"} justifyContent={"center"}>
      <Grid item xs={12} sm={6}>
        <Stack spacing={3}>
          <Typography variant="h6">
            Create User
          </Typography>
          <form onSubmit={handleSubmit(addNew)}>
            <Stack spacing={3}>
              <TextField label="name" variant="outlined" size="small"
                {...register("name")}
                minLength={6}
                error={errors.name}
                helperText={errors.name?.message}
              />
              <TextField label="username" variant="outlined" size="small"
                {...register("username")}
                error={errors.username}
                helperText={errors.username?.message}
              />
              <TextField label="password" variant="outlined" size="small" type="password"
                {...register("password")}
                error={errors.password}
                helperText={errors.password?.message}
              />
              <TextField label="email" variant="outlined" size="small"
                {...register("email")}
                error={errors.email}
                helperText={errors.email?.message}
              />
              <TextField label="role" variant="outlined" size="small"
                {...register("role")}
                error={errors.role}
                helperText={errors.role?.message}
              />
              <TextField label="birthdate" variant="outlined" size="small" type="date" id="birthdate" name="birthdate" placeholder="dd/mm/yyyy"
                min="1997/01/01" max="2030/12/31"
                {...register("birthdate")}
                error={errors.birthdate}
                helperText={errors.birthdate?.message}
              />

              <Button variant="contained" component="label">
                <input accept="image/*" multiple type="file" name="file" onChange={handleChange} />
              </Button>

              <Button variant="outlined" type='submit' >Create</Button>
            </Stack>
          </form>


        </Stack>
      </Grid>
    </Grid>
  );
}