import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { AppBar, Box, Button, Container, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import TopBar from "./components/topbar";
import './home.css';




export default function Home() {
  let [homArray, setHomeArray] = useState([]);
  let [home, setHome] = useState();
  return (
    <div>
      <from >
    <Box sx={{margin: 'auto', marginTop: 10,display: 'flex'}}>
    <Grid container spacing={2}>
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
            <Box p={2}  borderRadius={3} sx={{ backgroundImage: "url('\cau-cong-vang.jpg')" }} >
              <Typography variant="body4" color={"#FFFFFF"}>
                WHITE PAPER
              </Typography>
              <Typography variant="h6" color={"#FFFFFF"}>
                Understanding the         
              </Typography>
              <Typography variant="h6" color={"#FFFFFF"}>
                Mobile Delivery Gap
              </Typography>
              <Button  sx={{ mt: 2 }} variant="contained">Read the White Paper</Button>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box p={2} borderRadius={3} sx={{ backgroundImage: "url('/sao_kim_SFLP.jpg')" }} >
              <Typography variant="body4" color={"#FFFFFF"}>
                CASE STUDY
              </Typography>
              <Typography variant="h6" color={"#FFFFFF"}>
                Building the new
              </Typography>
              <Typography variant="h6" color={"#FFFFFF"}>
                Marketwatch app
              </Typography>
              <Button sx={{ mt: 2 }} variant="contained"  >See the Case Study</Button>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box p={2}  borderRadius={3} sx={{ backgroundImage: "url('/tiphu.jpg')" }} >
              <Typography variant="body4" color={"#FFFFFF"}>
                VIDEO
              </Typography>
              <Typography variant="h6" color={"#FFFFFF"}>
                Using Wed Components
                Marketwatch app
              </Typography>
              <Button sx={{ mt: 2 }} variant="contained"  >Watch the video</Button>
            </Box>
          </Grid>
        </Grid>
        <Grid sx={{margin: 5}}>
        <TopBar/>
      </Grid>
      
      </Container>
      </Grid>
      </Box>
      </from>


      {/* ------------------ */}

      <Container sx={50}>
       
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    
        <Grid container spacing={2}>
          <Grid item xs={8}>
          
            <Typography variant="h4">
              Featured Case Studies
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Button >
            
            <Typography variant="h6">
              See all
            </Typography>
            <IconButton>
<ArrowForwardIcon/>
            </IconButton>
            </Button>
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
                CASE STUDY
              </Typography>
              <Typography variant="h6" color={"#FFFFFF"}>
                Napa Group speeds up development
              </Typography>
              <Button variant="text">READ NOW</Button>
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box p={2} minHeight={10} borderRadius={3} sx={{ backgroundImage: "url('/theduc.jpg')" }} >
              <Typography variant="body4" color={"#FFFFFF"}>
              CASE STUDY
              </Typography>
              <Typography variant="h6" color={"#FFFFFF"}>
                Understanding the
                Mobile Delivery Gap
              </Typography>
              <Button variant="text">READ NOW</Button>
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box p={2} minHeight={10} borderRadius={3} sx={{ backgroundImage: "url('/maybay.jpg')" }} >
              <Typography variant="body4" color={"#FFFFFF"}>
              CASE STUDY
              </Typography>
              <Typography variant="h6" color={"#FFFFFF"}>
                Understanding the
                Mobile Delivery Gap
              </Typography>
              <Button variant="text">READ NOW</Button>
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box p={2} minHeight={10} borderRadius={3} sx={{ backgroundImage: "url('/lexus (2).jpg')" }} >
              <Typography variant="body4" color={"#FFFFFF"}>
              CASE STUDY
              </Typography>
              <Typography variant="h6" color={"#FFFFFF"}>
                Understanding the
                Mobile Delivery Gap
              </Typography>
              <Button variant="text">READ NOW</Button>
            </Box>
          </Grid>
        </Grid>
      </Container>



    </div>
  );


}