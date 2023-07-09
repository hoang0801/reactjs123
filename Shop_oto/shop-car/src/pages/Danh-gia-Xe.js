import { Box, Breadcrumbs, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import BlogCategory from '../blogs/BlogCategory';
import BlogVideo from '../blogs/BlogVideo';
import Footer from '../component/Footer';
import Header from '../component/Header';
import './Blog.css';

function DanhGiaXe() {
  return (
    <Box >
      <Container maxWidth="lg">
        <Header />
      </Container>
      <Box className='page-paner' marginTop={2}>
        <Box sx={{ justifyContent: 'center' }}>
          <Typography textAlign={'center'} colors='#fffff' p={2} fontSize={40} variant='h3' >
            ĐÁNH GIÁ XE
          </Typography>
          <Breadcrumbs sx={{ color: '#fffff', display: 'flex', justifyContent: 'center' }}  >
            <Link style={{ textDecoration: 'none', color: "#ffffff" }} to={`/home`}>
              <Typography textAlign={'center'} variant='h6'>
                Trang chủ
              </Typography>
            </Link>
            <Typography textAlign={'center'} variant='h6' color=" #ffffff">
              Blog - Tin tức
            </Typography>
          </Breadcrumbs>
        </Box>

      </Box>
      <Box>
        <BlogCategory />
      </Box>
      <Container maxWidth='lg'>
        <Grid marginTop={5} container spacing={3}>
          <Grid item xs={8}>
            <BlogDanhGia />
          </Grid>
          <Grid item xs={4}>
            <BlogVideo />
          </Grid>
        </Grid>
      </Container>
      <Box marginTop={10}>
        <Footer />
      </Box>

    </Box >
  );
}

export default DanhGiaXe;


function BlogDanhGia() {
  return (
    <>
      <Box>
        <Typography fontSize={25} variant='h3'>
          ĐÁNH GIÁ XE
        </Typography>

        <Grid marginTop={0} container spacing={3}>
          <Grid item xs={6}>
            <img src='/img_blogs_2.jpg' style={{ width: '100%', height: '' }} />
          </Grid>
          <Grid item xs={6}>
            <Link style={{ textDecoration: 'none', color: "#0E0101" }} to={`/`}>
              <Typography variant='h3' fontSize={20} >
                ĐÁNH GIÁ XE MERCEDES GLC 250 4MATIC 2019
              </Typography>
            </Link>
            <Typography variant='body2' marginTop={3} >
              Chúng tôi đánh giá xe Mercedes-Benz C 180 AMG 2021 sẽ khiến các đối thủ "đau đầu" với diện mạo thể thao hơn hẳn phiên bản tiền nhiệm.Tròn 1 năm sau lần đầu trình làng tại Việt Nam, thương hiệu...
            </Typography>
          </Grid>
        </Grid>

        <Box marginTop={5}>
          <Link style={{ textDecoration: 'none', color: "#0E0101" }} to={`/`}>
            <Typography variant='h3' fontSize={15} >
              ĐÁNH GIÁ XE MERCEDES GLC 250 4MATIC 2019
            </Typography>
          </Link>
          <Grid container spacing={3} marginTop={0}>
            <Grid item xs={2}>
              <img src='/img_blogs_2.jpg' style={{ width: '100%', height: '' }} />
            </Grid>
            <Grid item xs={10}>
              <Typography variant='body2' >
                Chúng tôi đánh giá xe Mercedes-Benz C 180 AMG 2021 sẽ khiến các đối thủ "đau đầu" với diện mạo thể thao hơn hẳn phiên bản tiền nhiệm.Tròn 1 năm sau lần đầu trình làng tại Việt Nam, thương hiệu...
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box marginTop={5}>
          <Link style={{ textDecoration: 'none', color: "#0E0101" }} to={`/`}>
            <Typography variant='h3' fontSize={15} >
              ĐÁNH GIÁ XE MERCEDES GLC 250 4MATIC 2019
            </Typography>
          </Link>
          <Grid container spacing={3} marginTop={0}>
            <Grid item xs={2}>
              <img src='/img_blogs_2.jpg' style={{ width: '100%', height: '' }} />
            </Grid>
            <Grid item xs={10}>
              <Typography variant='body2' >
                Chúng tôi đánh giá xe Mercedes-Benz C 180 AMG 2021 sẽ khiến các đối thủ "đau đầu" với diện mạo thể thao hơn hẳn phiên bản tiền nhiệm.Tròn 1 năm sau lần đầu trình làng tại Việt Nam, thương hiệu...
              </Typography>
            </Grid>
          </Grid>
        </Box>


        <Box marginTop={5}>
          <Link style={{ textDecoration: 'none', color: "#0E0101" }} to={`/`}>
            <Typography variant='h3' fontSize={15} >
              ĐÁNH GIÁ XE MERCEDES GLC 250 4MATIC 2019
            </Typography>
          </Link>
          <Grid container spacing={3} marginTop={0}>
            <Grid item xs={2}>
              <img src='/img_blogs_2.jpg' style={{ width: '100%', height: '' }} />
            </Grid>
            <Grid item xs={10}>
              <Typography variant='body2' >
                Chúng tôi đánh giá xe Mercedes-Benz C 180 AMG 2021 sẽ khiến các đối thủ "đau đầu" với diện mạo thể thao hơn hẳn phiên bản tiền nhiệm.Tròn 1 năm sau lần đầu trình làng tại Việt Nam, thương hiệu...
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box marginTop={5}>
          <Link style={{ textDecoration: 'none', color: "#0E0101" }} to={`/`}>
            <Typography variant='h3' fontSize={15} >
              ĐÁNH GIÁ XE MERCEDES GLC 250 4MATIC 2019
            </Typography>
          </Link>
          <Grid container spacing={3} marginTop={0}>
            <Grid item xs={2}>
              <img src='/img_blogs_2.jpg' style={{ width: '100%', height: '' }} />
            </Grid>
            <Grid item xs={10}>
              <Typography variant='body2' >
                Chúng tôi đánh giá xe Mercedes-Benz C 180 AMG 2021 sẽ khiến các đối thủ "đau đầu" với diện mạo thể thao hơn hẳn phiên bản tiền nhiệm.Tròn 1 năm sau lần đầu trình làng tại Việt Nam, thương hiệu...
              </Typography>
            </Grid>
          </Grid>
        </Box>


      </Box>
    </>
  );
};;