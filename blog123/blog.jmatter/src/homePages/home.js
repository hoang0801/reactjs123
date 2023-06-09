import { Box, Button, Container, Grid, Icon, Typography } from "@mui/material";
import { useState } from "react";

export default function Home() {
  let [homArray, setHomeArray] = useState([]);
  let [home, setHome] = useState();
  return (
    <>
      <Container sx={50}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4">
              Resource Center
            </Typography>
            <Typography variant="body2">
              learn about everything from customer succerss stories, product info, to viewpoints from the core team
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box p={2} minHeight={10} borderRadius={3} sx={{ backgroundImage: "url('/images.jpg')" }} >
              <Typography variant="body4" color={"#FFFFFF"}>
                WHITE PAPER
              </Typography>
              <Typography variant="h6" color={"#FFFFFF"}>
                Understanding the
                Mobile Delivery Gap
              </Typography>
              <Button variant="contained">Read the White Paper</Button>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box p={2} minHeight={5} borderRadius={3} sx={{ backgroundImage: "url('/sao_kim_SFLP.jpg')" }} >
              <Typography variant="body4" color={"#FFFFFF"}>
                CASE STUDY
              </Typography>
              <Typography variant="h6" color={"#FFFFFF"}>
                Building the new
                Marketwatch app
              </Typography>
              <Button sx={{ mt: 2 }} variant="contained" color={"info"} >See the Case Study</Button>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box p={2} borderRadius={3} sx={{ backgroundImage: "url('/tiphu.jpg')" }} >
              <Typography variant="body4" color={"#FFFFFF"}>
                VIDEO
              </Typography>
              <Typography variant="h6" color={"#FFFFFF"}>
                Using Wed Components
                Marketwatch app
              </Typography>
              <Button sx={{ mt: 2 }} variant="outlined" color={"primary"} >Watch the video</Button>
            </Box>
          </Grid>
        </Grid>
      </Container>


      {/* ------------------ */}

      <Container sx={50}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Icon />
            <Typography variant="h4">
              Featured Case Studies
            </Typography>
          </Grid>
        </Grid>


        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Box p={2}
              minHeight={10}
              borderRadius={3}
              sx={{ backgroundImage: "url('/nho.jpg')" }}
            >
              <Typography variant="body4" color={"#FFFFFF"}>
                WHITE PAPER
              </Typography>
              <Typography variant="h6" color={"#FFFFFF"}>
                Understanding the
                Mobile Delivery Gap
              </Typography>
              <Button variant="contained">Read the White Paper</Button>
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box p={2} minHeight={10} borderRadius={3} sx={{ backgroundImage: "url('/theduc.jpg')" }} >
              <Typography variant="body4" color={"#FFFFFF"}>
                WHITE PAPER
              </Typography>
              <Typography variant="h6" color={"#FFFFFF"}>
                Understanding the
                Mobile Delivery Gap
              </Typography>
              <Button variant="contained">Read the White Paper</Button>
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box p={2} minHeight={10} borderRadius={3} sx={{ backgroundImage: "url('/images.jpg')" }} >
              <Typography variant="body4" color={"#FFFFFF"}>
                WHITE PAPER
              </Typography>
              <Typography variant="h6" color={"#FFFFFF"}>
                Understanding the
                Mobile Delivery Gap
              </Typography>
              <Button variant="contained">Read the White Paper</Button>
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box p={2} minHeight={10} borderRadius={3} sx={{ backgroundImage: "url('/images.jpg')" }} >
              <Typography variant="body4" color={"#FFFFFF"}>
                WHITE PAPER
              </Typography>
              <Typography variant="h6" color={"#FFFFFF"}>
                Understanding the
                Mobile Delivery Gap
              </Typography>
              <Button variant="contained">Read the White Paper</Button>
            </Box>
          </Grid>
        </Grid>
      </Container>



    </>
  );


}