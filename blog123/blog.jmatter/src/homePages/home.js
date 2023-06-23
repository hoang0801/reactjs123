import { Box, Container, Grid } from "@mui/material";
import TopBar1 from "./components/Header";
import ContentFeatured from "./contens/ContentCategory/ContentFeatured";
import ContentPost from "./contens/contentPost/ContenPost";
import './home.css';

export default function Home() {

  return (
    <>
      <Container maxWidth='lg'  >
        <Box sx={{ bgcolor: '#FAFAFA', height: 'auto', Border: '5' }} >
          <Grid item sx={12} marginTop={-4} >
            <TopBar1 />
          </Grid>
          <Box marginTop={4}>
            <Grid item sx={12}>
              <ContentPost />
            </Grid>
          </Box>

          <Box marginTop={5}  >
            <Grid item sx={12}>
              <ContentFeatured />
            </Grid>
          </Box>
        </Box>

      </Container>

















    </>
  );


}