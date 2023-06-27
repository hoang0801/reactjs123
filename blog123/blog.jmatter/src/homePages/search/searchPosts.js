import SearchIcon from '@mui/icons-material/Search';
import { Box, Container, Divider, Grid, IconButton, InputBase, Paper, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from 'react-router-dom';
import { searchPost, setPostSearch } from '../../redux/postSlice';

export default function SearchPosts() {

  const { posts, search, } = useSelector((state) => state.post);
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
      categoryId: e.target.value

    };

    //update thay doi redux search
    dispatch(setPostSearch(newSearch));
  };
  return (

    <Container maxWidth="md">
      <Box sx={{ borderRight: 1 }} width={650}>

        <Typography marginTop={3}>
          Tìm Kiếm
        </Typography>
        <Box marginTop={5}>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 630 }}
            onChange={handleChange}
          >
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
        </Box>

        <Stack spacing={5} marginTop={6}>

          <Grid container spacing={2}>
            {posts.map((post) => (
              <Box>

                <Stack direction="row" >

                  <Grid container spacing={3}>
                    <Grid item xs={8} >
                      <Typography variant="h6" sx={{ mb: 1.5 }} >
                        <Link style={{ textDecoration: 'none', color: "#040404" }} to={`/thongtin/${post.id}`} >
                          {post.title}
                        </Link>
                      </Typography>
                      <Typography variant="subtitle1" >
                        TP Cần Thơ tổ chức thi đánh giá năng lực công nghệ thông tin cho 565 lãnh đạo cấp cơ sở, người có kết quả thấp không được xét khen thưởng cuối năm.
                      </Typography>
                    </Grid>
                    <Grid item xs={2} >
                      <img src={`http://52.193.212.182:8080/image/${post.images[0]}`} width={200} height={150} />
                    </Grid>
                  </Grid>
                  <Divider />
                </Stack>
              </Box>

            ))}

          </Grid>
        </Stack>
      </Box>
    </Container >
  );
}