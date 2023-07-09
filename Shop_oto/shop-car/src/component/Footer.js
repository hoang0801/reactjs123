import { Box, Container, Grid, Typography } from "@mui/material";
import GoogleMaps from "./GoogleMaps";


function Footer() {
  return (
    <>
      <GoogleMaps />
      <Box marginTop={4} sx={{ backgroundColor: '#f7f7f7' }}>
        <Container maxWidth={'lg'}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <img src="//theme.hstatic.net/200000639001/1001045841/14/logo-footer.png?v=68" alt="" />
              <Typography marginTop={2} fontSize={13} color={'#222222'} >
                Thái Công Auto là đơn vị chuyên mua bán trao đổi các dòng xe cao cấp đến từ những thương hiệu nổi tiếng như MERCEDES-BENZ, BMW, Audi, Porsche Volvo,... chất lượng cao kèm theo dịch vụ sau bán hàng cao cấp.
              </Typography>
              <Box marginTop={2}
              >
                <Typography fontSize={16} variant="h4">
                  Đăng kí để nhận thông tin
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Typography fontSize={20} variant="h5">
                HÌNH ẢNH
              </Typography>
            </Grid>

            <Grid item xs={3}>

              <Typography fontSize={20} variant="h5">
                THÔNG TIN LIÊN HỆ
              </Typography>
            </Grid>

            <Grid item xs={3}>
              <Typography fontSize={20} variant="h5">
                FACEBOOK
              </Typography>
            </Grid>





          </Grid>



        </Container>

      </Box >
    </>
  );


}
export default Footer;