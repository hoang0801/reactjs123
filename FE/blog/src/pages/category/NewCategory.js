import { useNavigate } from "react-router";
import { useError } from "../../hook/useError";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Category } from "@mui/icons-material";
import { addCategoryAPI } from "../../service/category.service";
import { toast } from "react-toastify";
import { Grid, Stack, Typography } from "@mui/material";


export default function NewCategory(){
     let navigate = useNavigate()
    const { showError} = useError()

    const NewItemSchema = Yup.object().shape ({
        name: Yup.string().required("Required, please enter.")
    })

    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(NewItemSchema)
    })

    const addNew = async (category) =>{
        let {code} = await addCategoryAPI (category)

        if ( code === 200){
             toast("Thanh cong!!", { position: toast.POSITION.TOP_CENTER, type: 'success', theme: 'colored' })
             navigate("/dashboard/category/search")
        } else showError(code)

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
        )
    }
}
