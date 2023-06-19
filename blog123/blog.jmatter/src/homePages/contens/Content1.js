import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Content1() {

  return (

    <Grid container spacing={2}>
      <Container sx={50}>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4">
              Resource Center
            </Typography>
            <Typography variant="body2" color={"#757575"}>
              learn about everything from customer succerss stories, product info, to viewpoints from the core team
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={7} sx={{ marginTop: 2 }}>
          <Grid item xs={4}>
            <Box p={2} borderRadius={3}
              sx={{

                height: 200,
                backgroundImage: "url('\cau-cong-vang.jpg')"
              }} >
              <Typography variant="body4" color={"#FFFFFF"} >
                WHITE PAPER
              </Typography>
              <Typography variant="h6" color={"#FFFFFF"}>
                Understanding the
                Mobile Delivery Gap
              </Typography>
              <Button component={Link} to={`/tintuc`} sx={{ mt: 2, bgcolor: '#FFFFFF' }} variant="contained">
                <Typography variant="body" color={"#424242"}>
                  Read the White Paper
                </Typography>
              </Button>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box p={2} borderRadius={3}
              sx={{

                height: 200, backgroundImage: "url('/sao_kim_SFLP.jpg')"
              }} >
              <Typography variant="body4" color={"#FFFFFF"}>
                CASE STUDY
              </Typography>
              <Typography variant="h6" color={"#FFFFFF"} >
                Building the new
              </Typography>
              <Typography variant="h6" color={"#FFFFFF"} >
                Marketwatch app
              </Typography>
              <Button component={Link} to={`/thongtin`} sx={{ mt: 2, bgcolor: '#FFFFFF' }} variant="contained">
                <Typography variant="body" color={"#424242"}>
                  See the Case Study
                </Typography>
              </Button>

            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box p={2} borderRadius={3}
              sx={{

                height: 200, backgroundImage: "url('/tiphu.jpg')"
              }} >
              <Typography variant="body4" color={"#FFFFFF"}>
                VIDEO
              </Typography>
              <Typography variant="h6" color={"#FFFFFF"}>
                Using Wed Components
                Marketwatch app
              </Typography>
              <Button href="https://www.youtube.com/watch?v=KMtRr5KNUKQ" sx={{ mt: 2, bgcolor: '#FFFFFF' }} variant="contained">
                <Typography variant="body" color={"#424242"}>
                  Watch the video
                </Typography>
              </Button>

            </Box>
          </Grid>
        </Grid>

      </Container>
    </Grid>

  );
}


