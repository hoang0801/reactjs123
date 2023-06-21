import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Container, Grid, Stack } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import * as Yup from "yup";
import { searchPost, setPostSearch } from "../../../redux/postSlice";
import TabContent from "../../components/tabContent";

export default function Tintuc() {
  let { id } = useParams();

  const { posts, recordsFiltered, search, error } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    if (search.categoryId != id)
      dispatch(setPostSearch({ ...search, categoryId: id }));
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
      <Container maxWidth='md'>
        <Box marginTop={5}>
          <Grid container spacing={8}>
            {posts.map((post) => (

              <Grid item xs={8}
                key={post.id}
                post={post}>

                <ReactMarkdown variant="h4">
                  {post.title}
                </ReactMarkdown>
                <ReactMarkdown>
                  {post.description}
                </ReactMarkdown>
                <img src={`http://52.193.212.182:8080/image/${post.images[0]}`} width="550" height="300"></img>

              </Grid>
            ))}

            <Grid item xs={4}>
              <Box marginTop={10} marginLeft={5}>
                <Stack spacing={2}  >
                  <TabContent />
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

    </>
  );
};
