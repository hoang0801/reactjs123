import { Box, Button, Container, Grid, Typography } from "@mui/material";

export default function Content1(){
  return(

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
              <Typography variant="body4" >
                WHITE PAPER
              </Typography>
              <Typography variant="h6" >
                Understanding the         
              </Typography>
              <Typography variant="h6" >
                Mobile Delivery Gap
              </Typography>
              <Button  sx={{ mt: 2 }} variant="contained">Read the White Paper</Button>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box p={2} borderRadius={3} sx={{ backgroundImage: "url('/sao_kim_SFLP.jpg')"  } } >
              <Typography variant="body4">
                CASE STUDY
              </Typography>
              <Typography variant="h6" >
                Building the new
              </Typography>
              <Typography variant="h6" >
                Marketwatch app
              </Typography>
              <Button sx={{ mt: 2,  }} variant="contained"  >See the Case Study</Button>
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
       
      </Container>
      </Grid>

  )
}


