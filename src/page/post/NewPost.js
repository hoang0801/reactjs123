import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
// import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import * as Yup from "yup";
import { useError } from "../../hooks/useError";
import { createPostAPI } from "../../service/post.service";


export default function NewPost() {
    let navigate = useNavigate()
    const { showError } = useError()

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
        let { code } = await createPostAPI(post)
        if (code === 200) {
            toast("Thanh cong!!", { position: toast.POSITION.TOP_CENTER, type: 'success', theme: 'colored' })
            navigate("/dashboard/post/search")
        }
        else
            showError(code)
    }

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
                            <TextField label="category" variant="outlined" size="small"
                                {...register("category.id")}
                                error={errors.category}
                                helperText={errors.category?.message}
                            />
                            {/* <TextField label="author" variant="outlined" size="small"
                                {...register("createdBy.id")}
                                error={errors.createdBy}
                                helperText={errors.createdBy?.message}
                            /> */}
                            <Button variant="outlined" type='submit' >Post</Button>
                        </Stack>
                    </form>
                </Stack>
            </Grid>
        </Grid>
    )
}