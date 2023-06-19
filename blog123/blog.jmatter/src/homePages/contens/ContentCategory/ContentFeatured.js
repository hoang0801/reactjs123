import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

export default function ContentFeatured() {



  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={10}>

          <Typography variant="h4">
          Case Studies 
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Button sx={{ marginRight: 7 }} >

            See all

            <ArrowForwardOutlinedIcon />
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
            <Typography variant="body2" color={"#757575"}>
              CASE STUDY
            </Typography>
            <Typography variant="h6" color={"#FFFFFF"}>
              Napa Group speeds up development
            </Typography>
            <Button  component={Link} to={`/tintuc`} variant="text">READ NOW</Button>
          </Box>
        </Grid>

        <Grid item xs={3}>
          <Box p={2} minHeight={10} borderRadius={3} sx={{ backgroundImage: "url('/theduc.jpg')" }} >
            <Typography variant="body2" color={"#757575"}>
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
            <Typography variant="body2" color={"#757575"}>
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
            <Typography variant="body2" color={"#757575"}>
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

  );

}






