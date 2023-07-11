import { Box, Breadcrumbs, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../component/Footer';
import Header from '../component/Header';
import NavTopInsurance from './NavTop_Insurance';
import SidebarInsurance from './Sidebar_Insurance';

export default function Insurance() {
  return (
    <Box >
      <Container maxWidth="lg">
        <Header />
      </Container>
      <Box marginTop={2} className='page-paner'>
        <Box sx={{ justifyContent: 'center' }}>
          <Typography textAlign={'center'} colors='#fffff' p={2} fontSize={40} variant='h3' >
            BẢO HIỂM
          </Typography>
          <Breadcrumbs sx={{ color: '#fffff', display: 'flex', justifyContent: 'center' }}  >
            <Link style={{ textDecoration: 'none', color: "#ffffff" }} to={`/home`}>
              <Typography textAlign={'center'} variant='h6'>
                Trang chủ
              </Typography>
            </Link>

            <Typography textAlign={'center'} variant='h6' color=" #ffffff">
              Blog - Bảo hiểm
            </Typography>
          </Breadcrumbs>
        </Box>

      </Box >

      <Box sx={{ backgroundColor: '#efefef' }}>
        <Container maxWidth='lg'>
          <Grid container spacing={3} >
            <Grid item xs={3} marginTop={10}>
              <Box >
                <SidebarInsurance />

              </Box>

            </Grid>
            <Grid item xs={9} marginTop={10}>
              <Box>
                <NavTopInsurance />
              </Box>

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

