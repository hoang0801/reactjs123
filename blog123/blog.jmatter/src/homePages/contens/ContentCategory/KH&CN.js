import { Box, Grid, Typography } from "@mui/material";

 function KhoaHocVaCongNghe(){
  return(
    
      <Box container bgcolor={'#FCFAF6'} sx={{ border: 1,borderColor: 'grey.500' }}>
        <Typography 
         container sx={{fontSize:30 ,color:'#E9B712'}} 
         variant="h3"
         marginTop={3}
         marginLeft={4}>
Khoa học - Công nghệ
        </Typography>
        <Typography 
         container sx={{fontSize:25}} 
         variant="h3"
         marginTop={3}
         marginLeft={4}>
Khoa Học
        </Typography>
      <Grid container spacing={2}>
  <Grid xs={5}>
    <img></img>
    <Typography>
    Hiện tượng đụn cát hát trên sa mạc Trung Quốc
    </Typography>
    <Typography>
      
    </Typography>
    
  </Grid>
  <Grid xs={7}>
  <Grid container spacing={2}>
  <Grid xs={5}>
    
  </Grid>
  <Grid xs={7}>
    
  
  </Grid>
  </Grid>

  
  </Grid>
  </Grid>
      </Box>

  )
 }

 export default KhoaHocVaCongNghe