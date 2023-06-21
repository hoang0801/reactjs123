import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Divider, Grid, IconButton, InputBase, Paper, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchPost, setPostSearch } from '../../redux/postSlice';

export default function SearchPosts() {

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



  const back = () => {
    let start = search.start - parseInt(search.length);
    start = start < 0 ? 0 : start;

    //update thay doi redux search
    dispatch(setPostSearch({
      ...search,
      start
    }));
  };

  const next = () => {
    let start = (search.start) + parseInt(search.length);

    //update thay doi redux search
    if (start < recordsFiltered)
      dispatch(setPostSearch({
        ...search,
        start
      }));
  };
  return (

    <Container>

      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 500 }}
        onChange={handleChange}
      >
        <div style={{ marginTop: 20 }}></div>

        <InputBase
          marginLeft={15}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search..."
          inputProps={{ 'aria-label': 'Search...' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>



      <Grid direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={6}
        marginTop={5} >
        <Grid spacing={6}>
          {posts.map((post) => (

            <Card sx={{ width: 500, height: 150 }} >
              <Stack direction="row" spacing={2}>
                <Box>
                  <CardContent
                    key={post.id}
                    post={post}>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {post.title}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to={`/tintuc/${post.id}`} >
                      <Button size="small" >Xem</Button>
                    </Link>
                  </CardActions>
                </Box>

                <CardMedia
                  component="img"
                  sx={{ width: 151, height: 200 }}
                  image={`http://52.193.212.182:8080/image/${post.images[0]}`}
                />
              </Stack>
            </Card>
          ))
          }

        </Grid>
      </Grid>


    </Container>
  );
}