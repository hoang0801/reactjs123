import { Box, Button, CardActions, Container, Grid, Stack, Typography } from "@mui/material";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchPost, setPostSearch } from "../../../redux/postSlice";


export default function ContentPost() {
  const { posts, recordsFiltered, search, error } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => {
      find();
    }, 500);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]); // khi redux seearch thay doi, thi se dc goi lai find

  const find = async () => {
    dispatch(searchPost());
  };

  const handleChange = (e) => {
    let newSearch = {
      ...search,
      start: 0,// reset lai trang dau
      size: 3,
      [e.target.name]: e.target.value
    };

    //update thay doi redux search
    dispatch(setPostSearch(newSearch));
  };


  return (

    <Grid container spacing={2}>
      <Container sx={50}>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4">
              Resource Center
            </Typography>
            <Typography variant="body2" color={"#757575"}>
              learn about everything from customer succerss stories, product info, to viewpoints from the core team
            </Typography>
          </Grid>
        </Grid>


        <Stack marginLeft={3} direction="row" spacing={4} sx={{ marginTop: 4 }}>
          {posts.slice(0, 3).map((post) => (
            <Box p={2} borderRadius={3} key={post.id}
              sx={{
                height: 150,
                width: 450,
                backgroundImage: `url(http://52.193.212.182:8080/image/${post.images[0]})`
              }}>
              <Typography variant="h6" color="#0A0606" >
                {post.title}
              </Typography>
              <CardActions>
                <Link to={`/thongtin/${post.id}`} >
                  <Button size="small" >Xem</Button>
                </Link>
              </CardActions>


            </Box>
          ))}
        </Stack>




      </Container>
    </Grid>

  );
}


