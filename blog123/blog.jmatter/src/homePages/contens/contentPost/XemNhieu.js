

import { Box, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useError } from '../../../hooks/useError';
import { searchPost } from '../../../redux/postSlice';
const drawerWidth =500;

export default function XemNhieu() {
  const { showError } = useError();

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

  return (
    <Container maxWidth='md'>

      <Typography variant="h6" display="block" gutterBottom marginTop={10}>
      Xem nhiều
      </Typography>
      <Divider />
      
        <Stack direction="row">
        <Grid container spacing={2} marginTop={5}>
      {posts.map((post) =>(
  <Grid item xs={8} spacing={5}>
   
  <Stack direction="row" spacing={2} key={post.id}>
  <img src={`http://52.193.212.182:8080/image/${post.images[0]}`} alt="nghien cuu" width="200" height="150" />
  <Typography color={"#000000"} >
    {post.title}
  </Typography>
</Stack >
  </Grid>
  
  ))}
  <Divider />
  
  <Grid item xs={4}>
  {posts.slice(2,3).map((post) =>(
  <Box key={post.id}  container  borderColor= 'grey.500' sx={{border: 1 }}   >
    <Stack direction="row" spacing={6} >
  <Typography>{post.title}</Typography>
  <img src={`http://52.193.212.182:8080/image/${post.images[0]}`} width={50} height={50} />
  </Stack>
  <Divider />
  </Box>
  ))}  
  </Grid>
  </Grid>
  </Stack>
  
    {/* <Box sx={{ display: 'flex' }}>
      
     
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
  
        <Box sx={{ overflow: 'auto' }}>
          
          <Divider />
          
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        
        
      </Box>
    </Box> */}
    </Container>
  );
}