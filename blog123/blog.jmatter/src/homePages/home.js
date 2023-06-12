import { Box, Container, Grid } from "@mui/material";
import Header from './components/Header';
import TopBar from "./components/topbar";
import Content1 from './contens/Content1';
import Content2 from "./contens/Content2";
import './home.css';




export default function Home() {

  return (
    <>
     <Container  >
        <Box sx={{ bgcolor: '#f5f5f5', height: 'auto', Border:'5' }} >
          <Grid>
          <Grid item sx={12} >
          <Header/>
    </Grid>
    <Grid item sx={12}>
          <Content1/>  
    </Grid>
    <Box marginTop={2}>
    <Grid item sx={12}>
         <TopBar/>
    </Grid>
    </Box>
            
          </Grid>

        </Box>
        <Grid item sx={12}>
          <Content2/>
          </Grid>
      </Container>
   
    
    
 
    


    

      
       
       
        
      



    </>
  );


}