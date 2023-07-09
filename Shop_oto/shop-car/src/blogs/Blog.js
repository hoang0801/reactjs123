import { Box, Container, Grid, Stack, Typography } from "@mui/material";

function Blog() {
  return (
    <>
      <Container maxWidth="lg">

        <Typography
          sx={{ justifyContent: 'center', textAlign: 'center', display: 'block' }}
          variant="h3"
          fontSize={25}>

          TIN TỨC PHỔ BIẾN
        </Typography>
        <Typography
          sx={{ justifyContent: 'center', textAlign: 'center', display: 'block' }}
          marginTop={5}
          variant="subtitle1"
          fontSize={15} >
          Chúng tôi luôn luôn cập nhật những thông tin mới nhất, tư vấn ô tô, xe máy, hỏi đáp thắc mắc về những vấn đề về xe,...
        </Typography>

        <Box marginTop={10}>
          <Grid container spacing={2}>
            <Grid item xs={3} >
              <Box >
                <img src="xedien.webp" height={180} width={263} />
                <Box marginTop={1.5} sx={{ border: 1, borderColor: 'grey.500' }}>
                  <Stack direction="row" spacing={2}>
                    <Box width={70} height={60} sx={{ justifyContent: 'center', textAlign: 'center', display: 'block', backgroundColor: ' #1a1a1a' }} >

                      <Typography sx={{ color: '#ffffff' }}
                      >
                        90
                      </Typography>
                      <Typography sx={{ color: '#ffffff' }}>
                        tháng 06
                      </Typography>

                    </Box>
                    <Box  >
                      <Typography sx={{ color: '	#666666' }} >
                        Wuling Hongguang
                      </Typography>

                    </Box>
                  </Stack>
                  <Box p={2} >
                    <Typography fontSize={13} variant=" subtitle1">
                      Với mong muốn ôtô điện Wuling HongGuang MiniEV đánh gục các mẫu xe tay ga phân khúc cao cấp từ 200 triệu đồng trở xuống. Liệu...
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={3} >
              <Box >
                <img src="xedien.webp" height={200} width={263} />
                <Box marginTop={1.5} sx={{ border: 1, borderColor: 'grey.500' }}>
                  <Stack direction="row" spacing={2}>
                    <Box width={70} height={60} sx={{ justifyContent: 'center', textAlign: 'center', display: 'block', backgroundColor: ' #1a1a1a' }} >

                      <Typography sx={{ color: '#ffffff' }}
                      >
                        90
                      </Typography>
                      <Typography sx={{ color: '#ffffff' }}>
                        tháng 06
                      </Typography>

                    </Box>
                    <Box  >
                      <Typography sx={{ color: '	#666666' }} >
                        Wuling Hongguang
                      </Typography>

                    </Box>
                  </Stack>
                  <Box p={2} >
                    <Typography fontSize={13} variant=" subtitle1">
                      Với mong muốn ôtô điện Wuling HongGuang MiniEV đánh gục các mẫu xe tay ga phân khúc cao cấp từ 200 triệu đồng trở xuống. Liệu...
                    </Typography>
                  </Box>
                </Box>
              </Box>


            </Grid>

            <Grid item xs={3} >
              <Box >
                <img src="xedien.webp" height={220} width={263} />
                <Box marginTop={1.5} sx={{ border: 1, borderColor: 'grey.500' }}>
                  <Stack direction="row" spacing={2}>
                    <Box width={70} height={60} sx={{ justifyContent: 'center', textAlign: 'center', display: 'block', backgroundColor: ' #1a1a1a' }} >

                      <Typography sx={{ color: '#ffffff' }}
                      >
                        90
                      </Typography>
                      <Typography sx={{ color: '#ffffff' }}>
                        tháng 06
                      </Typography>

                    </Box>
                    <Box  >
                      <Typography sx={{ color: '	#666666' }} >
                        Wuling Hongguang
                      </Typography>

                    </Box>
                  </Stack>
                  <Box p={2} >
                    <Typography fontSize={13} variant=" subtitle1">
                      Với mong muốn ôtô điện Wuling HongGuang MiniEV đánh gục các mẫu xe tay ga phân khúc cao cấp từ 200 triệu đồng trở xuống. Liệu...
                    </Typography>
                  </Box>
                </Box>
              </Box>


            </Grid>

            <Grid item xs={3} >
              <Box >
                <img src="xedien.webp" height={160} width={263} />
                <Box marginTop={1.5} sx={{ border: 1, borderColor: 'grey.500' }}>
                  <Stack direction="row" spacing={2}>
                    <Box width={70} height={60} sx={{ justifyContent: 'center', textAlign: 'center', display: 'block', backgroundColor: ' #1a1a1a' }} >

                      <Typography sx={{ color: '#ffffff' }}
                      >
                        90
                      </Typography>
                      <Typography sx={{ color: '#ffffff' }}>
                        tháng 06
                      </Typography>

                    </Box>
                    <Box  >
                      <Typography sx={{ color: '	#666666' }} >
                        Wuling Hongguang
                      </Typography>

                    </Box>
                  </Stack>
                  <Box p={2} >
                    <Typography fontSize={13} variant=" subtitle1">
                      Với mong muốn ôtô điện Wuling HongGuang MiniEV đánh gục các mẫu xe tay ga phân khúc cao cấp từ 200 triệu đồng trở xuống. Liệu...
                    </Typography>
                  </Box>
                </Box>
              </Box>


            </Grid>


          </Grid >



        </Box >

      </Container >
    </>

  );
}

export default Blog;