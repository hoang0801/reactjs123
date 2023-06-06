import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid, Stack, TextField, Typography } from '@mui/material';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import * as Yup from "yup";
import { useError } from "../../hooks/useError";
import { addUserAPI } from '../../service/userService';


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
    console.log(user);
    let { code } = await addUserAPI(user);

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

              <TextField label="password" variant="outlined" size="small" type="password"
                {...register("password")}
                error={errors.password}
                helperText={errors.password?.message}
              />
              <TextField label="address" variant="outlined" size="small"
                {...register("address")}
                error={errors.address}
                helperText={errors.address?.message}
              />
              <TextField label="roles" variant="outlined" size="small"
                {...register("role")}
                error={errors.role}
                helperText={errors.role?.message}
              />
              <TextField label="phone" variant="outlined" size="small"
                {...register("phone")}
                error={errors.phone}
                helperText={errors.phone?.message}
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
