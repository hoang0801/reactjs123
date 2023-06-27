

import { Container, Divider, Grid, Stack, Typography } from '@mui/material';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { searchPostAPI } from '../../../service/postService';

export default function XemNhieu({ currentPost }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    find();
  }, []); // khi redux seearch thay doi, thi se dc goi lai find

  const find = async () => {
    let resp = await searchPostAPI({
      "start": 0,
      "length": 10,
      "categoryId": currentPost?.categoryId
    }); //await dùng trong hàm async
    setPosts(resp?.result?.data);
  };

  return (
    <Container maxWidth='md'>
      <Typography variant="arial" display="block" gutterBottom marginTop={10}>
        Xem nhiều
      </Typography>
      <Divider />
      <Stack direction="row">
        <Grid container spacing={2} marginTop={1}>
          {posts?.map((post) => (
            <Grid spacing={5}>
              <Stack direction="row" spacing={2} key={post.id}>
                <img src={`http://52.193.212.182:8080/image/${post.images[0]}`} alt="nghien cuu" width="100" height="80" />
                <Typography fontSize={10} color={"#000000"} >
                  {post.title}
                </Typography>
              </Stack >
            </Grid>

          ))}
          <Divider />
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