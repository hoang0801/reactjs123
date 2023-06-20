import { Box, Container, Grid } from "@mui/material";
import Header from './components/Header';
import TopBar from "./components/topbar";

import ContentPost from "./contens/ContenPost";
import './home.css';




export default function Home() {

  return (
    <>
      <Container maxWidth='lg'  >
        <Box sx={{ bgcolor: '#FAFAFA', height: 'auto', Border: '5' }} >
          <Grid item sx={12} marginTop={-4} >
            <Header />
          </Grid>
          <Box marginTop={4}>
            <Grid item sx={12}>
              <ContentPost />
            </Grid>
          </Box>

          <Box marginTop={5}  >
            <Grid item sx={12}>
              <TopBar />
            </Grid>
          </Box>
        </Box>

      </Container>

















    </>
  );


}