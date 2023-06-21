import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Container, Typography } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import { useError } from "../../../hooks/useError";
import { searchPost, setPostSearch } from "../../../redux/postSlice";

export default function ThongTin() {
  const { showError } = useError();
  let { id } = useParams();

  const { posts, recordsFiltered, search, error } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    if (search.postId != id)
      dispatch(setPostSearch({ ...search, postId: id }));
    else {
      const timeout = setTimeout(() => {
        find();
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [search]); // khi redux seearch thay doi, thi se dc goi lai find

  const find = async () => {
    dispatch(searchPost());
  };

  const currentPost = posts.find(c => c.id === parseInt(id));

  const NewItemSchema = Yup.object().shape({
    name: Yup.string().required("Required, please enter."),
    id: Yup.number().moreThan(0, "Required number, please enter."),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(NewItemSchema),
    defaultValues: currentPost
  });


  return (
    <>
      <Container maxWidth='md' sx={{ marginTop: 5, }}>
        {posts.map((item) => (
          <Box>
            {console.log(item)}

            <Typography variant="h4">
              {item.title}
            </Typography>
            <img src={`http://52.193.212.182:8080/image/${item.images[0]}`} alt="nghien cuu" width="850" height="500" />
            <Typography sx={{ marginTop: 5, }} >
              {item.description}
            </Typography>
            <Typography sx={{ marginTop: 5, }} >
              Ngày Đăng :{item.createdDate}
            </Typography>

          </Box>
        ))}
      </Container>
    </>
  );
}