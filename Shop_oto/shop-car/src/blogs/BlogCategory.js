import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogCategory() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ marginTop: 2 }}>
        <Typography fontSize={25} variant='h3'>Danh mục bài viết</Typography>

      </Box>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Box sx={{ display: 'flex', border: 1, color: 'gray' }}>
            <Stack>
              <Link style={{ textDecoration: 'none', color: "gray" }} to={`/blogs/news`}>
                <img src='/img_blogs_1.jpg' style={{ width: "100%", height: "260" }} />
              </Link>
              <Paper />

              <Typography p={5} sx={{ color: '#090202', justifyContent: 'center', textAlign: 'center' }} fontSize={25} variant='h3 ' >
                Tin Tức
              </Typography>
            </Stack>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Box sx={{ display: 'flex', border: 1, color: 'gray' }}>
            <Stack>
              <Link style={{ textDecoration: 'none', color: "gray" }} to={`/blogs/danh-gia-xe`}>
                <img src='/img_blogs_2.jpg' style={{ width: "100%", height: "260" }} />
              </Link>
              <Paper />

              <Typography p={5} sx={{ color: '#090202', justifyContent: 'center', textAlign: 'center' }} fontSize={24} variant='h3 ' >
                Đánh giá xe
              </Typography>
            </Stack>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Box sx={{ display: 'flex', border: 1, color: 'gray' }}>
            <Stack>
              <Link style={{ textDecoration: 'none', color: "gray" }} to={`/blogs/news`}>
                <img src='/img_blogs_3.jpg' style={{ width: "100%", height: "260" }} />
              </Link>
              <Paper />
              <Typography p={5} sx={{ color: '#090202', justifyContent: 'center', textAlign: 'center' }} fontSize={25} variant='h3 ' >
                Tin Tức
              </Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container >
  );
}
