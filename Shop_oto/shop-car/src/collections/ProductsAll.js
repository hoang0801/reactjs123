import { Box, Button, Card, CardActions, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import './Image.css';




function ProductsAll(){
  return(
    <Box>
    <Grid container spacing={3}>
  <Grid item xs={4}>
  
   <PRD/>
  </Grid>
  <Grid item xs={4}>
  <PRD/>
  </Grid>
  <Grid item xs={4}>
  <PRD/>
  </Grid>

  <Grid item xs={4}>
  <PRD/>
  </Grid>
  <Grid item xs={4}>
  <PRD/>
  </Grid>
  <Grid item xs={4}>
  <PRD/>
  </Grid>
 
  
 
</Grid>

    </ Box>
  )

} 
export default ProductsAll


function PRD(){
  return(
    <>
    <Card sx={{ maxWidth: 345 }}>
   
   <Box sx={{height:'221'}}>
 <Link style={{ textDecoration: 'none', color: "gray" }} to={`/`}>
 <img 
 style={{width:'100%'}}
 alt="AUDI A7 8000Km - AUDI A7 2020 SPORTBACK 55TFSI QUATTRO" src="//product.hstatic.net/200000639001/product/img_20230707_125156_ef53282bca2a4a74814139b4ea6bfc6f_large.jpg"/>
 </Link>

 </Box>


 
 <Box marginTop={5} sx={{ border: 1 , color:'#e6e6e6'}}>
   <Box sx={{textAlign:'center'}}>
     <Link 
     style={{
        textDecoration: 'none',
         color: "#333333",
         fontWeight:'600' ,
         whiteSpace:'pre',
         textOverflow:'ellipsis',
         width:'100%'

         }}
          to={`/`}>AUDI A7 8000Km - AUDI A7 2020 SPORTBACK 55TFSI QUATTRO
          </Link>
          <Box  >
          <Typography  p={2} variant="body2" color="text.secondary">
         Nhà cung cấp: AUDI
       </Typography>
       <Box fontSize={15}  class="box-price">
       <p class="pro-price">2,999,000,000₫</p>
       </Box>
       </Box>

       <CardActions>
       <Button size="small">Share</Button>
       <Button size="small">Learn More</Button>
     </CardActions>
     </Box>
     </Box>
    

   </Card>
    </>
  )
}