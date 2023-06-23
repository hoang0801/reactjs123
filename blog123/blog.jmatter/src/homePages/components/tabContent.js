import { Box, Grid, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchPost, setPostSearch } from "../../redux/postSlice";

export default function TabContent() {
  const { posts, recordsFiltered, search, error } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(posts.map);

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
      [e.target.name]: e.target.value
    };

    //update thay doi redux search
    dispatch(setPostSearch(newSearch));
  };
  return (
    <Grid xs={4}>
      <Box marginTop={10} marginLeft={5}>
        <Stack spacing={2}  >
          <Typography>
            xem nhiều
          </Typography>

          <Grid container spacing={2}>
            {posts.map((post) => (
              <Box key={post.id}
                post={post} >
                <Grid sx={4}>
                  <img src={`http://52.193.212.182:8080/image/${post.images[0]}`} alt="Girl in a jacket" width="70" height="50" />
                </Grid>
                <Grid sx={6}>
                  <Typography variant="caption" display="block" gutterBottom>
                    {post.title}
                  </Typography>
                </Grid>
              </Box>
            ))}
          </Grid>
        </Stack>
      </Box>
    </Grid>


  );
}