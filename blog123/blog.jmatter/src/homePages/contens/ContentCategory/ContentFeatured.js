import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import Tintuc from '../tt';


export default function ContentFeatured() {

  let [conten, setConten] = useState();

  let handleChange = () => {
    return (
      <Tintuc />
    );
  };

  return (
    <>
      <Container>
        <Box marginTop={3}>
          <Grid container spacing={2}>

            <Grid item xs={8}>
              <Container maxWidth='md' >
                <Tintuc />
              </Container>
            </Grid>

            <Grid item xs={4}>
              <Stack>
                <Typography variant="body2">
                  Featured Case Studies
                </Typography>
              </Stack>

              <Stack spacing={2}>
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
                  <Button variant="text" onClick={handleChange} >READ NOW</Button>
                </Box>



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



                <Box p={2} minHeight={10}
                  borderRadius={3}
                  sx={{ backgroundImage: "url('/lexus (2).jpg')" }} >
                  <Typography variant="body2" color={"#757575"}>
                    CASE STUDY
                  </Typography>
                  <Typography variant="h6" color={"#FFFFFF"}>
                    Understanding the
                    Mobile Delivery Gap
                  </Typography>
                  <Button variant="text">READ NOW</Button>
                </Box>


                <Box p={2} minHeight={10} borderRadius={3} sx={{ backgroundImage: "url('/maybay.jpg')" }} >
                  <Typography variant="body2" color={"#757575"}>
                    CASE STUDY
                  </Typography>
                  <Typography variant="h6" color={"#FFFFFF"}>
                    Understanding the
                    Mobile Delivery Gap
                  </Typography>
                  <Button variant="text" >READ NOW</Button>
                </Box>

              </Stack>
            </Grid>
          </Grid>

        </Box>
      </Container >
    </>
  );
}






