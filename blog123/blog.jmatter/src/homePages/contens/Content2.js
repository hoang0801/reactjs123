import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { Box, Button, Grid, Typography } from "@mui/material";


export default function Content2(){
  return(
    <Box>
       <Grid container spacing={2}>
          <Grid item xs={10}>
          
            <Typography variant="h4">
              Featured Case Studies
            </Typography>
          </Grid>
          <Grid  item xs={2}>
            <Button sx={{marginRight: 7}} >
            <Typography variant="h6">
              See all
            </Typography>
             <ArrowForwardOutlinedIcon/>
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
     
    </Box>

  )
}