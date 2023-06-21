import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Box, Button, IconButton, InputBase, Paper, Stack, Toolbar, Typography } from "@mui/material";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { searchPost, setPostSearch } from '../../redux/postSlice';

export default function TopBar1() {


  const { posts, recordsFiltered, search, error } = useSelector((state) => state.post);
  const Navigate = useNavigate();
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

  const handleChangeLogin = () => {
    return (
      Navigate("/login")
    );
  };

  const handleChangeSearch = () => {
    return (
      Navigate("/client/search")
    );
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

    <Box sx={{ flexGrow: 1, position: 'fixed' }}>
      <AppBar sx={{ bgcolor: '#FAFAFA' }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"

            sx={{ mr: 2 }}
          >
            <img src='/logoo.png' />

          </IconButton>
          <Box marginLeft={5} >
            <Stack direction="row" spacing={3} >
              <Typography sx={{ color: '#808080' }}  >News</Typography>
              <Typography sx={{ color: '#808080' }}  >Framework</Typography>
              <Typography sx={{ color: '#808080' }}  >Products</Typography>
              <Typography sx={{ color: '#808080' }}  >Developers</Typography>
              <Typography sx={{ color: '#808080' }}  >Businesses</Typography>
              <Typography sx={{ color: '#808080' }}  >Suport</Typography>
            </Stack>

          </Box>

          <Box marginLeft={14} value={search.keyword} onChange={handleChange}>
            <Paper
              component="form"
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 150 }}
            >
              <InputBase
                marginLeft={15}
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search..."
                inputProps={{ 'aria-label': 'Search...' }}
              />
              <IconButton onClick={handleChangeSearch} type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Box>
          <Box marginLeft={2}>
            <Button onClick={handleChangeLogin} color="inherit">
              <Typography color="Gray" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Login
              </Typography>
            </Button>
          </Box>

        </Toolbar>
      </AppBar>
    </Box>


  );
}

