import { Box, Breadcrumbs, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../component/Footer';
import Header from '../component/Header';
import './Image.css';
import NavTop from './NavTop';
import Sidebar from './Sidebar_menu';
import SidebarPrice from './Sidebar_price';

function XeDangBan() {
  return (
    <Box >
      <Container maxWidth="lg">
        <Header />
      </Container>
      <Box marginTop={2} className='page-paner'>
        <Box sx={{ justifyContent: 'center' }}>
          <Typography textAlign={'center'} colors='#fffff' p={2} fontSize={40} variant='h3' >
            XE ĐANG BÁN
          </Typography>
          <Breadcrumbs sx={{ color: '#fffff', display: 'flex', justifyContent: 'center' }}  >
            <Link style={{ textDecoration: 'none', color: "#ffffff" }} to={`/home`}>
              <Typography textAlign={'center'} variant='h6'>
                Trang chủ
              </Typography>
            </Link>
            < Link style={{ textDecoration: 'none', color: "#ffffff" }} to={`/blogs/news`}>
              <Typography textAlign={'center'} variant='h6'>
                Danh mục
              </Typography>
            </Link>
            <Typography textAlign={'center'} variant='h6' color=" #ffffff">
              Xe đang bán
            </Typography>
          </Breadcrumbs>
        </Box>

      </Box >

      <Box sx={{ backgroundColor: '#efefef' }}>
        <Container maxWidth='lg'>
          <Grid container spacing={3} >
            <Grid item xs={3} marginTop={10}>
              <Box  >
                <Sidebar />

              </Box>
              <Box marginTop={3} >
                <SidebarPrice />
              </Box>
            </Grid>
            <Grid item xs={9} marginTop={10}>
              <NavTop />
            </Grid>
          </Grid>

        </Container>

      </Box>
      <Box marginTop={3}>
        <Footer />
      </Box>
    </Box >

  );
}
export default XeDangBan;
