import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useError } from "../../hooks/useError";
import { updateUserAPI } from "../../service/userService";


export function EditUser() {
  const { showError } = useError();
  let navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState("");

  function handleChange(event) {
    //console.log("file up ",event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  }

  let { id } = useParams();
  const { users } = useSelector((state) => state.user);

  //tim user tu list lay ra tu redux store 
  const currentUser = users.find(c => c.id === parseInt(id));
  //console.log("currentUser ",JSON.stringify(currentUser));

  const NewItemSchema = Yup.object().shape({
    name: Yup.string().required("Required, please enter."),
    id: Yup.number().moreThan(0, "Required number, please enter."),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(NewItemSchema),
    defaultValues: currentUser
  });


  const save = async (user) => {
    let formData = new FormData();
    formData.append('id', `${user.id}`);
    formData.append('name', `${user.name}`);
    formData.append('username', `${user.username}`);
    formData.append('address', `${user.address}`);
    formData.append('password', `${user.password}`);
    formData.append('userRoles[0].role', `${user.role}`);
    formData.append('file', selectedFile);

    let { code } = await updateUserAPI(formData);

    if (code === 200) {
      toast("Thanh cong!!", { position: toast.POSITION.TOP_CENTER, type: 'success', theme: 'colored' });
      navigate("/dashboard/users");
    }
    else
      showError(code);
  };

  // const handleChange = (e) => setCategory({
  //     ...category,
  //     [e.target.name]: e.target.value
  // })

  return (
    <Grid container >
      <Grid item xs={12} sm={6}>
        <Stack spacing={3}>
          <h2>Update User</h2>

          <form onSubmit={handleSubmit(save)}>
            <Stack spacing={3}>
              <TextField label="id" {...register("id")} disabled
                error={errors.id}
                helperText={errors.id?.message} />

              <TextField label="name" {...register("name")}
                error={errors.name}
                helperText={errors.name?.message} />

              <TextField label="username" {...register("username")} disabled
                error={errors.username}
                helperText={errors.username?.message} />

              <TextField label="address" {...register("address")} disabled
                error={errors.address}
                helperText={errors.address?.message} />

              <TextField label="password" {...register("password")} disabled
                error={errors.password}
                helperText={errors.password?.message} />


              <Button variant="contained" component="label">
                <input accept="image/*" multiple type="file" name="file" onChange={handleChange} />
              </Button>


              <Button type='submit' >Update</Button>
            </Stack>
          </form>

        </Stack>
      </Grid>
    </Grid>
  );
}