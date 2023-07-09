import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import './Blog.css';


export default function BlogVideo() {
  return (
    <div>
      <Container sx={{ maxWidth: 'lg' }}></Container>
      <Typography fontSize={25} variant='h3'>
        BLOG VIDEO
      </Typography>
      <Box marginTop={2.3} >
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/fKRrIbbL-Cc" frameborder="0" allowfullscreen=""></iframe>
      </Box>
      <Box marginTop={3}>
        <Typography variant='h6'>
          Từ khóa
        </Typography>
        <ul class="list-tag">

          <li><a href="/blogs/all/tagged/toyota-corolla-cross">Toyota Corolla Cross</a></li>

          <li><a href="/blogs/all/tagged/toyota">Toyota</a></li>

          <li><a href="/blogs/all/tagged/corolla-cross">Corolla Cross</a></li>

          <li><a href="/blogs/all/tagged/mitsubishi-xpander">Mitsubishi Xpander</a></li>

          <li><a href="/blogs/all/tagged/mitsubishi">Mitsubishi</a></li>

          <li><a href="/blogs/all/tagged/xpander">Xpander</a></li>

          <li><a href="/blogs/all/tagged/mazda-cx-5">Mazda CX-5</a></li>

          <li><a href="/blogs/all/tagged/mazda">Mazda</a></li>

          <li><a href="/blogs/all/tagged/cx-5">CX-5</a></li>

          <li><a href="/blogs/all/tagged/hyundai-santa-fe">Hyundai Santa Fe</a></li>

          <li><a href="/blogs/all/tagged/hyundai">Hyundai</a></li>

          <li><a href="/blogs/all/tagged/santa-fe">Santa Fe</a></li>

          <li><a href="/blogs/all/tagged/wuling-hongguang-miniev">Wuling Hongguang MiniEV</a></li>

          <li><a href="/blogs/all/tagged/fadil">Fadil</a></li>

          <li><a href="/blogs/all/tagged/volvo-xc60-recharge">Volvo XC60 Recharge</a></li>

          <li><a href="/blogs/all/tagged/volvo">Volvo</a></li>

          <li><a href="/blogs/all/tagged/xc60">XC60</a></li>

          <li><a href="/blogs/all/tagged/recharge">Recharge</a></li>

          <li><a href="/blogs/all/tagged/car-awards">Car Awards</a></li>

          <li><a href="/blogs/all/tagged/mercedes-benz">MERCEDES-BENZ</a></li>

          <li><a href="/blogs/all/tagged/c200">C200</a></li>

          <li><a href="/blogs/all/tagged/avantgarde">AVANTGARDE</a></li>

          <li><a href="/blogs/all/tagged/c200-avantgarde">C200 AVANTGARDE</a></li>

          <li><a href="/blogs/all/tagged/mercedes-benz-c200-avantgarde">MERCEDES-BENZ C200 AVANTGARDE</a></li>

        </ul>
      </Box>
    </div >
  );
}
