import { Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from "@mui/material/Divider";
import { Link } from 'react-router-dom';


function Header() {
  return (
    <Box marginTop={3} >
      <Box>
        <Divider>
          <img src="//theme.hstatic.net/200000639001/1001045841/14/logo.png?v=68" alt="Otosieuluot" class="img-responsive" />
        </Divider>
      </Box>

      <Box>
        <Header2 />
      </Box>
    </Box>
  );
}

function Header2() {
  return (
    <Box>
      <Stack direction="row" spacing={2}>

        <Link style={{ textDecoration: 'none', color: "gray" }} to={`/home`}>
          <Typography fontSize={18} variant='body2'>
            Trang chủ
          </Typography>

        </Link>
        <Typography fontSize={18} variant='body2'>
          <Link style={{ textDecoration: 'none', color: "gray" }} to={`/collection/xe-dang-ban`}>
            Sản phẩm
          </Link>
        </Typography>
        <Typography fontSize={18} variant='body2'>
          <Link style={{ textDecoration: 'none', color: "gray" }} to={`/blogs/news`}>
            Tin Tức
          </Link>
        </Typography>






      </Stack>
    </Box>
  );
}

export default Header

