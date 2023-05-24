import { useNavigate, useParams } from "react-router";
import { useError } from "../../hook/useError";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import { updateCategoryAPI } from "../../service/category.service";
import { toast } from "react-toastify";
import { Button, Grid, Stack, TextField } from "@mui/material";

export default function EditCategory(){
     const{ showError} = useError()
      let navigate = useNavigate()

      let {id} = useParams()
      const { categories} = useSelector((state) =>state.category)

      //tim cate tu list lay ra tu redux store 
      const currentCate = categories.find(c=> c.id === parseInt(id))

      const NewItemSchema = Yup.object().shape({
        name: Yup.string().required("Required, please enter."),
        id: Yup.number().moreThan(0, "Required number, please enter."),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(NewItemSchema),
        defaultValues: currentCate
    });


    const save = async (category) => {
        let { code } = await updateCategoryAPI(category)

        if (code === 200) {
            toast("Thanh cong!!", { position: toast.POSITION.TOP_CENTER, type: 'success', theme: 'colored' })
            navigate("/dashboard/categories")
        }
        else
            showError(code)
    }

    // const handleChange = (e) => setCategory({
    //     ...category,
    //     [e.target.name]: e.target.value
    // })

    return (
        <Grid container >
            <Grid item xs={12} sm={6}>
                <Stack spacing={3}>
                    <h2>Update Category</h2>

                    <form onSubmit={handleSubmit(save)}>
                        <Stack spacing={3}>
                            <TextField label="id" {...register("id")} disabled
                                error={errors.id}
                                helperText={errors.id?.message} />

                            <TextField label="name" {...register("name")}
                                error={errors.name}
                                helperText={errors.name?.message} />

                            <Button type='submit' >Update</Button>
                        </Stack>
                    </form>

                </Stack>
            </Grid>
        </Grid>
    )
}