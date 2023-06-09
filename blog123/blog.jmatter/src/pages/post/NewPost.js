import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useError } from "../../hooks/useError";
import { addPostAPI } from "../../service/postService";

export default function NewPost() {
  let navigate = useNavigate();
  const { showError } = useError();
  const [selectedFile, setSelectedFile] = useState();
  function handleChange(event) {
    //console.log("file up ",event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  }

  const NewItemSchema = Yup.object().shape({
    title: Yup.string().required("Required, please enter."),
    description: Yup.string().required("Required, please enter."),
    category: Yup.object().nullable().required("Required, please enter."),
    // createdBy: Yup.object().nullable().required("Required, please enter."),
  });

  //ham hook
  // let [post, setPost] = useState({
  //     name: ""
  // });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(NewItemSchema)
  });

  const addNew = async (post) => {
    console.log(post);
    var formdata = new FormData();
    formdata.append("title", post.title);
    formdata.append("description", post.description);
    formdata.append("imageFile ", selectedFile);
    formdata.append("categoryId ", post.categoryId);

    let { code } = await addPostAPI(formdata);
    if (code === 200) {
      toast("Thanh cong!!", { position: toast.POSITION.TOP_CENTER, type: 'success', theme: 'colored' });
      navigate("/dashboard/post/search");
    }
    else
      showError(code);
  };

  // const handleChangeName = (e) => setPost({
  //     ...post,
  //     name: e.target.value
  // })

  return (
    <Grid container alignItems={"center"} justifyContent={"center"}>
      <Grid item xs={12} sm={6}>
        <Stack spacing={3}>
      <Typography variant="h6">
            Create Post
          </Typography>
          <form onSubmit={handleSubmit(addNew)}>
            <Stack spacing={3}>
              <TextField label="title" variant="outlined" size="small"
                {...register("title")}
                minLength={6}
                error={errors.title}
                helperText={errors.title?.message}
              />
              <TextField label="description" variant="outlined" size="small"
                {...register("description")}
                error={errors.description}
                helperText={errors.description?.message}
              />
              <TextField label="categoryId" variant="outlined" size="small"
                {...register("categoryId")}
                error={errors.categoryId}
                helperText={errors.categoryId?.message}
              />
              <Button variant="contained" component="label">
                <input accept="image/*" multiple type="file" name="file" onChange={handleChange} />
              </Button>
              <Button variant="outlined" type='submit' >Post</Button>
            </Stack>
          </form>
        </Stack>
      </Grid>
    </Grid>
  );
}