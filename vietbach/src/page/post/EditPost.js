import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid, Stack, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';
import { useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from "yup";
import { useError } from "../../hooks/useError";
import { updatePostAPI } from '../../service/post.service';

export default function EditPost() {
    const { showError } = useError()
    let navigate = useNavigate()

    let { id } = useParams();
    const { posts } = useSelector((state) => state.post)

    //tim post tu list lay ra tu redux store 
    const currentPost = posts.find(c => c.id === parseInt(id))

    const NewItemSchema = Yup.object().shape({
        name: Yup.string().required("Required, please enter."),
        id: Yup.number().moreThan(0, "Required number, please enter."),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(NewItemSchema),
        defaultValues: currentPost
    });


    const save = async (post) => {
        let { code } = await updatePostAPI(post)

        if (code === 200) {
            toast("Thanh cong!!", { position: toast.POSITION.TOP_CENTER, type: 'success', theme: 'colored' })
            navigate("/dashboard/post/search")
        }
        else
            showError(code)
    }

    // const handleChange = (e) => setPost({
    //     ...post,
    //     [e.target.name]: e.target.value
    // })

    return (
        <Grid container >
            <Grid item xs={12} sm={6}>
                <Stack spacing={3}>
                    <h2>Update Post</h2>

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