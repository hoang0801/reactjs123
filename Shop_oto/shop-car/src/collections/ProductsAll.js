import { Box, Card, CardActions, Grid, Typography } from "@mui/material";
import 'iconify-icon';
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
 <div class="hover-mask">
				<div class="inner-mask">
					<a class="add-view-cart btn-cart add-cart " data-variant="1108648372" href="javascript:void(0);" title="Thêm vào giỏ">
						<i class="fa fa-bars"></i>
						Đặt mua
					</a>	<ul class="add-to-links">
					<li><a href="" class="mask-view" data-handle="/products/audi-a7-8500km-audi-a7-2020-sportback-55tfsi-quattro" title="Xem nhanh"><i class="fa fa-eye"></i></a></li>
					<li><a href="/products/audi-a7-8500km-audi-a7-2020-sportback-55tfsi-quattro" class="" title="Xem chi tiết"><i class="fa fa-search"></i></a></li>
					</ul>
				</div>
			</div>

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

      
     </Box>
     
     <Link style={{ textDecoration: 'none', color: "#111111" }} >
     <CardActions sx={{color:'#111111'}}>
     
       <iconify-icon icon="ic:baseline-reorder"/>
        <Typography>
          Đặt mua
        </Typography>
    
     </CardActions>
     </Link>

  
     </Box>
    
   </Card>
    </>
  )
}