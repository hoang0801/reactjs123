import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useError } from "../../hooks/useError";
import { addCategoryAPI } from "../../service/categoryService";


export default function NewCategory() {
  let navigate = useNavigate();
  const { showError } = useError();

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

  const addNew = async (category) => {
    let { code } = await addCategoryAPI(category);
    if (code === 200) {
      toast("Thanh cong!!", { position: toast.POSITION.TOP_CENTER, type: 'success', theme: 'colored' });
      console.log(1234);
      navigate("/dashboard/category/search");
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
            Create Category
          </Typography>
          <form onSubmit={handleSubmit(addNew)}>
            <Stack spacing={3}>
              <TextField label="name" variant="outlined" size="small"
                {...register("name")}
                error={errors.name}
                helperText={errors.name?.message}
              />
              <Button variant="outlined" type='submit' >Create</Button>
            </Stack>
          </form>
        </Stack>
      </Grid>
    </Grid>
  );
}