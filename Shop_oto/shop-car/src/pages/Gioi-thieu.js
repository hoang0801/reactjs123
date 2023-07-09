
import { Box, Breadcrumbs, Container, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../component/Header';
import './Blog.css';


function GioiThieu(){
  return(
    <>
      <Box >
      <Container maxWidth="lg">
        <Header />
      </Container>
      <Box className='page-paner' marginTop={2}>
        <Box sx={{ justifyContent: 'center' }}>
          <Typography textAlign={'center'} colors='#fffff' p={2} fontSize={40} variant='h3' >
       GIỚI THIỆU
          </Typography>
          <Breadcrumbs sx={{ color: '#fffff', display: 'flex', justifyContent: 'center' }}  >
            <Link style={{ textDecoration: 'none', color: "#ffffff" }} to={`/home`}>
              <Typography textAlign={'center'} variant='h6'>
                Trang chủ
              </Typography>
            </Link>
            <Typography textAlign={'center'} variant='h6' color=" #ffffff">
             Giới thiệu
            </Typography>
          </Breadcrumbs>
        </Box>
        </Box>
        </Box>


    </>
  )
}
export default GioiThieu